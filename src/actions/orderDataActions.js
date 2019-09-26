export const DELETE_ITEM = "DELETE_ITEM";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const onDeleteItem = id => ({
  type: DELETE_ITEM,
  id
});

export const onChangeQuantity = (id, quantity) => ({
  type: CHANGE_QUANTITY,
  id,
  quantity
});
