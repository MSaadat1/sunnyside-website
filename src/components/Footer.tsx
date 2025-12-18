export function Footer() {
  return (
    <>
      <div className="footer-container">
        <h2 className="footer-title">SunnySide</h2>
        <div className="section-link-container">
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Projects</a>
        </div>
        <div className="social-media-container">
          <a href="">
            <img className="social-img" src="./images/icon-facebook.svg" alt="photo" />
          </a>
          <a href="">
            <img className="social-img" src="./images/icon-instagram.svg" alt="photo" />
          </a>
          <a href="">
            <img className="social-img" src="./images/icon-twitter.svg" alt="photo" />
          </a>
          <a href="">
            <img className="social-img" src="./images/icon-pinterest.svg" alt="photo" />
          </a>
        </div>
      </div>
    </>
  );
}
