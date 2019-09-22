export const DELETE_ITEM = "DELETE_ITEM";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const deleteItem = id => ({
  type: DELETE_ITEM,
  id
});

export const changeQuantity = (id, quantity) => ({
  type: CHANGE_QUANTITY,
  id,
  quantity
});
