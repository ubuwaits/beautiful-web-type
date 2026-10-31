const features = (
  <>
    <div className="type-detail-table">
      <div className="meta">
        <p className="name">Standard Ligatures</p>
        <p className="code">font-feature-settings: 'liga';</p>
      </div>
      <div className="examples">
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fl</span>
          <span className="liga">fl</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"liga" 0' }}>fi</span>
          <span className="liga">fi</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fj</span>
          <span className="dlig">fj</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fm</span>
          <span className="dlig">fm</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fn</span>
          <span className="dlig">fn</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"dlig" 0' }}>fr</span>
          <span className="dlig">fr</span>
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
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }} dir="auto">بح</span>
          <span className="calt" dir="auto">بح</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }} dir="auto">بم</span>
          <span className="calt" dir="auto">بم</span>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"calt" 0' }} dir="auto">بئب</span>
          <span className="calt" dir="auto">بئب</span>
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
          <h1 dir="auto" style={{ fontFeatureSettings: '"frac" 1', fontSize: "min(var(--text-5xl), 7.5vw)" }}>1/2 3/4</h1>
          <p className="character-label">Fractions: 'frac'</p>
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
          <span className="fade" style={{ fontFeatureSettings: '"ss02" 0' }} dir="auto">ت</span>
          <span className="ss02" dir="auto">ت</span>
          <p className="code">'ss02'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss03" 0' }} dir="auto">كل</span>
          <span className="ss03" dir="auto">كل</span>
          <p className="code">'ss03'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss04" 0' }} dir="auto">ش</span>
          <span className="ss04" dir="auto">ش</span>
          <p className="code">'ss04'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss06" 0' }} dir="auto">ض</span>
          <span className="ss06" dir="auto">ض</span>
          <p className="code">'ss06'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss08" 0' }} dir="auto">شجرة</span>
          <span className="ss08" dir="auto">شجرة</span>
          <p className="code">'ss08'</p>
        </div>
        <div>
          <span className="fade" style={{ fontFeatureSettings: '"ss09" 0' }}>&#123;&#125;</span>
          <span className="ss09">&#123;&#125;</span>
          <p className="code">'ss09'</p>
        </div>
      </div>
    </div>
  </>
);

export default features;
