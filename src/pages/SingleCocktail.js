import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/features/cocktailSlice'
import { Button, Card, Col, Row, Space, Spin, Tag, Typography } from 'antd'

function SingleCocktail() {
	const id = useParams()
	const { cocktail, loading } = useSelector(state => ({ ...state.app }))
	const [modifiedCocktail, setModifiedCocktail] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchSingleCocktail(id))
	}, [dispatch])
	useEffect(() => {
		if (cocktail?.length > 0) {
			const {
				strDrink: name,
				strDrinkThumb: image,
				strAlcoholic: info,
				strGlass: glass,
				strInstructions: instructions,
				strIngredient1,
				strIngredient2,
				strIngredient3,
				strIngredient4,
				strIngredient5,
			} = cocktail[0]
			const ingredients = [
				strIngredient1,
				strIngredient2,
				strIngredient3,
				strIngredient4,
				strIngredient5,
			]
			const newCocktail = {
				name,
				image,
				info,
				glass,
				instructions,
				ingredients,
			}
			setModifiedCocktail(newCocktail)
		} else {
			setModifiedCocktail(null)
		}
	}, [id, cocktail])
	if (!modifiedCocktail) {
		return (
			<div className="container" style={{ marginBlock: '20px' }}>
				<Typography.Title level={3}>No Display Cocktail</Typography.Title>
			</div>
		)
	} else {
		const { name, image, info, glass, instructions, ingredients } =
			modifiedCocktail
		return (
			<div className="container">
				{loading ? (
					<Spin />
				) : (
					<Card>
						<Link to={'/'}>
							<Button type="dashed">Go Back</Button>
						</Link>
						<Row style={{ marginTop: '20px' }} gutter={[24, 24]}>
							<Col xs={24} md={10}>
								<img
									src={image}
									style={{
										width: '100%',
										objectFit: 'cover',
										borderRadius: '5px',
									}}
								/>
							</Col>
							<Col xs={24} md={10}>
								<Row gutter={[24, 20]}>
									<Col xs={24} md={12}>
										<Typography.Title className="my-0" level={3}>
											Name:
										</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Title level={4}>{name}</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Title className="my-0" level={3}>
											Info:
										</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Text>{info}</Typography.Text>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Title className="my-0" level={3}>
											Glass:
										</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Text>{glass}</Typography.Text>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Title className="my-0" level={3}>
											Instructions:
										</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Text>{instructions}</Typography.Text>
									</Col>
									<Col xs={24} md={12}>
										<Typography.Title className="my-0" level={3}>
											Ingredient:
										</Typography.Title>
									</Col>
									<Col xs={24} md={12}>
										<Space>
											{ingredients?.map(item => (
												<Tag>{item}</Tag>
											))}
										</Space>
									</Col>
								</Row>
							</Col>
						</Row>
					</Card>
				)}
			</div>
		)
	}
}

export default SingleCocktail
