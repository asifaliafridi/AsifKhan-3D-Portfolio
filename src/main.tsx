import React from 'react';import React from 'react';import{createRoot}from'react-dom/client';import{Canvas}from'@react-three/fiber';import{Float,OrbitControls,Stars,Environment}from'@react-three/drei';import './style.css';

const BASE='https://raw.githubusercontent.com/asifaliafridi/MyPortfolio/main/src/assets/';
const projects=[
{title:'Web Design',cat:'Web',img:'portfolio-2.jpg'},{title:'App Design',cat:'App',img:'portfolio-3.jpg'},{title:'Dashboard Design',cat:'Design',img:'portfolio-5.jpg'},{title:'App Design',cat:'App',img:'portfolio-7.jpg'},{title:'App Design',cat:'App',img:'portfolio-9.jpg'},{title:'Web Design',cat:'Web',img:'portfolio-10.jpg'}
];

function Scene(){
  const group=React.useRef<any>(null);
  const [hovered,setHovered]=React.useState(false);
  return <Canvas camera={{position:[0,0,7],fov:45}} dpr={[1,1.7]} onPointerMove={(e)=>{if(!group.current)return;group.current.rotation.y=e.pointer.x*0.18;group.current.rotation.x=-e.pointer.y*0.12}}>
    <ambientLight intensity={1.1}/><directionalLight position={[3,4,5]} intensity={2.2}/><pointLight position={[-4,-2,3]} intensity={12} distance={9} color="#7c3aed"/>
    <Stars radius={40} depth={20} count={900} factor={2} saturation={0} fade/>
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh onPointerOver={()=>setHovered(true)} onPointerOut={()=>setHovered(false)} scale={hovered?1.06:1} rotation={[0.35,0.45,0.2]}>
          <icosahedronGeometry args={[1.55,2]}/><meshStandardMaterial color="#8b5cf6" emissive="#3b1d76" emissiveIntensity={hovered?.8:.35} metalness={0.7} roughness={0.18} wireframe/>
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={2}><mesh position={[2.4,1.4,-1]}><torusGeometry args={[0.55,0.16,24,64]}/><meshStandardMaterial color="#22d3ee" emissive="#064e5b" emissiveIntensity={1} metalness={0.85} roughness={0.12}/></mesh></Float>
      <Float speed={1.6} floatIntensity={1.5}><mesh position={[-2.2,-1.5,0]} rotation={[.4,.2,.5]}><octahedronGeometry args={[.45,0]}/><meshStandardMaterial color="#f4f4f5" metalness={.8} roughness={.2}/></mesh></Float>
    </group><Environment preset="city"/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35}/>
  </Canvas>
}

function App(){const[filter,setFilter]=React.useState('All');const shown=filter==='All'?projects:projects.filter(p=>p.cat===filter);return <div className="app">
<header><a className="logo" href="#home">AK<span>.</span></a><nav>{['Home','About','Skills','Services','Portfolio','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav><a className="nav-cta" href="#contact">Let's Talk</a></header>
<main>
<section id="home" className="hero"><div className="hero-copy"><p className="eyebrow">UI/UX DESIGNER · DEVELOPER</p><h1>Designing digital<br/><span>experiences</span> in 3D.</h1><p className="lead">I'm Asif Khan, a UI/UX designer and developer creating user-friendly, responsive and visually engaging digital products.</p><div className="actions"><a className="btn primary" href="#portfolio">View Work ↗</a><a className="btn ghost" href={BASE+'Asif_Khan_UIUX_Product_Designer_Resume.pdf'} download>Download CV ↓</a></div></div><div className="scene"><Scene/></div></section>
<section id="about" className="section split"><div><p className="eyebrow">01 — ABOUT</p><h2>Turning complex ideas into <span>simple experiences.</span></h2></div><div className="copy"><p>I’m a Google-certified UI/UX designer with a software engineering background. I work across product design, visual design and web development, combining thoughtful UX with clean, modern interfaces.</p><div className="stats"><div><b>3.61</b><small>BSSE GPA</small></div><div><b>Figma</b><small>Product Design</small></div><div><b>React</b><small>Web Development</small></div></div></div></section>
<section id="skills" className="section"><p className="eyebrow">02 — SKILLS</p><h2>Tools I use to <span>build.</span></h2><div className="skill-grid">{['UI/UX Design','Figma & Design Systems','Graphic Design','Prototyping','HTML / CSS / JavaScript','React','WordPress','Motion & Video'].map((s,i)=><div className="skill" key={s}><i>0{i+1}</i><strong>{s}</strong><span>↗</span></div>)}</div></section>
<section id="services" className="section"><p className="eyebrow">03 — SERVICES</p><h2>What I <span>do.</span></h2><div className="service-grid">{[['01','Product UI/UX','Research, wireframes, prototypes and polished product interfaces.'],['02','Web Design','Responsive websites designed around clarity, conversion and usability.'],['03','Visual Design','Branding, social media, presentations and visual content.']].map(([n,t,d])=><article className="service" key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p><span>↗</span></article>)}</div></section>
<section id="portfolio" className="section"><p className="eyebrow">04 — SELECTED WORK</p><div className="section-head"><h2>A few things I’ve <span>designed.</span></h2><div className="filters">{['All','Web','App','Design'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div><div className="projects">{shown.map(p=><article className="project" key={p.title+p.img}><div className="project-img"><img src={BASE+p.img} alt={p.title}/></div><div className="project-meta"><div><h3>{p.title}</h3><small>{p.cat}</small></div><button onClick={()=>window.open(BASE+p.img,'_blank')}>View ↗</button></div></article>)}</div></section>
<section id="contact" className="section contact"><p className="eyebrow">05 — CONTACT</p><h2>Have a project in mind?<br/><span>Let’s make it happen.</span></h2><a className="email" href="mailto:asifaliafridi1@gmail.com">asifaliafridi1@gmail.com ↗</a><div className="social"><a href="https://www.behance.net/asifkhanafridi" target="_blank">Behance</a><a href="https://www.linkedin.com/in/asifkhanafridi" target="_blank">LinkedIn</a><a href="https://github.com/asifaliafridi" target="_blank">GitHub</a></div></section>
</main><footer><span>© 2026 Asif Khan</span><span>Designed & built with React + Three.js</span></footer></div>}

createRoot(document.getElementById('root')!).render(<App/>);