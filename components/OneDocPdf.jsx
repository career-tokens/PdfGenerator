
import { Tailwind } from '@onedoc/react-print'
import React from 'react'
import { CV } from './CV'

export const OneDocPdf = ({data}) => {
    return (
            <Tailwind>
            <CV data={data}/>
            </Tailwind>
  )
}
