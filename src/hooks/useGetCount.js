import { useEffect, useState } from 'react'

const useGetCount = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		function setCountEvent() {
			console.log('setCountEvent')
			const countFromLocalStorage = localStorage.getItem('count')

			if (countFromLocalStorage) {
				setCount(countFromLocalStorage)
			}
		}

		window.addEventListener('storage', setCountEvent)

		// Cleanup function
		return () => {
			window.removeEventListener('storage', setCountEvent)
		}
	}, [])

	return { count }
}

export default useGetCount
