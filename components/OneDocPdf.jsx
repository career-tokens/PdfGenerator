
import { Tailwind } from '@onedoc/react-print'
import React from 'react'
import { CV } from './CV'
import { Payment } from './Payment'
import "../util/preflight.css"

export const OneDocPdf = ({data,template}) => {
    return (
            <Tailwind>
        {template === "payment" && <Payment data={data} />}
        {template==="cv"&&<CV data={data}/>}
            </Tailwind>
  )
}
