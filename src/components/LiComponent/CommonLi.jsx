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

function Liai({Title,Url}){
  return (
    <li>
        <Link to={url}><i></i>{Title}</Link>
    </li>
  )
}

export {
    Li,
    Liis,
    Liai
} ;