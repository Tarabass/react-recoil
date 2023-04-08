import { useRecoilState } from 'recoil'
import filtersState from '../state/atoms/filtersState'

const OrderFilter = () => {
	const [filters, setFilters] = useRecoilState(filtersState)
	const labels = { ASC: '\u2193', DESC: '\u2191' }

	const onClick = (event) => {
		setFilters({
			...filters,
			order: filters.order === 'ASC' ? 'DESC' : 'ASC',
		})
	}

	return (
		<div onClick={onClick}>
			<button style={{ cursor: 'pointer' }}>
				{labels[filters.order]}
			</button>
		</div>
	)
}

export default OrderFilter
