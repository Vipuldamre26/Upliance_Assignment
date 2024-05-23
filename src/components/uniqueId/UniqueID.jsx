import { useEffect, useState } from 'react';
import './uniqueid.css';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';

const UniqueID = () => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const oldData = useSelector(state => state.form.data);
    let uniqueID = uniqid();

    useEffect(() => {
        setData(oldData);
    }, [oldData])


    console.log('====================================');
    console.log(data);
    console.log('====================================');


    const submitDataWithUID = () => {
        const mapData = [...data];
        const newDataWithUID = mapData.map((item, index) => {
            if (index === 0) {
                return { ...item, uniqueid: String(uniqueID) };
            }

            return item;
        })

        console.log(newDataWithUID);
        localStorage.setItem('userData', JSON.stringify(newDataWithUID));
        toast('Successfully Created User Data with UniqueID');
    }





    return (
        <div className="uniqueid">
            <div className='userData'>
                {
                    data.length === 0 ? (
                    <div className='notid' style={{color: 'white', fontSize: '2rem'}}>Please Fill the Form First</div>
                ) : (
                    <>
                        <p><span>Name: </span> {data[0].name}</p>
                        <p><span>Email:</span> {data[0].email}</p>
                        <p><span>Number:</span> {data[0].number}</p>
                        <p><span>Address:</span> {data[0].address}</p>
                        <strong><span>Unique ID:</span> {uniqueID}</strong>
                        <button onClick={submitDataWithUID}>Submit</button>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    )
}

export default UniqueID;