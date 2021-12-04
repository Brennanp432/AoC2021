const fs = require('fs')

const lines = fs
  .readFileSync("src/day4.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));


partOne(lines)
partTwo()

function partOne(input) {

}

function partTwo() {

}