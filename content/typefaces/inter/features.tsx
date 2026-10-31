const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Discretionary Ligatures</p>
        <p className="code">font-feature-settings: 'dlig';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>df</span>
          <span className="dlig">df</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>dt</span>
          <span className="dlig">dt</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fi</span>
          <span className="dlig">fi</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fft</span>
          <span className="dlig">fft</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }}>12:56</span>
          <span className="calt">12:56</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0', fontSize: "32px" }}>(SEMI)</span>
          <span className="calt" style={{ fontSize: "32px" }}>(SEMI)</span>
        </div>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0', fontSize: "32px" }}>13469</span>
          <span className="ss01" style={{ fontSize: "32px" }}>13469</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }}>0Ill</span>
          <span className="ss02">0Ill</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss03" 0' }}>,;</span>
          <span className="ss03">,;</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss07" 0' }}>!=</span>
          <span className="ss07">!=</span>
          <p className="code">'ss07'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss08" 0' }}>ʼˮ‘‚</span>
          <span className="ss08">ʼˮ‘‚</span>
          <p className="code">'ss08'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"cv01" 0' }}>1</span>
          <span style={{ fontFeatureSettings: '"cv01" 1' }}>1</span>
          <p className="code">'cv01'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv02" 0' }}>4</span>
          <span style={{ fontFeatureSettings: '"cv02" 1' }}>4</span>
          <p className="code">'cv02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv06" 0' }}>u</span>
          <span style={{ fontFeatureSettings: '"cv06" 1' }}>u</span>
          <p className="code">'cv06'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv09" 0' }}>3</span>
          <span style={{ fontFeatureSettings: '"cv09" 1' }}>3</span>
          <p className="code">'cv09'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv10" 0' }}>G</span>
          <span style={{ fontFeatureSettings: '"cv10" 1' }}>G</span>
          <p className="code">'cv10'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"cv11" 0' }}>a</span>
          <span style={{ fontFeatureSettings: '"cv11" 1' }}>a</span>
          <p className="code">'cv11'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>@()*</span>
          <span className="case">@()*</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>+:&lt;=</span>
          <span className="case">+:&lt;=</span>
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
