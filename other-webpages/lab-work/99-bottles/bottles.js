function generateLyrics(){
    let song=0;
    // clear previous results
    document.getElementById("lyrics-container").innerHTML = "";
    for (i=99;i>=0;i--){
        if (i>1) {
            song = (song + i) + " bottles of beer on the wall, " + i + " bottles of beer.<br/>" + "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br/><br/>";
        }
        else if (i == 1) {
            song = song + "1 bottle of beer on the wall, 1 bottle of beer.<br/>" + "Take one down and pass it around, no more bottles of beer on the wall.<br/><br/>";
        }
        else {
            song = song + "No more bottles of beer on the wall, no more bottles of beer.<br/>" + "Go to the store and buy some more, " + " 99 bottles of beer on the wall.<br/><br/>";
        }
    }
    document.getElementById("lyrics-container").innerHTML += song;
}

$("button").click(function () {
    $(".hidden").show();
});