import { useState, useEffect } from "react";

function App() {
  const [payload, setPayload] = useState({ email: "", message: "" });

   const validEmail=()=>{
    console.log("I am validating email")
   }
  useEffect(() => {
    validEmail({payload})
  }, [payload]);
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(payload)

  }

  return (
    <div className="container">
      <form onSubmit={(e)=>{handelSubmit(e)}}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="3"
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;