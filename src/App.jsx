import './App.css'

function App() {
  const heroImage =
    'https://www.figma.com/api/mcp/asset/af58e347-8998-46d9-8642-1bbeb4c4ef9e'

  return (
    <main className="classPage">
      <header className="topHeader">
        <div className="topInfo">
          <span>Email: youremail@gmail.com</span>
          <span>Hotline: 0901234567</span>
        </div>
        <div className="brandRow">
          <h1 className="brand">SoroTouch</h1>
          <button type="button" className="trialBtn">
            ĐĂNG KÝ TRẢI NGHIỆM
          </button>
        </div>
      </header>

      <nav className="mainNav" aria-label="Điều hướng chính">
        <a href="#intro">Giới thiệu</a>
        <a href="#about">SoroTouch là gì</a>
        <a href="#programs">Chương trình học</a>
        <a href="#class">Lớp học</a>
        <a href="#news">Tin tức</a>
        <a href="#faq">Hỏi đáp</a>
      </nav>

      <section className="heroSection">
        <img src={heroImage} alt="SoroTouch class hero" />
        <div className="heroOverlay">
          <h2>LỚP HỌC</h2>
          <p>Trang chủ • Lớp học</p>
        </div>
      </section>

      <section className="cardSection">
        <article className="classCard">
          <div className="thumb thumbOne" />
          <div className="cardContent">
            <h3>CƠ SỞ VẬT CHẤT</h3>
            <button type="button">Xem thêm</button>
          </div>
        </article>

        <article className="classCard">
          <div className="thumb thumbTwo" />
          <div className="cardContent">
            <h3>CÁC TRUNG TÂM</h3>
            <button type="button">Xem thêm</button>
          </div>
        </article>
      </section>

      <section className="contactStrip">
        <article>
          <h4>HOTLINE</h4>
          <p>0901234567</p>
        </article>
        <article>
          <h4>ĐỊA CHỈ</h4>
          <p>315 Trường Chinh, Thanh Xuân, HN</p>
        </article>
        <article>
          <h4>EMAIL</h4>
          <p>youremail@gmail.com</p>
        </article>
      </section>

      <footer className="siteFooter">
        <article>
          <h5>Về SoroTouch</h5>
          <p>
            SoroTouch là nơi giúp trẻ học, phát triển và rèn luyện kỹ năng theo cách
            hiện đại.
          </p>
          <button type="button" className="trialBtn footerBtn">
            ĐĂNG KÝ TRẢI NGHIỆM
          </button>
        </article>
        <article>
          <h5>Liên hệ với chúng tôi</h5>
          <p>Tầng 8, Tòa Nhà TOYOTA</p>
          <p>315 Trường Chinh, Thanh Xuân, Hà Nội</p>
          <p>0901234567</p>
          <p>youremail@gmail.com</p>
        </article>
        <article>
          <h5>Quick link</h5>
          <ul>
            <li>SoroTouch là gì</li>
            <li>Chương trình học</li>
            <li>Lớp học</li>
            <li>Tin tức</li>
            <li>Hỏi đáp</li>
          </ul>
        </article>
      </footer>
    </main>
  )
}

export default App
