import './App.css'

function App() {
  const heroImage =
    'https://www.figma.com/api/mcp/asset/712de0cb-f9d2-43c6-b78a-89ac3d3bdc05'
  const cards = Array.from({ length: 6 })

  return (
    <main className="renaiPage">
      <header className="siteHeader">
        <div className="headerTop">
          <div className="logoBlock">
            <h1>Renai</h1>
            <span>VIETNAM</span>
          </div>
          <p className="hotline">Hotline: 0123 456 789</p>
        </div>
        <nav className="mainNav" aria-label="Main menu">
          <a href="#home">TRANG CHỦ</a>
          <a href="#about">GIỚI THIỆU</a>
          <a href="#products">SẢN PHẨM</a>
          <a href="#projects">DỰ ÁN</a>
          <a href="#solutions">GIẢI PHÁP</a>
          <a href="#contact">LIÊN HỆ</a>
          <input placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
        </nav>
      </header>

      <section className="hero">
        <img src={heroImage} alt="Renai project hero" />
      </section>

      <section className="breadcrumb">Trang chủ / Giải pháp</section>

      <section className="solutionBlock" id="solutions">
        <h2>Giải pháp điều hòa không khí</h2>
        <div className="solutionGrid">
          {cards.map((_, index) => (
            <article className="solutionCard" key={`air-${index}`}>
              <div className={`solutionThumb thumb${(index % 3) + 1}`} />
              <h3>Giải pháp điều hòa không khí cho khách sạn, nhà nghỉ</h3>
              <p>Nên lắp loại điều hòa nào cho khách sạn để thể hiện được đẳng cấp.</p>
              <button type="button">Xem chi tiết</button>
            </article>
          ))}
        </div>
        <div className="moreWrap">
          <button type="button" className="moreBtn">
            Xem thêm
          </button>
        </div>
      </section>

      <section className="solutionBlock">
        <h2>Giải pháp môi trường</h2>
        <div className="solutionGrid">
          {cards.map((_, index) => (
            <article className="solutionCard" key={`env-${index}`}>
              <div className={`solutionThumb thumb${(index % 3) + 1}`} />
              <h3>5 giải pháp bảo đảm nguồn nước sạch và vệ sinh môi trường</h3>
              <p>Nên lắp loại điều hòa nào cho khách sạn để thể hiện được đẳng cấp.</p>
              <button type="button">Xem chi tiết</button>
            </article>
          ))}
        </div>
        <div className="moreWrap">
          <button type="button" className="moreBtn">
            Xem thêm
          </button>
        </div>
      </section>

      <footer className="siteFooter">
        <section>
          <h5>THÔNG TIN LIÊN HỆ</h5>
          <h6>CÔNG TY CỔ PHẦN RENAI VIỆT NAM</h6>
          <ul>
            <li>Trụ sở chính: Văn phòng 5 Nhà số TBT1-1T2 KĐT Trung Hòa</li>
            <li>Văn phòng giao dịch: Tầng 4, Tòa nhà 34T</li>
            <li>Kho hàng: Km 10+200 Đại lộ Thăng Long</li>
            <li>1900 12 70 - 090 123 456</li>
            <li>info@renai.vn</li>
          </ul>
        </section>
        <section>
          <h5>CHÍNH SÁCH BÁN HÀNG</h5>
          <ul>
            <li>Bảng Báo Giá Lắp Đặt Điều Hòa</li>
            <li>Chính Sách Đổi Trả Hàng</li>
            <li>Chính Sách Bảo Trì, Bảo Hành</li>
            <li>Chính Sách Vận Chuyển</li>
            <li>Chính Sách Bảo Mật Thông Tin</li>
            <li>Hướng Dẫn Trả Góp</li>
          </ul>
        </section>
        <section>
          <h5>LIÊN KẾT MẠNG XÃ HỘI</h5>
          <div className="socials">
            <span>▶</span>
            <span>f</span>
            <span>Zalo</span>
          </div>
        </section>
      </footer>
    </main>
  )
}

export default App
