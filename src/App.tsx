import { FloatingHearts } from './components/FloatingHearts';
import { ValentineProposal } from './components/ValentineProposal';
// import { CountdownTimer } from './components/CountdownTimer';
// import { LoveNotes } from './components/LoveNotes';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Music, Calendar, Heart, Share2 } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-romantic-50 selection:bg-romantic-200 selection:text-romantic-900 overflow-x-hidden text-center">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-romantic-600 origin-left z-50 rounded-r-full" style={{ scaleX }} />

      {/* Background Hearts */}
      <FloatingHearts />

      {/* Header Area */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full p-6 sm:p-8 flex justify-between items-center z-40 backdrop-blur-sm bg-white/10"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl shadow-romantic-100/20 shadow-lg">
            <Heart className="text-romantic-600 fill-romantic-600 w-6 h-6 animate-pulse" />
          </div>
          <span className="font-romantic text-2xl text-romantic-800 tracking-tight">Forever Us</span>
        </div>
        <div className="flex gap-5">
          <Share2 className="text-romantic-600 w-6 h-6 cursor-pointer hover:scale-125 transition-all hover:rotate-12" />
          <Calendar className="text-romantic-600 w-6 h-6 cursor-pointer hover:scale-125 transition-all -hover:rotate-12" />
          <Music className="text-romantic-600 w-6 h-6 cursor-pointer hover:scale-125 transition-all hover:rotate-12" />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-24 py-32 px-4">

        {/* Hero Section */}
        <section className="w-full">
          <ValentineProposal />
        </section>

        {/* Countdown Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.section> */}

        {/* Love Notes Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full pb-20"
        >
          <LoveNotes />
        </motion.section> */}

        {/* Footer */}
        {/* <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-romantic-300">
            <div className="h-[1px] w-12 bg-romantic-200" />
            <Heart className="w-4 h-4 fill-romantic-200" />
            <div className="h-[1px] w-12 bg-romantic-200" />
          </div>
          <p className="text-romantic-400 text-sm font-romantic text-lg">
            Forever & Always
          </p>
        </motion.footer> */}
      </main>

      {/* Decorative Corner Elements */}
      <div className="fixed bottom-0 left-0 p-8 opacity-20 pointer-events-none z-0 hidden lg:block">
        <Heart className="w-32 h-32 text-romantic-300" />
      </div>
      <div className="fixed top-20 right-0 p-8 opacity-10 pointer-events-none z-0 hidden lg:block">
        <Heart className="w-48 h-48 text-romantic-400 rotate-45" />
      </div>
    </div>
  );
}

export default App;
