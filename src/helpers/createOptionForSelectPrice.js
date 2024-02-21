import data from '../const/price.json'

export const price = data.map(cost=> ({
    value: cost.toLowerCase(),
    label: cost,
  }));
