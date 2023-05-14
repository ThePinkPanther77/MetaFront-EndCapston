import logo from './assets/logo2.png'
function Footer(){
    return (
        <div>
            <img src={logo} alt='logo' width={180} height={350}/>
            <article>
                <h3>Doormat navigation</h3>
            </article>
            <article>
                <h3>Contacts</h3>
            </article>
            <article>
                <h3>Social media links</h3>
            </article>
        </div>
    );
}

export default Footer