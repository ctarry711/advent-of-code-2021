const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  
  function parseData(data) {
    linesArray = data.split("\n")
    /*let parsedLines = []
    for (i=0; i<linesArray.length; i++) {
        lineSeperated = linesArray[i].split(" ")
        number = parseInt(lineSeperated[1])
        lineSeperated[1] = number
        
        parsedLines.push(lineSeperated)
    }*/
    return linesArray
  }

  let parsedData = parseData(data);

  console.log(parsedData)

  //Part 1
  gammaCounter = [0,0,0,0,0,0,0,0,0,0,0,0]
  for (i=0; i<parsedData.length; i++){
    for (j=0; j<12; j++) {
      if (parsedData[i][j] == "1") [gammaCounter[j]+=1]
    }
  }
  
  let gammaRate = [0,0,0,0,0,0,0,0,0,0,0,0]
  let epsilonRate = [1,1,1,1,1,1,1,1,1,1,1,1]
  for (i=0; i<12; i++){
    if (gammaCounter[i] > parsedData.length/2){
      gammaRate[i] = 1
      epsilonRate[i] = 0}
  }

  console.log(gammaRate);
  console.log(epsilonRate)

  gammaRatejoin = parseInt(gammaRate.join(""),2)
  epsilonRatejoin = parseInt(epsilonRate.join(""),2)

  console.log(gammaRatejoin*epsilonRatejoin)
})