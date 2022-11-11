import { useEffect } from "react";


const FetchFood = () => {

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchFood = async () => {
    const response = await fetch(url)
    const food = await response.json()
    console.log(food);
    
  }

  useEffect(() => {
fetchFood()
  },[])
  return<>
  
  
  </>
}

export default FetchFood