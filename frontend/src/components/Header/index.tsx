import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>Test Notification with Twilio API</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/">Me :D</a>
                    </p>
                </div>
            </header>
    )
}

export default Header;
