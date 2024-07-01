import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  // Function to handle when particles are loaded (optional)
  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

 
  const options = useMemo(() => ({
    background: {
      image: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvB0L6eA4mpRpDQUusysRvTl6C3jCEtFQCYA&s)',
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      color: { value: "#333333" }, 
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        push: { particles_nb: 4 },
        grab: { distance: 150, line_linked: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: { color: "#FFFFFF", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 3 },
      number: { density: { enable: true }, value: 200 },
      opacity: { value: 1.0 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

 
  return (
    <Particles id={props.id} init={particlesLoaded} options={options} />
  );
};

export default ParticlesComponent;
