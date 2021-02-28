export default () => {
  const initialValue = {
    user: {
      currentUser: {},
      isAuth: false,
    },

    files: {
      files: [],
      currentDir: null,
    },

  }

  return initialValue
}
