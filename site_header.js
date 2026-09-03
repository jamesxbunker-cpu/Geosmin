class SiteHeader extends HTMLElement {
  connectedCallback() {
    // Get current page filename BEFORE rendering
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Build the HTML with active class already applied
    this.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="blog-name">
        <span>Geosmin</span>
      </a>
      <ul class="nav-tabs">
        <li><a href="/index.html" class="${currentPath === 'index.html' ? 'active' : ''}"> <span>Home</span></a></li>
        <li><a href="/posts.html" class="${window.location.pathname.includes('post') ? 'active' : ''}"> <span>Posts</span></a></li>
        <li><a href="/projects.html" class="${currentPath === 'projects.html' ? 'active' : ''}"> <span>Projects</span></a></li>
        <li><a href="/about.html" class="${currentPath === 'about.html' ? 'active' : ''}"> <span>About</span></a></li>
        <li><a href="/sensor.html" class="${currentPath === 'sensor.html' ? 'active' : ''}"> <span>Sensor</span></a></li>
      </ul>
    </div>
  </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);