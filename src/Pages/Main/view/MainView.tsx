import { FormEvent } from 'react';
import Header from '../../../components/Header/Header';
import styles from './MainView.module.scss';
import FilterForm from './components/FilterForm/FilterForm';
import MainCard from './components/MainCard/MainCard';
import LikedCard from './components/LikedCard/LikedCard';

export type MainViewProps = {
    onSubmit: (e: FormEvent) => void;
}

export default function MainView({onSubmit}:MainViewProps){
    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <FilterForm onSubmit={onSubmit}/>
                    <LikedCard/>
                </div>
                <div className={styles.info}>
                    <MainCard/>
                </div>
            </div>
        </div>
    )
}
