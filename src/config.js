export default {
  api:
    process.env.NODE_ENV === 'production' ? 'https://cahesbe.herokuapp.com' : 'http://localhost:5000'
}
