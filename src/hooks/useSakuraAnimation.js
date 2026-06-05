import { useEffect } from 'react';

export const useSakuraAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('sakura-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let petals = [];
    const petalCount = 50;

    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 1 + 0.5;
        this.color = `rgba(255, ${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.random() * 0.5 + 0.4})`;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;

        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff79c6';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function init() {
      petals = [];
      for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
