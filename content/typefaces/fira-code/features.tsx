const features = (
  <>
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
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>=&gt;</span>
          <span className="calt">=&gt;</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>!=</span>
          <span className="calt">!=</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>==</span>
          <span className="calt">==</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0', fontSize: "32px" }}>12:34</span>
          <span className="calt" style={{ fontSize: "32px" }}>12:34</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0' }}>r</span>
          <span className="ss01">r</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }}>&lt;=</span>
          <span className="ss02">&lt;=</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss03" 0' }}>&amp;&amp;</span>
          <span className="ss03">&amp;&amp;</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss04" 0' }}>$</span>
          <span className="ss04">$</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss05" 0' }}>@</span>
          <span className="ss05">@</span>
          <p className="code">'ss05'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss06" 0' }}>\\</span>
          <span className="ss06">\\</span>
          <p className="code">'ss06'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss08" 0' }}>!=</span>
          <span className="ss08">!=</span>
          <p className="code">'ss08'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss10" 0' }}>fi</span>
          <span className="ss10">fi</span>
          <p className="code">'ss10'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"cv01" 0' }}>a</span>
          <span style={{ fontFeatureSettings: '"cv01" 1' }}>a</span>
          <p className="code">'cv01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv02" 0' }}>g</span>
          <span style={{ fontFeatureSettings: '"cv02" 1' }}>g</span>
          <p className="code">'cv02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv03" 0' }}>i</span>
          <span style={{ fontFeatureSettings: '"cv03" 1' }}>i</span>
          <p className="code">'cv03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv07" 0' }}>l</span>
          <span style={{ fontFeatureSettings: '"cv07" 1' }}>l</span>
          <p className="code">'cv07'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv11" 0' }}>0</span>
          <span style={{ fontFeatureSettings: '"cv11" 1' }}>0</span>
          <p className="code">'cv11'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv14" 0' }}>3</span>
          <span style={{ fontFeatureSettings: '"cv14" 1' }}>3</span>
          <p className="code">'cv14'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv23" 0' }}>&gt;=</span>
          <span style={{ fontFeatureSettings: '"cv23" 1' }}>&gt;=</span>
          <p className="code">'cv23'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>()-[</span>
          <span className="case">()-[</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>]`&#123;&#125;</span>
          <span className="case">]`&#123;&#125;</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
