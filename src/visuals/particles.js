// Animate floating particles
export function animateFloatingParticles() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let time = 0;

    function updateParticles() {
      time += 0.01;

      floatingParticles.forEach((particle) => {
        // Update angle
        particle.angle += particle.angleSpeed;

        // Calculate orbit around center with some drift
        const orbitX = centerX + Math.cos(particle.angle) * particle.amplitude;
        const orbitY = centerY + Math.sin(particle.angle) * particle.amplitude;

        // Add some noise movement
        const noiseX = Math.sin(time * particle.speed + particle.angle) * 5;
        const noiseY =
          Math.cos(time * particle.speed + particle.angle * 0.7) * 5;

        // Apply movement without audio reactivity
        const newX = orbitX + noiseX;
        const newY = orbitY + noiseY;

        // Update position
        particle.element.style.left = newX + "px";
        particle.element.style.top = newY + "px";

        // Pulse size slightly without audio
        const pulseFactor =
          1 + Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.3;
        const newSize = particle.size * pulseFactor;

        particle.element.style.width = newSize + "px";
        particle.element.style.height = newSize + "px";

        // Adjust opacity based on pulse
        const baseOpacity =
          0.2 +
          Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.1;
        particle.element.style.opacity = Math.min(0.8, baseOpacity);
      });

      requestAnimationFrame(updateParticles);
    }

    requestAnimationFrame(updateParticles);
  }
