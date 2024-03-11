function Homepage() {
    return(
        <div className="homepage-main">
            <div className="homepage" id="home">
                <div>
                    <h1 className="yellow-header">Little Lemon</h1>
                    <h3 className="white-subheader">San Diego</h3>
                    <p className="white-parag">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a table</button>
                </div>
            <div className="homepage-img-container"><img className="homepage-img" src="/images/restauranfood.jpg" alt="homepage"/></div>
        </div>
            </div>
    )
}

export default Homepage;