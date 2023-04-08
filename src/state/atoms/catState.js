import { atom } from 'recoil'

const catState = atom({
	key: 'catState', // unique ID (with respect to other atoms/selectors)
	default: {}, // default value (aka initial value)
})

export default catState
