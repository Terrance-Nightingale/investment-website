import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleInputChange(valueID, newValue) {
    setInvestmentData(prevValue => {
        return {
            ...prevValue,
            [valueID]: +newValue
        }
    });
  }

  const isValid = (investmentData.duration >= 1);

  return (
    <>
      <Header />
      <UserInput
      inputHandler={handleInputChange}
      investmentData={investmentData}
      />
      {isValid && <Result investmentData={investmentData}/>}
    </>
  );
}

export default App
