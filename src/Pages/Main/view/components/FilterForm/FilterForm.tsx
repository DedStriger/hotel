import { FormEvent } from 'react';
import Button from '../../../../../components/Button/Button';
import Input from '../../../../../components/Input/Input';
import styles from './FilterForm.module.scss';
import dayjs from 'dayjs'

export type FilterFormProps = {
    onSubmit: (e: FormEvent) => void;
}

export default function FilterForm({onSubmit}:FilterFormProps){
    return(
        <form className={styles.container} onSubmit={onSubmit}>
            <label htmlFor="location">Локация</label>
            <Input
                name='location'
                defaultValue={'Москва'}
            />
            <label htmlFor="date">Дата заселения</label>
            <Input
                type='date'
                name='date'
                defaultValue={dayjs().format('YYYY-MM-DD')}
            />
            <label htmlFor="length">Количество дней</label>
            <Input
                type='number'
                min={1}
                name='length'
                defaultValue={1}
            />
            <Button
                type='submit'
                title='Найти'
                offsetTop={32}
            />
        </form>
    )
}


