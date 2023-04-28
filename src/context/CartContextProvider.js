import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItemsProduct: [],
  selectedItemsBeter: [],
  selectedItemsSuggest: [],
  selectedItemsAccesso: [],
  selectedProDetail: [],
  itemsCounter: 0,
  total: 0,
  chekout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS-SUGGEST":
      if (
        !state.selectedItemsSuggest.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemsSuggest.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsSuggest: [...state.selectedItemsSuggest],
        ...sumItems(state.selectedItemsSuggest),
        chekout: false,
      };

    case "ADD_ITEMSPRODUCT_DET":
      if (
        !state.selectedProDetail.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProDetail.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedProDetail: [...state.selectedProDetail],
        ...sumItems(state.selectedProDetail),
        chekout: false,
      };

    case "ADD_ITEMS-PRODUCT":
      if (
        !state.selectedItemsProduct.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemsProduct.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsProduct: [...state.selectedItemsProduct],
        ...sumItems(state.selectedItemsProduct),
        chekout: false,
      };

    case "ADD_ITEMS-ACCESS0":
      if (
        !state.selectedItemsAccesso.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemsAccesso.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsAccesso: [...state.selectedItemsAccesso],
        ...sumItems(state.selectedItemsAccesso),
        chekout: false,
      };

    case "ADD_ITEMS_BRAND":
      if (
        !state.selectedItemsBeter.find((item) => item.id === action.payload.id)
      ) {
        state.selectedItemsBeter.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsBeter: [...state.selectedItemsBeter],
        ...sumItems(state.selectedItemsBeter),
        chekout: false,
      };

    case "REMOVE-ITEM-SUGGEST":
      const newSelectedItems = state.selectedItemsSuggest.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsSuggest: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "REMOVE-ITEM-PRODUCT":
      const newSelectedItemsProduct = state.selectedItemsProduct.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsProduct: [...newSelectedItemsProduct],
        ...sumItems(newSelectedItemsProduct),
      };

    case "REMOVE-ITEM-PRODUCT_DET":
      const newSelectedItemsProductDet = state.selectedProDetail.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedProDetail: [...newSelectedItemsProductDet],
        ...sumItems(newSelectedItemsProductDet),
      };

    case "REMOVE-ITEM-ACCEESO":
      const newSelectedItemsAccesso = state.selectedItemsAccesso.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsAccesso: [...newSelectedItemsAccesso],
        ...sumItems(newSelectedItemsAccesso),
      };

    case "REMOVE-ITEM-FROM-BRAND":
      const newSelectedItemsBrand = state.selectedItemsBeter.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsBeter: [...newSelectedItemsBrand],
        ...sumItems(newSelectedItemsBrand),
      };

    case "INCRESS-SUGGEST":
      const indexI = state.selectedItemsSuggest.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsSuggest[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsSuggest),
      };

    case "INCRESS-ACCESSO":
      const indexIo = state.selectedItemsAccesso.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsAccesso[indexIo].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsAccesso),
      };
    case "INCRESS-BRAND":
      const indexIB = state.selectedItemsBeter.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsBeter[indexIB].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsBeter),
      };



      case "INCRESS-PRODUCT":
        const indexIP=state.selectedItemsProduct.findIndex(item=>item.id===action.payload.id)
        state.selectedItemsProduct[indexIP].quantity++;
        return{
            ...state,
            ...sumItems(state.selectedItemsProduct) 
        }


        case "INCRESS-PRODUCT-DET":
          const indexIPD=state.selectedProDetail.findIndex(item=>item.id===action.payload.id)
          state.selectedProDetail[indexIPD].quantity++;
          return{
              ...state,
              ...sumItems(state.selectedProDetail) 
          }

    case "DECRESS-SUGGEST":
      const indexD = state.selectedItemsSuggest.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsSuggest[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItemsSuggest),
      };
    case "DECRESS-BRAND":
      const indexDB = state.selectedItemsBeter.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsBeter[indexDB].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItemsBeter),
      };

      case "DECRESS-PRODUCT":
        const indexIPM = state.selectedItemsProduct.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItemsProduct[indexIPM].quantity--;
        return {
          ...state,
          ...sumItems(state.selectedItemsBeter),
        };


      case "DECRESS-PRODUCT-DET":
        const indexIPDM = state.selectedProDetail.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedProDetail[indexIPDM].quantity--;
        return {
          ...state,
          ...sumItems(state.selectedProDetail),
        };

    case "DECRESS-ACCESSO":
      const indexDO = state.selectedItemsAccesso.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsAccesso[indexDO].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItemsAccesso),
      };

    case "CHECKOUT":
      return {
        selectedItemsAccesso: [],
        selectedItemsBeter: [],
        selectedItemsSuggest: [],
        itemsCounter: 0,
        total: 0,
        chekout: true,
      };
    case "CLEAR":
      return {
        selectedItemsAccesso: [],
        selectedItemsBeter: [],
        selectedItemsSuggest: [],
        itemsCounter: 0,
        total: 0,
        chekout: false,
      };
    default:
      return state;
  }
};
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
