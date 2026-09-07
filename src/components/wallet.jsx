import "./wallet.css";
const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=5",
  "https://i.pravatar.cc/100?img=11",
];

function Wallet() {
  return (
    <main className="wallet-app">

        <h1>WALLET TEST</h1>
      <div className="wallet-container">
        <div className="Wallet">

        <section className="balance-card">
          <div className="profile">
            <img
              src="https://i.pravatar.cc/100?img=49"
              alt="Ana"
            />
            <span>Ana</span>
          </div>

          <p className="balance-label">YOUR BALANCE</p>

          <h1>$1,286,492.06</h1>

          <div className="avatars">
            {avatars.map((avatar, index) => (
              <img key={index} src={avatar} alt="" />
            ))}
          </div>
        </section>

        <section className="transaction">
          <div className="transaction-header">
            <span>Last transaction</span>
            <button>View all</button>
          </div>

          <div className="transaction-info">
            <img
              src="https://i.pravatar.cc/100?img=68"
              alt=""
            />

            <div>
              <strong>David</strong>
              <p>Jan 17 • 20:12</p>
            </div>

            <strong className="amount">$5732.91</strong>
          </div>
        </section>

        <section className="actions">
          <button className="icon-btn">⚙</button>
          <button className="icon-btn">↕</button>

          <button className="action-btn">
            Receive <span>↓</span>
          </button>

          <button className="action-btn send">
            Send <span>↑</span>
          </button>
        </section>
        
        </div>
      </div>
    </main>
  );
}

export default Wallet;