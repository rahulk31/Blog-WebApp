import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm">React & node</span>
                <span className="header-title-lg">BLOG</span>
            </div>
            <img src="./assets/header.jpg" alt="" className="header-img" />
        </div>
    )
}

export default Header
