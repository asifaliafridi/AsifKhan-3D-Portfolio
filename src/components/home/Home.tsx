import Scene from './Scene';import './home.css';
export default function Home(){
 return <section id="home" className="home">
   <div className="home-top"><span>PORTFOLIO / 2026</span><span>BASED IN PESHAWAR · PAKISTAN</span></div>
   <div className="home-grid">
    <div className="home-copy">
      <p className="eyebrow">UI/UX DESIGNER · PRODUCT · DIGITAL</p>
      <h1>Asif<br/><em>Khan</em><span className="dot">.</span></h1>
      <p className="hero-line">I design digital products that feel <strong>clear, useful and memorable.</strong></p>
      <div className="actions"><a className="btn primary" href="#portfolio">Explore my work <span>↗</span></a><a className="text-link" href="#contact">Let’s talk <span>→</span></a></div>
    </div>
    <div className="hero-scene"><Scene/><div className="scene-label">INTERACTION<br/>EXPERIMENT 01</div></div>
   </div>
   <div className="home-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>SELECTED WORK ↓</span></div>
 </section>
}