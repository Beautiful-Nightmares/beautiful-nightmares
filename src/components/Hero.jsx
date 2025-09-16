import { motion } from "motion/react";
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-[calc(100vh-4rem)]">
                <motion.div
                className="hero-content flex-col lg:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Link to="/beautiful-nightmares"><motion.img
                        src="./beautiful-nightmares/better_bn_logo.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 0.95, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1 }}
                    /></Link>
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h1 className="text-5xl font-bold">
                        The Elegance of Unease
                        </motion.h1>


                        <motion.h2 className="text-2xl font-italic pt-6">
                            <em>Where beauty dares to be unsettling.</em>
                        </motion.h2>

                        <motion.p
                        className="py-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        >
                        Step into a world where shadows shimmer and grace wears a darker hue. Beautiful Nightmares is not just a brand—it's a mood, a movement, a mirror to the exquisite tension between allure and edge. Let your aesthetic speak in whispers and thunder.
                        </motion.p>

                        <motion.button
                        className="btn btn-accent rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        >
                        Explore the contrast
                        </motion.button>
                        
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}