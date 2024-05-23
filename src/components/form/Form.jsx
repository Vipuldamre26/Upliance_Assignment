
import './form.css';
import { BsFilePersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/slices/formSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitedData = useSelector(state => state.form.data)
    console.log(submitedData);


    const [ data, setData ] = useState([]);
    const [ isFormFill, setIsFormFill ] = useState(false);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');
    const addressRef = useRef('');


    // *************************************************************

    const submitData = (e) => {

        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let number = numberRef.current.value;
        let address = addressRef.current.value;

        e.preventDefault()
        if(name && email && number && address){
            const userData = {
                name,
                email,
                number,
                address
            }

            console.log(userData);

            dispatch(submit([userData]));
            localStorage.setItem('userData', JSON.stringify([userData]));

            setIsFormFill(false);
            toast('Redirecting to User Data page');
            setTimeout(() => {
                navigate('/uniqueid')
            }, [1500]);

        }
        else{
            toast('Please fill all fields');
        }
        
    }

    // ************************************************************

    useEffect(() => {
        const checkBeforeClose = (e) => {
            if(isFormFill){
                const message = 'You have unsaved changes, are you sure to leave';

                e.returnValue = message;
                return message;
            }
        } ;

        window.addEventListener('beforeunload', checkBeforeClose);

        return () => {
            window.removeEventListener('beforeunload', checkBeforeClose);
        };

    }, [isFormFill]);

    

    return (
        <div className='form'>
            <div className="form-main">
                <h1>User Data</h1>
                <form action='' >
                    <div className="inputbox">
                        <span className="icon">
                            <BsFilePersonFill />
                        </span>
                        <input onChange={() => setIsFormFill(true)} ref={nameRef} type='text' required />
                        <label>Name</label>
                    </div>
                    <div className="inputbox">
                        <span className="icon">
                            <IoMdMail />
                        </span>
                        <input onChange={() => setIsFormFill(true)} ref={emailRef} type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="inputbox">
                        <span className="icon">
                            <FaPhoneSquareAlt />
                        </span>
                        <input onChange={() => setIsFormFill(true)} ref={numberRef} type="phone" required />
                        <label>Phone</label>
                    </div>
                    <div className="inputbox">
                        <span className="icon">
                            <FaAddressCard />
                        </span>
                        <input onChange={() => setIsFormFill(true)} ref={addressRef} type='text' required />
                        <label>Address</label>
                    </div>
                    <button type='submit' onClick={(e) => submitData(e)}>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Form;