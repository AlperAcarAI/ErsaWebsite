import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-ersa-blue via-ersa-light-blue to-ersa-blue transition-opacity duration-500">
      <div className="text-center text-white">
        <div className="mb-4">
          <i className="fas fa-bolt text-6xl animate-pulse"></i>
        </div>
        <h2 className="text-2xl font-bold mb-2">ERSA ULAŞIM</h2>
        <div className="w-48 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
