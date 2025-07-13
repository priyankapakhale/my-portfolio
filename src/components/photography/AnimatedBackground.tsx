const AnimatedBackground = () => {
  return (
    <>
      <style>{`
        @keyframes shootingStar {
          0% { transform: translateX(-10px) translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(120vw) translateY(-200px); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Static stars */}
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          );
        })}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 50}%`,
              left: `-10px`,
              animationDuration: "3s",
              animationDelay: `${i * 5}s`,
              animation: `shootingStar 8s linear infinite ${i * 5}s`,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
