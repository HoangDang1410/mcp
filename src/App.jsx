import './App.css'

function App() {
  const heroImage =
    'https://www.figma.com/api/mcp/asset/535ecc14-2f78-4020-9257-a0a88e0346b3'
  const logoImage =
    'https://www.figma.com/api/mcp/asset/f008d7b4-ea89-4a96-94ba-b53cfc2bf787'

  return (
    <main className="wedding404Page">
      <header className="weddingHeader">
        <nav className="weddingNav" aria-label="Main navigation">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
          </ul>
          <img src={logoImage} alt="Tessa Morgan logo" className="weddingLogo" />
          <ul>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <section className="weddingHero">
        <img src={heroImage} alt="Wedding couple" />
      </section>

      <section className="weddingError">
        <p className="errorLabel">ERROR</p>
        <p className="errorCode">404</p>
        <p className="errorText">
          SORRY, THE PAGE YOU ARE LOOKING FOR DOESN&apos;T EXIST.
        </p>
        <button type="button" className="homeButton">
          Home
        </button>
      </section>

      <footer className="weddingFooter">
        <nav aria-label="Footer navigation" className="footerNav">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
          </ul>
          <img src={logoImage} alt="Tessa Morgan logo" className="footerLogo" />
          <ul>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <p className="footerText">
          Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere viverra massa fames sed.
          Dignissim urisus et ac egestas dignissim.
        </p>
        <div className="footerSocials">
          <span>f</span>
          <span>▶</span>
          <span>YT</span>
          <span>IG</span>
        </div>
        <p className="footerCopy">Copyright 2024 All Rights Reserved</p>
      </footer>
    </main>
  )
}

export default App
