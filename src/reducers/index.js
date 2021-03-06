import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_TOTAL } from './../actions/index';

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
      { id: 1, name: 'V-8 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return({
                ...state,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(el => el.name !== action.payload.name),
                additionalPrice: state.additionalPrice + action.payload.price
            });
        case REMOVE_FEATURE:
            return({
                ...state,
                additionalFeatures: [...state.additionalFeatures, action.payload],
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: state.car.features.filter(el => el.name !== action.payload.name),
                },
                additionalPrice: state.additionalPrice - action.payload.price
            });
        case UPDATE_TOTAL:
            return({

            });
        default:
            return state;
    };
};

  export default reducer;