const CurrentCat = ({ cat }) => {
	return (
		<div>
			{cat.url && cat.breeds && (
				<img
					alt=""
					width="10%"
					height="10%"
					src={cat.url}
					title={cat.breeds[0].description}
				/>
			)}
		</div>
	)
}

export default CurrentCat
