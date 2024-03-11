const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };


  export const fetchAPI = (date) => {
    if(date){
      const result = [];
      const random = seededRandom(date.getDate());
  
      for (let i = 17; i <= 21; i++) {
        if (random() < 0.5) {
          result.push(i + ":00");
        };
        if (random() < 0.5) {
          result.push(i + ":30");
        };
      };
      return result;
    }
   
    return [];
  };


  export const submitAPI = (formData) => {
    return !!formData;
  };

  export function initializeTimes(selectedDate) {
    return fetchAPI(selectedDate)
}

  export const bookingReducer = (state, action) => {
    switch (action.type) {
      case "SET_AVAILABLE_TIMES":
        return action.payload
      default:
        return state;
    };
  };