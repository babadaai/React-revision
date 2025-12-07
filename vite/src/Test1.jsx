
import React from 'react'
export const Test=({num1=0,num2=0,data})=>{
  const sum =num1 +num2 
  console.log(data.name)
  console.log(data.age())
    return <div>
              Second{sum}
            <br/>
            Your age is {data.age()}
            <br/>
            Your name is {data.name}
    </div>
}



