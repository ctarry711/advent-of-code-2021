const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  
  function parseData(data) {
    stringArray = data.split("\n")
    let numArray = []
    for (i=0; i<stringArray.length; i++) {
        const parsed = parseInt(stringArray[i])
        numArray.push(parsed)
    }
    return numArray
  }

  let parsedData = parseData(data)

  //First Part
  let counter1 = 0;
  for (i=0; i<parsedData.length; i++) {
    if (parsedData[i+1] > parsedData[i]) {counter1 += 1}
  }
  console.log(counter1)

  //Second Part
  let counter2 = 0;
  for (i=0; i<parsedData.length; i++) {
    sum1 = parsedData[i] + parsedData[i+1] + parsedData[i+2]
    sum2 = parsedData[i+1] + parsedData[i+2] + parsedData[i+3]
    if (sum2 > sum1) {counter2 += 1}
  }
  console.log(counter2)
})