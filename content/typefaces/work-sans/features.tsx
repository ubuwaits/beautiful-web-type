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
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fi</span>
          <span className="liga">fi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fl</span>
          <span className="liga">fl</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>ffi</span>
          <span className="liga">ffi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>ffl</span>
          <span className="liga">ffl</span>
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
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>ch</span>
          <span className="dlig">ch</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>Qj</span>
          <span className="calt">Qj</span>
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
          <h1 style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Tabular Lining: 'lnum', 'tnum'</p>
        </div>
        <div>
          <h1 style={{ fontFeatureSettings: '"onum" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }} dir="auto">1234567890</h1>
          <p className="character-label">Proportional Oldstyle: 'onum'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0' }}>g</span>
          <span className="ss01">g</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }}>ffl</span>
          <span className="ss02">ffl</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss03" 0' }}>R</span>
          <span className="ss03">R</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss04" 0' }}>G</span>
          <span className="ss04">G</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss05" 0' }}>Ĳ</span>
          <span className="ss05">Ĳ</span>
          <p className="code">'ss05'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss06" 0' }}>a</span>
          <span className="ss06">a</span>
          <p className="code">'ss06'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"salt" 0' }}>ffl</span>
          <span style={{ fontFeatureSettings: '"salt" 1' }}>ffl</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>-–—</span>
          <span className="case">-–—</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>[]&#123;|</span>
          <span className="case">[]&#123;|</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>(A)</span>
          <span className="case">(A)</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Swashes</p>
        <p className="code">font-feature-settings: 'swsh';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"swsh" 0' }}>RAE</span>
          <span className="swsh">RAE</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"swsh" 0' }}>FLM</span>
          <span className="swsh">FLM</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"swsh" 0' }}>NST</span>
          <span className="swsh">NST</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"swsh" 0' }}>Wnr</span>
          <span className="swsh">Wnr</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Contextual Swashes</p>
        <p className="code">font-feature-settings: 'cswh';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cswh" 0' }}>STW</span>
          <span className="cswh">STW</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cswh" 0' }}>nrty</span>
          <span className="cswh">nrty</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cswh" 0' }}>RAE</span>
          <span className="cswh">RAE</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cswh" 0' }}>FLM</span>
          <span className="cswh">FLM</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"titl" 0' }}>ÄÖÜ</span>
          <span className="titl">ÄÖÜ</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Annotation Forms</p>
        <p className="code">font-feature-settings: 'nalt';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"nalt" 0' }}>123</span>
          <span style={{ fontFeatureSettings: '"nalt" 1' }}>123</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"nalt" 0' }}>456</span>
          <span style={{ fontFeatureSettings: '"nalt" 1' }}>456</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"nalt" 0' }}>789</span>
          <span style={{ fontFeatureSettings: '"nalt" 1' }}>789</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
