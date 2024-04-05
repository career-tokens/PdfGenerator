type BasicCost = {
    costPerNight: number;
    nights: number;
  };
  
  type AdditionalCost = {
    type: string;
    cost: number;
  };
  
  type Payment = {
    card: string;
    lastFourDigits: string;
  };
  
 export type AirbnbData = {
    description: string;
    bookedBy: string;
    date: string;
    checkIn: [string, string]; // Tuple type for check-in date
    checkOut: [string, string]; // Tuple type for check-out date
    address: string[];
    hostedBy: [string, string]; // Tuple type for host info
    travelers: string[];
    basicCost: BasicCost;
    additionalCost: AdditionalCost[];
    payment: Payment;
    time: string;
    receiptId: string;
  };
  

  