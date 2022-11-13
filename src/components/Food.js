import { useState } from "react";

const Food = ({
	idCategory,
	strCategory,
	strCategoryDescription,
	strCategoryThumb,
	NotInterestedHandler,
}) => {
	const [readMore, setReadMore] = useState(false);
	// const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
	// 	ArrFood;

	return (
		<>
			<article>
				<h2>
					{idCategory}. {strCategory}
				</h2>
				<img src={strCategoryThumb} alt={strCategory} />
				<p>
					{readMore
						? strCategoryDescription
						: `${strCategoryDescription.substr(0, 150)}...`}
				</p>
				{/* {children} */}
				<button onClick={() => setReadMore(!readMore)}>
					{readMore ? "Read Less" : "Read More"}
				</button>
			</article>
			<button onClick={() => NotInterestedHandler(idCategory)}>
				Not Interested
			</button>
		</>
	);
};

export default Food;
