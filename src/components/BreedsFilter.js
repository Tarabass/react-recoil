import { useRecoilState } from 'recoil'
import filtersState from '../state/atoms/filtersState'
import useGetBreeds from '../hooks/useGetBreeds'

const BreedsFilter = ({ field }) => {
	const [filters, setFilters] = useRecoilState(filtersState)
	const { breeds } = useGetBreeds()

	const onChange = (event) => {
		setFilters({ ...filters, page: 0, [field]: event.target.value })
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
				<option defaultValue={0} value={''}>
					Select a breed
				</option>
				{breeds.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default BreedsFilter
