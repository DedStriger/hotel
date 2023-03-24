import { useSelector } from 'react-redux';
import styles from './LikedCard.module.scss';
import { Root } from '../../../../../service/root';
import HotelItem from '../../../../../components/HotelItem/HotelItem';
import { useMemo, useState } from 'react';
import { HotelType } from '../../../../../service/hotelReducer';
import LikedCardFilters from './LikedCardFilters';

export type FilterState = {
    [name in keyof Pick<HotelType, 'stars' | 'priceFrom'>]: Filter
}

type Filter = {
    enabled: boolean;
    up: boolean;
}

const initFilterState: FilterState = {
    stars: {
        enabled: false,
        up: true,
    },
    priceFrom: {
        enabled: false,
        up: true,
    }
}

export default function LikedCard(){
    const [filterState, setFilterState] = useState<FilterState>(initFilterState)
    const liked = useSelector((store: Root) => store.liked.liked)
    const filteredLiked = useMemo(() => {
        const resp = liked
        Object.keys(filterState).forEach(filter => {
            const key = filter as keyof FilterState;
            if(filterState[key].enabled){
                resp.sort((a, b) => {
                    const condition = filterState[key].up ? a[key] >= b[key] : a[key] < b[key];
                    return condition ? -1 : 1
                })
            }
        })
        return resp
    }, [filterState, liked])
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>Избранное</h3>
            <LikedCardFilters setFilterState={setFilterState} state={filterState} />
            <div className={styles.list}>
                {
                    filteredLiked.length > 0 ? (
                        filteredLiked.map(hotel => <HotelItem key={hotel.hotelId + '2'} withIcon={false} isLiked={true} {...hotel} />)
                    ): (
                        <p>Пусто</p>
                    )
                }
            </div>
        </div>
    )
}
