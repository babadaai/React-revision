import { useState, useEffect } from "react";
import { instance } from "./utils/Axios";

// Scenario 1 (timer / countdown)…
// Scenario 2 (website)

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const {data} = await instance.get("recipes/search");
      setData(data.recipes)
      
    };
    fetchRecipes();
  }, []);

  return <>{JSON.stringify({data})}</>;
};

export default List;
