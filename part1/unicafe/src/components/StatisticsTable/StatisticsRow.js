import React from 'react';

function StatisticsRow({label, value}) {
    return (
        <tr>
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    );
}

export default StatisticsRow;