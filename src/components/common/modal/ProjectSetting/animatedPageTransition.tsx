import { AnimatePresence, motion } from "framer-motion";

const variants = {
  entry: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
  }),
};

export const AnimatedPageTransition = ({
  children,
  currentPage,
  back,
}: {
  children: React.ReactNode;
  currentPage: number;
  back: boolean;
}) => (
  <AnimatePresence mode="wait" custom={back} initial={false}>
    <motion.div
      key={currentPage}
      initial="entry"
      animate="center"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      custom={back}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
