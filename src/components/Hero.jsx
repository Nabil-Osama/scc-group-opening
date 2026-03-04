import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './Hero.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.34, 1.56, 0.64, 1] },
    }),
};

// Senior-level animated counter component
function AnimatedCounter({ from = 0, to, duration = 2, prefix = '', suffix = '' }) {
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            ease: "easeOut",
            onUpdate(value) {
                if (node) {
                    node.textContent = `${prefix}${Math.round(value)}${suffix}`;
                }
            }
        });
        return () => controls.stop();
    }, [from, to, duration, prefix, suffix, inView]);

    return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

export default function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="bg-glow bg-glow-gold hero__glow-1" />
            <div className="bg-glow bg-glow-amber hero__glow-2" />

            <div className="container hero__container">
                <motion.div
                    className="hero__badge glass-card"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    <span className="hero__badge-dot" />
                    Grand Opening 2026
                </motion.div>

                <motion.h1
                    className="hero__title"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    Welcome to <br />
                    <span className="hero__title-accent">SCC Media Group</span>
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                >
                    انطلاقة براندك بقوة تصل إلى أكثر من <span className="text-highlight">20 مليون متابع</span> في ساعة واحدة!
                    نقدم حلول إبداعية تجمع بين التأثير الرقمي والتواجد الميداني.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                >
                    <a href="#big5offer" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#big5offer')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        عروض الافتتاح ★
                    </a>
                    <a href="#services" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        خدماتنا
                    </a>
                </motion.div>

                <motion.div
                    className="hero__stats glass-card"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedCounter to={20} prefix="+" suffix="M" />
                        </span>
                        <span className="hero__stat-label">إجمالي الوصول</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedCounter to={5} duration={1.5} />
                        </span>
                        <span className="hero__stat-label">نجوم صناعة المحتوى</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedCounter to={80} suffix="%" duration={2.5} />
                        </span>
                        <span className="hero__stat-label">خصم الافتتاح</span>
                    </div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">24/7</span>
                        <span className="hero__stat-label">أمان رقمي</span>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
