import axios from 'axios'

export default axios.create({
       baseURL:'https://api.yelp.com/v3/businesses',
       headers: {
         Authorization: 'Bearer A8pwpmNIQX4DsPlCT7N7x7dO1UQSKkKu1t5rY0WT-SkfRNCMpORI1Z9ZOVtQ6YbgW34lw68Sjs7Lv7xB2-JBr7t6DciUZgGbvLO1wYswnXDHQmuuQ4eqUaMpYVuQX3Yx'
       }
})
