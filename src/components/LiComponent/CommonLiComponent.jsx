import React from 'react';
import {Link} from 'react-router-dom';
import carouselItem1 from "../../assets/images/partners_logo_img_01.png";
import carouselItem2 from "../../assets/images/partners_logo_img_02.png";
import carouselItem3 from "../../assets/images/partners_logo_img_03.png";
import carouselItem4 from "../../assets/images/partners_logo_img_04.png";
import carouselItem5 from "../../assets/images/partners_logo_img_05.png";
import carouselItem6 from "../../assets/images/partners_logo_img_06.png";


// only list component
function Li({Listclass,Title}) {
   return(
    <li className={Listclass}>{Title}</li>
   )
}

//list anchor tag

function Lia({Listclass,Title,Url}) {
   return(
    <li className={Listclass}>
      <Link to={Url}>{Title}</Link>
    </li>
   )
}


/// list icon span
function Liis({Listclass,Title,IconName}){
 return(
     <li className={Listclass}>
         <i className={IconName}></i>
          <span>{Title}</span>
     </li>
 )
}

//list anchor icon
function Liai({ListClass,Title,Url,IconName,AnchorClass}){
  return (
    <li className={ListClass}>
        <Link className={AnchorClass} to={Url}><i className={IconName}></i>{Title}</Link>
    </li>
  )
}

//List Icon
 function Lii({ListClass, Url, SocialIcon }) {
  return (
      <>
          <li className={ListClass}>
            <Link to={Url}>
                  <i className={SocialIcon}></i>
            </Link>
          </li>
      </>
  )

}


export {
    Li,
    Lia,
    Lii,
    Liis,
    Liai,
} ;