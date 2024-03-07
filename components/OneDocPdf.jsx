
import { Tailwind } from '@onedoc/react-print'
import React from 'react'
import { CV } from './CV'
import { Payment } from './Payment'

export const OneDocPdf = ({data}) => {
    return (
            <Tailwind>
            <Payment data={data}/>
            </Tailwind>
  )
}
