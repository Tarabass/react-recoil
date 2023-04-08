import { useRecoilState, useRecoilValue } from 'recoil'
import currentCatsState from '../state/selectors/currentCatsState'
import catState from '../state/atoms/catState'
import CurrentCat from './CurrentCat'

const CurrentCats = () => {
	const [cat, setCat] = useRecoilState(catState)
	const currentCats = useRecoilValue(currentCatsState)

	const onClick = (event, currentCat) => {
		event.preventDefault()

		setCat(currentCat)
	}

	return (
		<>
			<ul>
				{currentCats.map((currentCat) => (
					<li
						style={{
							cursor: 'pointer',
							color: currentCat.id === cat.id ? 'red' : 'blue',
						}}
						onClick={(event) => onClick(event, currentCat)}
						key={currentCat.id}
					>
						{currentCat.id}
					</li>
				))}
			</ul>
			<CurrentCat cat={cat} />
		</>
	)
}

export default CurrentCats
