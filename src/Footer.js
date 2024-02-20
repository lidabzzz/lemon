function Footer() {
    return (
        <footer>
            <div className="footer">
            <img src="/images/logo.svg" alt="company logo"/>
            <div className="links-list">
                <ul>
                    <li className="footer-header">Doormat Navigation:</li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderonline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="footer-header">Contact:</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="footer-header">Social Media links:</li>
                    <li><a href="facebook.com">Facebook</a></li>
                    <li><a href="instagram.com">Instagram</a></li>
                    <li><a href="yelp.com">Yelp</a></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;