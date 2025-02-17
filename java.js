const questions = [
    { text: "What's your favorite activity?", options: ["Running", "Sleeping", "Playing", "Eating"], scores: [1, 2, 3, 4] },
    { text: "Pick a color!", options: ["Red", "Blue", "Green", "Yellow"], scores: [3, 1, 4, 2] }
];

let currentQuestion = 0;
let scores = [0, 0, 0, 0];

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.text;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    scores[index] += 1;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let maxScore = Math.max(...scores);
    let index = scores.indexOf(maxScore);
    let animals = ["Cheetah", "Koala", "Dog", "Panda"];
    document.getElementById("pawsona").innerText = animals[index];
    document.getElementById("result").classList.remove("hidden");
}

document.getElementById("next-btn").addEventListener("click", showQuestion);
showQuestion();
