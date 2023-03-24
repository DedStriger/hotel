import { AppDispatch } from "../..";
import checkResponse from "../../utils/checkResponse";
import normalizeToGetParams from "../../utils/normalizeToGetParams";
import { HOTELS_ERROR, HOTELS_REQUEST, HOTELS_SUCCESS } from "../constants";

type Options = {
    checkIn: string; //YYYY-MM-DD
    checkOut: string;//YYYY-MM-DD
    location: string;
}

export default function getHotels(options: Options){
    const params = normalizeToGetParams({...options, limit: '20', currency: 'rub'})
    const url = 'https://engine.hotellook.com/api/v2/cache.json'+params
    return async function(dispatch: AppDispatch) {
        try{
            dispatch({type: HOTELS_REQUEST})
            await fetch(url)
            .then(r => checkResponse(r))
            .then(d => {
                dispatch({type: HOTELS_SUCCESS, hotels: d})
            })
        }catch(e: any){
            dispatch({type: HOTELS_ERROR})
            throw new Error(e);
        }
    }
}
