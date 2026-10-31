const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Wonk</p>
        <p className="code">font-variation-settings: 'WONK';</p>
      </div>
      <div className="examples">
        <div>
          <span style={{ fontVariationSettings: '"WONK" 0' }}>mnhs&amp;</span>
          <p className="code">'WONK' 0</p>
        </div>
        <div>
          <span style={{ fontVariationSettings: '"WONK" 1' }}>mnhs&amp;</span>
          <p className="code">'WONK' 1</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Softness</p>
        <p className="code">font-variation-settings: 'SOFT';</p>
      </div>
      <div className="examples">
        <div>
          <span style={{ fontVariationSettings: '"SOFT" 0' }}>Softness</span>
          <p className="code">'SOFT' 0</p>
        </div>
        <div>
          <span style={{ fontVariationSettings: '"SOFT" 50' }}>Softness</span>
          <p className="code">'SOFT' 50</p>
        </div>
        <div>
          <span style={{ fontVariationSettings: '"SOFT" 100' }}>Softness</span>
          <p className="code">'SOFT' 100</p>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Optical Size</p>
        <p className="code">font-variation-settings: 'opsz';</p>
      </div>
      <div className="examples">
        <div>
          <span style={{ fontVariationSettings: '"opsz" 9' }}>Optical</span>
          <p className="code">'opsz' 9</p>
        </div>
        <div>
          <span style={{ fontVariationSettings: '"opsz" 68' }}>Optical</span>
          <p className="code">'opsz' 68</p>
        </div>
        <div>
          <span style={{ fontVariationSettings: '"opsz" 144' }}>Optical</span>
          <p className="code">'opsz' 144</p>
        </div>
      </div>
    </div>
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
        <p className="name">Case Sensitive Forms</p>
        <p className="code">font-feature-settings: 'case';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"case" 0' }}>agil</span>
          <span className="case">agil</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Stylistic Set 01</p>
        <p className="code">font-feature-settings: 'ss01';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss01" 0', fontVariationSettings: '"opsz" 72, "WONK" 1', fontOpticalSizing: "none" }}>&amp;hm</span>
          <span className="ss01" style={{ fontVariationSettings: '"opsz" 72, "WONK" 1', fontOpticalSizing: "none" }}>&amp;hm</span>
          <p className="code">'ss01' · opsz 72 · WONK 1</p>
        </div>
      </div>
    </div>
  </>
);

export default features;
