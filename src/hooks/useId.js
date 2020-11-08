import yelp from '../api/yelp'

export default async function idApi(id, actionOne, actionTwo) {
  try {
    const response = await yelp.get(`${id}`)
    actionOne(response.data)
  } catch (err) {
    actionTwo(
    'We are so sorry, but there is no answer from the server, please try again later!'
    )
  }
  return
}

