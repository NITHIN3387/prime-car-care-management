export interface UserType {
  id: string;
  name: string;
  mobileNumber: string;
  password?: string;
  role: string;
}

export interface ServiceType {
  id: string;
  serviceName: string;
  cost: number;
}

export interface CustomerType {
  id: string;
  customerName: string;
  mobileNumber: string;
}

export interface BookingType {
  id: string;
  model: string;
  carNumber: string;
  ownedBy: string;
  services: string[];
  bookingStatus: string;
  paymentMode: string;
  amount: number;
}
