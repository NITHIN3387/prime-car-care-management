export interface BookingsCardProps {
  id: string;
  model: string;
  carNumber: string;
  ownedBy: string;
  services: string[];
  info?: boolean;
}