// ⏰ Countdown Timer Logic
function initCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    const targetDateStr = countdownEl.getAttribute('data-date');
    const targetDate = new Date(targetDateStr).getTime();

    // Elements
    const daysVal = document.getElementById('days');
    const hoursVal = document.getElementById('hours');
    const minutesVal = document.getElementById('minutes');
    const secondsVal = document.getElementById('seconds');

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            // Match is Live or Over
            if (daysVal) daysVal.innerText = '00';
            if (hoursVal) hoursVal.innerText = '00';
            if (minutesVal) minutesVal.innerText = '00';
            if (secondsVal) secondsVal.innerText = '00';
            
            const labelEl = document.querySelector('.countdown-label');
            if (labelEl) labelEl.innerText = "Match Day is Live!";
            clearInterval(timerInterval);
            return;
        }

        // Time calculations
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Format with leading zero
        if (daysVal) daysVal.innerText = String(days).padStart(2, '0');
        if (hoursVal) hoursVal.innerText = String(hours).padStart(2, '0');
        if (minutesVal) minutesVal.innerText = String(minutes).padStart(2, '0');
        if (secondsVal) secondsVal.innerText = String(seconds).padStart(2, '0');
    }

    // Run initial update and set interval
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// 🔀 Tab Switching Logic
function switchTab(event, tabId) {
    // Prevent default anchor click behaviors
    if (event) {
        event.preventDefault();
    }

    // Get all tab content blocks and hide them
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Get all tab buttons and deactivate them
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab content and active state on current button
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// 🌐 Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(8, 12, 20, 0.9)';
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = 'var(--bg-card)';
            header.style.padding = '0';
            header.style.boxShadow = 'var(--shadow-premium)';
        }
    });
}

// 🚀 Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initHeaderScroll();
});
