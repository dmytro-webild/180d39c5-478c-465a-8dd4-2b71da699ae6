import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  dominantBaseline?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 2,
  dominantBaseline = 'middle',
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * (fontSize * 0.6)} ${fontSize * 1.2}`}
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={text}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline={dominantBaseline}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="currentColor"
        className="font-sans"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
