import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Initializing creativity...",
    "Loading digital craftsmanship...",
    "Preparing innovative solutions...",
    "Almost ready to inspire..."
  ];

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 500);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(messageTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating code symbols */}
        <div className="code-symbol code-symbol-1">&lt;/&gt;</div>
        <div className="code-symbol code-symbol-2">{ }</div>
        <div className="code-symbol code-symbol-3">λ</div>
        <div className="code-symbol code-symbol-4">∇</div>
        <div className="code-symbol code-symbol-5">⚡</div>
        <div className="code-symbol code-symbol-6">🚀</div>
        
        {/* Geometric shapes */}
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>
      
      <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        {/* Brand logo/initial */}
        <div className="mb-6 sm:mb-8">
          <div className="brand-logo mx-auto">
            <span className="text-4xl sm:text-5xl font-bold text-primary">P</span>
          </div>
        </div>
        
        {/* Advanced multi-ring loader */}
        <div className="relative mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-20 sm:h-20">
          <div className="loader-ring loader-ring-1"></div>
          <div className="loader-ring loader-ring-2"></div>
          <div className="loader-ring loader-ring-3"></div>
          <div className="loader-center">
            <div className="inner-pulse"></div>
          </div>
        </div>
        
        {/* Dynamic brand name */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2 tracking-wide">
            <span className="letter-animate letter-1">P</span>
            <span className="letter-animate letter-2">O</span>
            <span className="letter-animate letter-3">R</span>
            <span className="letter-animate letter-4">T</span>
            <span className="letter-animate letter-5">F</span>
            <span className="letter-animate letter-6">O</span>
            <span className="letter-animate letter-7">L</span>
            <span className="letter-animate letter-8">I</span>
            <span className="letter-animate letter-9">O</span>
          </h1>
          <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-widest">
            FULL STACK DEVELOPER
          </div>
        </div>
        
        {/* Animated status dots */}
        <div className="flex items-center justify-center space-x-1 mb-4 sm:mb-6">
          <span className="status-dot status-dot-1"></span>
          <span className="status-dot status-dot-2"></span>
          <span className="status-dot status-dot-3"></span>
          <span className="status-dot status-dot-4"></span>
        </div>
        
        {/* Dynamic messages */}
        <div className="min-h-[1.5rem] sm:min-h-[2rem]">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium animate-fade-in-up">
            {messages[currentMessage]}
          </p>
        </div>
        
        {/* Skill indicators */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 text-xs">
          <span className="skill-tag skill-tag-1">React</span>
          <span className="skill-tag skill-tag-2">TypeScript</span>
          <span className="skill-tag skill-tag-3">Node.js</span>
          <span className="skill-tag skill-tag-4">Design</span>
        </div>
        
        {/* Enhanced progress bar */}
        <div className="mt-6 sm:mt-8 w-full max-w-xs mx-auto">
          <div className="progress-container">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill">
                <div className="progress-glow"></div>
              </div>
            </div>
            <div className="progress-percentage">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;