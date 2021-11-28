import './write.css';

function Write() {
  return (
    <div className="write">
      <form className="write-from">
          <img src="./assets/blog1.jpg" alt="" className="write-img" />
        <div className="write-form-group">
          <label htmlFor="file">
            <i className="plus-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
          />
          <input
            type="text"
            name="title"
            id="title"
            autoFocus={true}
            className="write-input"
            placeholder="Title"
          />
        </div>
        <div className="write-form-group">
          <textarea
            name="story"
            id="story"
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
