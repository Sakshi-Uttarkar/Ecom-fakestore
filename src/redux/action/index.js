export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const getItemCart = (allItems) => ({
  type: "GETITEMS",
  payload: allItems,
});

export const updateProductQuantity = (productid) => ({
  type: "UPDATE_PRODUCT_QUANTITY",
  payload: productid,
});

export const updateProductQuantity1 = (productid) => ({
  type: "UPDATE_PRODUCT_QUANTITY1",
  payload: productid,
});
