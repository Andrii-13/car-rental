import { price } from 'helpers/createOptionForSelectPrice';
import React, { useState } from 'react'
import Select from 'react-select';

export const PriceSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = price;

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder= 'To $'
      />
    </div>
  )
}
