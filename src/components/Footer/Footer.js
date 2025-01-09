import './footer.css';

export function Footer() {
  const NavLogo = '/assets/Logo.svg';

  return (
    <>
      <footer className="footer">
        <div class="container content-center">
          <section>
            <img src={NavLogo} alt='logo' />
            <ul>
              <li>Little Lemon</li>
              <li>123 Citrus Avenue</li>
              <li>Sunnydale, CA 90210</li>
              <li>USA</li>
            </ul>
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
        </div>
      </footer>
    </>
  )
}
