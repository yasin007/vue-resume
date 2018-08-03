// import {commonParams} from './config'
import axios from 'axios'

export function getSellerData() {
  const url = '/api/seller'
  var appData = require('./data.json')
  var seller = appData.seller
  // const data = Object.assign({}, commonParams, {})

  return axios.get(url, function (req, res) {
    res.send(seller)
  })
}
