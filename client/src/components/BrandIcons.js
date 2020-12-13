import cellphoneLogo from '../images/cellphones.png'
import fadoLogo from '../images/fado.png'
import fptLogo from '../images/fpt-shop.png'
import nkLogo from '../images/nguyen-kim.png'
import pvLogo from '../images/phongvu.png'
import vtLogo from '../images/viettelstore.png'
import tgddLogo from '../images/thegioididong.png'
import React from 'react';


const BrandIcons = () => {
    return (
        <div class="icon-container">
						<div class="icon-bar" >
							<a class="logo" data-swiper-autoplay="2000">
                                <img class="" src={cellphoneLogo} ></img>

							</a>
							<a class="logo" data-swiper-autoplay="2000" >
								<img class="" src={fadoLogo}></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
								<img class="" src={fptLogo} ></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
                                <img class="" src={nkLogo }></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
                                <img class="" src={tgddLogo }></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
                                <img class="" src={vtLogo }></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
                                <img class="" src={pvLogo }></img>
							</a>
						</div> 
					</div>
    );

}
export default BrandIcons;