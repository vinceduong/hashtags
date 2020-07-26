const randomWordEng = require('random-words')
const randomWordFr = require('random-word-fr')

if (process.argv.length < 4) {
  console.log('Help: node hashtags.js --suffix {suffix} --language {language} --random {number} {word1} {word2} ...')
  return
}

let suffix = ''

let language = 'fr'

let random = false

const arguments = process.argv.splice(2)

const words = []

for (let i = 0; i < arguments.length; i++) {
  let arg = arguments[i]

  switch (arg) {
    case '--suffix':
      suffix = arguments[i + 1]
      i++
      break;
    case '--language':
      language = arguments[i + 1]
      i++
      break;
    case '--random':
      random = +arguments[i + 1]
      i++
      break;
    default:
      words.push(arg)
      break;
  }
}

if (random) {
  for (let i = 0; i < random; i++) {
    if (language === 'fr') {
      words.push(randomWordFr())
    }
    if (language === 'eng') {
      words.push(randomWordEng())
    }
  }
}

console.log(words.map(word => `#${word}${suffix}`).join(' '))
