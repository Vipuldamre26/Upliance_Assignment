import { useEffect, useState } from 'react';
import './uniqueid.css';
import { useDispatch, useSelector } from 'react-redux';

const UniqueID = () => {

    const [ data, setData ] = useState();
    const dispatch = useDispatch();
    const oldData =  useSelector(state => state.form.data);

    console.log('====================================');
    console.log(data);
    console.log('====================================');


    useEffect(() => {
        setData(oldData)
    }, [])
  
    

    return(
        <div className="uniqueid">
            <div className='userData'>
        {
                data ?
                <div className="notdata">
                    Data not found, Please fill the form
                </div>
                :
                <div className="datafound">
                    
                </div> 
        }
            </div>
        </div>
    )
}

export default UniqueID;