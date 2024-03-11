import { bookingReducer, initializeTimes } from "../../utils/api";


describe('bookingReducer Test', () => {
    // unit test for initializeTimes function
    test('should return initial state', () => {
        const result = initializeTimes(new Date());
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
    })

    // unit test for updateTimes
    it('should handle SET_AVAILABLE_TIMES action', () => {
        const initialState = initializeTimes(new Date()); 
        const availableTimes = ['10:00', '11:00', '12:00']; 
    
        const action = {
          type: 'SET_AVAILABLE_TIMES',
          payload: availableTimes,
        };
    
        const newState = bookingReducer(initialState, action);
        expect(newState).toEqual(availableTimes);
      });
})
