import { Layout, Space, Typography } from 'antd'
import React from 'react'

function AppHeader() {
	return (
		<Layout.Header>
			<Space>
				<Typography.Title className="text-white my-0" level={2}>
					Find you favorite cocktail
				</Typography.Title>
			</Space>
		</Layout.Header>
	)
}

export default AppHeader
