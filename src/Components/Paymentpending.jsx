/**
 * Holding page shown in place of a client's site until the final payment clears.
 * Fill the defaults below (or pass props) and deploy this instead of the real site.
 */
export default function PaymentPending({
  projectName = "Client Website",
  clientName = "Client Name",
  amount = "₹20,000",
  invoiceNo = "INV-001",
}) {
  return (
    <>
      <style>{css}</style>
      <main className="pp-root">
        <section className="pp-card" aria-labelledby="pp-title">
          <p className="pp-from">For {clientName}</p>

          <h1 id="pp-title" className="pp-title">
            {projectName} is built and ready. It goes live once the balance is cleared.
          </h1>

          <p className="pp-lead">
            Everything has been delivered and tested. The remaining payment is the
            only thing between this page and your live website. We publish within
            hours of receiving it.
          </p>

          <div className="pp-due">
            <div>
              <span className="pp-due-label">Balance due</span>
              <span className="pp-due-amount">{amount}</span>
            </div>
          </div>


        </section>
      </main>
    </>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap');

.pp-root {
  --paper: #eef1f6;
  --ink: #14213d;
  --muted: #5b6785;
  --line: #d3d9e6;
  --signal: #e8890c;
  --signal-soft: #fdf1de;
  --done: #1f7a5a;
  --card: #ffffff;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Figtree', system-ui, -apple-system, 'Segoe UI', sans-serif;
  box-sizing: border-box;
}
.pp-root *, .pp-root *::before, .pp-root *::after { box-sizing: inherit; }

.pp-card {
  width: 100%;
  max-width: 640px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: clamp(24px, 5vw, 48px);
}

.pp-from { margin: 0 0 20px; font-size: 14px; color: var(--muted); font-weight: 500; }

.pp-title {
  margin: 0 0 16px;
  font-family: 'Bricolage Grotesque', 'Figtree', system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 5vw, 36px);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.pp-lead { margin: 0 0 32px; font-size: 16px; line-height: 1.6; color: var(--muted); max-width: 56ch; }

/* amount */
.pp-due {
  display: flex; justify-content: space-between; align-items: flex-end; gap: 16px;
  padding: 20px 0; border-top: 1px solid var(--line);
}
.pp-due-label { display: block; font-size: 14px; color: var(--muted); margin-bottom: 4px; }
.pp-due-amount {
  font-family: 'Bricolage Grotesque', 'Figtree', system-ui, sans-serif;
  font-size: clamp(32px, 7vw, 44px); font-weight: 700; letter-spacing: -0.02em; line-height: 1;
}
.pp-invoice { font-size: 14px; color: var(--muted); }


`;