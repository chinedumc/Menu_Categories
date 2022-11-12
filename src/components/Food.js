
const Food = (ArrFood) => {
const {idCategory, strCategory, strCategoryDescription,strCategoryThumb} = ArrFood
  return (
		<article>
			<h2>{idCategory}. {strCategory}</h2>
			<img src={strCategoryThumb} alt={strCategory} />
      <p>{strCategoryDescription}</p>
		</article>
	)
}

export default Food