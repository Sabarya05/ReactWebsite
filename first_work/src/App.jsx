import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {
const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM'title='what we offer'/>
      <Programs/>
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery'title='Campus photos'/>
      <Gallery/>
      <Title subTitle='Testimonials'title='What student says'/>
      <Testimonials/>
      <Title subTitle='Contact us'title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App