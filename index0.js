// 1. Enhanced Professional Styles
const style = document.createElement('style');
style.textContent = `
    :root { --primary: #64ffda; --bg: #0a192f; --card-bg: #112240; --text: #8892b0; }
    
    .services-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: var(--bg); display: none; z-index: 1000;
        overflow-y: auto; color: white; font-family: 'Inter', sans-serif;
    }
    .services-content {
        max-width: 1100px; margin: 60px auto; padding: 20px;
        opacity: 0; transform: translateY(30px); transition: 0.5s ease;
    }
    .services-overlay.active .services-content { opacity: 1; transform: translateY(0); }
    
    /* Responsive Grid */
    .service-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px; margin-top: 50px;
    }
    
    /* Clickable Professional Cards */
    .service-link { text-decoration: none; color: inherit; display: block; }
    .service-card {
        background: var(--card-bg); padding: 40px; border-radius: 12px;
        border: 1px solid #233554; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        height: 100%; position: relative; overflow: hidden;
    }
    .service-card:hover { 
        transform: translateY(-10px); border-color: var(--primary);
        background: #172a45; box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    .service-card h3 { color: var(--primary); margin: 0 0 15px; font-size: 1.4rem; }
    .service-card p { color: var(--text); line-height: 1.6; font-size: 0.95rem; }
    
    /* Footer Styling */
    .ht-footer {
        margin-top: 80px; padding: 40px 0; border-top: 1px solid #233554;
        text-align: center; color: var(--text);
    }
    .ht-footer a { color: var(--primary); text-decoration: none; margin: 0 15px; }

    .close-btn { position: fixed; top: 20px; right: 30px; font-size: 35px; cursor: pointer; color: #ffde59; z-index: 1001; }
    
    @media (max-width: 768px) {
        .services-content h1 { font-size: 2rem !important; }
        .service-grid { grid-template-columns: 1fr; }
    }
`;
document.head.appendChild(style);

// 2. Services Data with Navigation Links
const services = [
    { title: "Digital Business", desc: "Scale globally with advanced SEO and full-stack digital solutions.", link: "digital-business.html" },
    { title: "Explorer Business", desc: "Discover high-profit niches and market trends with our analytics tools.", link: "explorer.html" },
    { title: "Home Service", desc: "Professional on-site support and automated systems for your operations.", link: "home-service.html" },
    { title: "Roaming", desc: "Seamless business connectivity solutions for the modern nomad.", link: "roaming.html" },
    { title: "Help Center", desc: "Priority 24/7 support to keep your Hope Tree Eva experience smooth.", link: "help.html" }
];

// 3. Build UI with Footer
const overlay = document.createElement('div');
overlay.className = 'services-overlay';
overlay.innerHTML = `
    <span class="close-btn" title="Close">&times;</span>
    <div class="services-content">
        <h1 style="text-align:center; font-size: 3.5rem; margin-bottom:10px;">Hope Tree Eva</h1>
        <p style="text-align:center; color: var(--primary); letter-spacing: 2px;">PREMIUM BUSINESS SOLUTIONS</p>
        
        <div class="service-grid"></div>

        <footer class="ht-footer">
            <p>&copy; 2026 Hope Tree Eva. Growing Businesses Globally.</p>
            <div style="margin-top: 15px;">
                <a href="privacy.html">Privacy Policy</a> | 
                <a href="terms.html">Terms of Service</a> | 
                <a href="contact.html">Contact Us</a>
            </div>
        </footer>
    </div>
`;

const grid = overlay.querySelector('.service-grid');
services.forEach(s => {
    const anchor = document.createElement('a');
    anchor.href = s.link;
    anchor.className = 'service-link';
    anchor.innerHTML = `
        <div class="service-card">
            <h3>${s.title} &rarr;</h3>
            <p>${s.desc}</p>
        </div>
    `;
    grid.appendChild(anchor);
});

document.body.appendChild(overlay);

// 4. Interaction Logic
const btn = document.getElementById('save');
const close = overlay.querySelector('.close-btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop scrolling background
    setTimeout(() => overlay.classList.add('active'), 10);
});

const closeOverlay = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => overlay.style.display = 'none', 500);
};

close.addEventListener('click', closeOverlay);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeOverlay(); });
