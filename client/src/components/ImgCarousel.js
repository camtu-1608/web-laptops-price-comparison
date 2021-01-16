import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const ImgCarousel = (props) => {
    var laptop = props.laptop;

    const images = () =>{
        if(laptop?.Img.length > 0){
            return (
                laptop.Img.map(image=>(
                <Carousel.Item>
                    <img class='goat-images' src={image}></img>
                </Carousel.Item>
            )));}
        else{
            console.log(props);
            return(
                <Carousel.Item>
                    <img class={props.imageClass} src={props.image}></img>
                </Carousel.Item>
            )
        }
    }
    
    return(
        <Carousel>
            {images()}
        </Carousel>
    );
}
export default ImgCarousel