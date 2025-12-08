

export const Login = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log("Submit handeled")

 }
  return (
    <div>
        <form onSubmit={(e)=>handelSubmit(e)}>
        <input placeholder="username"/>
        <input placeholder="password"/>
        <button type="submit">Submit</button>
        </form>

    </div>
  )
}
