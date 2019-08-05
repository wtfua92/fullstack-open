import React from 'react';

function SearchBar({inputValue, onChangeHandler}) {
    return (
        <div>
            name: <input value={inputValue} onChange={onChangeHandler}/>
        </div>
    );
}

export default SearchBar;