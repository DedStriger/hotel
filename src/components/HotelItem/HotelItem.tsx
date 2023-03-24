import { HotelType } from '../../service/hotelReducer';
import styles from './HotelItem.module.scss';
import {ReactComponent as HomeSVG} from '../../assets/icon-house.svg'
import {ReactComponent as StarSVG} from '../../assets/star.svg'
import {ReactComponent as HeartSVG} from '../../assets/heart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Root } from '../../service/root';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { ADD_NEW_LIKED, REMOVE_LIKED } from '../../service/constants';

export type HotelItemProps = HotelType & {
    isLiked?: boolean;
    withIcon?: boolean;
}

export default function HotelItem({withIcon = false, isLiked = false, ...rest}:HotelItemProps){
    const options = useSelector((store: Root) => store.hotels.options)
    const dispatch = useDispatch()
    const onHeartClick = useCallback(() => {
        if(isLiked){
            dispatch({type: REMOVE_LIKED, removeId: rest.hotelId})
        }else{
            dispatch({type: ADD_NEW_LIKED, hotel: rest})
        }
    }, [rest, isLiked, dispatch])
    return(
        <div className={styles.container}>
            {withIcon && <HomeSVG/>}
            <div className={styles.content}>
                <div>
                    <h3 className={styles.name}>{rest.hotelName}</h3>
                    <p className={styles.date}>
                        <span>{dayjs(options.date).format('DD MMMM YYYY')}</span> - <span>{options.gapDay} день</span>
                    </p>
                    <div className={styles.stars}>
                    {
                        Array(5).fill(0).map((_, index) => <Star key={index} active={index < rest.stars } />)
                    }
                    </div>
                </div>
                <div className={styles.tail}>
                    <Heart onClick={onHeartClick} active={isLiked}/>
                    <div className={styles.price}>
                        <span>Цена:</span>
                        <b>{rest.priceFrom} ₽</b>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Star = ({active}:{active?: boolean}) => <StarSVG color={active ? '#CDBC1E' : '#c4c3b5'} />
const Heart = ({active, onClick}:{active?: boolean; onClick: () => void}) => <HeartSVG onClick={onClick} className={`${styles.heart} ${active && styles.heart__active}`} />
