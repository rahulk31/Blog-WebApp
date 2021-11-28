import './settings.css';

function Settings() {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-titles">
          <h2 className="settings-update-title">Update Your Account</h2>
          <h2 className="settings-delete-title">Delete Account</h2>
        </div>
        <form className="settings-form">
          <div className="input-container">
            <label>Profile Picture</label>
            <div className="settings-pp">
              <img src="./assets/profile2.jpg" alt="" />
              <label htmlFor="file">
                <i className="icon-pp far fa-user-circle"></i>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div className="input-container">
            <label>Username : </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="rahul"
            />
          </div>
          <div className="input-container">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="rahul@gmail.com"
            />
          </div>
          <div className="input-container">
            <label>Password : </label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="settings-submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
