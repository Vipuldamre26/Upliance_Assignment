import Button from '../common/Button';
import './form.css';
import { IoMdMail } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Form = () => {
    return(
        <div className="form">
            <h1>User Data</h1>
            <form action=''>
                <div className="inputbox">
                    <span className="icon">
                        <FaAddressCard />
                    </span>
                    <input type='text' required />
                    <label>Address</label>
                </div>
                <div className="inputbox">
                    <span className="icon">
                        <IoMdMail />
                    </span>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
                    <span className="icon">
                        <FaPhoneSquareAlt />
                    </span>
                    <input type="phone" required />
                    <label>Phone</label>
                </div>
                <Button text='Submit' />
            </form>
        </div>
    )
}

export default Form;