import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import { Card, Col, Row, Spin } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Link } from 'react-router-dom'

function CockTailList() {
	const { cocktails, loading } = useSelector(state => ({ ...state.app }))
	const [modifiedCocktail, setModifiedCocktail] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCocktails())
	}, [dispatch])
	useEffect(() => {
		if (cocktails) {
			const newCockTails = cocktails.map(item => {
				const { idDrink, strDrink, strDrinkThumb, strGlass } = item
				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					glass: strGlass,
				}
			})
			setModifiedCocktail(newCockTails)
		} else {
			setModifiedCocktail([])
		}
	}, [cocktails])
	return (
		<div>
			<h2>CockTailList</h2>
			{loading ? (
				<div style={{ textAlign: 'center' }}>
					<Spin />
				</div>
			) : (
				<Row gutter={[24, 24]}>
					{modifiedCocktail.map(cocktail => (
						<Col xs={24} sm={12} md={8} lg={6}>
							<Card
								hoverable
								style={{
									width: 240,
								}}
								cover={
									<Link to={`/cocktail/${cocktail.id}`}>
										<img
											alt="example"
											style={{ height: '200px', width: '100%' }}
											src={cocktail.image}
										/>
									</Link>
								}
							>
								<Meta title={cocktail.name} description={cocktail.glass} />
							</Card>
						</Col>
					))}
				</Row>
			)}
		</div>
	)
}

export default CockTailList
