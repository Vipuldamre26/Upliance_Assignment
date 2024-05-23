import Button from '../common/Button';
import './counter.css';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import { increment, decrement, reset } from '../../redux/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


const Counter = () => {

    const dispatch = useDispatch();
    const counterNum = useSelector((state) => state.counter.data);
    console.log(counterNum);

    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(counterNum);
    }, [counterNum])


    const data = {
        labels: [`remaining ${40 - num}`, `Increase ${num}`, 'Total 40'],
        datasets: [{
            lebel: 'Poll',
            data: [40, num],
            backgroundColor: ['rgb(255, 59, 59)', 'rgb(255, 99, 132)'],
            borderColor: ['rgb(255, 99, 132)', 'white'],
        }]
    }

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        color: 'blue'
                    },
                    color:'white',
                }
            }
        }
    };


    return (
        <div className="counter">
            <div className="counter-main">
                <div className="chart">
                    <Doughnut
                        data={data}
                        options={options}
                    />
                </div>
                <div className="counter-buttons">
                    <Button text='-' onClick={() => dispatch(decrement())} />
                    <Button style={{ fontSize: '0.6rem' }} text='Reset' onClick={() => dispatch(reset())} />
                    <Button text='+' onClick={() => dispatch(increment())} />
                </div>

            </div>
        </div>
    )
}

export default Counter;