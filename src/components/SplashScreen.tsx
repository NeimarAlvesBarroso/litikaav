import { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFadeOut(true);

      window.setTimeout(() => {
        onFinish();
      }, 1200);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <>
      <div className={`splash ${fadeOut ? "fade-out" : ""}`}>
        <div className="logo-wrapper">
          <div className="orbit"></div>

          <h1 className="logo">
            LÍTIKA AV
          </h1>

          <p className="subtitle">
            ARQUEOLOGIA • CINEMA • CIÊNCIA VETORIALETICA
          </p>

          <div className="loading">
            <div className="bar">
              <div className="progress"></div>
            </div>

            <span>Carregando...</span>
          </div>
        </div>
      </div>

      <style>{`

.splash{

position:fixed;
inset:0;

display:flex;
justify-content:center;
align-items:center;

background:#000;

overflow:hidden;

z-index:999999;

transition:opacity 1.2s ease,visibility 1.2s ease;

}

.fade-out{

opacity:0;
visibility:hidden;
pointer-events:none;

}

.logo-wrapper{

position:relative;

text-align:center;

padding:40px;

}

.logo{

font-size:clamp(2.5rem,7vw,5rem);

font-weight:700;

letter-spacing:12px;

color:#fff;

animation:pulse 3s infinite;

position:relative;

z-index:2;

margin:0;

}

.subtitle{

margin-top:20px;

font-size:.9rem;

letter-spacing:4px;

color:#bdbdbd;

text-transform:uppercase;

}

.orbit{

position:absolute;

left:50%;
top:50%;

width:280px;
height:280px;

margin-left:-140px;
margin-top:-140px;

border-radius:50%;

border:1px solid rgba(255,255,255,.15);

animation:spin 12s linear infinite;

}

.orbit::after{

content:"";

position:absolute;

top:-7px;
left:50%;

margin-left:-7px;

width:14px;
height:14px;

border-radius:50%;

background:#ffffff;

box-shadow:0 0 25px rgba(255,255,255,.9);

}

.loading{

margin-top:55px;

}

.bar{

width:260px;
height:5px;

margin:auto;

background:#222;

overflow:hidden;

border-radius:999px;

}

.progress{

height:100%;

width:0;

background:linear-gradient(90deg,#ffffff,#d7b56d);

animation:loading 3s linear forwards;

}

.loading span{

display:block;

margin-top:14px;

font-size:.85rem;

letter-spacing:3px;

color:#888;

text-transform:uppercase;

}

@keyframes spin{

from{

transform:rotate(0deg);

}

to{

transform:rotate(360deg);

}

}

@keyframes loading{

from{

width:0;

}

to{

width:100%;

}

}

@keyframes pulse{

0%{

transform:scale(1);

text-shadow:0 0 8px rgba(255,255,255,.6);

}

50%{

transform:scale(1.04);

text-shadow:

0 0 25px rgba(255,255,255,.9),

0 0 70px rgba(215,181,109,.35);

}

100%{

transform:scale(1);

text-shadow:0 0 8px rgba(255,255,255,.6);

}

}

@media(max-width:700px){

.logo{

letter-spacing:6px;

}

.subtitle{

font-size:.75rem;

letter-spacing:2px;

}

.orbit{

width:180px;
height:180px;

margin-left:-90px;
margin-top:-90px;

}

.bar{

width:180px;

}

}

      `}</style>
    </>
  );
}