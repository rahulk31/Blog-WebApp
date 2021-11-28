import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img src="./assets/profile2.jpg" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eos voluptate molestiae, autem aspernatur voluptatum reprehenderit aut corporis. Rem, quo.</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Style</li>
                    <li className="sidebar-list-item">Sport</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-social">
                <i className="sidebar-icon fab fa-facebook"></i>
                <i className="sidebar-icon fab fa-twitter"></i>
                <i className="sidebar-icon fab fa-instagram"></i>
                <i className="sidebar-icon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
