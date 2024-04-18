import headerImg from '../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header() {
    return (
        <header className='header'>
            <img src={headerImg} alt='bag of money'></img>
            <h1>React Investment Calculator</h1>
        </header>
    );
}