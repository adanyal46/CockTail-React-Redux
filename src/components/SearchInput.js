import { Col, Form, Input, Row } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchSearchCocktail } from '../redux/features/cocktailSlice'
function SearchInput() {
	let [form] = Form.useForm()
	const dispatch = useDispatch()
	const handleChange = e => {
		const searchName = e.target.value
		dispatch(fetchSearchCocktail({ searchName }))
	}
	return (
		<Row justify={'center'} style={{ marginBlock: '30px' }}>
			<Col xs={24} md={12}>
				<Form form={form}>
					<Form.Item name={'search'}>
						<Input.Search
							size="large"
							onChange={e => handleChange(e)}
							placeholder="Search cocktail......"
						/>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default SearchInput
