import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ investmentData }) {
    const results = calculateInvestmentResults(investmentData);
    const initialInvestment = 
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(yearlyData => {
                    const totalInterest = 
                        yearlyData.valueEndOfYear - yearlyData.annualInvestment * yearlyData.year - initialInvestment;
                    const totalAmountInvested = yearlyData.valueEndOfYear - totalInterest;
                        return (
                        <tr key={yearlyData.year}>
                            <td>{yearlyData.year}</td>
                            <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearlyData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}