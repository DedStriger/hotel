import {combineReducers} from 'redux';
import hotelReducer, { rootHotelReducer } from './hotelReducer';
import sliderReducer, {rootSliderReducer} from './sliderReducer';
import likedReducer, { rootLikedReducer } from './likedReducer';

export const rootReducer = combineReducers({
    hotels: hotelReducer,
    slider: sliderReducer,
    liked: likedReducer,
})


export type Root = {
    hotels: rootHotelReducer,
    slider: rootSliderReducer,
    liked: rootLikedReducer,
}
