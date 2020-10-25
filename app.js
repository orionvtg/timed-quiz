var timerCount = 100

var timerEl = document.querySelector("#timer")

timerEl.textContent = timerCount

var timer = window.setInterval(function (){
timerCount--;
timerEl.textContent = timerCount

if(timerCount === 0){
  clearInterval(timer)
}
},1000)

var questions = [
  { 
    q: "What is your name?", 
    choices: ["Orion", "Hunter","Yamit"], 
   a: "A" 
  }, 
  { 
    q: "Where is home?", 
    choices: ["Tiburon", "Mars","Joplin"], 
    a: "A"
  }]

  var questionsPointer = 0

  var question = document.querySelector("#question")
  var optionA = document.querySelector("#optionA")
  var optionB = document.querySelector("#optionB")
  var optionC = document.querySelector("#optionC")


  function setQuestions() {

    if (questionsPointer === questions.length) {
      clearInterval(timer)
      alert("You are done with " + timerCount + " seconds left!")
      return
    }
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0]
    optionB.textContent = questions[questionsPointer].choices[1]
    optionC.textContent = questions[questionsPointer].choices[2]
  }
 
  setQuestions()

  optionA.addEventListener("click", function () {
    if(optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
      console.log("right!")
      questionsPointer++
      setQuestions()
    } else {
      timerCount -= 10
    }
  })

  optionB.addEventListener("click", function () {
    if(optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
      console.log("right!")
      questionsPointer++
      setQuestions()
    } else {
      timerCount -= 10
    }
  })

  optionC.addEventListener("click", function () {
    if(optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
      console.log("right!")
      questionsPointer++
      setQuestions()
    } else {
      timerCount -= 10
    }
  })
  