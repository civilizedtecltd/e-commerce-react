import React from 'react';
import {Link} from 'react-router-dom';


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
    Liai
} ;