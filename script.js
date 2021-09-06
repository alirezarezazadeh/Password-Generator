const letters = "abcdefghijklmnopqrstuvwxyz"
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols = "!@#$%^&*_-+="
const numbers = "0123456789"
const incCapital = document.getElementById("capital")
const incNumbers = document.getElementById("numbers")
const incSymbols = document.getElementById("symbols")
const passwordTxt = document.getElementById("password")
const length = document.getElementById("length")
const generateBtn = document.getElementById("generate")

generateBtn.addEventListener("click", () => {
  let characters = letters
  incCapital.checked ? (characters += capital) : ""
  incNumbers.checked ? (characters += numbers) : ""
  incSymbols.checked ? (characters += symbols) : ""
  passwordTxt.value = generatePassword(length.value, characters)
})

//Generate Password Button
const generatePassword = (length, characters) => {
  let password = ""
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }
  return password
};

//Copy Password Button
const copyBtn = document.getElementById("copy")
copyBtn.addEventListener("click", () => {
  passwordTxt.select()
  document.execCommand("copy")
  alert("Password Copied")
})