import { useSelector } from 'react-redux';
import styles from './MainCard.module.scss';
import dayjs from 'dayjs';
import { Root } from '../../../../../service/root';
import {ReactComponent as ArrowBR} from '../../../../../assets/arrow-big-right.svg'
import Slider from '../../../../../components/Slider/Slider';
import Loader from '../../../../../components/Loader/Loader';
import HotelItem from '../../../../../components/HotelItem/HotelItem';

export default function MainCard(){
    const store = useSelector((state: Root) => state.hotels)
    const liked = useSelector((state: Root) => state.liked.likedId)
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.top__row}>
                    <b>Отель</b>
                    <ArrowBR/>
                    <b>{store.options.city}</b>
                </div>
                <p className={styles.top__date}>
                    {dayjs(store.options.date).format('DD MMMM YYYY')}
                </p>
            </div>
            <Slider/>
            <p className={styles.count}>
                Добавлено в Избранное: <b>{liked.length}</b> отеля
            </p>
            <div className={styles.list}>
                {
                    store.request && <Loader/>
                }
                {
                    store.hotels.length === 0 && !store.request &&
                    <p className={styles.list__empty}>Не найдено</p>
                }
                {
                    store.hotels.length > 0 && !store.request && 
                    store.hotels.map(hotel => <HotelItem key={hotel.hotelId} isLiked={liked.includes(hotel.hotelId)} {...hotel} withIcon />)
                }
            </div>
        </div>
    )
}
