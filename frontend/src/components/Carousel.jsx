import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'



function Carousel() {
  return (
    <div className='imgCarousel'><CCarousel controls indicators>
    <CCarouselItem>
      <CImage className="d-block w-100" src="../../public/pictures/snowboardPhoto1.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="../../public/pictures/snowboardPhoto2.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src="../../public/pictures/snowboardPhoto3.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel></div>
  )
}

export default Carousel