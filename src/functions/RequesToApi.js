import React from 'react'
import yelp from '../api/yelp'


const RequestToApi = (argOne, actionOne, actionTwo) => {
  (async () => {
    try {
      const response = await yelp.get(argOne)
      actionOne(response.data)
    } catch (err) {
      actionTwo (
         'We are so sorry, but there is no answer from the server, please try again later!'
       )
    }
  })()
}

export default RequestToApi