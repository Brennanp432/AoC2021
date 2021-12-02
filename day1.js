const fs = require('fs')

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) console.log(err)

    let dataArr = data.split('\r\n')

    let counter = 0;

    for (data in dataArr) {
        if (data >= 3) {
            let priorVal = parseInt(dataArr[data-2]) + parseInt(dataArr[data-3]) + parseInt(dataArr[data-4])
            let currentVal = parseInt(dataArr[data-1]) + parseInt(dataArr[data-2]) + parseInt(dataArr[data-3])
               if (currentVal > priorVal && priorVal != NaN) {
                   counter++
               }
            }
    }
    console.log(counter)
})

