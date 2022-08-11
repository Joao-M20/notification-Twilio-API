import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Notification" />
                    <h1>Notification with Twilio API</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://github.com/Joao-M20"> Joao-M20</a>
                    </p>
                </div>
            </header>
    )
}

export default Header;
