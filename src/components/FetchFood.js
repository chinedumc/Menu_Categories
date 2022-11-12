import { useEffect, useState } from "react";
import Loading from "./Loading";
import AllFood from "./AllFood";

const FetchFood = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [ArrFood, setArrFood] = useState([]);

	const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

	const fetchFood = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const food = await response.json();
			let ArrFood = food.categories
			// console.log(ArrFood, 'ArrFoodss');
			// console.log(food);
			setIsLoading(false);
			setArrFood(ArrFood);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchFood();
	},[]);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}
	return (
		<main>
			<AllFood ArrFood={ArrFood}></AllFood>
		</main>
	);
};

export default FetchFood;
