import { HOTELS_ERROR, HOTELS_REQUEST, HOTELS_SUCCESS, UPDATE_OPTION } from "./constants";
import dayjs from 'dayjs'

const initialState = {
    hotels: [] as HotelType[],
    options: {
        city: 'Москва',
        date: dayjs().format('YYYY-MM-DD'),
        gapDay: 1
    },
    request: false,
    error: false,
}

type Action = {
    type: string;
    hotels?: HotelType[];
    options?: typeof initialState.options;
}

export type rootHotelReducer = typeof initialState;
type HotelLocation = {
    name: string;
    country: string;
    geo:  {[key in string]: number}
}
export type HotelType = {
    priceAvg: number;
    stars: number;
    pricePercentile: {[key in string]: number},
    locationId: number;
    priceFrom: number;
    hotelId: number;
    hotelName: string;
    location: HotelLocation;
}

export default function hotelReducer(state = initialState, action: Action){
    switch(action.type){
        case HOTELS_REQUEST: {
            return {
                ...state,
                request: true,
                error: false,
            }
        }
        case HOTELS_ERROR: {
            return {
                ...state,
                request: false,
                error: true,
            }
        }
        case HOTELS_SUCCESS: {
            return {
                ...state,
                hotels: action.hotels,
                request: false,
                error: false,
            }
        }
        case UPDATE_OPTION: {
            return {
                ...state,
                hotels: [],
                options: action.options
            }
        }
        default: 
            return state;
    }
}
