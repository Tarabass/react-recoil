import { useRecoilState } from 'recoil'
import catState from '../state/atoms/catState'

const SelectedCat = () => {
	const [cat] = useRecoilState(catState)

	return (
		<div>
			<img
				alt=""
				width="10%"
				height="10%"
				src={cat ? cat.url : ''}
				title="Cat from state"
			/>
		</div>
	)
}

export default SelectedCat
