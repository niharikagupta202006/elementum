import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>Company</h3>
          <p>Home</p>
          <p>Studio</p>
          <p>Service</p>
          <p>Blog</p>
        </div>

        <div>
          <h3>Terms</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h3>Follow</h3>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>149 W Fulton St.</p>
          <p>+123456789</p>
          <p>info@email.com</p>
        </div>

      </div>

      <p className="copyright">
        ©2026 Elementum. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;