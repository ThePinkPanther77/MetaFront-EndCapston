import logo from './assets/Logo.svg'
import './style/nav.css'

function Nav(){
    return (
        <div>
            <nav>
                <div><img className="logo-image" src ={logo} alt='logo'/></div>
                <ul>
                    <li><a href='./home'>Home</a></li>
                    <li><a href='./about'>About</a></li>
                    <li><a href='./menu'>Menu</a></li>
                    <li><a href='./reservation'>Reservations</a></li>
                    <li><a href='./order'>Order online</a></li>
                    <li><a href='./login'>Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav