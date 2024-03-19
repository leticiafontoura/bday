import { useEffect, useRef, useState } from 'react'
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import BurekShurro from './assets/burek-shurro.jpeg'
import Xureg from './assets/xureg.mp4'
import FormComponent from './Form'

function Content() {
 const videoRef = useRef<HTMLVideoElement | null>(null)
 const [isVideoOnMute, setIsVideoOnMute] = useState<boolean>(true)
 const handleVideo = () => {
  if (videoRef.current) {
   videoRef.current.volume = 1
  }
 }

 useEffect(() => {
  if (!isVideoOnMute) {
   handleVideo()
  }
 }, [isVideoOnMute])

 return (
  <>
   <div className="controls p-3">
    <button style={{ fontSize: 20 }} onClick={() => setIsVideoOnMute(!isVideoOnMute)}>
     {isVideoOnMute ? (
      <FontAwesomeIcon icon={faVolumeHigh} />
     ) : (
      <FontAwesomeIcon icon={faVolumeXmark} />
     )}
     <span className="pl-2">{isVideoOnMute ? 'Solta o som, DJ!' : 'Abaixa essa porra'}</span>
    </button>
   </div>
   <div className="content">
    <h1 className="title">Ei, você, pessoa do reino de tão, tão distante...</h1>
    <p>
     Em um sábado frio e chuvoso, mais especificamente o sábado de 02 de julho de 1994, na longínqua cidade de Dourados, nascia...</p>
    <p>Eu.</p>
    <p>
     E o que isso significa?
    </p>
    <p>
     Que esse ano eu estou
    </p>
    <p className="highlight">
     T R I N T A N D O
    </p>
    <img src={BurekShurro} alt="burek e shurro" width="300" className="mx-auto" />
    <p className="caption">Pois é, eu faço essa cara quando lembro disso também.</p>
    <p>
     E é com grande honra e alegria que convoco a vossa presença para celebrar esse evento extraordinário comigo!
    </p>
    <ul className="invite-details">
     <li><span>Quando: </span>06 de julho de 2024, às 15h</li>
     <li><span>Local: </span>algum lugar de Campinas <em>(você vai receber por mensagem os detalhes após a confirmação)</em></li>
     <li><span>Traje: </span>você não <em>preciiiisa</em> estar fantasiated de algum personagem do universo de Shrek <em>(mas saiba que, se estiver, vai ser legal demais)</em></li>
     <li><span>O que levar: </span>seu corpinho e, caso vás a bebeires algum álcool, fique à vontade para trazer <em>(em um cooler cairia bem)</em></li>
    </ul>
    <p>
     Aguardo sua confirmação no formulário abaixo até o dia <strong>15 de maio de 2024</strong>, para que tudo possa ser organizado da melhor forma possível!
    </p>
    <FormComponent />
   </div>
   <div className="app-background">
    <video ref={videoRef} autoPlay muted={isVideoOnMute} loop>
     <source src={Xureg} type="video/mp4" />
    </video>
   </div>
  </>
 )
}

export default Content
