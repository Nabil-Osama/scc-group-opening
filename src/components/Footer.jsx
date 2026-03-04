import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">✦</span>
                            <span className="footer__logo-text">SCC Media Group</span>
                        </div>
                        <p className="footer__brand-desc">
                            شركة إعلامية رائدة في صناعة المحتوى والحماية الرقمية.
                            انطلاقة براندك بقوة مع فريق نجوم يصل إلى أكثر من 20 مليون متابع.
                        </p>
                        <div className="footer__socials">
                            {[
                                { icon: 'f', url: 'https://web.facebook.com/moselvaofficial' },
                                { icon: '💬', url: 'https://wa.me/201555000436' },
                                { icon: '✉', url: 'mailto:info@sccmediagroup.com' },
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={`Social media ${i + 1}`}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">الشركة</h4>
                        {[
                            { label: 'من نحن', href: '#about' },
                            { label: 'خدماتنا', href: '#services' },
                            { label: 'عروض الافتتاح', href: '#big5offer' },
                        ].map((link) => (
                            <a key={link.label} href={link.href} className="footer__link">{link.label}</a>
                        ))}
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">الخدمات</h4>
                        {['تصوير ريلز', 'تفاعل ميداني', 'حماية رقمية', 'إدارة حقوق'].map((link) => (
                            <a key={link} href="#services" className="footer__link">{link}</a>
                        ))}
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">تواصل معنا</h4>
                        <a href="tel:+201555000436" className="footer__link">01555000436</a>
                        <a href="mailto:info@sccmediagroup.com" className="footer__link">info@sccmediagroup.com</a>
                        <a href="https://www.google.com/maps/place/30%C2%B048'30.7%22N+30%C2%B059'43.8%22E/@30.808527,30.992918,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.808527!4d30.9954929?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer__link">طنطا — مصر</a>
                        <span className="footer__link">المدير: Mohamed Ashraf</span>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} SCC Media Group. جميع الحقوق محفوظة.</p>
                    <p>صُنع بـ ❤️ بواسطة فريق SCC</p>
                </div>
            </div>
        </footer>
    );
}
