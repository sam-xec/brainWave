
const score = {
    correct: {
        index: [],
        points: 0
    },
    wrong: {
        index: [],
        points: 0
    }
};

const quizData = [
    {
        question: "You just fixed a bug that took you all day to figure out, and now your code finally works. What’s the next move?",
        options: [
            "Commit and push before it breaks again.",
            "Take a victory lap around the office.",
            "Act like you knew the solution all along.",
            "Time to break something else."
        ],
        answer: "Commit and push before it breaks again."
    },
    {
        question: "Your project manager says, 'It’s just a small change, it won’t take long.' What’s your internal monologue?",
        options: [
            "Famous last words.",
            "Just like last time, right?",
            "Define ‘small’.",
            "Sure, if you like living dangerously."
        ],
        answer: "Famous last words."
    },
    {
        question: "You’ve been debugging for hours, and the issue was a missing semicolon. What’s your first reaction?",
        options: [
            "Of course, it’s always the semicolon.",
            "Semicolons are my nemesis.",
            "Who needs punctuation anyway?",
            "Time to take up a new hobby."
        ],
        answer: "Semicolons are my nemesis."
    },
    {
        question: "You deploy your code, and everything crashes. What’s your go-to move?",
        options: [
            "Blame the server.",
            "Quickly rollback and act like nothing happened.",
            "Pretend you’re as surprised as everyone else.",
            "Step 1: Panic. Step 2: Fix it."
        ],
        answer: "Quickly rollback and act like nothing happened."
    },
    {
        question: "Your friend asks you to explain your code, but you know it’s a mess. How do you respond?",
        options: [
            "Let’s just say it works… somehow.",
            "It’s more of an art than a science.",
            "Don’t worry about it, it’s a ‘me’ thing.",
            "If it works, it’s good code."
        ],
        answer: "If it works, it’s good code."
    }
];

function display(mcq) {
    const content = `
    <form>
        <fieldset>
            <legend id="question">${mcq.question}</legend>
            <label>
                <input type="radio" name="question1" value="${mcq.options[0]}"> ${mcq.options[0]}
            </label><br>
            <label>
                <input type="radio" name="question1" value="${mcq.options[1]}"> ${mcq.options[1]}
            </label><br>
            <label>
                <input type="radio" name="question1" value="${mcq.options[2]}"> ${mcq.options[2]}
            </label><br>
            <label>
                <input type="radio" name="question1" value="${mcq.options[3]}"> ${mcq.options[3]}
            </label>
        </fieldset>
    </form>`;
  
    let displayDiv = document.querySelector('#display-mcq');
    displayDiv.innerHTML = content;
}

let index = 0;
const btn = document.querySelector('#submit-btn');

function checkerTheAnswer(index, mcq) {
    const ans = document.querySelector('input[name="question1"]:checked');
    
    if (!ans) {
        return alert('Please select your answer');
    }

    if (mcq.answer === ans.value) {
        score.correct.points++;
        score.correct.index.push(index);
    } else {
        score.wrong.points++;
        score.wrong.index.push(index);
    }
}

btn.addEventListener('click', function (e) {
    e.preventDefault();

   
    if (index >= quizData.length) {
        return alert('You have completed the quiz');
    }

    
    if (index > 0) {
        checkerTheAnswer(index - 1, quizData[index - 1]);
    }

   
    display(quizData[index]);

    index++;

 
    if (index === quizData.length) {
        btn.innerText = 'Complete Quiz';
    } else {
        btn.innerText = 'Next Question';
    }

    console.log("Score:", score.correct.points, "Correct answers:", score.correct.index);
});


display(quizData[0]);
