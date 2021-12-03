const fs = require('fs')

fs.readFile('src/day2.txt', 'utf-8', (err, data) => {
    if (err) console.log(err)

    let dataArr = data.split('\r\n')

    let depth = 0;
    let hzpos = 0;
    let aim = 0;

    for (data in dataArr) {
        let dataArr2 = dataArr[data].split(' ')

        if (dataArr2[0] === 'forward') {
            hzpos = hzpos + parseInt(dataArr2[1])
        }
        else if (dataArr2[0] === 'down') {
            depth = depth + parseInt(dataArr2[1])
        }
        else if (dataArr2[0] === 'up') {
            depth = depth - parseInt(dataArr2[1])
        }
    }
    partOneVal = depth * hzpos

    console.log(partOneVal)

    aim = 0;
    depth = 0;
    hzpos = 0;

    for (data in dataArr) {
        let dataArr2 = dataArr[data].split(' ')

        if (dataArr2[0] === 'forward') {
            hzpos = hzpos + parseInt(dataArr2[1])
            depth = depth + (aim * parseInt(dataArr2[1]))
        }
        else if (dataArr2[0] === 'down') {
            aim = aim + parseInt(dataArr2[1])
        }
        else if (dataArr2[0] === 'up') {
            aim = aim - parseInt(dataArr2[1])
        }
    }

    partTwoVal = depth * hzpos

    console.log(partTwoVal)
})