export const user = (state) => {
  console.log(state)
  return {
    isLogin: state.token.length > 0,
    isAdmin: state.role === 1,
    ...state
  }
}
