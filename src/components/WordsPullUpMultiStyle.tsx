import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = "",
  delay = 0,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Flatten segments into individual words with their respective styles
  const words: { word: string; styleClass: string }[] = [];
  segments.forEach((seg) => {
    const parts = seg.text.split(" ");
    parts.forEach((part) => {
      if (part) {
        words.push({
          word: part,
          styleClass: seg.className || "",
        });
      }
    });
  });

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
      className={`inline-flex flex-wrap justify-center items-center ${className}`}
    >
      {words.map((item, idx) => (
        <motion.span
          key={idx}
          variants={childVariants}
          className={`inline-block mr-[0.25em] last:mr-0 whitespace-nowrap ${item.styleClass}`}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.span>
  );
};
