// "use client";

// import { useEffect, useState } from "react";

// export default function LoadingAnimation() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Simulate loading progress
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 30);

//     // Hide loading screen after animation completes
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3500);

//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(timer);
//     };
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
//       {/* Animated Background Lines */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Left Lines */}
//         <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent animate-[slideDown_2s_ease-in-out_infinite]"></div>
//         <div className="absolute left-12 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent animate-[slideDown_2.5s_ease-in-out_infinite_0.3s]"></div>
        
//         {/* Right Lines */}
//         <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent animate-[slideDown_2s_ease-in-out_infinite_0.5s]"></div>
//         <div className="absolute right-12 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent animate-[slideDown_2.5s_ease-in-out_infinite_0.8s]"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center">
        
//         {/* Logo Animation Container */}
//         <div className="relative mb-12">
          
//           {/* Rotating Border */}
//           <div className="absolute inset-0 -m-8">
//             <div className="w-full h-full border-2 border-transparent border-t-[#d4af37] border-r-[#d4af37] rounded-full animate-spin"></div>
//           </div>

//           {/* Pulsing Glow */}
//           <div className="absolute inset-0 -m-4 bg-[#d4af37]/20 blur-3xl animate-pulse"></div>

//           {/* Logo Text */}
//           <div className="relative text-center">
//             <div className="mb-4">
//               {/* LUX in Gold */}
//               <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
//                 {['L', 'U', 'X'].map((letter, index) => (
//                   <span
//                     key={index}
//                     className="inline-block text-[#d4af37] animate-[fadeInUp_0.6s_ease-out_forwards]"
//                     style={{ 
//                       opacity: 0,
//                       animationDelay: `${index * 0.15}s` 
//                     }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </span>
              
//               {/* ORA in White */}
//               <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
//                 {['O', 'R', 'A'].map((letter, index) => (
//                   <span
//                     key={index}
//                     className="inline-block text-white animate-[fadeInUp_0.6s_ease-out_forwards]"
//                     style={{ 
//                       opacity: 0,
//                       animationDelay: `${(index + 3) * 0.15}s` 
//                     }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </span>
//             </div>

//             {/* Tagline */}
//             <div 
//               className="text-white text-xs sm:text-sm md:text-base tracking-[0.3em] font-light opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]"
//             >
//               DESIGN AND FITOUT
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-64 sm:w-80 md:w-96 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
//           {/* Bar Container */}
//           <div className="relative h-0.5 bg-white/10 rounded-full overflow-hidden">
//             {/* Progress Fill */}
//             <div 
//               className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             >
//               {/* Shimmer Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]"></div>
//             </div>
//           </div>

//           {/* Percentage */}
//           <div className="mt-4 text-center text-[#d4af37] text-sm font-light tracking-wider">
//             {progress}%
//           </div>
//         </div>

//         {/* Loading Text */}
//         <div className="mt-8 opacity-0 animate-[fadeIn_0.8s_ease-out_1.8s_forwards]">
//           <div className="flex items-center gap-2 text-white/60 text-xs tracking-widest">
//             <span>LOADING</span>
//             <div className="flex gap-1">
//               <span className="animate-[bounce_1s_infinite_0s]">.</span>
//               <span className="animate-[bounce_1s_infinite_0.2s]">.</span>
//               <span className="animate-[bounce_1s_infinite_0.4s]">.</span>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Fade Out Animation */}
//       <div 
//         className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
//           progress === 100 ? 'opacity-100' : 'opacity-0'
//         }`}
//         style={{ 
//           animation: progress === 100 ? 'fadeOut 1s ease-out 0.5s forwards' : 'none' 
//         }}
//       ></div>

//       {/* Custom Animations */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes fadeOut {
//           from {
//             opacity: 1;
//           }
//           to {
//             opacity: 0;
//             visibility: hidden;
//           }
//         }

//         @keyframes slideDown {
//           0% {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes bounce {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo Animation Container */}
        <div className="relative mb-12">
          
          {/* Pulsing Glow */}
          <div className="absolute inset-0 -m-4 bg-[#d4af37]/20 blur-3xl animate-pulse"></div>

          {/* Logo Text */}
          <div className="relative text-center">
            <div className="mb-4">
              {/* LUX in Gold */}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                {['L', 'U', 'X'].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block text-[#d4af37] animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ 
                      opacity: 0,
                      animationDelay: `${index * 0.15}s` 
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              
              {/* ORA in White */}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                {['O', 'R', 'A'].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block text-white animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ 
                      opacity: 0,
                      animationDelay: `${(index + 3) * 0.15}s` 
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>

            {/* Tagline */}
            <div 
              className="text-white text-xs sm:text-sm md:text-base tracking-[0.3em] font-light opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]"
            >
              DESIGN AND FITOUT
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
          {/* Bar Container */}
          <div className="relative h-0.5 bg-white/10 rounded-full overflow-hidden">
            {/* Progress Fill */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]"></div>
            </div>
          </div>

          {/* Percentage */}
          <div className="mt-4 text-center text-[#d4af37] text-sm font-light tracking-wider">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 opacity-0 animate-[fadeIn_0.8s_ease-out_1.8s_forwards]">
          <div className="flex items-center gap-2 text-white/60 text-xs tracking-widest">
            <span>LOADING</span>
            <div className="flex gap-1">
              <span className="animate-[bounce_1s_infinite_0s]">.</span>
              <span className="animate-[bounce_1s_infinite_0.2s]">.</span>
              <span className="animate-[bounce_1s_infinite_0.4s]">.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Fade Out Animation */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          progress === 100 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animation: progress === 100 ? 'fadeOut 1s ease-out 0.5s forwards' : 'none' 
        }}
      ></div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}