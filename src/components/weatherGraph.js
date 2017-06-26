import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default (props) => {
  console.log('graph:', props)
  return(
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
