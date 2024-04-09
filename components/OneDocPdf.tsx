import { Tailwind } from '@onedoc/react-print';
import React from 'react';
import { CV } from './CV';
import { Payment } from './Payment';
import { Airbnb } from './Airbnb';
import { NewCV } from './NewCV';
import { CVData } from '../dataModels/CVData';
import { NewCVData } from '../dataModels/NewCVData';
import { AirbnbData } from '../dataModels/AirbnbData';
import { PaymentData } from '../dataModels/PaymentData';
import {TigerCV} from './TigerCV';
import { TigerCVData } from '../dataModels/TigerCVData';

interface DataProps {
    data: CVData | NewCVData | AirbnbData | PaymentData |TigerCVData;
    template: string;
}

export const OneDocPdf: React.FC<DataProps> = ({ data, template }) => {
    return (
        <Tailwind>
            {template === 'payment' && <Payment data={data as PaymentData} />}
            {template === 'cv' && <CV data={data as CVData} />}
            {template === 'airbnb' && <Airbnb data={data as AirbnbData} />}
            {template === 'newCV' && <NewCV {...(data as NewCVData)} />}
            {template === 'tigercv' && <TigerCV data={data as TigerCVData} />}
        </Tailwind>
    );
};
