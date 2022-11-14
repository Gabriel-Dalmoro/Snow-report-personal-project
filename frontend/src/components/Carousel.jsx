import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'



function Carousel() {
  return (
    <div id="carouselContainer">
    <div className='imgCarousel'><CCarousel controls indicators>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/pictures/snowboardPhoto1.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/pictures/snowboardPhoto2.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="/pictures/snowboardPhoto3.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel></div>
    </div>
  )
}

export default Carousel