import { atom } from 'recoil'

const filtersState = atom({
	key: 'filtersState', // unique ID (with respect to other atoms/selectors)
	default: { limit: 10, page: 0, order: 'ASC', breed_ids: '' }, // default value (aka initial value)
	// effects: [
	// 	() => {
	// 		console.log('effect from atom');
	// 	}
	// ]
})

export default filtersState
