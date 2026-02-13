import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Stars, Sparkles } from 'lucide-react';


const sadBears = [
    "https://media.tenor.com/ck7oRyY26uwAAAAm/bear-%EB%86%80%EC%9E%90%EA%B3%B0.webp",
    "https://media.tenor.com/Idr_-NLOu8oAAAAm/milk-and-mocha.webp",
    "https://media.tenor.com/HyJM0AHnnKUAAAAM/milk-mocha.gif",
    "https://media.tenor.com/tsFBHGxponYAAAAm/bubu-dudu.webp",
    "https://media.tenor.com/kw2xrhnN1U8AAAAm/tkthao219-bubududu.webp",
];

const happyBear = "https://media.tenor.com/aZZNd6AZPCoAAAAm/heart-happy.webp";

export const ValentineProposal = () => {
    const [noPos, setNoPos] = useState({ x: 0, y: 0 });
    const [isAccepted, setIsAccepted] = useState(false);
    const [noScale, setNoScale] = useState(1);
    const [yesScale, setYesScale] = useState(1);
    const [thought, setThought] = useState("Click me?");
    const [noCount, setNoCount] = useState(0);

    // const [noStyle, setNoStyle] = useState({});

    const moveNo = () => {
        // Dynamic range based on viewport width
        // Mobile (<640px): smaller range to prevent overflow
        // Desktop: standard range
        const isMobile = window.innerWidth < 640;
        const rangeX = isMobile ? 100 : 300;
        const rangeY = isMobile ? 100 : 300;

        const x = Math.random() * (rangeX * 2) - rangeX; 
        const y = Math.random() * (rangeY * 2) - rangeY; 

        setNoPos({ x, y });
        setYesScale(prev => Math.min(prev + 0.15, 2.5));
        setNoScale(prev => Math.max(prev - 0.08, 0.4)); // Shrink button on each try
        setNoCount(prev => prev + 1);

        const thoughts = ["Are you sure?", "Think again!", "Wait!", "No way!", "Really?", "💔", "Pretty please?", "Don't break my heart!"];
        setThought(thoughts[Math.floor(Math.random() * thoughts.length)]);
    };


    const onAccept = () => {
        setIsAccepted(true);
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <div className="w-full mx-auto flex flex-col items-center">
            <AnimatePresence mode="wait">
                {isAccepted ? (
                    <motion.div
                        key="success"
                        initial={{ scale: 0, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        className="text-center p-12 glass-2 space-y-6 max-w-lg"
                    >
                        <motion.img 
                            src={happyBear} 
                            alt="Happy Bears" 
                            className=" mx-auto rounded-xl shadow-lg mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                filter: ["drop-shadow(0 0 0px #e11d48)", "drop-shadow(0 0 20px #e11d48)", "drop-shadow(0 0 0px #e11d48)"]
                            }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Heart className="w-16 h-16 text-romantic-600 mx-auto fill-romantic-600" />
                        </motion.div>
                        <h2 className="text-5xl font-romantic text-romantic-700">Forever Your Valentine!</h2>
                        <p className="text-xl font-serif text-romantic-800 leading-relaxed italic">
                            "You just made me the happiest person in the world. I can't wait to spend every Valentine's Day with you!"
                        </p>
                        <Sparkles className="w-8 h-8 text-yellow-400 mx-auto animate-spin-slow" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="proposal"
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-center space-y-10 relative z-10 glass-2 p-14 max-w-xl mx-auto border-2 border-white/50"
                    >
                        {noCount > 0 ? (
                            <motion.img
                                key={noCount}
                                src={sadBears[noCount % sadBears.length]}
                                alt="Sad Bear"
                                className="w-40 h-40 mx-auto rounded-xl shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                <Heart className="w-20 h-20 text-romantic-500 fill-romantic-100 drop-shadow-lg" />
                            </motion.div>
                        )}

                        <h1 className="text-5xl sm:text-6xl font-romantic text-romantic-800 leading-tight">
                            Would you be <br />
                            <span className="text-gradient-premium">My Valentine?</span>
                        </h1>

                        <p className="text-romantic-400 font-medium tracking-widest uppercase text-xs">A special question for a special someone</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
                            <motion.button
                                style={{ scale: yesScale }}
                                whileHover={{ scale: yesScale + 0.1 }}
                                whileTap={{ scale: yesScale - 0.1 }}
                                onClick={onAccept}
                                className="bg-gradient-to-r from-romantic-600 to-romantic-400 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-romantic-200/50 flex items-center gap-2 btn-pulse relative overflow-hidden"
                            >
                                YES! <Stars className="w-5 h-5 fill-white/20" />
                            </motion.button>

                            <motion.div 
                                className="relative"
                                animate={{ x: noPos.x, y: noPos.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={thought}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: -45 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="absolute left-1/2 -translate-x-1/2 -top-2 w-max pointer-events-none"
                                    >
                                        <span className="bg-white/90 px-3 py-1 rounded-full text-romantic-600 text-sm font-bold shadow-sm border border-romantic-100">
                                            {thought}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>
                                <motion.button
                                    animate={{ scale: noScale }}
                                    onMouseEnter={moveNo} // Only desktop
                                    onTouchStart={moveNo} // For mobile
                                    onClick={moveNo}
                                    className="bg-white/80 text-romantic-600 border-2 border-romantic-100 px-10 py-4 rounded-full font-bold hover:bg-white transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap"
                                >
                                    No
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
