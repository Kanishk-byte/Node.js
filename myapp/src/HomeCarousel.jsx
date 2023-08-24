import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const HomeCarousel = () => {
    return (
    <div> <Carousel>
    <Carousel.Item>
    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' style={{width:"100vw",height:"90vh"}} text="First slide" />
    <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg' style={{width:"100vw",height:"90vh"}} text="Second slide" />
    <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' style={{width:"100vw",height:"90vh"}} text="Third slide" />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel></div>
    )
}

export default HomeCarousel