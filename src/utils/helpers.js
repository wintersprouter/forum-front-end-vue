import axios from 'axios'

const baseURL = 'https://forum-express-api.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})