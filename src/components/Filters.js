import BreedsFilter from './BreedsFilter'
import LimitFilter from './LimitFilter'
import PageFilter from './PageFilter'
import OrderFilter from './OrderFilter'

const Filters = () => {
	return (
		<>
			<BreedsFilter field="breed_ids" />
			<OrderFilter />
			<LimitFilter field="limit" />
			<PageFilter field="page" />
		</>
	)
}

export default Filters
