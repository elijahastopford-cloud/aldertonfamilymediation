import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'normal' | 'large';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'normal',
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Refined emblem mark representing balanced mediation and reconciliation */}
      <div
        className={`shrink-0 flex items-center justify-center rounded-sm transition-colors ${
          size === 'large' ? 'w-10 h-10' : 'w-8 h-8'
        } ${
          isLight
            ? 'bg-[#EAF1EE] text-[#13323B]'
            : 'bg-[#183944] text-[#EAF1EE]'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={size === 'large' ? 'w-6 h-6' : 'w-5 h-5'}
        >
          {/* Calm interlocking arches symbolizing harmonious dialogue and resolution */}
          <circle
            cx="12"
            cy="16"
            r="8.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="28 8"
            className="opacity-80"
          />
          <circle
            cx="20"
            cy="16"
            r="8.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="28 8"
            className="opacity-80"
          />
          <path
            d="M16 11V21"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Authoritative British practice wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.08em] font-semibold uppercase leading-tight ${
            size === 'large' ? 'text-2xl' : 'text-xl'
          } ${isLight ? 'text-white' : 'text-[#142B34]'}`}
        >
          Alderton
        </span>
        <span
          className={`font-sans uppercase tracking-[0.24em] font-medium leading-none ${
            size === 'large' ? 'text-[11px] mt-1' : 'text-[9.5px] mt-0.5'
          } ${isLight ? 'text-[#A0BAC0]' : 'text-[#4A646D]'}`}
        >
          Family Mediation
        </span>
      </div>
    </div>
  );
};
