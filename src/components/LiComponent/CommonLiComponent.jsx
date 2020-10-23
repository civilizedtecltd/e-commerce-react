import React from 'react';
import {Link, NavLink} from 'react-router-dom';



// only list component
function Li({ListClass,Title}) {
   return(
    <li className={ListClass}>{Title}</li>
   )
}

//list anchor tag

function Lia({ListClass,Title,Url}) {
   return(
    <li className={ListClass}>
      <a href={Url}>{Title}</a>
    </li>
   )
}


/// list icon span
function LiIs({ListClass,Title,IconName}){
 return(
     <li className={ListClass}>
         <i className={IconName}></i>
          <span>{Title}</span>
     </li>
 )
}

//list anchor icon
function LiAi({ListClass,Title,Url,IconName,AnchorClass}){
  return (
    <li className={ListClass}>
        <Link className={AnchorClass} to={Url} > <i className={IconName}></i>{Title}</Link>
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

//List Icon
function LiSpan({itemName, Url, Value }) {
    return (
        <>
            <li>
                <NavLink exact activeClassName="active" to={Url}>{itemName}<span>{Value}</span></NavLink>
            </li>
        </>
    )

}

export {
    Li,
    Lia,
    Lii,
    LiIs,
    LiAi,
    LiSpan,
} ;
