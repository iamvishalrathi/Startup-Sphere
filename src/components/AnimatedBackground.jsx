import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 30 });
  const colors = ['bg-primary/20', 'bg-secondary/20', 'bg-yellow-300/20'];

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${colors[i % colors.length]}`}
          style={{
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 