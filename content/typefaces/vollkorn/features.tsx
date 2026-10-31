const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Standard Ligatures</p>
        <p className="code">font-feature-settings: 'liga';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>ff</span>
          <span className="liga">ff</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>ffi</span>
          <span className="liga">ffi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>ffl</span>
          <span className="liga">ffl</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fi</span>
          <span className="liga">fi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fl</span>
          <span className="liga">fl</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>ch</span>
          <span className="dlig">ch</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>ct</span>
          <span className="dlig">ct</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>st</span>
          <span className="dlig">st</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>Th</span>
          <span className="dlig">Th</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Contextual Alternates</p>
        <p className="code">font-feature-settings: 'calt';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>fä</span>
          <span className="calt">fä</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>RT</span>
          <span className="calt">RT</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>ff!</span>
          <span className="calt">ff!</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>AAß</span>
          <span className="calt">AAß</span>
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
          <p className="character-label">Proportional Oldstyle (default)</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"lnum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Proportional Lining: 'lnum'</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Tabular Lining: 'lnum', 'tnum'</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"onum" 1, "tnum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Tabular Oldstyle: 'onum', 'tnum'</p>
        </div>
        <div>
          <h1 dir="auto" style={{ fontFeatureSettings: '"frac" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>1/2 3/4</h1>
          <p className="character-label">Fractions: 'frac'</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"zero" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">0</h1>
          <p className="character-label">Slashed Zero: 'zero'</p>
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
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ordn" 0' }}>No.</span>
          <span className="ordinals">No.</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0' }}>agjM</span>
          <span className="ss01">agjM</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss04" 0' }}>юѝ</span>
          <span className="ss04">юѝ</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss05" 0' }}>б</span>
          <span className="ss05">б</span>
          <p className="code">'ss05'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss11" 0' }}>1</span>
          <span className="ss11">1</span>
          <p className="code">'ss11'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss13" 0' }}>3</span>
          <span style={{ fontFeatureSettings: '"ss13" 1' }}>3</span>
          <p className="code">'ss13'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss14" 0' }}>4</span>
          <span style={{ fontFeatureSettings: '"ss14" 1' }}>4</span>
          <p className="code">'ss14'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss17" 0' }}>7</span>
          <span style={{ fontFeatureSettings: '"ss17" 1' }}>7</span>
          <p className="code">'ss17'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"salt" 0' }}>agQ</span>
          <span style={{ fontFeatureSettings: '"salt" 1' }}>agQ</span>
          <p className="code">'salt'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>0123</span>
          <span className="case">0123</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>89()</span>
          <span className="case">89()</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>+-:&lt;</span>
          <span className="case">+-:&lt;</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Capital Spacing</p>
        <p className="code">font-feature-settings: 'cpsp';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cpsp" 0', fontSize: "32px" }}>HAMBURG</span>
          <span className="cpsp" style={{ fontSize: "32px" }}>HAMBURG</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Titling Alternates</p>
        <p className="code">font-feature-settings: 'titl';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ÅÄÖ</span>
          <span className="titl">ÅÄÖ</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ÜJQĴ</span>
          <span className="titl">ÜJQĴ</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ŁŊҔ</span>
          <span className="titl">ŁŊҔ</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
