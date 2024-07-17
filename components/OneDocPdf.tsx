import { CSS, Tailwind } from '@fileforge/react-print';
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
    theme: string;
}

export const OneDocPdf: React.FC<DataProps> = ({ data, template, theme }) => {
    const pageBgColor = theme == "dark" ? "black" : "white";
    return (
        <html className={theme} style={{colorScheme:theme}}>
            <Tailwind config={{ darkMode: "class" }}>
            <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          background-color:${pageBgColor};
        }`
      }
    </CSS>
            {template === 'payment' && <Payment data={data as PaymentData} />}
            {template === 'cv' && <CV data={data as CVData} />}
            {template === 'airbnb' && <Airbnb data={data as AirbnbData} />}
            {template === 'newCV' && <NewCV {...(data as NewCVData)} />}
            {template === 'tigercv' && <TigerCV data={data as TigerCVData} />}
            {template === 'jd' && <JD data={data as JDData} />}
            {template === 'mlcv' && <MLCV data={data as MLCVData} />}
            {template === 'realestate' && <RealEstate data={data } />}
            </Tailwind>
            </html>
    );
};
