"use client";
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion";

interface EnterAnimationProps extends HTMLMotionProps<"div"> {
  className?: string;
  children?: React.ReactNode;
  isDefault?: boolean;
  horizontal?: "toRight" | "toLeft";
}

export default function EnterAnimation(props: EnterAnimationProps) {
  const { children, className, isDefault, horizontal, ...motionDivProps } =
    props;

  return (
    <AnimatePresence mode="popLayout">
      {isDefault ? (
        <motion.div
          initial={{ opacity: 0, x: 0, y: 25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          className={className}
          {...motionDivProps}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            x: horizontal === "toLeft" ? -100 : 100,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          className={className}
          {...motionDivProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
