
const FilterResByPrice = (results) => {
  const filteredResults = [[], [], []]
  let i = 0

  for (i = 0; i < results.length; i++) {
    if (results[i].price === '$' || results[i].price === '€') {
      filteredResults[0].push(results[i])
    } else if (results[i].price === '$$' || results[i].price === '€€') {
      filteredResults[1].push(results[i])
    } else {
      filteredResults[2].push(results[i])
    }
  }

  return filteredResults
}

export default FilterResByPrice