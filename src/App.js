import { Route, Routes } from 'react-router-dom'
import Home from './pages'
import SingleCocktail from './pages/SingleCocktail'
import AppHeader from './components/AppHeader'
function App() {
	return (
		<div className="App">
			<AppHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="cocktail/:id" element={<SingleCocktail />} />
			</Routes>
		</div>
	)
}

export default App
