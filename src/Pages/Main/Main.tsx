import { useDispatch, useSelector } from "react-redux";
import MainView from "./view/MainView";
import { FormEvent, useCallback, useEffect } from "react";
import getHotels from "../../service/actions/getHotels";
import dayjs from 'dayjs';
import { Root } from "../../service/root";
import { UPDATE_OPTION } from "../../service/constants";

const format = 'YYYY-MM-DD'

export default function Main(){
    const dispatch = useDispatch();
    const option = useSelector((state: Root) => state.hotels.options)
    useEffect(() => {
        dispatch(getHotels({
            checkIn: option.date,
            checkOut: dayjs(option.date).add(option.gapDay, 'day').format(format),
            location: option.city
        }) as any)
    }, [dispatch, option])

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const city = data.get('location')
        const date = data.get('date')
        const gapDay = data.get('length')
        if(!city || !date || !gapDay){
            return;
        }
        dispatch({type: UPDATE_OPTION, options: {
            city,
            date,
            gapDay
        }})
    }, [dispatch])
    return <MainView onSubmit={onSubmit}/>
}
