import React, { useState } from 'react';
import Select from 'react-select';
import { carBrand } from 'helpers/createOptionForSelectBrand';

export const CarBrandSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = carBrand;

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder= 'Enter the text'
      />
    </div>
  )
}


