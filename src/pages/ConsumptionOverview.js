import styles from '../styles/pages.module.css'

// import required components
import Hero from '../components/Hero';
import BubbleChart from '../components/BubbleChart';
import HeatMap from '../components/HeatMap';
import StackedAreaChart from '../components/StackedAreaChart';

import { useSelector } from 'react-redux';
import { DataSelector } from '../redux/reducers/NavbarReducer';

export default function ConsumptionOverview() {
    const {data} = useSelector(DataSelector)

    return (
        <>
            <div className={`container row gx-5 d-flex justify-content-between w-100 mx-0 p-2 ${styles.container}`}>
                <div className={`col-md-8 me-2 p-0 rounded ${styles.HeroCard}`}>
                    <Hero />
                </div>
                <div className={`col-md border border-danger rounded p-2 ${styles.card}`}><StackedAreaChart data={data} /></div>
            </div>
            <div className={`container row gx-5 d-flex justify-content-between w-100 mx-0 p-2 ${styles.container}`}>
                <div className={`col-md border mx-1 border-danger rounded p-2 ${styles.card}`}><HeatMap data={data} /></div>
                <div className={`col-md border mx-1 border-danger rounded p-2 ${styles.card}`}><BubbleChart data={data} /></div>
            </div>
        </>
    )
}