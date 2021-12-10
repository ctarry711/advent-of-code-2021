const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  
  function parseData(data) {
    linesArray = data.split("\n")
    console.log(linesArray)
    let parsedLines = []
    for (i=0; i<linesArray.length; i++) {
        lineSeperated = linesArray[i].split(" ")
        number = parseInt(lineSeperated[1])
        lineSeperated[1] = number
        
        parsedLines.push(lineSeperated)
    }
    return parsedLines
  }

  let parsedData = parseData(data);

  //Part 1
  let horizontal = 0;
  let depth = 0;

  for (i=0; i<parsedData.length; i++) {
      if (parsedData[i][0] == "forward") {horizontal += parsedData[i][1]} 
      else if (parsedData[i][0] == "down") {depth += parsedData[i][1]} 
      else if (parsedData[i][0] == "up") {depth -= parsedData[i][1]} 
  }

  console.log(horizontal*depth)

  //Part 2
  horizontal = 0;
  depth = 0;
  aim = 0;

  for (i=0; i<parsedData.length; i++) {
      if (parsedData[i][0] == "forward") {
          horizontal += parsedData[i][1]
          depth += aim*parsedData[i][1]} 
      else if (parsedData[i][0] == "down") {aim += parsedData[i][1]} 
      else if (parsedData[i][0] == "up") {aim -= parsedData[i][1]} 
  }

  console.log(horizontal*depth)
})