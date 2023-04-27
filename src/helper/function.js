const shortText = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
  return newTitle;
};

const IsInCartSuggest = (state, id) => {
  const result = !!state.selectedItemsSuggest.find((item) => item.id === id);
  return result;
};
const IsInCartProduct = (state, id) => {
  const result = !!state.selectedItemsProduct.find((item) => item.id === id);
  return result;
};


const IsInCartAccesso = (state, id) => {
    const result = !!state.selectedItemsAccesso.find((item) => item.id === id);
    return result;
  };

const IsInCartBrand = (state, id) => {
  const result = !!state.selectedItemsBeter.find((item) => item.id === id);
  return result;
};

const quantityCountSuggest = (state, id) => {
  const index = state.selectedItemsSuggest.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItemsSuggest[index].quantity;
  }
};



const quantityCountAccesso = (state, id) => {
    const index = state.selectedItemsAccesso.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItemsAccesso[index].quantity;
    }
  };
const quantityCountBrand = (state, id) => {
    const index = state.selectedItemsBeter.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItemsBeter[index].quantity;
    }
  };

const numberWithComma = (number) => {
  const parse = parseInt(number);
  return parse.toLocaleString();
};

export { shortText,IsInCartProduct, IsInCartSuggest,IsInCartAccesso,quantityCountAccesso, quantityCountSuggest,quantityCountBrand, IsInCartBrand, numberWithComma };
