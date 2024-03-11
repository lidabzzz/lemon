import Nav from './Nav';
function Header() {
    return (
        <header>
            <img className="logo-img" src="/images/logo.svg" alt="company logo"/>
            <Nav />
        </header>
    )
}

export default Header;