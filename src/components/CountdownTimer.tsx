import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Unit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-3 sm:p-4 glass-2 min-w-[70px] sm:min-w-[90px]">
        <motion.span
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-3xl font-bold text-romantic-600"
        >
            {value.toString().padStart(2, '0')}
        </motion.span>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-romantic-400 font-bold mt-1">
            {label}
        </span>
    </div>
);

export const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const target = new Date('2026-02-14T00:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const diff = target.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 py-10">
            <h3 className="text-xl sm:text-2xl font-romantic text-romantic-800">Time Until Our Special Day</h3>
            <div className="flex gap-2 sm:gap-4">
                <Unit value={timeLeft.days} label="Days" />
                <Unit value={timeLeft.hours} label="Hours" />
                <Unit value={timeLeft.minutes} label="Minutes" />
                <Unit value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
};
