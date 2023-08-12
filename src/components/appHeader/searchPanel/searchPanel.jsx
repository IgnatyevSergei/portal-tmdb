import React from "react";

import './searchPanel.scss'

const SearchPanel = () => {
    return (
      <div className='searchPanel'>
        <input
          className='searchPanel__input'
          type='search'
          placeholder='Search'
        />
      </div>
    );
}

export default SearchPanel