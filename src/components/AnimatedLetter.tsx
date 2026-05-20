
import { motion, MotionValue, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  index,
  totalChars,
  scrollYProgress,
}) => {
  const charProgress = index / totalChars;
  // Dynamic scroll range mapping for progressive reveal
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  );
};
