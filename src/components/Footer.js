import '../styles/footer.css';

function Footer() {
  const NavLogo = '/assets/Logo.svg';

  return (
    <>
      <footer className="content-center footer">
        <section>
          <img src={NavLogo} alt='logo' />
          <p>Little Lemon</p>
          <p>123 Citrus Avenue</p>
          <p>Sunnydale, CA 90210</p>
          <p>USA</p>
        </section>
        <section>
          <ul>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </section>
        <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
      </footer>
    </>
  )
}

export default Footer;