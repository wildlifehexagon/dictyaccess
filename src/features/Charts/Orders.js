// @flow
import React from "react"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts"
import { PaperStyle, HeaderStyle, ChartWrapper } from "./ChartStyles"

type Props = {
  /** Data object for chart */
  data: Object
}

const Orders = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle variant="title">Number of Orders</HeaderStyle>
      <ChartWrapper>
        <ResponsiveContainer>
          <LineChart width={730} height={250} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </PaperStyle>
  )
}

export default Orders
