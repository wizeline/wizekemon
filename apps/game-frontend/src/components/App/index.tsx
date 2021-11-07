import { DatePicker, Typography } from 'antd'
import React from 'react'

const App:React.FC = () => {
  return (
    <div>
      <Typography.Title level={2}>Welcome to game-frontend!</Typography.Title>
      <DatePicker />
    </div>
  )
}

export default App
