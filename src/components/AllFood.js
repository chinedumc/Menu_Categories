import Food from "./Food";

const AllFood = ({ ArrFood }) => {

	return (
		<div>
			{ArrFood.map((eachFood) => (
				<Food key={eachFood.idCategory} {...eachFood}>
					{/* <h1>All Foods</h1> */}
				</Food>
			))}
		</div>
	);
};

export default AllFood;
