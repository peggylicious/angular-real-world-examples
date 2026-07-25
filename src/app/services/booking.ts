import { Service } from '@angular/core';
import { AIRPORTS } from '../constants/booking';

@Service()

export class Booking {
  private readonly airports = AIRPORTS;
}
