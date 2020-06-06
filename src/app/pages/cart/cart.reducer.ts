import * as CartActions from './cart.actions';
import { Cart } from 'src/app/types';

const initialState: Cart = {
  addedBooks: [],
  displayDialog: false,
};

export const cartReducer = (
  state = initialState,
  action: CartActions.AddItemIntoCart
) => {
  switch (action.type) {
    case CartActions.ADD_ITEM_INTO_CART:
      return {
        ...state,
        displayDialog: true,
        addedBooks: [...state.addedBooks, action.book],
      };
    default:
      return state;
  }
};
