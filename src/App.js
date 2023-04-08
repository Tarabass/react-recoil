import './App.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Filters from './components/Filters'
import CurrentCats from './components/CurrentCats'
import SelectedCat from './components/SelectedCat'

function App() {
	return (
		<RecoilRoot>
			<Filters />
			{/* TODO: Implement ErrorBoundary */}
			{/* <ErrorBoundary> */}
			<React.Suspense fallback={<div>Loading...</div>}>
				<CurrentCats />
			</React.Suspense>
			<SelectedCat />
			{/* </ErrorBoundary> */}
		</RecoilRoot>
	)
}

export default App
