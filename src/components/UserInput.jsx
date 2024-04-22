export default function UserInput({ inputHandler, investmentData }) {

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' required
                    value={investmentData.initialInvestment}
                    onChange={(event) => inputHandler('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' required
                    value={investmentData.annualInvestment}
                    onChange={(event) => inputHandler('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type='number' required
                    value={investmentData.expectedReturn}
                    onChange={(event) => inputHandler('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' required
                    value={investmentData.duration}
                    onChange={(event) => inputHandler('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}