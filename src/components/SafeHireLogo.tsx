import React from 'react';

interface SafeHireLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const SafeHireLogoMark: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
}> = ({ className = 'w-10 h-10', theme = 'dark' }) => {
  const charcoalColor = theme === 'dark' ? '#FFFFFF' : '#1E2229';
  const redColor = '#C81D25';

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Safe Hire Metal Roofing Logo Mark"
    >
      {/* 4 Square Window Panes (2x2 Grid) at Attic Center */}
      <g fill={charcoalColor}>
        <rect x="96" y="58" width="8" height="8" rx="0.5" />
        <rect x="108" y="58" width="8" height="8" rx="0.5" />
        <rect x="96" y="70" width="8" height="8" rx="0.5" />
        <rect x="108" y="70" width="8" height="8" rx="0.5" />
      </g>

      {/* Stylized Red 'S' - Forms the Left Half of the Hexagonal House */}
      <path
        d="M 98 22
           L 30 62
           L 30 102
           L 98 102
           L 98 140
           L 30 102
           L 30 128
           L 98 166
           L 98 84
           L 48 84
           L 48 70
           L 98 40
           Z"
        fill={redColor}
      />

      {/* Top Roof Gable Trim (Right Slope) */}
      <path
        d="M 102 18
           L 172 58
           L 158 66
           L 102 32
           Z"
        fill={charcoalColor}
      />

      {/* Stylized Charcoal 'H' - Forms the Right Half & Bottom Base */}
      <path
        d="M 106 84
           L 122 84
           L 122 108
           L 154 108
           L 154 68
           L 170 59
           L 170 140
           L 104 178
           L 104 160
           L 154 130
           L 154 122
           L 122 122
           L 122 150
           L 106 150
           Z"
        fill={charcoalColor}
      />
    </svg>
  );
};

export const SafeHireLogo: React.FC<SafeHireLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  const charcoalTextColor = theme === 'dark' ? 'text-white' : 'text-stone-900';
  const subtitleColor = theme === 'dark' ? 'text-stone-400' : 'text-stone-500';
  const lineColor = theme === 'dark' ? 'border-stone-700' : 'border-stone-300';
  const windowColor = theme === 'dark' ? '#F3F4F6' : '#1E2229';

  // Size mapping
  const markSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  if (variant === 'mark') {
    return <SafeHireLogoMark className={`${markSizes[size]} ${className}`} theme={theme} />;
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Emblem Mark */}
        <SafeHireLogoMark className={markSizes[size]} theme={theme} />

        {/* Brand Text */}
        <div className="mt-3 flex flex-col items-center">
          <div className={`font-black tracking-tight flex items-center gap-1.5 ${textSizes[size]}`}>
            {/* SAFE with pitched roof 'A' */}
            <span className="text-[#C81D25] flex items-center font-extrabold tracking-tight">
              S
              {/* Stylized roof 'A' with 2x2 windows */}
              <span className="relative inline-flex flex-col items-center justify-center px-0.5">
                <svg
                  viewBox="0 0 24 28"
                  className="w-[0.8em] h-[0.95em] fill-current text-[#C81D25]"
                >
                  {/* Roof Gable for A */}
                  <path d="M 12 1 L 23 27 L 17 27 L 13.5 18 L 10.5 18 L 7 27 L 1 27 Z M 12 8.5 L 10 13.5 L 14 13.5 Z" />
                </svg>
                {/* 4 tiny windows under crossbar */}
                <span
                  className="absolute bottom-[2px] flex flex-wrap w-[7px] h-[7px] gap-[1px]"
                  aria-hidden="true"
                >
                  <span
                    className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                    style={{ backgroundColor: windowColor }}
                  />
                  <span
                    className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                    style={{ backgroundColor: windowColor }}
                  />
                  <span
                    className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                    style={{ backgroundColor: windowColor }}
                  />
                  <span
                    className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                    style={{ backgroundColor: windowColor }}
                  />
                </span>
              </span>
              FE
            </span>
            <span className={`font-extrabold tracking-tight ${charcoalTextColor}`}>HIRE</span>
          </div>

          {/* Subtitle with horizontal rules */}
          {showSubtitle && (
            <div className="flex items-center gap-2 mt-1 w-full max-w-[200px]">
              <span className={`flex-1 border-b ${lineColor}`} />
              <span
                className={`text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase whitespace-nowrap ${subtitleColor}`}
              >
                METAL ROOFING
              </span>
              <span className={`flex-1 border-b ${lineColor}`} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar & Footer)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem Mark */}
      <SafeHireLogoMark className={`${markSizes[size]} shrink-0`} theme={theme} />

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <div className={`font-black tracking-tight leading-none flex items-center gap-1.5 ${textSizes[size]}`}>
          {/* SAFE in vibrant Crimson Red */}
          <span className="text-[#C81D25] flex items-center font-extrabold tracking-tight">
            S
            {/* Stylized roof 'A' */}
            <span className="relative inline-flex flex-col items-center justify-center px-0.5">
              <svg
                viewBox="0 0 24 28"
                className="w-[0.8em] h-[0.95em] fill-current text-[#C81D25]"
              >
                <path d="M 12 1 L 23 27 L 17 27 L 13.5 18 L 10.5 18 L 7 27 L 1 27 Z M 12 8.5 L 10 13.5 L 14 13.5 Z" />
              </svg>
              {/* 4 small window panes inside A */}
              <span
                className="absolute bottom-[2px] flex flex-wrap w-[7px] h-[7px] gap-[1px]"
                aria-hidden="true"
              >
                <span
                  className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                  style={{ backgroundColor: windowColor }}
                />
                <span
                  className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                  style={{ backgroundColor: windowColor }}
                />
                <span
                  className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                  style={{ backgroundColor: windowColor }}
                />
                <span
                  className="w-[2.5px] h-[2.5px] rounded-[0.5px]"
                  style={{ backgroundColor: windowColor }}
                />
              </span>
            </span>
            FE
          </span>

          {/* HIRE in Charcoal/White */}
          <span className={`font-extrabold tracking-tight ${charcoalTextColor}`}>HIRE</span>
        </div>

        {/* Subtitle with lines */}
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`w-3 sm:w-4 border-b ${lineColor}`} />
            <span
              className={`text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap ${subtitleColor}`}
            >
              METAL ROOFING
            </span>
            <span className={`w-3 sm:w-4 border-b ${lineColor}`} />
          </div>
        )}
      </div>
    </div>
  );
};
