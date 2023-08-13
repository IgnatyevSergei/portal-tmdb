import React from 'react';

import './searchPanel.scss';

const SearchPanel = ({ onChange, ref }) => {
  return (
    <div className='searchPanel'>
      <input
        className='searchPanel__input'
        type='search'
        placeholder='Search'
        onChange={onChange}
      />
    </div>
  );
};

export default SearchPanel;
