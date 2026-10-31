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
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>ИЙ</span>
          <span className="dlig">ИЙ</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>ий</span>
          <span className="dlig">ий</span>
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
          <p className="character-label">Proportional Lining (default)</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"onum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Proportional Oldstyle: 'onum'</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"zero" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">0</h1>
          <p className="character-label">Slashed Zero: 'zero'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0' }}>fjMm</span>
          <span className="ss01">fjMm</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }}>MmNn</span>
          <span className="ss02">MmNn</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss03" 0' }}>A</span>
          <span className="ss03">A</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss04" 0' }}>r</span>
          <span className="ss04">r</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss05" 0' }}>MW</span>
          <span className="ss05">MW</span>
          <p className="code">'ss05'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss07" 0' }}>QR</span>
          <span className="ss07">QR</span>
          <p className="code">'ss07'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss08" 0' }}>KM</span>
          <span className="ss08">KM</span>
          <p className="code">'ss08'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"salt" 0' }}>MNSZ</span>
          <span style={{ fontFeatureSettings: '"salt" 1' }}>MNSZ</span>
          <p className="code">'salt'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>fjmn</span>
          <span className="titl">fjmn</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>szŹź</span>
          <span className="titl">szŹź</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ŻżŽž</span>
          <span className="titl">ŻżŽž</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ИЙМШ</span>
          <span className="titl">ИЙМШ</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>шщ</span>
          <span className="titl">шщ</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
