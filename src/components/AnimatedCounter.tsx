import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", label, duration = 2 }: Props) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold gold-text">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-2">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
