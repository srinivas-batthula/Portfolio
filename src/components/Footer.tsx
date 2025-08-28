import styles from '@/styles/Home.module.css';


const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerChild1}>
                Designed and Developed by{' '}
                <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold', fontStyle: 'italic' }}>
                    Srinivas Batthula
                </span>
            </div>

            {/* Visitor Counter Block */}
            <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
                <p style={{ color: 'violet', fontWeight: 'bold' }}>Visitors : </p>
                <img
                    src="https://hitwebcounter.com/counter/counter.php?page=21189306&style=0001&nbdigits=6&type=page&initCount=152"
                    title="Counter Widget"
                    alt="Visit counter For Websites"
                />
            </a>

            <div className={styles.footerChild2}>
                Copyright © {new Date().getFullYear()} BSP
            </div>

            <div className={styles.footerChild3}>
                <a
                    href="https://www.linkedin.com/in/srinivas-batthula/"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.5rem', color: 'skyblue', marginRight: '1rem' }}
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/srinivas-batthula/"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.5rem', color: 'white', marginRight: '1rem' }}
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
