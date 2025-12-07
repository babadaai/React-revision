import React from 'react';

export const Goal = () => {
      
    const shoot =(data)=>{
  alert(`Goal scored by ${data}`)
 }
  return (
    <div>
       
        <select id="player" onChange={()=>shoot(document.getElementById("player").value)}>
            <option value="">Goal by</option>
            <option value="Ronaldo">Ronaldo</option>
            <option value="Messi">Messi</option>
        </select>
        <button onClick={()=>shoot(document.getElementById("name").value)}>Goal</button></div>
  )
}
