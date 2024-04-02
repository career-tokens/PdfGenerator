
import { Tailwind } from '@onedoc/react-print'
import React from 'react'
import { CV } from './CV'
import { Payment } from './Payment'
import { Airbnb } from './Airbnb'
import { NewCV } from './NewCV'

export const OneDocPdf = ({data,template}) => {
    return (
        <Tailwind>
            {template === "payment" && <Payment data={data} />}
            {template === "cv" && <CV data={data} />}
            {template === "airbnb" && <Airbnb data={data} />}
            {template==="newCV"&&<NewCV {...data}/>}
        </Tailwind>
  )
}
