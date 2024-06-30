import { Tailwind } from '@onedoc/react-print';
import React from 'react';
import { CV } from './templates/CV';
import { Payment } from './templates/Payment';
import { Airbnb } from './templates/Airbnb';
import { NewCV } from './templates/NewCV';
import { CVData } from '../dataModels/CVData';
import { NewCVData } from '../dataModels/NewCVData';
import { AirbnbData } from '../dataModels/AirbnbData';
import { PaymentData } from '../dataModels/PaymentData';
import {TigerCV} from './templates/TigerCV';
import { TigerCVData } from '../dataModels/TigerCVData';
import JD from './templates/JD';
import { JDData } from '../dataModels/JDData';
import { MLCVData } from '../dataModels/MLCVData';
import MLCV from './templates/MLCV';
import RealEstate from './templates/RealEstate';

interface DataProps {
    data: CVData | NewCVData | AirbnbData | PaymentData | TigerCVData | JDData | MLCVData;
    template: string;
}

export const OneDocPdf: React.FC<DataProps> = ({ data, template }) => {
    return (
        <Tailwind config={{darkMode: "class"}}>
            {template === 'payment' && <Payment data={data as PaymentData} />}
            {template === 'cv' && <CV data={data as CVData} />}
            {template === 'airbnb' && <Airbnb data={data as AirbnbData} />}
            {template === 'newCV' && <NewCV {...(data as NewCVData)} />}
            {template === 'tigercv' && <TigerCV data={data as TigerCVData} />}
            {template === 'jd' && <JD data={data as JDData} />}
            {template === 'mlcv' && <MLCV data={data as MLCVData} />}
            {template === 'realestate' && <RealEstate data={data } />}
        </Tailwind>
    );
};
