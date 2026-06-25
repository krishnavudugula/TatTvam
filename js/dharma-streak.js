/* =============================================
   TATTVAM - Dharma Streak Tracker JS
   ============================================= */

(function () {
  'use strict';

  const HABITS = [
    { id: 'meditation', name: 'Dhyana (Meditation)', desc: 'Sit in stillness for 15+ minutes' },
    { id: 'scripture', name: 'Svadhyaya (Scripture)', desc: 'Read Bhagavad Gita or scriptures' },
    { id: 'yoga', name: 'Yoga / Exercise', desc: 'Conscious movement or exercise' },
    { id: 'seva', name: 'Seva (Service)', desc: 'Help someone without expecting return' },
    { id: 'charity', name: 'Dana (Charity)', desc: 'Donate or practice generosity' }
  ];

  // --- State ---
  let history = {}; // Maps YYYY-MM-DD to array of completed habit ids
  let currentStreak = 0;
  let longestStreak = 0;
  let totalHabitsChecked = 0;

  // --- DOM Selectors ---
  const habitList = document.getElementById('habitList');
  const streakNumber = document.getElementById('streakNumber');
  const currentStreakVal = document.getElementById('currentStreakVal');
  const longestStreakVal = document.getElementById('longestStreakVal');
  const totalCompletedVal = document.getElementById('totalCompletedVal');
  const heatmapGrid = document.getElementById('heatmapGrid');

  // --- Init ---
  function init() {
    loadData();
    renderHabitChecklist();
    renderHeatmap();
    updateStatsDOM();
    bindEvents();
  }

  // --- Load & Seed Data ---
  function loadData() {
    const storedHistory = localStorage.getItem('tattvam-streak-history');
    if (storedHistory) {
      history = JSON.parse(storedHistory);
    } else {
      // Seed 180 days of mock history for first-time visual wow!
      history = generateMockHistory();
      saveData();
    }
    calculateStreaks();
  }

  function saveData() {
    localStorage.setItem('tattvam-streak-history', JSON.stringify(history));
  }

  // Generate random completed habits for past 180 days
  function generateMockHistory() {
    const mock = {};
    const today = new Date();
    for (let i = 180; i >= 1; i--) {
      // 70% chance to check habits on any given day
      if (Math.random() > 0.3) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = formatDateKey(date);
        
        // Random number of habits checked (1 to 5)
        const numHabits = Math.floor(Math.random() * 5) + 1;
        const shuffled = [...HABITS].sort(() => 0.5 - Math.random());
        mock[dateStr] = shuffled.slice(0, numHabits).map(h => h.id);
      }
    }
    return mock;
  }

  function formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // --- Streak Calculation ---
  function calculateStreaks() {
    const today = new Date();
    const todayStr = formatDateKey(today);
    
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = formatDateKey(yesterday);

    // 1. Current Streak
    let tempStreak = 0;
    let checkDate = new Date(today);
    
    // If nothing checked today and nothing checked yesterday, streak is 0
    const hasToday = history[todayStr] && history[todayStr].length > 0;
    const hasYesterday = history[yesterdayStr] && history[yesterdayStr].length > 0;

    if (!hasToday && !hasYesterday) {
      currentStreak = 0;
    } else {
      // If we checked today or yesterday, trace backward
      if (!hasToday && hasYesterday) {
        checkDate.setDate(today.getDate() - 1); // Start tracing from yesterday
      }

      while (true) {
        const key = formatDateKey(checkDate);
        if (history[key] && history[key].length > 0) {
          tempStreak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
      currentStreak = tempStreak;
    }

    // 2. Longest Streak & Total completed
    let maxStreak = 0;
    let runningStreak = 0;
    totalHabitsChecked = 0;

    // Scan all dates in order (we sort dates in history)
    const sortedDates = Object.keys(history).sort();
    
    if (sortedDates.length > 0) {
      let prevDate = null;
      
      sortedDates.forEach(dateStr => {
        const count = history[dateStr].length;
        totalHabitsChecked += count;

        if (count > 0) {
          if (prevDate === null) {
            runningStreak = 1;
          } else {
            const diffTime = Math.abs(new Date(dateStr) - new Date(prevDate));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
              runningStreak++;
            } else if (diffDays > 1) {
              runningStreak = 1;
            }
          }
          prevDate = dateStr;
          if (runningStreak > maxStreak) {
            maxStreak = runningStreak;
          }
        }
      });
    }

    longestStreak = Math.max(maxStreak, currentStreak);
  }

  // --- RENDER CHECKLIST ---
  function renderHabitChecklist() {
    const todayStr = formatDateKey(new Date());
    const checkedToday = history[todayStr] || [];

    habitList.innerHTML = HABITS.map(h => {
      const isChecked = checkedToday.includes(h.id);
      return `
        <div class="habit-item">
          <div class="habit-details">
            <span class="habit-icon">${getHabitIcon(h.id)}</span>
            <div class="habit-name-wrap">
              <span class="habit-name">${h.name}</span>
              <span class="habit-desc">${h.desc}</span>
            </div>
          </div>
          <div class="habit-checkbox ${isChecked ? 'checked' : ''}" data-id="${h.id}"></div>
        </div>
      `;
    }).join('');
  }

  function getHabitIcon(id) {
    const icons = {
      meditation: '🧘',
      scripture: '📖',
      yoga: '⚡',
      seva: '🪷',
      charity: '🪙'
    };
    return icons[id] || '✦';
  }

  // --- RENDER HEATMAP ---
  function renderHeatmap() {
    heatmapGrid.innerHTML = '';
    const today = new Date();
    
    // We want the grid to end on today.
    // GitHub grid has 53 columns of 7 days = 371 cells.
    // Let's go back 370 days from today.
    const cellsToRender = 371;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - cellsToRender + 1);

    // Adjust start date to begin on a Sunday (day 0) to align grid rows (Sunday-Saturday)
    const startDay = startDate.getDay();
    startDate.setDate(startDate.getDate() - startDay);

    const cellsCount = cellsToRender + startDay;

    for (let i = 0; i < cellsCount; i++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + i);

      const dateStr = formatDateKey(cellDate);
      const habitsDone = history[dateStr] || [];
      const count = habitsDone.length;

      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      cell.dataset.date = dateStr;
      cell.dataset.count = count;

      // Tooltip HTML
      const formattedDate = cellDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
      const habitsText = count === 0 
        ? 'No practices' 
        : `${count} practice${count > 1 ? 's' : ''}: ${habitsDone.map(id => HABITS.find(h => h.id === id).name.split(' ')[0]).join(', ')}`;
      
      cell.innerHTML = `<span class="cell-tooltip">${formattedDate}<br><strong>${habitsText}</strong></span>`;
      
      heatmapGrid.appendChild(cell);
    }
  }

  // --- UPDATE DOM STATS ---
  function updateStatsDOM() {
    streakNumber.textContent = currentStreak;
    currentStreakVal.textContent = currentStreak;
    longestStreakVal.textContent = longestStreak;
    totalCompletedVal.textContent = totalHabitsChecked;
  }

  // --- BIND EVENTS ---
  function bindEvents() {
    // Checkbox click
    habitList.addEventListener('click', (e) => {
      const box = e.target.closest('.habit-checkbox');
      if (!box) return;

      const id = box.dataset.id;
      const todayStr = formatDateKey(new Date());

      if (!history[todayStr]) {
        history[todayStr] = [];
      }

      const index = history[todayStr].indexOf(id);
      if (index > -1) {
        history[todayStr].splice(index, 1);
        box.classList.remove('checked');
      } else {
        history[todayStr].push(id);
        box.classList.add('checked');
      }

      // Cleanup empty arrays
      if (history[todayStr].length === 0) {
        delete history[todayStr];
      }

      saveData();
      calculateStreaks();
      updateStatsDOM();
      renderHeatmap();
    });

    // Mobile nav
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    toggle?.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
  }

  // Kick off
  document.addEventListener('DOMContentLoaded', init);

})();
