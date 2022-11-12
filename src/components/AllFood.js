import Food from "./Food";


const AllFood = ({ArrFood}) => {
  // console.log(food['categories'], "food");
  // let ArrFood = food['categories'] 
  // console.log(ArrFood, 'ArrFood');
  // const {idCategory} = ArrFood

  return (
			<div>
				{ArrFood.map((eachFood) => (
				 <Food key={eachFood.idCategory} {...eachFood}>
          <p>All Foods</p>
         </Food>
				))}
			</div>
	
	);
}

export default AllFood