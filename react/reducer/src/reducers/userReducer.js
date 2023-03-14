export function userReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "REMOVE":
      return state.filter((user) => user.id !== action.data.id);
    case "UPDATE":
      return state.map((user) =>
        user.id === action.data.id ? action.data : user
      );
    default:
      throw new Error("해당 액션 타입 없음");
  }
}
