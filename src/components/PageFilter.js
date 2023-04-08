import { useRecoilState } from 'recoil'
import filtersState from '../state/atoms/filtersState'
import useGetCount from '../hooks/useGetCount'

const PageFilter = ({ field }) => {
	const [filters, setFilters] = useRecoilState(filtersState)
	const { count } = useGetCount()
	const totalPages = Math.ceil(count / filters.limit)
	const options = []

	for (var i = 0; i < totalPages; i++) {
		var obj = {}

		obj['value'] = i
		obj['label'] = i + 1
		options.push(obj)
	}

	const onChange = (event) => {
		setFilters({ ...filters, [field]: event.target.value })
	}

	return (
		<div>
			<label htmlFor={field}>{field.toUpperCase()}: </label>
			<select
				id={field}
				name={field}
				value={filters[field]}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default PageFilter
