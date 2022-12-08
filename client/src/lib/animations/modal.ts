import { Variants } from 'framer-motion';

export const backdropVariants: Variants = {
  closed: { opacity: 0 },
  opened: { opacity: 1 },
};

export const modalVariants: Variants = {
  closed: { scale: 0 },
  opened: { scale: 1 },
};

export const buttonVariants: Variants = {
  closed: { y: -200, opacity: 0 },
  opened: { y: 0, opacity: 1, transition: { staggerChildren: 100 } },
};
