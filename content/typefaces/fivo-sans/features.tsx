const features = (
  <>
    <div className="type-detail-table examples-figures">
      <div className="meta">
        <p className="name">Figures</p>
      </div>
      <div className="examples">
        <div>
          <h1 style={{ fontFeatureSettings: "normal", fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Proportional Lining (default)</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Stylistic Alternates</p>
        <p className="code">font-feature-settings: 'salt';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"salt" 0' }}>a</span>
          <span style={{ fontFeatureSettings: '"salt" 1' }}>a</span>
          <p className="code">'salt'</p>
        </div>
      </div>
    </div>
  </>
);

export default features;
