import React from 'react'

const Person = ({name,imgUrl,bio})=>{
    return(
<div className="person">
 <p>Name : {name}</p>
 <img src={imgUrl} alt="profile" />
 <p>bio:{bio} </p>



 </div> )


} 
export default Person


