export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addFeature = (item) => {
    return ({
        type: ADD_FEATURE,
        payload: item
    });
};