// import {commonParams} from './config'
import axios from 'axios'

export function getSellerData() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  var appData = require('./data.json')
  var seller = appData.seller
  // const data = Object.assign({}, commonParams, {})

  return axios.get(url, {
    // params: data
  }).then((res) => {
    return seller
  })
}

