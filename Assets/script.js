const passwordGenerator = function (passLength) {
  let charAmt = ""
  let addUpper = undefined
  let addLower = undefined
  let addNumbers = undefined
  let addSpecial = undefined

  charAmt = prompt("enter a number between 8 and 128.")
  while (charAmt < 8 || charAmt > 128) {
    charAmt = prompt("Must be between 8 and 32 characters!")
  }
  console.log("After while loop : " + charAmt)

  addUpper = confirm("Add Uppercase Characters?")
  console.log("Add Uppercase : " + addUpper)
  addLower = confirm("Add Lowercase Characters?")
  console.log("Add Lowercase : " + addLower)
  addNumbers = confirm("Add Numbers?")
  console.log("Add Numbers : " + addNumbers)
  addSpecial = confirm("Add Special Characters?")
  console.log("Add Special : " + addSpecial)

  if (charAmt)
    if (addLower === false && addNumbers === false && addUpper === false && addSpecial === false) {
      passwordGenerator()
    }

  let len = (passLength) ? (passLength) : (charAmt)
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let special = '~!@#$%^&*()|}{[]_+?<>,./-='
  let number = '0123456789'
  let content = ''
  let characters = ''
  let password = ''
  while (password.length < len) {
    if (addUpper === true) {
    generateUpper = Math.floor(upper.length * Math.random())
      characters += upper.charAt(generateUpper)
    }
    if (addLower === true) {
      generateLower = Math.floor(lower.length * Math.random())
      characters += lower.charAt(generateLower)
    }
    if (addNumbers === true) {
      generateNumber = Math.floor(number.length * Math.random())
      characters += number.charAt(generateNumber)
    }
    if (addSpecial === true) {
      generateSpecial = Math.floor(special.length * Math.random())
      characters += special.charAt(generateSpecial)
    }
    password = characters
  }
  password = password.split('').sort(function () {
    return 0.5 - Math.random()
  }).join('')
  return password.substr(0, charAmt)
}


document.getElementById('generate-pwd').addEventListener("click", function () {
  document.getElementById('password').textContent = passwordGenerator()
})