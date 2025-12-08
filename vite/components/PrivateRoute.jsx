import React from 'react'

export const PrivateRoute = ({component,sysRole=[]}) => {
    console.log({component,sysRole})
  return (
    <>{component}</>
  )
}
