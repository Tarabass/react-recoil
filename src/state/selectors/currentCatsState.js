import { selector } from 'recoil'
import axios from 'axios'
import filtersState from '../atoms/filtersState'

const currentCatsState = selector({
	key: 'currentCatsState',
	get: async ({ get }) => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_ENDPOINT}/images/search`,
				{
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': `${process.env.REACT_APP_API_KEY}`,
					},
					params: {
						...get(filtersState),
						breed_ids: get(filtersState).breed_ids || null,
						has_breeds: true,
						// sub_id: 'tocatmanduornot'
					},
				}
			)

			localStorage.setItem('count', res.headers['pagination-count'])
			window.dispatchEvent(new Event('storage'))

			return res.data || []
		} catch (error) {
			// Handle errors
			throw error
		}
	},
})

export default currentCatsState
