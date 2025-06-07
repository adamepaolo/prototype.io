// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all tab links and content
  const tabLinks = document.querySelectorAll('.nav-menu a');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Set default tab (Home)
  const defaultTab = document.querySelector('.nav-menu a[href="#home"]');
  if (defaultTab) {
    defaultTab.classList.add('active');
    document.getElementById('home').classList.add('active');
  }
  
  // Add click event to each tab link
  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target tab ID from href attribute
      const targetTabId = this.getAttribute('href');
      const targetTab = document.querySelector(targetTabId);
      
      // Return if target tab doesn't exist
      if (!targetTab) return;
      
      // Remove active class from all tab links and contents
      tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab link and target content
      this.classList.add('active');
      targetTab.classList.add('active');
      
      // Smooth scroll to top of the tab content
      window.scrollTo({
        top: targetTab.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
  
  // Handle page load with hash in URL
  if (window.location.hash) {
    const hash = window.location.hash;
    const targetTabLink = document.querySelector(`.nav-menu a[href="${hash}"]`);
    
    if (targetTabLink) {
      // Remove active class from all tab links and contents
      tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to target tab link and content
      targetTabLink.classList.add('active');
      document.querySelector(hash).classList.add('active');
      
      // Smooth scroll to target tab
      setTimeout(() => {
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }
});

