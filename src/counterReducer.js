// Actions :
// Diminuer de 10  : { type: 'DEC10' }
// Diminuer de 1   : { type: 'DEC1' }
// Augmenter de 1  : { type: 'INC1' }
// Augmenter de 10 : { type: 'INC10' }
// Remise à zéro   : { type: 'RESET' }

const counterReducer = (state = 1000, action) => {
  switch (action.type) {
    case 'DEC10':
      return state - 10;
    case 'DEC1':
      return state - 1;
    case 'INC1':
      return state + 1;
    case 'INC10':
      return state + 10;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
