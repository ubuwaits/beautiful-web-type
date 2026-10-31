const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Standard Ligatures</p>
        <p className="code">font-feature-settings: 'liga', 'clig';</p>
      </div>
      <div className="examples">
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
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>-&gt;</span>
          <span className="liga">-&gt;</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table examples-figures">
      <div className="meta">
        <p className="name">Figures</p>
      </div>
      <div className="examples">
        <div>
          <h1 className="lining-proportional">1234567890</h1>
          <p className="character-label">Proportional Lining (default): 'pnum'</p>
        </div>
        <div>
          <h1 className="lining-tabular">1234567890</h1>
          <p className="character-label">Tabular Lining: 'tnum'</p>
        </div>
        <div>
          <h1 className="lining-proportional">+−×÷=</h1>
          <p className="character-label">Proportional Symbols: 'pnum'</p>
        </div>
        <div>
          <h1 className="lining-tabular">+−×÷=</h1>
          <p className="character-label">Tabular Symbols: 'tnum'</p>
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
          <span className="fade">3a</span>
          <span className="ordinals">3a</span>
        </div>
        <div>
          <span className="fade">4o</span>
          <span className="ordinals">4o</span>
        </div>
      </div>
    </div>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Alternate Glyph Forms</p>
        <p className="code">font-feature-settings: 'ss--';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade">ffi</span>
          <span className="ss01">ffi</span>
          <p className="code">'ss01'</p>
        </div>
        <div>
          <span className="fade">a</span>
          <span className="ss02">a</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade">y</span>
          <span className="ss03">y</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade">Kk</span>
          <span className="ss04">Kk</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade">M</span>
          <span className="ss06">M</span>
          <p className="code">'ss06'</p>
        </div>
        <div>
          <span className="fade">J</span>
          <span className="ss08">J</span>
          <p className="code">'ss08'</p>
        </div>
        <div>
          <span className="fade">Q</span>
          <span className="ss09">Q</span>
          <p className="code">'ss09'</p>
        </div>
        <div>
          <span className="fade">2</span>
          <span className="ss10">2</span>
          <p className="code">'ss10'</p>
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
          <span className="fade">(A)</span>
          <span className="case">(A)</span>
        </div>
        <div>
          <span className="fade">&#123;A&#125;</span>
          <span className="case">&#123;A&#125;</span>
        </div>
        <div>
          <span className="fade">[A]</span>
          <span className="case">[A]</span>
        </div>
      </div>
    </div>
  </>
);

export default features;
