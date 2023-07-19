// import React, { PureComponent } from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

const CustomPieChart = ({ values = [10, 10] }) => {
  const data = {
    labels: ['completed', 'uncompleted'],
    datasets: [
      {
        label: 'Tasks',
        data: values,
        backgroundColor: ['#5D4F7A', '#C896EC'],
        borderColor: ['#5D4F7A', '#C896EC'],
        borderWidth: 1,
      },
    ],
  }

  return <Doughnut style={{ width: '100%', maxHeight: '100%' }} data={data} />
}

export default CustomPieChart
