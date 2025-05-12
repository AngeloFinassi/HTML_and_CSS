document.addEventListener("DOMContentLoaded", function () {
    var Cbut = document.getElementsByClassName("q_correct")[0];
    var Wbut1 = document.getElementsByClassName("q_wrong")[0];
    var Wbut2 = document.getElementsByClassName("q_wrong")[1];
    var feedback = document.getElementById("feedback-mc");

    var answer_ip = document.getElementById("answer_fr")
    var Check_bt = document.getElementById("Ans_send")
    var feedback2 = document.getElementById("feedback-fr");

    //Part1
    Cbut.addEventListener("click", function () {
        Cbut.style.backgroundColor = "green";
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    });

    Wbut1.addEventListener("click", function () {
        Wbut1.style.backgroundColor = "red";
        feedback.textContent = "Incorrect";
        feedback.style.color = "red";
    });

    Wbut2.addEventListener("click", function () {
        Wbut2.style.backgroundColor = "red";
        feedback.textContent = "Incorrect";
        feedback.style.color = "red";
    });

    //Part2
    Check_bt.addEventListener("click", function (){
        answer = answer_ip.value.trim().toLowerCase();

        if(answer === 'russia'){
            answer_ip.style.backgroundColor = "lightgreen";
            feedback2.textContent = "Correct!";
            feedback2.style.color = "green";
        }

        else{
            answer_ip.style.backgroundColor = "lightcoral";
            feedback2.textContent = "Incorrect";
            feedback2.style.color = "red";
        }
    })
});