import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('Booking Form Tests', () => {
    it('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Little Lemon Reservation Form");
        expect(headingElement).toBeInTheDocument();
    })

    it('should have the correct attributes', () => {
      render(<BookingForm />);
  
      const inputElement = screen.getByLabelText('Name');
  
      expect(inputElement).toHaveAttribute('type', 'text');
      expect(inputElement).toHaveAttribute('name', 'username');
      expect(inputElement).toHaveAttribute('required');
      expect(inputElement).toHaveAttribute('minLength', '3');
    });

    it('should have the correct attributes', () => {
        render(<BookingForm />);
    
        const emailInputElement = screen.getByLabelText('Email');
    
        expect(emailInputElement).toHaveAttribute('type', 'email');
        expect(emailInputElement).toHaveAttribute('name', 'email');
        expect(emailInputElement).toHaveAttribute('required');
      });

      it('should have the correct attributes', () => {
        render(<BookingForm />);
    
        const guestsInputElement = screen.getByLabelText('Number of guests');
    
        expect(guestsInputElement).toHaveAttribute('type', 'number');
        expect(guestsInputElement).toHaveAttribute('name', 'numberOfGuests');
        expect(guestsInputElement).toHaveAttribute('min', '1');
        expect(guestsInputElement).toHaveAttribute('max', '10');
        expect(guestsInputElement).toHaveAttribute('required');
      });

      it('should have the correct attributes for the date input', () => {
        render(<BookingForm />);
    
        const dateInputElement = screen.getByLabelText('Reservation date');
    
        expect(dateInputElement).toHaveAttribute('type', 'date');
        expect(dateInputElement).toHaveAttribute('name', 'date');
        expect(dateInputElement).toHaveAttribute('required');
      });
    
      it('should have the correct attributes for the time select', () => {
        render(<BookingForm />);
    
        const timeSelectElement = screen.getByLabelText('Resercation time');
    
        expect(timeSelectElement).toHaveAttribute('name', 'selectedTime');
        expect(timeSelectElement).toHaveAttribute('required');
      });
  });