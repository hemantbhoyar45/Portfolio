import React, { useRef, useEffect } from 'react';

export default function UltraUniverse() {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const asteroids = useRef([]);
  const shootingStars = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const widthRef = useRef(7680);  // 8K width
  const heightRef = useRef(4320); // 8K height

  // Higher density star counts for 8K
  const STAR_LAYERS = 4;
  const STARS_PER_LAYER = 250;
  const ASTEROIDS_COUNT = 40;

  const initStars = () => {
    stars.current = [];
    for (let layer = 0; layer < STAR_LAYERS; layer++) {
      for (let i = 0; i < STARS_PER_LAYER; i++) {
        stars.current.push({
          x: Math.random() * widthRef.current,
          y: Math.random() * heightRef.current,
          radius: (Math.random() * 1.8 + 0.5) * (layer + 1),
          speed: 0.01 * (layer + 1),
          layer,
          baseX: 0,
          baseY: 0,
          twinkleSpeed: Math.random() * 0.015 + 0.007,
          opacity: Math.random() * 0.7 + 0.3,
          color: `hsl(210, 90%, ${80 - layer * 18}%)`
        });
      }
    }
    stars.current.forEach(star => {
      star.baseX = star.x;
      star.baseY = star.y;
    });
  };

  // const initAsteroids = () => {
  //   asteroids.current = [];
  //   for (let i = 0; i < ASTEROIDS_COUNT; i++) {
  //     asteroids.current.push({
  //       x: Math.random() * widthRef.current,
  //       y: Math.random() * heightRef.current,
  //       radius: Math.random() * 9 + 4,
  //       speedX: (Math.random() - 0.5) * 0.25,
  //       speedY: (Math.random() - 0.5) * 0.25,
  //       rotation: Math.random() * 360,
  //       rotationSpeed: (Math.random() - 0.5) * 0.05,
  //       baseX: 0,
  //       baseY: 0,
  //       color: `hsl(30, 40%, ${45 + Math.random() * 25}%)`,
  //     });
  //   }
  //   asteroids.current.forEach(ast => {
  //     ast.baseX = ast.x;
  //     ast.baseY = ast.y;
  //   });
  // };

  // Create shooting stars with more subtle shape & glow
  const createShootingStar = () => {
    shootingStars.current.push({
      x: Math.random() * widthRef.current,
      y: Math.random() * heightRef.current * 0.6,
      length: Math.random() * 160 + 160,
      speed: Math.random() * 15 + 30,
      size: Math.random() * 2 + 1.2,
      life: 0,
      maxLife: Math.random() * 40 + 40,
      angle: Math.random() * 0.25 + 0.15,
    });
  };

  // Simple Perlin noise function for nebula textures - for demo we simulate with layered gradients
  const drawNebula = (ctx, width, height, time) => {
    const grad1 = ctx.createRadialGradient(
      width * 0.25 + Math.sin(time / 6000) * 600,
      height * 0.45 + Math.cos(time / 5000) * 450,
      800,
      width * 0.25,
      height * 0.45,
      2800
    );
    // grad1.addColorStop(0, 'rgba(100, 45, 150, 0.48)');
    // grad1.addColorStop(1, 'rgba(20, 10, 50, 0)');

    const grad2 = ctx.createRadialGradient(
      width * 0.70 + Math.cos(time / 8000) * 700,
      height * 0.60 + Math.sin(time / 7000) * 350,
      600,
      width * 0.70,
      height * 0.60,
      2500
    );
    // grad2.addColorStop(0, 'rgba(180, 110, 210, 0.36)');
    // grad2.addColorStop(1, 'rgba(40, 20, 70, 0)');

    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = widthRef.current;
    let height = heightRef.current;

    // Set canvas to 8K size internally
    canvas.width = width;
    canvas.height = height;

    // CSS scale down canvas to fit screen, keeping crispness
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    initStars();
    // initAsteroids();

    let lastShootingStarTime = 0;
    let shootingStarInterval = 3500;

    let driftX = 0;
    let driftY = 0;
    let driftSpeedX = 0.015;
    let driftSpeedY = 0.02;

    const animate = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      // Draw nebula background
      drawNebula(ctx, width, height, time);

      // Update drift slowly
      driftX += driftSpeedX;
      driftY += driftSpeedY;

      // Oscillate drift speed slightly
      driftSpeedX += (Math.random() - 0.5) * 0.0003;
      driftSpeedY += (Math.random() - 0.5) * 0.0003;

      // Clamp drift speeds
      driftSpeedX = Math.min(Math.max(driftSpeedX, 0.012), 0.018);
      driftSpeedY = Math.min(Math.max(driftSpeedY, 0.015), 0.025);

      // User input offset normalized
      let inputX = 0;
      let inputY = 0;
      if (mouse.current.x !== null && mouse.current.y !== null) {
        inputX = (mouse.current.x / window.innerWidth - 0.5) * 2; // range [-1,1]
        inputY = (mouse.current.y / window.innerHeight - 0.5) * 2;
      }

      const combinedOffsetX = driftX * 40 - inputX * 80;
      const combinedOffsetY = driftY * 40 - inputY * 80;

      // Draw stars with parallax and twinkle
      stars.current.forEach(star => {
        star.x = star.baseX + combinedOffsetX / (star.layer + 1.5);
        star.y = star.baseY + combinedOffsetY / (star.layer + 1.5);

        star.opacity += star.twinkleSpeed;
        if (star.opacity >= 1) star.twinkleSpeed = -star.twinkleSpeed;
        if (star.opacity <= 0.25) star.twinkleSpeed = -star.twinkleSpeed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10 * star.radius;
        ctx.fill();
      });

      // Draw asteroids with rotation, drift, and input parallax
      asteroids.current.forEach(ast => {
        ast.baseX += ast.speedX;
        ast.baseY += ast.speedY;

        // Wrap around screen edges
        if (ast.baseX < 0) ast.baseX = width;
        else if (ast.baseX > width) ast.baseX = 0;
        if (ast.baseY < 0) ast.baseY = height;
        else if (ast.baseY > height) ast.baseY = 0;

        ast.rotation += ast.rotationSpeed;

        ast.x = ast.baseX + combinedOffsetX / 1.3;
        ast.y = ast.baseY + combinedOffsetY / 1.3;

        ctx.save();
        ctx.translate(ast.x, ast.y);
        ctx.rotate((ast.rotation * Math.PI) / 180);
        ctx.shadowColor = 'rgba(210, 170, 100, 0.9)';
        ctx.shadowBlur = 20;
        ctx.fillStyle = ast.color;
        ctx.beginPath();

        // Draw irregular asteroid shape (polygon with slight noise)
        const spikes = 7 + Math.floor(Math.random() * 3);
        const step = (Math.PI * 2) / spikes;
        for (let i = 0; i < spikes; i++) {
          const radius = ast.radius * (0.7 + Math.random() * 0.6);
          const angle = i * step;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      // Shooting stars with glow and trail
      if (time - lastShootingStarTime > shootingStarInterval && shootingStars.current.length < 3) {
        createShootingStar();
        lastShootingStarTime = time;
        shootingStarInterval = 3000 + Math.random() * 5000;
      }

      shootingStars.current.forEach((star, idx) => {
        star.x += star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);
        star.life++;

        const tailLength = star.length;

        // Glow trail
        ctx.strokeStyle = `rgba(255,255,255,${1 - star.life / star.maxLife})`;
        ctx.lineWidth = star.size * 1.3;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - tailLength * Math.cos(star.angle), star.y - tailLength * Math.sin(star.angle));
        ctx.stroke();

        // Head of shooting star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.life / star.maxLife})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 20;
        ctx.fill();

        if (star.life > star.maxLife) shootingStars.current.splice(idx, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        userSelect: 'none',
        pointerEvents: 'none',
        willChange: 'transform',
        zIndex: -1,
      }}
    />
  );
}
