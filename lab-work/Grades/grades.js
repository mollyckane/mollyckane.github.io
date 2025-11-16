//get num subjects + results per subject
function getResults() {
    let sum=0;
    let numSubjects = parseInt(document.getElementById("num_subjects").value);

    for (i = 0; i < numSubjects; i++) {
        let grade=parseInt(prompt("Please enter grade for Subject "+(i+1)+" (from 1-100%):"));
        
        document.getElementById("subject-results-container").innerHTML += "Subject #"+(i+1)+":  "+grade+"%"+ "<br />";
        sum += grade;
        
    }

    let avg = sum / numSubjects;
    console.log(avg);

    document.getElementById("grade-avg-container").innerHTML += "Your average for " + (i + 1) + " subjects is: <br/>" + avg.toFixed(2) + "%";

    if(avg >= 85){
        document.getElementById("grade-container").innerHTML += "A";
    } else if(avg>=70 && avg<85){
        document.getElementById("grade-container").innerHTML += "B";
    } else if(avg>=55 && avg<70) {
        document.getElementById("grade-container").innerHTML += "C";
    } else if(avg>=40 && avg<55){
        document.getElementById("grade-container").innerHTML += "D";
    }else if(avg>=25 && avg<40 ){
        document.getElementById("grade-container").innerHTML += "E";
    }else {
        document.getElementById("grade-container").innerHTML += "F / Fail";
    }
}

$("button").click(function () {
    $(".hidden").show();
});
