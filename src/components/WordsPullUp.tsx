import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = "",
  showAsterisk = false,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, idx) => {
        const isLast = idx === words.length - 1;
        return (
          <motion.span
            key={idx}
            variants={childVariants}
            className="inline-block relative mr-[0.25em] last:mr-0 whitespace-nowrap"
          >
            {word}
            {isLast && showAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] pointer-events-none font-sans select-none">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
