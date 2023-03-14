export function weatherReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true, data: null, error: null };
    case "SUCCESS":
      return { isLoading: false, data: action.data, error: null };
    case "ERROR":
      return { isLoading: false, data: null, error: action.error };
    default:
      throw new Error("is not exist type");
  }
}
