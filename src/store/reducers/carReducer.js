import { BUY_ITEM, REMOVE_FEATURE } from '../actions/carActions'
import { constants } from 'crypto';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

console.log(initialState.additionalFeatures)

export const carReducer = (state = initialState, action) => {

  console.log(state.additionalFeatures.find(item => item.id === action.payload))
    switch (action.type){
        case BUY_ITEM:
          return {
            ...state,
            car: {
              ...state.car,
              features: [
                ...state.car.features, 
                ...state.additionalFeatures.filter(item => item.id === action.payload)
              ]
            },
            additionalFeatures: [...state.additionalFeatures.filter(item => item.id !== action.payload)],
            additionalPrice: state.additionalPrice + state.additionalFeatures.find(({id}) => id === action.payload).price
          }
        case REMOVE_FEATURE:
          return {
            ...state,
            car: {
              ...state.car,
              features: [...state.car.features.filter(item => item.id !== action.payload)]
            },
            additionalFeatures: [
              ...state.additionalFeatures,
              ...state.car.features.filter(item => item.id === action.payload)
            ],
            additionalPrice: state.additionalPrice - state.car.features.find(({id}) => id === action.payload).price
          }
        default: return state;
    }
}