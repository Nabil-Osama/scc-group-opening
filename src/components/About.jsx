import { motion } from 'framer-motion';
import './About.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="bg-glow bg-glow-gold about__glow" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">من نحن</h2>
                    <p className="section-subtitle">
                        SCC Media Group — شركة إعلامية رائدة تجمع بين صناعة المحتوى الاحترافي
                        والحماية الرقمية لبناء علامات تجارية قوية.
                    </p>
                </motion.div>

                <motion.div
                    className="about__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <motion.div className="about__main glass-card" variants={itemVariants}>
                        <div className="about__main-icon">🚀</div>
                        <h3 className="about__main-title">مهمتنا</h3>
                        <p className="about__main-text">
                            في SCC Media Group، نؤمن بقوة التأثير الرقمي. مهمتنا هي تمكين العلامات التجارية
                            من الوصول إلى ملايين المتابعين من خلال شراكات مع أكبر صناع المحتوى في مصر
                            والعالم العربي. نقدم حلولاً متكاملة تشمل التصوير السينمائي، التفاعل الميداني،
                            وحماية الملكية الفكرية الرقمية.
                        </p>
                        <div className="about__main-tags">
                            <span className="about__tag">صناعة المحتوى</span>
                            <span className="about__tag">التأثير الرقمي</span>
                            <span className="about__tag">الحماية الرقمية</span>
                        </div>
                    </motion.div>

                    <motion.div className="about__side" variants={containerVariants}>
                        {[
                            {
                                icon: '🎯',
                                title: 'رؤيتنا',
                                desc: 'أن نكون الشريك الأول لكل علامة تجارية تسعى للانتشار الرقمي السريع والفعال في الوطن العربي.',
                            },
                            {
                                icon: '🎬',
                                title: 'خبرتنا',
                                desc: 'فريق نجوم من صناع المحتوى يصلون إلى أكثر من 20 مليون متابع — نحوّل أفكارك إلى محتوى ينتشر بسرعة.',
                            },
                            {
                                icon: '🛡️',
                                title: 'أمانك الرقمي',
                                desc: 'نوفر حماية شاملة لبصمة الصوت والصورة، إدارة حقوق الملكية، واستعادة الحسابات المعطلة.',
                            },
                        ].map((item) => (
                            <motion.div key={item.title} className="about__card glass-card" variants={itemVariants}>
                                <span className="about__card-icon">{item.icon}</span>
                                <div>
                                    <h4 className="about__card-title">{item.title}</h4>
                                    <p className="about__card-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
