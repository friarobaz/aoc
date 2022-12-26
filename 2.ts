// https://adventofcode.com/2022/day/2 | Run with `deno run --allow-read 2.ts`

const rounds = (await Deno.readTextFile("./input.txt")).split("\n")

const shapes = [
  {
    name: "Rock",
    letters: ["A", "X"],
    points: 1,
    winsAgainst: "Scissors",
  },
  {
    name: "Paper",
    letters: ["B", "Y"],
    points: 2,
    winsAgainst: "Rock",
  },
  {
    name: "Scissors",
    letters: ["C", "Z"],
    points: 3,
    winsAgainst: "Paper",
  },
]
const outcomePoints = { lost: 0, draw: 3, win: 6 }

const getOutcome = (hisShape, myShape) => {
  if (hisShape === myShape) return "draw"
  if (hisShape.winsAgainst === myShape.name) return "lost"
  if (myShape.winsAgainst === hisShape.name) return "win"
}

const getShape = (letter) => {
  for (const shape of shapes) {
    if (shape.letters.includes(letter)) return shape
  }
}

console.clear()
let total = 0

//For each round
for (let i = 0; i < rounds.length; i++) {
  const myShape = getShape(rounds[i].split(" ")[1])
  const hisShape = getShape(rounds[i].split(" ")[0])
  const outcome = getOutcome(hisShape, myShape)
  const roundPoints = myShape.points + outcomePoints[outcome]
  total += roundPoints

  console.log(
    `Round ${i + 1} : `,
    hisShape.name,
    myShape.name,
    outcome,
    roundPoints
  )
}

console.log(`\nTotal : ${total} points\n`)
