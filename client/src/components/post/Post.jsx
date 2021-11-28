import './post.css';

function Post() {
    return (
        <div className="post">
            <img src="./assets/blog2.jpg" alt="" className="post-img" />
            <div className="post-info">
                <div className="post-categories">
                    <span className="post-category">Music</span>
                    <span className="post-category">Life</span>
                </div>
                <span className="post-title">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti quae ut eveniet non aperiam debitis est eaque dolores iure, modi, explicabo enim sit cum maiores delectus officia? Reprehenderit, nisi soluta. Ipsum ut adipisci aut voluptatum natus deserunt illum porro vitae, alias totam. Obcaecati itaque enim ipsam cupiditate accusantium asperiores nemo debitis eligendi ducimus harum cum saepe magni, ratione iusto. Sit quidem quasi officia animi minima voluptas enim, veritatis dolore accusantium qui nobis voluptatem adipisci ducimus obcaecati ab eveniet quibusdam.</p>
        </div>
    )
}

export default Post
