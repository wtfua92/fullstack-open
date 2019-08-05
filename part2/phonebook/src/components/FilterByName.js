import React from 'react';

function FilterByName({filterValue, onChange}) {
    return (
        <form>
            <div>
                <input type="text" value={filterValue} onChange={onChange}/>
            </div>
        </form>
    );
}

export default FilterByName;