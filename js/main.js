document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Elements and State
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockEl = document.getElementById('clock');

    // 3. Theme Management
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            themeIconDark.style.display = 'block';
            themeIconLight.style.display = 'none';
        } else {
            themeIconDark.style.display = 'none';
            themeIconLight.style.display = 'block';
        }
    }

    // 4. Real-time Clock (Chennai, India timezone)
    function updateClock() {
        const now = new Date();
        const options = { 
            timeZone: 'Asia/Kolkata', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true 
        };
        const timeString = now.toLocaleTimeString('en-US', options);
        clockEl.textContent = timeString;
    }
    
    updateClock(); // Initial call
    setInterval(updateClock, 1000);

    // 5. Hash-based Routing (SPA logic)
    function handleRoute() {
        const hash = window.location.hash.substring(1) || 'home';
        
        // Ensure content mapping exists, fallback to home
        const content = pageContent[hash] || pageContent['home'];
        
        // Prevent unnecessary re-renders natively, but let's animate
        contentArea.innerHTML = content;
        
        // Re-initialize icons for newly injected content
        lucide.createIcons();
        
        // Update Active Nav Link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === hash || (!hash && link.getAttribute('data-target') === 'home')) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);
    
    // Initial route mapping
    handleRoute();
});
