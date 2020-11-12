
const FilterResByPrice = (results) => {
  const filteredResults = [[], [], []]
  const length = results.length
  let i = 0

  for (i = 0; i < length; i++) {
    (results[i].price === '$' || results[i].price === '€')
      ? filteredResults[0].push(results[i]) 
      : (results[i].price === '$$' || results[i].price === '€€')
        ? filteredResults[1].push(results[i]) 
        : filteredResults[2].push(results[i])
  }
   
  return filteredResults
}  

export default FilterResByPrice