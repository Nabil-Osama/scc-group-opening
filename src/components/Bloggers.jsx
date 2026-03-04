import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Bloggers.css';

const bloggers = [
    {
        id: 1,
        name: 'فارس الطماوي',
        role: 'صانع محتوى',
        photo: '/images/blogger1.png',
        preview:
            'فخور إني جزء من فريق SCC Media Group! الشركة دي هتغير قواعد اللعبة في صناعة المحتوى.',
        full:
            'الطاقة والحماس اللي عند الفريق ده مش عادي — توقعوا محتوى استثنائي وتجارب رقمية على أعلى مستوى. شغلت مع كتير من الشركات بس SCC بتقدم مزيج فريد من الشغف والاحترافية والإبداع. مستقبل صناعة المحتوى في الوطن العربي بيتشكل هنا.',
        rating: 5,
        link: 'https://web.facebook.com/Eltamawyfares',
    },
    {
        id: 2,
        name: 'أسامة الحداد',
        role: 'صانع محتوى',
        photo: '/images/blogger2.png',
        preview:
            'SCC Media Group مش مجرد شركة — دي حركة إبداعية كاملة.',
        full:
            'أنا متحمس جداً للرؤية اللي بتقدمها الشركة في دمج الإبداع مع التكنولوجيا. اللي بيميز SCC هو فهمهم العميق لصناعة المحتوى وكيفية الوصول للجمهور المستهدف. كل مشروع ليهم فيه لمسة خاصة وتواصل حقيقي مع الناس.',
        rating: 5,
        link: 'https://web.facebook.com/osamaElhada',
    },
    {
        id: 3,
        name: 'مو سيلفا',
        role: 'صانع محتوى',
        photo: '/images/blogger3.png',
        preview:
            'كنت بتابع رحلة SCC من البداية والافتتاح الكبير ده نتيجة شغف وتعب مستمر.',
        full:
            'الالتزام بالجودة والابتكار هو اللي بيخلي SCC مختلفة. كصانع محتوى، بشوف الحرفية في كل حاجة بيعملوها — من الهوية البصرية لطريقة الإنتاج. كل تصميم وكل قرار مدروس بعناية. SCC مش بس بتصنع محتوى — بتصنع تحف فنية.',
        rating: 5,
        link: 'https://web.facebook.com/moselvaofficial',
    },
    {
        id: 4,
        name: 'عبد الرحمن أيمن',
        role: 'صانع محتوى',
        photo: '/images/blogger4.png',
        preview:
            'SCC جاية تعيد تعريف المشهد الإبداعي في صناعة المحتوى.',
        full:
            'الطريقة اللي بيتعاملوا بيها مع الحلول الرقمية جديدة ومبتكرة وموجهة للنتائج. الافتتاح ده إشارة لحاجات كبيرة جاية للصناعة! استراتيجيتهم التسويقية بتجمع بين البيانات والإبداع بشكل يوصل للجمهور. أي براند يشتغل مع SCC هيكون في أيدي أمينة.',
        rating: 5,
        link: 'https://web.facebook.com/profile.php?id=100088111707068',
    },
    {
        id: 5,
        name: 'المذيعة خلود سعودي',
        role: 'صانعة محتوى',
        photo: '/images/khloud.jpeg',
        preview:
            'خلود سعودي هي صانعة محتوى رقمية صاعدة ومتخصصة في تقديم محتوى تفاعلي حديث على جميع المنصات ، تتميز بأسلوب جذاب يعكس الاحترافية والالتزام.',
        full:
            'تعمل على تطوير أفكار مبتكرة تتماشى مع متطلبات السوق الرقمي، مما يساهم في تعزيز انتشار العلامات التجارية وزيادة معدلات التفاعل. تمثل عنصرًا فعالًا في دعم نمو المشاريع الرقمية وبناء شراكات إعلانية طويلة الأمد، مع التركيز على تحقيق نتائج تسويقية قوية ومستدامة من خلال محتوى إبداعي موجه للجمهور المستهدف.',
        rating: 5,
        link: 'https://www.facebook.com/share/17xxBRNzak/',
    },
    {
        id: 6,
        name: 'صانع المحتوى السادس',
        role: 'قريباً… انتظروا المفاجأة 🔥',
        photo: '/images/blogger5.png',
        preview:
            'النجم السادس في فريق SCC Media Group — المفاجأة الكبرى قادمة!',
        full:
            'قريباً سيتم الإعلان عن النجم السادس في فريق SCC Media Group. انتظروا مفاجأة ضخمة ستضاف لقوة الفريق وستعزز من الوصول لملايين المتابعين الإضافيين. ترقبوا الإعلان الرسمي!',
        rating: 5,
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] },
    }),
};

export default function Bloggers() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="bloggers" className="bloggers section">
            <div className="bg-glow bg-glow-gold bloggers__glow" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">فريق النجوم</h2>
                    <p className="section-subtitle">
                        تعرّف على نجوم صناعة المحتوى في فريق SCC Media Group وآرائهم عن الافتتاح الكبير.
                    </p>
                </motion.div>

                <div className="bloggers__list">
                    {bloggers.map((blogger, i) => {
                        const isExpanded = expandedId === blogger.id;
                        return (
                            <motion.div
                                key={blogger.id}
                                className={`bloggers__card glass-card ${i % 2 !== 0 ? 'bloggers__card--reverse' : ''} ${isExpanded ? 'bloggers__card--expanded' : ''}`}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                            >
                                <div className="bloggers__photo-wrapper">
                                    <img
                                        src={blogger.photo}
                                        alt={blogger.name}
                                        className="bloggers__photo"
                                        loading="lazy"
                                    />
                                    <div className="bloggers__photo-glow" />
                                    <div className="bloggers__photo-badge">✦ نجم SCC</div>
                                </div>

                                <div className="bloggers__content">
                                    <div className="bloggers__quote-icon">❝</div>
                                    <p className="bloggers__text">{blogger.preview}</p>

                                    {/* Inline expanded content */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                className="bloggers__expanded"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                <div className="bloggers__expanded-inner">
                                                    {/* Star rating */}
                                                    <div className="bloggers__inline-stars">
                                                        {Array.from({ length: 5 }).map((_, si) => (
                                                            <span
                                                                key={si}
                                                                className={`bloggers__star ${si < blogger.rating ? 'bloggers__star--filled' : ''}`}
                                                            >
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Divider */}
                                                    <motion.div
                                                        className="bloggers__inline-divider"
                                                        initial={{ scaleX: 0 }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ delay: 0.15, duration: 0.5 }}
                                                    />

                                                    {/* Full text */}
                                                    <motion.p
                                                        className="bloggers__full-text"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2, duration: 0.4 }}
                                                    >
                                                        {blogger.full}
                                                    </motion.p>

                                                    {/* Tags */}
                                                    <motion.div
                                                        className="bloggers__inline-tags"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.35, duration: 0.4 }}
                                                    >
                                                        <span className="bloggers__inline-tag">#SCCMediaGroup</span>
                                                        <span className="bloggers__inline-tag">#الافتتاح_الكبير</span>
                                                        <span className="bloggers__inline-tag">#صناع_المحتوى</span>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        className={`bloggers__read-more ${isExpanded ? 'bloggers__read-more--active' : ''}`}
                                        onClick={() => toggleExpand(blogger.id)}
                                    >
                                        <span className="bloggers__read-more-text">
                                            {isExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                                        </span>
                                        <span className="bloggers__read-more-icon">
                                            {isExpanded ? '↑' : '→'}
                                        </span>
                                        <span className="bloggers__read-more-shine" />
                                    </button>

                                    <div className="bloggers__author">
                                        <span className="bloggers__name">{blogger.name}</span>
                                        <span className="bloggers__role">{blogger.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
