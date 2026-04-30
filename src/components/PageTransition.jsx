import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10,
        filter: 'blur(15px)'
    },
    in: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
    },
    out: {
        opacity: 0,
        y: -10,
        filter: 'blur(15px)'
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.6
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full flex-grow flex flex-col pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            {children}
        </motion.div>
    );
}
