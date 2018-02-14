const app = "I don't do much."
function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield']
  var kittens = [...kittens, name]
  return kittens
}

function prependKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield']
  var kittens = [name, ...kittens]
  return kittens
}

function removeLastKitten(){
  kittens.slice(kittens.length(-1))
  return kittens
}