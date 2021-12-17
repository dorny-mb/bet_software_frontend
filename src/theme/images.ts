// v4 causes dynamic image imports to be objects: https://github.com/facebook/create-react-app/issues/9992
export default {
  bg: require('../assets/images/core-bg.jpg')?.default,
  bgDark: require('../assets/images/core-bg-dark.jpg')?.default,
  logo: require('../assets/images/logo.png')?.default,
  404: require('../assets/images/404.svg')?.default,
  noData: require('../assets/images/illustration-empty.svg')?.default
}
