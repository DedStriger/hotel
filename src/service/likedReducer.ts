import { ADD_NEW_LIKED, REMOVE_LIKED } from "./constants";
import { HotelType } from "./hotelReducer";

const initialState = {
    likedId: [] as number[],
    liked: [] as HotelType[]
}

type Action = {
    type: string;
    hotel?: HotelType;
    removeId?: number;
}

export type rootLikedReducer = typeof initialState;

export default function likedReducer(state = initialState, action: Action){
    switch(action.type){
        case ADD_NEW_LIKED: {
            return {
                ...state,
                liked: [...state.liked, action.hotel],
                likedId: [...state.likedId, action.hotel?.hotelId]
            }
        }

        case REMOVE_LIKED: {
            return {
                ...state,
                liked: state.liked.filter(i => i.hotelId !== action.removeId),
                likedId: state.likedId.filter(i => i !== action.removeId)
            }
        }
        default:
            return state;
    }
}
