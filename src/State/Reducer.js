// const initialState= {product:[],productId:null,price:0,qty:0,updateQty:{price:0,qty:0}}

export const Reducer = (state, action) => {
  const {type,payload}=action
  switch (type) {
    case "STORE_DATA":
      return {
        state,
        product: payload,
      };
    case "PRODUCT_ID":
      return {
        ...state,
        productId:payload
      };
    default:
      throw new Error("Unexpected action");
  }
};
