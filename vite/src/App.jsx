import { Test } from "./Test1.jsx";

function App() {
  const data = {
    name: "Nischal",
    dob: 2002,
    age: function () {
      return new Date().getFullYear() - this.dob;
    }
  };

  return (
    <>
      First  
      <Test num1={2} num2={3} data={data} />
    </>
  );
}

export default App;
