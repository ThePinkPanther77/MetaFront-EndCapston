import logo from './assets/logo2.png'
import './style/footer.css'

function Footer(){
    return (
        <div className='footer'>
            <img src={logo} alt='logo' width={180} height={350}/>
            <article>
                <h3>Doormat navigation</h3>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservation</p>
                <p>Order online</p>
                <p>Login</p>
            </article>
            <article>
                <h3>Contacts</h3>
                <p>Admen</p>
                <p>Phone number</p>
                <p>email</p>
            </article>
            <article>
                <h3>Social media links</h3>
                <p>Admen</p>
                <p>Phone number</p>
                <p>email</p>
            </article>
        </div>
    );
}

export default Footer