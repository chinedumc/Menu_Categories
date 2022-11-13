import Food from "./Food";

const AllFood = ({ ArrFood, NotInterestedHandler }) => {

	return (
		<div>
			{ArrFood.map((eachFood) => (
				<Food key={eachFood.idCategory} {...eachFood} NotInterestedHandler={NotInterestedHandler}>
					{/* <h1>All Foods</h1> */}
				</Food>
			))}
		</div>
	);
};

export default AllFood;
