import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        icon: '🎬',
        title: 'تصوير ريلز احترافي',
        desc: 'تصوير سينمائي باستخدام أحدث المعدات لإنتاج ريلز ومحتوى بصري مذهل يجذب ملايين المشاهدات.',
        features: ['تصوير سينمائي', 'ريلز احترافية', 'مونتاج إبداعي'],
    },
    {
        icon: '🎤',
        title: 'تفاعل ميداني',
        desc: 'تنظيم فعاليات ميدانية تشمل أسئلة وتوزيع هدايا لخلق تفاعل حقيقي مع الجمهور وبناء ولاء العملاء.',
        features: ['أسئلة تفاعلية', 'توزيع هدايا', 'تغطية مباشرة'],
    },
    {
        icon: '📢',
        title: 'نشر عبر النجوم',
        desc: 'نشر المحتوى على صفحات أكبر صناع المحتوى للوصول إلى أكثر من 20 مليون متابع في ساعة واحدة.',
        features: ['وصول 20M+', 'نشر متعدد', 'تأثير فوري'],
    },
    {
        icon: '🛡️',
        title: 'الأمان وحماية الملكية',
        desc: 'حماية شاملة وإدارة لحقوق الملكية الفكرية رقمياً، مع إغلاق الصفحات المنتحلة واستعادة الحسابات للحفاظ على علامتك التجارية.',
        features: ['حماية المحتوى', 'الأمان الرقمي', 'إدارة الحقوق'],
    },
    {
        icon: '💻',
        title: 'تصميم وبرمجة المواقع',
        desc: 'تصميم وبرمجة مواقع إلكترونية عصرية واحترافية تعكس هوية علامتك التجارية وتوفر تجربة مستخدم مثالية على جميع الأجهزة.',
        features: ['تصميم إبداعي', 'تجربة مستخدم', 'برمجة متقدمة'],
    },
    {
        icon: '📱',
        title: 'تطوير تطبيقات الجوال',
        desc: 'بناء وبرمجة تطبيقات جوال مبتكرة وسريعة لنظامي iOS و Android لتوسيع نطاق أعمالك والوصول لعملائك بسهولة وبأعلى جودة.',
        features: ['تطبيقات iOS', 'تطبيقات Android', 'أداء فائق'],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
    return (
        <section id="services" className="services section">
            <div className="bg-glow bg-glow-amber services__glow" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">خدماتنا</h2>
                    <p className="section-subtitle">
                        حلول إبداعية متكاملة تجمع بين صناعة المحتوى الاحترافي والحماية الرقمية
                        لنمو علامتك التجارية.
                    </p>
                </motion.div>

                <motion.div
                    className="services__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {services.map((service) => (
                        <motion.div key={service.title} className="services__card glass-card" variants={cardVariants}>
                            <span className="services__card-icon">{service.icon}</span>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.desc}</p>
                            <div className="services__card-features">
                                {service.features.map((f) => (
                                    <span key={f} className="services__feature">{f}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
