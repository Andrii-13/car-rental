import data from '../const/makes.json'

export const carBrand = data.map(brand=> ({
    value: brand.toLowerCase(),
    label: brand,
  }));