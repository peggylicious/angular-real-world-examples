import { Component, computed, signal } from '@angular/core';
import { Airport, Booking } from '../../models/booking';
import { form, FormField, hidden, required, submit, validate } from '@angular/forms/signals';
import { AIRPORTS } from '../../constants/booking';

@Component({
  selector: 'app-cross-field-validation',
  imports: [FormField],
  templateUrl: './cross-field-validation.html',
  styleUrl: './cross-field-validation.scss',
})
export class CrossFieldValidation {
  airports = signal<Airport[]>(AIRPORTS);
  private bookingModel = signal<Booking>({
    departure: '',
    departureDate: '',
    arrival: '',
    returnDate: '',
    returning: false,
  });
  bookingForm = form(this.bookingModel, (schema) => {
    validate(schema.returnDate, ({ value, valueOf }) => {
      const returnDate = new Date(value());
      const departureDate = new Date(valueOf(schema.departureDate));
      console.log('Departure validator');
      if (!returnDate || !departureDate) {
        return null;
      }

      if (returnDate <= departureDate) {
        return {
          kind: 'invalidDateRange',
          message: 'Return date must be after the departure date',
        };
      }
      return null;
    });
    hidden(schema.returnDate, {
      when: ({ valueOf }) => {
        return !valueOf(schema.returning);
      },
    });
    required(schema.departure);
    required(schema.arrival);
    required(schema.departureDate);
    required(schema.returnDate);
  });

  departureAirport = computed(() => {
    return this.airports().filter((airport) => airport.id !== this.bookingForm.arrival().value());
  });

  arrivalAirport = computed(() => {
    return this.airports().filter((airport) => airport.id !== this.bookingForm.departure().value());
  });
  protected readonly submit = submit;

  submitForm(event: Event) {
    event.preventDefault()
    console.log(this.bookingForm().errors())
  }
}
