import { useSelector } from 'react-redux';
import  styles from './Slider.module.scss';
import { Root } from '../../service/root';

export default function Slider(){
    const images = useSelector((state: Root) => state.slider.imgs)
    return(
        <div className={styles.container}>
            {
                images.map(img => <img src={img} key={img} className={styles.img} alt='slide' />)
            }
        </div>
    )
}
