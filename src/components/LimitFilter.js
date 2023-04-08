import { useRecoilState } from 'recoil'
import filtersState from '../state/atoms/filtersState'

const LimitFilter = ({ field }) => {
	const [filters, setFilters] = useRecoilState(filtersState)

	const onChange = (event) => {
		// TODO: Set page given on current limit settings
		setFilters({ ...filters, [field]: event.target.value })
	}

	return (
		<div>
			<label htmlFor={field}>{field.toUpperCase()}: </label>
			<input
				id={field}
				name={field}
				type="number"
				min="1"
				value={filters[field]}
				onChange={onChange}
			/>
		</div>
	)
}

export default LimitFilter
