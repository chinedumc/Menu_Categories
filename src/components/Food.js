import { useState } from "react";

const Food = (ArrFood) => {
	const [readMore, setReadMore] = useState(false);
	const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
		ArrFood;

	return (
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
			<button onClick={()=>setReadMore(!readMore)}>{readMore? 'Read Less' : 'Read More'}</button>
		</article>
	);
};

export default Food;