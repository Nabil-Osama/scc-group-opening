import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faresImg from '../assets/fares.jpeg';
import osamaImg from '../assets/osama.jpeg';
import moImg from '../assets/mo.jpeg';
import abdelrahmanImg from '../assets/abdelrahman.jpeg';
import ahmedImg from '../assets/ahmed.jpg';
import khloudImg from '../assets/khloud.jpeg';
import './BigFiveOffer.css';

const creators = [
    {
        id: 1,
        name: 'فارس الطماوي',
        nameEn: 'Fares El-Tamawy',
        image: faresImg,
        followers: '+10M',
        desc: 'يعد من ابرز صناع المحتوى المؤثرين قي مصر وهو صانع محتوى يمتلك رؤية إعلامية واضحة وقدرة قوية على التأثير في فئة الشباب. يركز على تقديم حملات رقمية احترافية قابلة للقياس، مما يجعله شريكًا موثوقًا للعلامات التجارية والمستثمرين.',
        platforms: {
            facebook: 'https://web.facebook.com/Eltamawyfares',
            instagram: 'https://www.instagram.com/faresalieltamawy?igsh=OWljbTNhcDFuZHA3',
            tiktok: 'https://www.tiktok.com/@fareseltamawy99?_r=1&_t=ZN-94G5dbVpuDO'
        },
        links: [
            { label: 'Facebook', url: 'https://web.facebook.com/Eltamawyfares' },
            { label: 'Instagram', url: 'https://www.instagram.com/faresalieltamawy?igsh=OWljbTNhcDFuZHA3' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@fareseltamawy99?_r=1&_t=ZN-94G5dbVpuDO' }
        ],
        available: true,
    },
    {
        id: 2,
        name: 'أسامة الحداد',
        nameEn: 'Osama El-Haddad',
        image: osamaImg,
        followers: '+5M',
        desc: 'رائد في مجال المحتوى الإنساني والمبادرات المجتمعية، يتميز بالمصداقية والثقة الجماهيرية العالية. يوفر بيئة مثالية للرعاة الراغبين في دعم المسؤولية المجتمعية وبناء صورة ذهنية إيجابية للعلامات التجارية.',
        platforms: {
            facebook: 'https://web.facebook.com/osamaElhada',
            instagram: 'https://www.instagram.com/osamaelhadad445?igsh=MXdpbWRjcWhvcHR5MQ==',
            tiktok: 'https://www.tiktok.com/@osmaelhad445?_r=1&_d=e31ckf8gh9mgij&sec_uid=MS4wLjABAAAAWxy8M6KsUuSgwzNOaSc6NDVt0RkIEus-IfsL2-278Hp3GTVoRdON-shUQDUz2-Ql&share_author_id=7464487006925374471&sharer_language=en&source=h5_m&u_code=f1fk0mc0hf0ih6&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=DA6B936A-4B84-4277-BD19-98F2B61C195F&user_id=7597582493885219862&sec_user_id=MS4wLjABAAAAGQIoYbnxiiFwnFU18fAUul2wCLDqnsrCJXIsLMCKr09m6phV7lvfAL_kM0sGi-Ou&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233'
        },
        links: [
            { label: 'Facebook', url: 'https://web.facebook.com/osamaElhada' },
            { label: 'Instagram', url: 'https://www.instagram.com/osamaelhadad445?igsh=MXdpbWRjcWhvcHR5MQ==' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@osmaelhad445?_r=1&_d=e31ckf8gh9mgij&sec_uid=MS4wLjABAAAAWxy8M6KsUuSgwzNOaSc6NDVt0RkIEus-IfsL2-278Hp3GTVoRdON-shUQDUz2-Ql&share_author_id=7464487006925374471&sharer_language=en&source=h5_m&u_code=f1fk0mc0hf0ih6&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=DA6B936A-4B84-4277-BD19-98F2B61C195F&user_id=7597582493885219862&sec_user_id=MS4wLjABAAAAGQIoYbnxiiFwnFU18fAUul2wCLDqnsrCJXIsLMCKr09m6phV7lvfAL_kM0sGi-Ou&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1233' }
        ],
        available: true,
    },
    {
        id: 3,
        name: 'مو سيلفا',
        nameEn: 'Mo Selva',
        image: moImg,
        followers: '+3M',
        desc: 'صانع محتوى يتمتع بقاعدة جماهيرية نشطة وتأثير رقمي متنامٍ، يقدم محتوى عالي الجودة يحقق معدلات تفاعل مرتفعة. يمثل فرصة استراتيجية للشراكات الإعلانية وبناء حملات تسويقية فعّالة تستهدف فئات متنوعة من الجمهور.',
        platforms: {
            facebook: 'https://web.facebook.com/moselvaofficial',
            instagram: 'https://www.instagram.com/moselva_1?igsh=eDdlNWdvd214MXM0',
            tiktok: 'https://www.tiktok.com/@mo_selva?_r=1&_t=ZN-94G5YXL0une'
        },
        links: [
            { label: 'Facebook', url: 'https://web.facebook.com/moselvaofficial' },
            { label: 'Instagram', url: 'https://www.instagram.com/moselva_1?igsh=eDdlNWdvd214MXM0' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@mo_selva?_r=1&_t=ZN-94G5YXL0une' }
        ],
        available: true,
    },
    {
        id: 4,
        name: 'عبد الرحمن أيمن',
        nameEn: 'Abdelrahman Ayman',
        image: abdelrahmanImg,
        followers: '+3M',
        desc: 'صانع محتوى متخصص في لقاءات المشاهير والمهرجانات السينمائيه مبدع رقمي صاعد يتميز بالالتزام والاحترافية، يعمل على تطوير محتوى مبتكر يدعم نمو المشاريع الرقمية. يمثل عنصرًا داعمًا لبناء شراكات طويلة الأمد وتحقيق عوائد تسويقية مستدامة.',
        platforms: {
            facebook: 'https://www.facebook.com/share/1M1SLNMueB/',
            instagram: 'https://www.instagram.com/abdulrahmanayman98?fbclid=IwY2xjawQN2CJleHRuA2FlbQIxMABicmlkETFqNUVnc1RPTEZDZlRNQ09xc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoveR5eyjF0ajp_4gj4bDspKKzG5bPwP5hTiQ_MA8k6L1LVHpLTKof9bUQB0_aem_4kYeNYRZ8Cfa3CxsSBSFiA',
            tiktok: 'https://www.tiktok.com/@abdulrahman.ayman2248?_r=1&_t=ZN-94G5fIluXOI'
        },
        links: [
            { label: 'Facebook', url: 'https://www.facebook.com/share/1M1SLNMueB/' },
            { label: 'Instagram', url: 'https://www.instagram.com/abdulrahmanayman98?fbclid=IwY2xjawQN2CJleHRuA2FlbQIxMABicmlkETFqNUVnc1RPTEZDZlRNQ09xc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoveR5eyjF0ajp_4gj4bDspKKzG5bPwP5hTiQ_MA8k6L1LVHpLTKof9bUQB0_aem_4kYeNYRZ8Cfa3CxsSBSFiA' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@abdulrahman.ayman2248?_r=1&_t=ZN-94G5fIluXOI' }
        ],
        available: true,
    },
    {
        id: 5,
        name: 'احمد سباق',
        nameEn: 'Ahmed Sebak',
        image: ahmedImg,
        followers: '+1M',
        desc: 'صانع محتوى مبدع ومؤثر يتميز بأسلوبه الفريد في تقديم المحتوى الرقمي، يمتلك قاعدة جماهيرية واسعة وتأثير قوي على منصات التواصل الاجتماعي. يقدم محتوى احترافي يجذب الجمهور ويحقق معدلات تفاعل عالية، مما يجعله شريكًا مثاليًا للعلامات التجارية والحملات الإعلانية.',
        platforms: {
            facebook: 'https://www.facebook.com/share/17hY3VQWHN/?mibextid=wwXIfr',

        },
        links: [
            { label: 'Facebook', url: 'https://www.facebook.com/share/17hY3VQWHN/?mibextid=wwXIfr' },

        ],
        available: true,
    },
    {
        id: 6,
        name: 'المذيعة خلود سعودي',
        nameEn: 'Khloud Soudy',
        image: khloudImg,
        followers: '+1M',
        desc: 'خلود سعودي هي صانعة محتوى رقمية صاعدة ومتخصصة في تقديم محتوى تفاعلي حديث على جميع المنصات ، تتميز بأسلوب جذاب يعكس الاحترافية والالتزام في تنفيذ الحملات الإعلانية وصناعة المحتوى المؤثر. تعمل على تطوير أفكار مبتكرة تتماشى مع متطلبات السوق الرقمي، مما يساهم في تعزيز انتشار العلامات التجارية وزيادة معدلات التفاعل. تمثل عنصرًا فعالًا في دعم نمو المشاريع الرقمية وبناء شراكات إعلانية طويلة الأمد، مع التركيز على تحقيق نتائج تسويقية قوية ومستدامة من خلال محتوى إبداعي موجه للجمهور المستهدف.',
        platforms: {
            facebook: 'https://www.facebook.com/share/17xxBRNzak/',
            tiktok: 'https://www.tiktok.com/@khloudsoudy7?_r=1&_t=ZN-94ImQUqhja2'
        },
        links: [
            { label: 'Facebook', url: 'https://www.facebook.com/share/17xxBRNzak/' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@khloudsoudy7?_r=1&_t=ZN-94ImQUqhja2' }
        ],
        available: true,
    },
    {
        id: 7,
        name: 'مفاجأة الافتتاح',
        nameEn: 'The 6th Creator',
        image: '',
        followers: '???',
        desc: 'نجهز لكم "تريند" يمشي على الأرض... الشخصية السادسة ليست مجرد صانع محتوى، بل هي "ورقة الجوكر" التي سنكشف عنها في يوم الافتتاح! نجم غني عن التعريف، يمتلك قاعدة جماهيرية مرعبة وتأثير لا يضاهى. هل أنتم مستعدون للصدمة؟',
        platforms: {},
        links: [],
        available: false,
    },
];

const serviceDetails = [
    {
        icon: '🎬',
        title: 'تصوير ريلز احترافي',
        titleEn: 'Professional Reels',
        desc: 'تصوير سينمائي باستخدام أحدث المعدات لإنتاج محتوى بصري مذهل',
    },
    {
        icon: '🎤',
        title: 'تفاعل ميداني',
        titleEn: 'Field Interaction',
        desc: 'أسئلة وتوزيع هدايا لخلق تفاعل حقيقي مع الجمهور',
    },
    {
        icon: '📢',
        title: 'نشر عبر النجوم',
        titleEn: 'Multi-Platform Posting',
        desc: 'نشر الفيديوهات على صفحات النجوم الخمسة للوصول لأكبر عدد',
    },
    {
        icon: '🛡️',
        title: 'حماية الملكية الفكرية',
        titleEn: 'IP Protection',
        desc: 'حماية كاملة لحقوق المحتوى والملكية الفكرية',
    },
];

const securityServices = [
    {
        icon: '🔐',
        title: 'حماية بصمة الصوت والصورة',
        titleEn: 'Voice & Image Fingerprint',
    },
    {
        icon: '📋',
        title: 'إدارة حقوق الملكية',
        titleEn: 'Rights Management',
    },
    {
        icon: '🚫',
        title: 'إغلاق الصفحات المنتحلة',
        titleEn: 'Impersonator Shutdown',
    },
    {
        icon: '🔄',
        title: 'استعادة الحسابات المعطلة',
        titleEn: 'Account Recovery',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardPop = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
};

export default function BigFiveOffer() {
    const [activeCreator, setActiveCreator] = useState(creators[0]);

    return (
        <section id="big5offer" className="big5 section">
            <div className="grid-pattern" />
            <div className="bg-glow bg-glow-gold big5__glow-1" />
            <div className="bg-glow bg-glow-amber big5__glow-2" />

            <div className="container">
                {/* ───── Header ───── */}
                <motion.div
                    className="big5__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className="big5__badge"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            background: "linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.2))",
                            borderColor: "rgba(212, 175, 55, 0.4)",
                            boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)",
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <motion.span
                            className="big5__badge-star"
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >★</motion.span>
                        عروض الافتتاح
                        <motion.span
                            className="big5__badge-star"
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                        >★</motion.span>
                    </motion.div>
                    <motion.h2
                        className="big5__title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 0.8, delay: 0.2 },
                            scale: { duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 },
                            backgroundPosition: { duration: 5, ease: "linear", repeat: Infinity }
                        }}
                        style={{
                            backgroundImage: "linear-gradient(90deg, #fff 0%, var(--accent-gold, #d4af37) 50%, #fff 100%)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent"
                        }}
                    >
                        عروض الافتتاح
                        <motion.span
                            className="big5__title-en"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{ WebkitTextFillColor: "var(--text-secondary)", marginTop: "12px" }}
                        >
                            The Opening Offers
                        </motion.span>
                    </motion.h2>
                    <p className="big5__tagline">
                        انطلاقة براندك بقوة تصل إلى أكثر من
                        <span className="big5__highlight"> 20 مليون متابع </span>
                        في ساعة واحدة!
                    </p>
                    <p className="big5__tagline-sub">
                        بمناسبة افتتاح SccMediaGroup، نقدم عرضاً يدمج بين قوة التأثير الرقمي والتواجد الميداني.
                    </p>
                </motion.div>

                {/* ───── Team / Creators ───── */}
                <motion.div
                    className="big5__section-label"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="big5__section-num">01</span>
                    <h3 className="big5__section-heading">فريق العمل — صناع المحتوى</h3>
                </motion.div>

                <motion.div
                    className="big5__layout"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {/* Sidebar */}
                    <div className="big5__sidebar">
                        {creators.map((creator) => (
                            <button
                                key={creator.id}
                                className={`big5__sidebar-btn glass-card ${activeCreator.id === creator.id ? 'active' : ''} ${!creator.available && activeCreator.id !== creator.id ? 'disabled' : ''}`}
                                onClick={() => {
                                    // Always allow setting the active creator so they can see the exciting mystery text
                                    setActiveCreator(creator);

                                    // Scroll to main profile on smaller screens
                                    if (window.innerWidth <= 900) {
                                        setTimeout(() => {
                                            const nameSection = document.querySelector('.big5__profile-name');
                                            // Fallback to name or main if it's the mystery one (which might render differently)
                                            const target = nameSection || document.querySelector('.big5__main');
                                            if (target) {
                                                const headerOffset = 100;
                                                const elementPosition = target.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }, 100);
                                    }
                                }}
                            >
                                <div className="big5__sidebar-avatar">
                                    {creator.available ? (
                                        <img
                                            src={creator.image}
                                            alt={creator.name}
                                            loading="lazy"
                                            style={creator.id === 3 ? { objectPosition: 'center 0%' } : {}}
                                        />
                                    ) : (
                                        <span>?</span>
                                    )}
                                </div>
                                <div className="big5__sidebar-info">
                                    <h4 className="big5__sidebar-name">{creator.name}</h4>
                                    <p className="big5__sidebar-role">{creator.available ? creator.followers + ' متابع' : 'قريباً'}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="big5__main glass-card">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCreator.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className={`big5__profile ${!activeCreator.available ? 'big5__profile--mystery' : ''}`}
                            >
                                <div className="big5__profile-header">
                                    <div className="big5__profile-avatar-wrap">
                                        {activeCreator.image ? (
                                            <img
                                                src={activeCreator.image}
                                                alt={activeCreator.name}
                                                className="big5__profile-img"
                                                style={activeCreator.id === 3 ? { objectPosition: 'center 0%' } : {}}
                                            />
                                        ) : (
                                            <div className="big5__profile-img-placeholder" style={{ color: 'var(--accent-gold)' }}>🎭</div>
                                        )}
                                        <div className="big5__profile-badge">#{activeCreator.id}</div>
                                    </div>
                                    <div className="big5__profile-title">
                                        <h3 className="big5__profile-name" style={{ color: !activeCreator.available ? 'var(--accent-gold)' : '' }}>{activeCreator.name}</h3>
                                        <p className="big5__profile-en">{activeCreator.nameEn}</p>
                                        <div className="big5__profile-stats">
                                            <span className="big5__stat-pill">
                                                <strong>{activeCreator.followers}</strong> {activeCreator.available ? 'متابع' : 'متابع (قريباً)'}
                                            </span>
                                            {activeCreator.available ? (
                                                <span className="big5__stat-pill highlight">شريك حصري</span>
                                            ) : (
                                                <span className="big5__stat-pill highlight" style={{ background: 'linear-gradient(45deg, #FFD700, #F39C12)' }}>الورقة الرابحة 🃏</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="big5__profile-body">
                                    <h4 className="big5__body-title" style={{ borderColor: !activeCreator.available ? 'var(--accent-gold)' : '' }}>نبذة عن النجم</h4>
                                    <p className="big5__profile-desc" style={{ color: !activeCreator.available ? '#eaeaea' : '', fontSize: !activeCreator.available ? '1.15rem' : '' }}>
                                        {activeCreator.desc}
                                    </p>

                                    {activeCreator.available && (
                                        <>
                                            <h4 className="big5__body-title">منصات التواصل</h4>
                                            <div className="big5__social-links">
                                                {activeCreator.platforms.facebook && (
                                                    <a href={activeCreator.platforms.facebook} target="_blank" rel="noopener noreferrer" className="big5__social-btn fb">
                                                        <span className="big5__social-icon">f</span> Facebook
                                                    </a>
                                                )}
                                                {activeCreator.platforms.instagram && (
                                                    <a href={activeCreator.platforms.instagram} target="_blank" rel="noopener noreferrer" className="big5__social-btn ig">
                                                        <span className="big5__social-icon">ig</span> Instagram
                                                    </a>
                                                )}
                                                {activeCreator.platforms.tiktok && (
                                                    <a href={activeCreator.platforms.tiktok} target="_blank" rel="noopener noreferrer" className="big5__social-btn tk">
                                                        <span className="big5__social-icon">tk</span> TikTok
                                                    </a>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* ───── Pricing ───── */}
                <motion.div
                    className="big5__section-label"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="big5__section-num">02</span>
                    <h3 className="big5__section-heading">العرض المالي</h3>
                </motion.div>

                <motion.div
                    className="big5__pricing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    <div className="big5__pricing-card glass-card">
                        <div className="big5__pricing-discount-badge">
                            <span>خصم</span>
                            <strong>80%</strong>
                        </div>

                        <div className="big5__pricing-row">
                            <div className="big5__pricing-col">
                                <span className="big5__pricing-label">القيمة السوقية</span>
                                <span className="big5__pricing-old">250,000</span>
                                <span className="big5__pricing-currency">جنيه مصري</span>
                            </div>

                            <div className="big5__pricing-arrow">→</div>

                            <div className="big5__pricing-col big5__pricing-col--highlight">
                                <span className="big5__pricing-label">سعر الافتتاح</span>
                                <span className="big5__pricing-new">50,000</span>
                                <span className="big5__pricing-currency">جنيه مصري</span>
                            </div>
                        </div>

                        <div className="big5__pricing-saving">
                            وفّر <strong>200,000</strong> جنيه — عرض لفترة محدودة!
                        </div>
                    </div>
                </motion.div>

                {/* ───── Service Details ───── */}
                <motion.div
                    className="big5__section-label"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="big5__section-num">03</span>
                    <h3 className="big5__section-heading">تفاصيل الخدمة</h3>
                </motion.div>

                <motion.div
                    className="big5__services-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {serviceDetails.map((svc) => (
                        <motion.div key={svc.titleEn} className="big5__service-card glass-card" variants={cardPop}>
                            <span className="big5__service-icon">{svc.icon}</span>
                            <h4 className="big5__service-title">{svc.title}</h4>
                            <p className="big5__service-title-en">{svc.titleEn}</p>
                            <p className="big5__service-desc">{svc.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ───── Digital Security ───── */}
                <motion.div
                    className="big5__section-label"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="big5__section-num">04</span>
                    <h3 className="big5__section-heading">خدمات الأمان الرقمي</h3>
                </motion.div>

                <motion.div
                    className="big5__security-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {securityServices.map((sec) => (
                        <motion.div key={sec.titleEn} className="big5__security-card glass-card" variants={cardPop}>
                            <span className="big5__security-icon">{sec.icon}</span>
                            <h4 className="big5__security-title">{sec.title}</h4>
                            <p className="big5__security-title-en">{sec.titleEn}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ───── Contact CTA ───── */}
                <motion.div
                    className="big5__section-label"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="big5__section-num">05</span>
                    <h3 className="big5__section-heading">تواصل معنا الآن</h3>
                </motion.div>

                <motion.div
                    className="big5__contact"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="big5__contact-card glass-card">
                        <div className="big5__contact-manager">
                            <div className="big5__contact-avatar">
                                <span>M</span>
                            </div>
                            <div>
                                <span className="big5__contact-label">المدير المسؤول</span>
                                <span className="big5__contact-name">Mohamed Ashraf</span>
                            </div>
                        </div>

                        <div className="big5__contact-items">
                            <a href="https://wa.me/201555000436" target="_blank" rel="noopener noreferrer" className="big5__contact-item">
                                <span className="big5__contact-icon">💬</span>
                                <div>
                                    <span className="big5__contact-item-label">واتساب / موبايل</span>
                                    <span className="big5__contact-item-value">01555000436</span>
                                </div>
                            </a>
                            <a href="mailto:info@sccmediagroup.com" className="big5__contact-item">
                                <span className="big5__contact-icon">✉️</span>
                                <div>
                                    <span className="big5__contact-item-label">البريد الإلكتروني</span>
                                    <span className="big5__contact-item-value">info@sccmediagroup.com</span>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/30%C2%B048'30.7%22N+30%C2%B059'43.8%22E/@30.808527,30.992918,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.808527!4d30.9954929?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="big5__contact-item">
                                <span className="big5__contact-icon">📍</span>
                                <div>
                                    <span className="big5__contact-item-label">المقر</span>
                                    <span className="big5__contact-item-value">طنطا — مصر</span>
                                </div>
                            </a>
                        </div>

                        <a
                            href="https://wa.me/201555000436"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary big5__contact-cta"
                        >
                            احجز العرض الآن عبر واتساب 💬
                        </a>
                    </div>
                </motion.div>

                {/* ───── Footer Note ───── */}
                <motion.p
                    className="big5__copyright"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    © جميع الحقوق محفوظة لـ SccMediaGroup
                </motion.p>
            </div>
        </section>
    );
}
