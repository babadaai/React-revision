import React from 'react'

export const Conditional = ({player=""}) => {
  return (
    <div>{player && <Scored player={player} />  }</div>
  )
}
export const Missed=()=>{
    return <div>Missed goal</div>
}
export const Scored=({player})=>{
    return <div>Scored by {player}</div>
}