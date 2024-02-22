import React from 'react';
import { useFormik } from 'formik';
import { carBrand } from 'helpers/createOptionForSelectBrand';
import { price } from 'helpers/createOptionForSelectPrice';
import {
  Btn,
  FormStyled,
  InputWrap,
  InputsWrap,
  LabelStyled,
  SelectWrap,
} from './Filters.styled';

export const Filters = () => {
  const initialValues = {
    brandSelectOption: '',
    priceSelectOption: '',
    from: '',
    to: '',
  };

  const brandOptions = carBrand;
  const priceOptions = price;

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  // Використовуйте useFormik для керування формою
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <SelectWrap>
        <LabelStyled htmlFor="brandSelectOption">Car brands</LabelStyled>
        <select className='brandSelectStyle'
          id="brandSelectOption"
          name="brandSelectOption"
          onChange={formik.handleChange} // Обробник зміни значення
          value={formik.values.brandSelectOption} // Значення з форміка
        >
          <option value="">Enter the text</option>
          {brandOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </SelectWrap>

      <SelectWrap>
        <LabelStyled htmlFor="priceSelectOption">Price/ 1 hour</LabelStyled>
        <select className='priceSelectStyle'
          id="priceSelectOption"
          name="priceSelectOption"
          onChange={formik.handleChange} // Обробник зміни значення
          value={formik.values.priceSelectOption} // Значення з форміка
        >
          <option value="">To $</option>
          {priceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </SelectWrap>
      <InputsWrap>
        <InputWrap>
          <LabelStyled htmlFor="from">Сar mileage / km</LabelStyled>
          <input className='input-left'
            id="from"
            name="from"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.from}
            placeholder="From"
          />
        </InputWrap>
        <InputWrap>
          {/* <label htmlFor="to">Last Name</label> */}
          <input className='input-right'
            id="to"
            name="to"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.to}
            placeholder="To"
          />
        </InputWrap>
      </InputsWrap>
      <Btn type="submit" disabled={formik.dirty ? false : true}>
      Search
      </Btn>
    </FormStyled>
  );
};
