const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Standard Ligatures</p>
        <p className="code">font-feature-settings: 'liga';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"liga" 0' }}>fi</span>
          <span className="liga italic">fi</span>
          <p className="code">'liga' · Italic</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Discretionary Ligatures</p>
        <p className="code">font-feature-settings: 'dlig';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fi</span>
          <span className="dlig">fi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fl</span>
          <span className="dlig">fl</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table examples-figures">
      <div className="meta">
        <p className="name">Figures</p>
      </div>
      <div className="examples">
        <div>
          <h1 style={{ fontFeatureSettings: "normal", fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Tabular Lining (default)</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"onum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Tabular Oldstyle: 'onum'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"frac" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>1/2 3/4</h1>
          <p className="character-label">Fractions: 'frac'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"numr" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>
            <span className="fade" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>H</span>
            {"123"}
          </h1>
          <p className="character-label">Numerators: 'numr'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"dnom" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>
            <span className="fade" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>H</span>
            {"123"}
          </h1>
          <p className="character-label">Denominators: 'dnom'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"subs" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>
            <span className="fade" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>H</span>
            {"123"}
          </h1>
          <p className="character-label">Subscripts: 'subs'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"sinf" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>
            <span className="fade" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>H</span>
            {"123"}
          </h1>
          <p className="character-label">Scientific Inferiors: 'sinf'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"sups" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>
            <span className="fade" style={{ fontSize: "inherit", fontFeatureSettings: "normal" }}>H</span>
            {"123"}
          </h1>
          <p className="character-label">Superscripts: 'sups'</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Ordinals</p>
        <p className="code">font-feature-settings: 'ordn';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ordn" 0' }}>3a</span>
          <span className="ordinals">3a</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ordn" 0' }}>4o</span>
          <span className="ordinals">4o</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Stylistic Sets</p>
        <p className="code">font-feature-settings: 'ss--';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0' }}>BDJ</span>
          <span className="ss01">BDJ</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }}>agil</span>
          <span className="ss02">agil</span>
          <p className="code">'ss02'</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Case Sensitive Forms</p>
        <p className="code">font-feature-settings: 'case';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>#$*@</span>
          <span className="case">#$*@</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>£¥§©</span>
          <span className="case">£¥§©</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
