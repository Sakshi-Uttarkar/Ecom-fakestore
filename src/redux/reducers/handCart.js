const cart = [];

const handCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        const allItems = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );

        localStorage.setItem("Cartdata", JSON.stringify(allItems));

        return allItems;
      } else {
        const product = action.payload;

        const allItems = [
          ...state,

          {
            ...product,

            qty: 1,
          },
        ];

        localStorage.setItem("Cartdata", JSON.stringify(allItems));

        return allItems;
      }

      break;

    case "GETITEMS":
      let allItems = localStorage.getItem("Cartdata");

      return JSON.parse(allItems);

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        localStorage.setItem("Cartdata", JSON.stringify(state));

        return state.filter((x) => x.id !== exist1.id);
      } else {
        localStorage.setItem("Cartdata", JSON.stringify(state));

        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

      break;

    case "UPDATE_PRODUCT_QUANTITY":
      return state.map((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty + 1;
        }

        localStorage.setItem("Cartdata", JSON.stringify(product));

        return product;
      });

    case "UPDATE_PRODUCT_QUANTITY1":
      return state.map((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty - 1;
        }

        localStorage.setItem("Cartdata", JSON.stringify(product));

        return product;
      });

      break;

    default:
      return state;

      break;
  }
};

export default handCart;
