import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Heart } from 'lucide-react';

const notes = [
    { id: 1, text: "You're the melody that plays in my heart every single day. ❤️", color: "bg-red-50" },
    { id: 2, text: "Every moment with you feels like a dream I never want to wake up from.", color: "bg-rose-50" },
    { id: 3, text: "You're not just my partner, you're my best friend and my home.", color: "bg-pink-50" },
    { id: 4, text: "I fall in love with you a little more every time I see your smile. 😊", color: "bg-red-50" },
];

export const LoveNotes = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % notes.length);
    const prev = () => setIndex((prev) => (prev - 1 + notes.length) % notes.length);

    return (
        <div className="w-full max-w-md mx-auto py-12 px-4">
            <h3 className="text-3xl font-romantic text-romantic-800 text-center mb-10">Messages for You</h3>

            <div className="relative h-64 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 50 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5, x: -50 }}
                        className={`absolute inset-0 flex flex-col items-center justify-center p-8 glass-2 text-center border-2 border-romantic-100 shadow-romantic-100/20`}
                    >
                        <Heart className="text-romantic-500 mb-4 fill-romantic-100" />
                        <p className="text-xl font-serif text-romantic-800 italic leading-relaxed">
                            "{notes[index].text}"
                        </p>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prev}
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-romantic-600 hover:text-romantic-800 transition-colors z-20"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="absolute right-[-20px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-romantic-600 hover:text-romantic-800 transition-colors z-20"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {notes.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-romantic-500' : 'w-2 bg-romantic-200'}`}
                    />
                ))}
            </div>
        </div>
    );
};
