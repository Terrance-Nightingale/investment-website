import { useState } from 'react';

export default function UserInput() {
    const [investmentInput, setInvestmentInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleInputChange(valueID, newValue) {
        setInvestmentInput(prevValue => {
            return {
                ...prevValue,
                [valueID]: newValue
            }
        });
    }


    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' required
                    value={investmentInput.initialInvestment}
                    onChange={(event) => handleInputChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' required
                    value={investmentInput.annualInvestment}
                    onChange={(event) => handleInputChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type='number' required
                    value={investmentInput.expectedReturn}
                    onChange={(event) => handleInputChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' required
                    value={investmentInput.duration}
                    onChange={(event) => handleInputChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}