function Header(){
    return (
        <div className="head">
            <img className="image" src="https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY=w240-h480-rw"/>
            <div className="options">
                <button className="button">Men</button>
                <button className="button">Women</button>
                <button className="button">Kid</button>
                <button className="button">Home</button>
                <button className="button">Beauty</button>
                <button className="button">Genz</button>
                <button className="button">Studio</button>
            </div>
            <input className="searchbar" placeholder="Search for Products,brand and more"></input>
            <div className="profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    )
}

export default Header;