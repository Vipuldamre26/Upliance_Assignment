import './button.scss';

const Button = ({text, onClick}) => {
    return(
        <button style={text !== '-' && text !== '+' ? { fontSize: '1.3rem' } : { fontSize: '2.6rem' }}  type='button' onClick={onClick}>{text}</button>
    )
}

export default Button;