import { FilterState } from './LikedCard';
import styles from './LikedCardFilters.module.scss';
import {ReactComponent as Up} from '../../../../../assets/select-up.svg'
import {ReactComponent as Down} from '../../../../../assets/select-down.svg'
import { useCallback } from 'react';

export type LikedCardFiltersProps = {
    setFilterState:  React.Dispatch<React.SetStateAction<FilterState>>
    state: FilterState;
}

const config: {[key in keyof FilterState]: string} = {
    stars: 'рейтинг',
    priceFrom: 'цена'
}

export default function LikedCardFilters({setFilterState, state}: LikedCardFiltersProps){
    const onClick = useCallback((v: keyof FilterState) => {
        setFilterState(prev => ({...prev, [v]: {
          enabled: true,
          up: !prev[v].up
        }}))
    }, [setFilterState])
    return(
        <div className={styles.container}>
            {
                Object.keys(state).map(s => {
                    const key = s as keyof FilterState
                    return (
                        <div key={key} className={`${styles.filter} ${state[key].enabled && styles.filter__active}`} onClick={() => onClick(key)}>
                            <span>{config[key]}</span>
                            <div className={styles.filter__select}>
                                <Up className={state[key].enabled && state[key].up ? styles.active_arrow : ''}/>
                                <Down className={state[key].enabled && !state[key].up ? styles.active_arrow : ''} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
