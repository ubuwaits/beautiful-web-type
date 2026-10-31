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
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fi</span>
          <span className="liga">fi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fl</span>
          <span className="liga">fl</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>sp</span>
          <span className="dlig">sp</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>-&gt;</span>
          <span className="calt">-&gt;</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>&lt;-</span>
          <span className="calt">&lt;-</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>12:34</span>
          <span className="calt">12:34</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>-^</span>
          <span className="calt">-^</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>-~</span>
          <span className="calt">-~</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>/^</span>
          <span className="calt">/^</span>
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
          <h1 dir="auto" style={{ fontFeatureSettings: '"afrc" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>1/2 3/4</h1>
          <p className="character-label">Stacked Fractions: 'afrc'</p>
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
          <span className="fade italic" style={{ fontFeatureSettings: '"ss01" 0' }}>p</span>
          <span className="ss01 italic">p</span>
          <p className="code">'ss01' · Italic</p>
        </div>
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"ss02" 0' }}>E</span>
          <span className="ss02 italic">E</span>
          <p className="code">'ss02' · Italic</p>
        </div>
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"ss07" 0' }}>Ti</span>
          <span className="ss07 italic">Ti</span>
          <p className="code">'ss07' · Italic</p>
        </div>
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"ss08" 0' }}>Th</span>
          <span className="ss08 italic">Th</span>
          <p className="code">'ss08' · Italic</p>
        </div>
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"ss12" 0' }}>Zz</span>
          <span className="ss12 italic">Zz</span>
          <p className="code">'ss12' · Italic</p>
        </div>
        <div>
          <span className="fade italic" style={{ fontFeatureSettings: '"ss13" 0' }}>Xx</span>
          <span className="italic" style={{ fontFeatureSettings: '"ss13" 1' }}>Xx</span>
          <p className="code">'ss13' · Italic</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Character Variants</p>
        <p className="code">font-feature-settings: 'cv--';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv01" 0' }}>fj</span>
          <span style={{ fontFeatureSettings: '"cv01" 1' }}>fj</span>
          <p className="code">'cv01'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>89&amp;!</span>
          <span className="case">89&amp;!</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>%()-</span>
          <span className="case">%()-</span>
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
  </>
);

export default features;
