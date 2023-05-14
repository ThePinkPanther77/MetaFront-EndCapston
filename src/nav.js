import logo from './assets/Logo.svg'
function Nav(){
    return (
        <div>
            <nav>
                <ul>
                    <li><img src ={logo} width={245} height={100} alt='logo'/></li>
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