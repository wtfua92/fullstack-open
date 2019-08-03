import React from 'react';
import StatisticsRow from './StatisticsRow';

function StatisticsTable({data}) {
    const {good, bad, neutral, all, average, positive} = data;
    return (
        <div>
            <table>
                <tbody>
                    <StatisticsRow label="good" value={good}/>
                    <StatisticsRow label="neutral" value={neutral}/>
                    <StatisticsRow label="bad" value={bad}/>
                    <StatisticsRow label="all" value={all}/>
                    <StatisticsRow label="average" value={average}/>
                    <StatisticsRow label="positive" value={positive}/>
                </tbody>
            </table>
        </div>
    );
}

export default StatisticsTable;