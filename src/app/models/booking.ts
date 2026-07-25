export interface Booking {
  departure: string;
  arrival: string;
  departureDate: string;
  returnDate: string;
  returning: boolean
}
export interface Airport {
  id: string;
  code: string;
  city: string;
  airport: string;
  country: string;
}
