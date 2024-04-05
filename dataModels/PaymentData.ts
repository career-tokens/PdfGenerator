interface PaymentItem {
    name: string;
    price: number;
  }
  
  export interface PaymentData {
    company: string;
    name: string;
    image: string;
    receipt_id: string;
    invoice_id: string;
    starting_date: string;
    ending_date: string;
    bank: string;
    items: PaymentItem[];
  }
  
  