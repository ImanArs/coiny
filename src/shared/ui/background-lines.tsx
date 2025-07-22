import React from "react";

interface Props {
  children: React.ReactNode;
}

export const BackgroundLines = ({ children }: Props) => {
  const LINES = 20; // число линий
  const SPACING = 70; // px — шаг по вертикали
  const ANGLE = -25; // deg — угол наклона
  const DELAY_STEP = 0.9; // s — задержка старта между линиями

  return (
    <div className="relative min-h-screen w-screen bg-[#130202] overflow-hidden">
      {Array.from({ length: LINES }).map((_, i) => (
        <div
          key={i}
          className="line-with-highlight blur-[1.5px]"
          style={
            {
              top: `${i * SPACING}px`,
              transform: `rotate(${ANGLE}deg)`,
              transformOrigin: "left top",
              /* прокидываем задержку в ::before */
              "--delay": `${(i * DELAY_STEP).toFixed(2)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
