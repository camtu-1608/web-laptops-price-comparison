import cellphoneLogo from '../images/cellphones.png'
import fadoLogo from '../images/fado-vn-logo.png'
import fptLogo from '../images/fptshop.png'
import nkLogo from '../images/logo-Nguyễn-Kim.png'
import pvLogo from '../images/phongvu.jpg'
import vtLogo from '../images/viettelstore.png'
import tgddLogo from '../images/the-gioi-di-dong-logo.png'
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