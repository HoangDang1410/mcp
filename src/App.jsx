import './App.css'

function App() {
  const previewCat =
    'https://www.figma.com/api/mcp/asset/8079bcc5-7152-4a1c-ba48-82b9c6099763'
  const previewDog =
    'https://www.figma.com/api/mcp/asset/8a45dee9-7a88-4afd-8ebe-87fcc92b1506'

  return (
    <main className="updatesPage">
      <section className="updatesPanel" aria-label="追加・更新情報">
        <header className="panelHeader">
          <div className="headerTitleWrap">
            <h1 className="panelTitle">追加・更新情報</h1>
            <p className="panelSub">随時こちらに詳細を載せていきます</p>
          </div>
          <button type="button" className="menuBtn" aria-label="menu">
            <span />
            <span />
            <span />
          </button>
        </header>

        <div className="updatesScroll">
          <section className="updateBlock">
            <p className="date">2025/7/11（金）</p>
            <h2 className="bulletTitle">
              <span className="dot" />
              えがお博覧会｜判定動線追加
            </h2>
            <p>
              開くと過去の判定履歴一覧が表示され、中央の「えがお判定」をタップでフォームが立ち上がります。軽めの内容なので一旦webのまま持ってきてます。
            </p>
            <p>
              判定結果も同じウインドウ内で展開する想定ですが、情報量が多い場合は別画面表示にも対応できます。
            </p>
          </section>

          <section className="updateBlock">
            <h2 className="bulletTitle">
              <span className="dot" />
              HOMEのペット背景について
            </h2>
            <p>
              いつでも開けばペットのベストショットが見られるデザインを目指しました。写真アップロード時に自動フィルターを適用する予定です。
            </p>

            <div className="previewCard">
              <article className="phonePreview">
                <img src={previewCat} alt="cat preview" />
                <div className="previewTime">11:00</div>
              </article>
              <article className="phonePreview">
                <img src={previewDog} alt="dog preview" />
                <div className="previewTime">11:00</div>
              </article>
            </div>

            <p>
              室内などで撮った薄暗い写真、上部に余白が少ない写真は見え方に影響が出るため、チュートリアルで案内を入れています。
            </p>
            <button type="button" className="ctaBtn">
              背景画像登録の前に
            </button>
          </section>

          <section className="updateBlock">
            <h2 className="bulletTitle">
              <span className="dot" />
              animoの症状記録機能を更新
            </h2>
            <p>
              症状記録機能を更新しました。HOME（自宅）アイコンから起動し、直感的に使える導線を意識してUIを再構成しています。
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
