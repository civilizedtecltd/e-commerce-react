import React from 'react';
import {Link} from 'react-router-dom';
// only list component
function Li({Listclass,Title}) {
   return(
    <li className={Listclass}>{Title}</li>
   )
}


/// list icon span
function Liis({Listclass,Title,IconName}){
 return(
     <li className={Listclass}>
         <i className={IconName}><span>{Title}</span></i>
     </li>
 )
}

//list anchor icon
function Liai({Title,Url,AnchorClass}){
  return (
    <li>
        <Link className={AnchorClass} to={Url}><i></i>{Title}</Link>
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
    Lii,
    Liis,
    Liai
} ;