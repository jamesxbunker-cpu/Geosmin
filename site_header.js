class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <!-- blog name / logo -->
      <a href="index.html" class="blog-name">
        <span>Geosmin</span>
      </a>

      <!-- static tab options -->
      <ul class="nav-tabs">
        <li><a href="index.html"> <span>Home</span></a></li>
        <li><a href="posts.html"> <span>Posts</span></a></li>
        <li><a href="projects.html"> <span>Projects</span></a></li>
        <li><a href="about.html"> <span>About</span></a></li>
        <li><a href="sensor.html"> <span>Sensor</span></a></li>
      </ul>
    </div>
  </header>
    `;

    // Automatically highlights the active tab based on the current page filename
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = this.querySelectorAll('.nav-tabs a');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}
customElements.define('site-header', SiteHeader);