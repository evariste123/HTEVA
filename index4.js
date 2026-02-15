// 1. Setup Canvas & Loading State
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let isLoading = true;
let loadProgress = 0;

// Apply Base Styles
Object.assign(canvas.style, {
    position: 'fixed',
    top: '0', left: '0',
    width: '100%', height: '100%',
    background: '#050508',
    zIndex: '-1'
});

// 2. Responsive Scaling Engine
let scaleFactor = 1;
const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Calculate scale: base design is for 1920px width
    scaleFactor = Math.min(Math.max(canvas.width / 1200, 0.5), 1.5);
};
window.addEventListener('resize', resize);
resize();

// 3. 2-Second Loading Logic
const startTime = Date.now();
const loadingDuration = 2000; // 2 seconds

// 4. Enhanced Bolt & Diode System
let diodes = [];
class Bolt {
    constructor(startX, startY, endX, endY, thickness, color) {
        this.segments = [];
        this.startX = startX; this.startY = startY;
        this.endX = endX; this.endY = endY;
        this.thickness = thickness * scaleFactor;
        this.color = color;
        this.createPath();
    }
    createPath() {
        let curX = this.startX, curY = this.startY;
        this.segments.push({x: curX, y: curY});
        let steps = 8;
        for (let i = 1; i < steps; i++) {
            let t = i / steps;
            curX = this.startX + (this.endX - this.startX) * t + (Math.random() - 0.5) * (40 * scaleFactor);
            curY = this.startY + (this.endY - this.startY) * t + (Math.random() - 0.5) * (40 * scaleFactor);
            this.segments.push({x: curX, y: curY});
        }
        this.segments.push({x: this.endX, y: this.endY});
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.shadowBlur = 15 * scaleFactor; ctx.shadowColor = this.color;
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) ctx.lineTo(this.segments[i].x, this.segments[i].y);
        ctx.stroke();
    }
}

const createDiodes = (cx, cy) => {
    if (Math.random() > 0.9) {
        const side = Math.floor(Math.random() * 4);
        let sx, sy;
        if(side==0){ sx=Math.random()*canvas.width; sy=0; }
        else if(side==1){ sx=canvas.width; sy=Math.random()*canvas.height; }
        else if(side==2){ sx=Math.random()*canvas.width; sy=canvas.height; }
        else { sx=0; sy=Math.random()*canvas.height; }
        
        diodes.push({ sx, sy, ex: cx, ey: cy, progress: 0, speed: 0.01 + Math.random() * 0.02 });
    }
};

// 5. Main Animation Loop
const animate = () => {
    const now = Date.now();
    const elapsed = now - startTime;
    
    // Clear Canvas
    ctx.fillStyle = 'rgba(5, 5, 8, 0.2)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    if (elapsed < loadingDuration) {
        // --- LOADING VIEW ---
        loadProgress = (elapsed / loadingDuration) * 100;
        
        ctx.font = `bold ${20 * scaleFactor}px monospace`;
        ctx.fillStyle = "#2ecc71";
        ctx.textAlign = "center";
        ctx.fillText(`INITIALIZING CORE: ${Math.floor(loadProgress)}%`, centerX, centerY + 50);
        
        // Circular Loading Bar
        ctx.beginPath();
        ctx.arc(centerX, centerY, 80 * scaleFactor, 0, (Math.PI * 2) * (loadProgress/100));
        ctx.strokeStyle = "#2ecc71";
        ctx.lineWidth = 5 * scaleFactor;
        ctx.stroke();
    } else {
        // --- MAIN RESPONSIVE VIEW ---
        // A. Wires
        ctx.strokeStyle = 'rgba(46, 204, 113, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let i=0; i<canvas.width; i+=150 * scaleFactor) {
            ctx.moveTo(i, 0); ctx.lineTo(centerX, centerY);
            ctx.moveTo(i, canvas.height); ctx.lineTo(centerX, centerY);
        }
        ctx.stroke();

        // B. Diodes
        createDiodes(centerX, centerY);
        diodes.forEach((d, i) => {
            d.progress += d.speed;
            let curX = d.sx + (d.ex - d.sx) * d.progress;
            let curY = d.sy + (d.ey - d.sy) * d.progress;
            ctx.fillStyle = '#2ecc71';
            ctx.shadowBlur = 10; ctx.shadowColor = '#2ecc71';
            ctx.beginPath();
            ctx.arc(curX, curY, 3 * scaleFactor, 0, Math.PI * 2);
            ctx.fill();
            if (d.progress >= 1) diodes.splice(i, 1);
        });

        // C. Dynamic Text (Responsive size)
        let fontSize = Math.floor(70 * scaleFactor);
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#2ecc71";
        ctx.shadowBlur = 30 * scaleFactor; ctx.shadowColor = "#2ecc71";
        ctx.fillText("Hope Tree Eva", centerX, centerY);

        // D. Arcs
        if (Math.random() > 0.8) {
            const angle = Math.random() * Math.PI * 2;
            const r = (120 + Math.random() * 50) * scaleFactor;
            const sx = centerX + Math.cos(angle) * r;
            const sy = centerY + Math.sin(angle) * r;
            new Bolt(sx, sy, centerX, centerY, 2, "#2ecc71").draw();
        }
    }

    requestAnimationFrame(animate);
};

animate();
