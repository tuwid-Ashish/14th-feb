import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const colors = ['#FDA4AF', '#F43F5E', '#BE123C', '#FB7185', '#FFFFFF'];

const Heart = ({ delay, duration, left, size, color }: { delay: number; duration: number; left: string; size: number; color: string }) => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <motion.div
            initial={{ y: '110vh', opacity: 0, scale: 0 }}
            animate={{
                y: '-10vh',
                opacity: [0, 0.8, 0.8, 0],
                x: [0, 30, -30, 0],
                scale: [0, 1, 1, 0.3]
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
            }}
            style={{ left, width: size, height: size, color, y: yParallax }}
            className="absolute pointer-events-none drop-shadow-sm"
        >
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </motion.div>
    );
};

export const FloatingHearts = () => {
    const [hearts] = useState(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 15,
            duration: 12 + Math.random() * 8,
            left: `${Math.random() * 100}%`,
            size: 10 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    });

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <Heart key={heart.id} {...heart} />
            ))}
        </div>
    );
};
