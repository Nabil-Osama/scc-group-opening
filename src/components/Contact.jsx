import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="bg-glow bg-glow-gold contact__glow" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">تواصل معنا</h2>
                    <p className="section-subtitle">
                        جاهز تبدأ مشروعك القادم؟ تواصل معنا وخلّنا نصنع شيء استثنائي معاً.
                    </p>
                </motion.div>

                <div className="contact__grid">
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                    >
                        {[
                            { icon: '📍', label: 'العنوان', value: 'طنطا — مصر', href: "https://www.google.com/maps/place/30%C2%B048'30.7%22N+30%C2%B059'43.8%22E/@30.808527,30.992918,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.808527!4d30.9954929?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D" },
                            { icon: '📞', label: 'موبايل', value: '01555000436', href: "tel:01555000436" },
                            { icon: '✉️', label: 'البريد الإلكتروني', value: 'info@sccmediagroup.com', href: "mailto:info@sccmediagroup.com" },
                            { icon: '👤', label: 'المدير المسؤول', value: 'Mohamed Ashraf' },
                        ].map((item) => (
                            <div key={item.label} className="contact__info-item glass-card">
                                <span className="contact__info-icon">{item.icon}</span>
                                <div>
                                    <span className="contact__info-label">{item.label}</span>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__info-value contact__link">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="contact__info-value">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.form
                        className="contact__form glass-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label htmlFor="name" className="contact__label">الاسم</label>
                                <input id="name" type="text" className="contact__input" placeholder="اسمك" />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor="email" className="contact__label">البريد الإلكتروني</label>
                                <input id="email" type="email" className="contact__input" placeholder="email@example.com" />
                            </div>
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="subject" className="contact__label">الموضوع</label>
                            <input id="subject" type="text" className="contact__input" placeholder="استفسار عن عروض الافتتاح" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__label">الرسالة</label>
                            <textarea id="message" className="contact__textarea" rows={5} placeholder="أخبرنا عن مشروعك..." />
                        </div>
                        <button type="submit" className="btn-primary contact__submit">
                            إرسال الرسالة →
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
