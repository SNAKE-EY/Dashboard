document.addEventListener("DOMContentLoaded", function () {
    // Calendar functionality
    const calendarDays = document.querySelector(".calendar-days");
    
    function generateCalendar() {
        // Clear previous days
        calendarDays.innerHTML = "";
        
        // Current date
        const currentDate = new Date();
        
        // March 2025 (2 is March because months are 0-indexed)
        const displayedMonth = 2;
        const displayedYear = 2025;
        
        // First day of month and total days
        const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1);
        const lastDayOfMonth = new Date(displayedYear, displayedMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startDay = firstDayOfMonth.getDay();
        
        // Add empty cells for days before the 1st
        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("day", "empty");
            calendarDays.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;
            
            // Highlight day 8 as the current day (as shown in the image)
            if (day === 10) {
                dayElement.classList.add("current");
            }
            
            // Add event listener for selection
            dayElement.addEventListener("click", function() {
                document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
                this.classList.add("selected");
            });
            
            calendarDays.appendChild(dayElement);
        }
    }
    
    // Generate the calendar when the page loads
    generateCalendar();
    
    // Sidebar icon functionality
    const sidebarIcons = document.querySelectorAll(".sidebar-icon");
    sidebarIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            sidebarIcons.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });
});