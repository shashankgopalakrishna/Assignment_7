/*eslint-env browser*/

//STEP 1
function displayMessage() {
    window.alert("I have been clicked");
}


window.addEventListener("load", function () {
    //STEP 2
    var task2Button = document.getElementById("task2");
    task2Button.onclick = function () {
        window.alert("I have been clicked");
    }

    //STEP 3
    var task3Button = document.getElementById("task3");
    function userFunction() {
        window.alert("I have been clicked");
    }
    task3Button.addEventListener("click", userFunction);

    //STEP 4
    var task4Button = document.getElementById("task4");
    task4Button.addEventListener("click", function() {
        window.alert("I have been clicked");
    });
    
    //STEP 5 - written this script within head tag
    // var task5Button = document.getElementById("task5");
    // task5Button.addEventListener("click", function() {
    //     window.alert("I have been clicked");
    // });
});

