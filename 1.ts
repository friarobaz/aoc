// https://adventofcode.com/2022/day/1 | Run with `deno run --allow-read 1.ts`

const elves = (await Deno.readTextFile("./input.txt")).split("\n\n")
const calories = []
for (const elf of elves) {
  const cal = elf.split("\n").reduce((p, a) => p + parseInt(a), 0)
  calories.push(cal)
}
calories.sort(function (a, b) {
  return b - a
})

console.log(calories[0] + calories[1] + calories[2])

//const elves = lines.split()
