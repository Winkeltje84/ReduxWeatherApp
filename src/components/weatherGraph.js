import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function calculate_average(data, units) {
  console.log(data)
  const sum = data.reduce(function(a, b) { return a + b }, 0)
  const average = (sum / data.length)
  return Math.round(average)
}

export default (props) => {
  console.log('graph:', props)
  return(
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {calculate_average(props.data, props.units)} {props.units}
      </div>
    </div>
  )
}
