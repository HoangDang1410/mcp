import './App.css'

function App() {
  const heroImage =
    'https://www.figma.com/api/mcp/asset/7ef1980e-a8ae-468a-9287-a6998d9e80ae'

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

      <section className="breadcrumb">Trang chủ / Dự án</section>

      <section className="projectSection" id="projects">
        <article className="featuredCard">
          <div className="featuredThumb" />
          <h2>Dự án lắp đặt Điều hòa trung tâm VRV tại Trường Cao Đẳng nghề</h2>
          <p>
            Điều hòa trung tâm VRV IV đạt được một chuẩn mực mới cho hiệu quả, vì nó
            có tính năng cải tiến về hiệu suất và khả năng vận hành.
          </p>
          <button type="button">Xem chi tiết</button>
        </article>

        <div className="smallCards">
          {Array.from({ length: 4 }).map((_, index) => (
            <article className="smallCard" key={index}>
              <div className={`smallThumb thumb${index + 1}`} />
              <h3>Dự án lắp đặt Điều hòa trung tâm VRV tại Trường Cao Đẳng nghề</h3>
              <p>Điều hòa trung tâm VRV IV đạt được một chuẩn mực mới cho hiệu quả.</p>
              <button type="button">Xem chi tiết</button>
            </article>
          ))}
        </div>
      </section>

      <section className="newsSection">
        {Array.from({ length: 4 }).map((_, index) => (
          <article className="newsItem" key={index}>
            <div className={`newsThumb news${index + 1}`} />
            <div>
              <h4>5 giải pháp bảo đảm nguồn nước sạch và vệ sinh môi trường</h4>
              <p>Nên lắp loại điều hòa nào cho khách sạn để thể hiện đẳng cấp.</p>
              <button type="button">Xem chi tiết</button>
            </div>
          </article>
        ))}
      </section>

      <div className="moreWrap">
        <button type="button" className="moreBtn">
          Xem thêm
        </button>
      </div>

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
