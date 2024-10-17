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

