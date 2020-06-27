
var checked = [false, false, false, false, false, false, false, false, false];
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var p1 = false, p2 = false;
var win = false;
var gameover = false;
var count = 0;
var start = false;
var player1 = 0;
var player2 = 0;

document.getElementById('but').addEventListener('click', function () {
    p1 = true;
    document.getElementById('player').innerHTML = '1';
    document.getElementById('alert').innerHTML = "may the best win!";
    start = true;
})

function check(index) {
    if (!checked[index]) {
        checked[index] = true;
        if (p1) {
            document.getElementsByTagName('p')[index].innerHTML = "X";
            arr[index] = 'x';
            count++;
            console.log(count + "x")
        }
        else {
            document.getElementsByTagName('p')[index].innerHTML = "O";
            arr[index] = 'o';
            count++;
            console.log(count + "o")
        }
        return true;
    }
    return false;

}

function player() {
    if (p1) {
        p1 = false;
        p2 = true;
        document.getElementById('player').innerHTML = '2';
    }
    else {
        p2 = false;
        p1 = true;
        document.getElementById('player').innerHTML = '1';
    }
}

document.getElementById('0').addEventListener('click', function () {
    if(start){
    
    var c = check(0);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('1').addEventListener('click', function () {
    if(start){
   
    var c = check(1);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('2').addEventListener('click', function () {
    if(start){
    
    var c = check(2);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('3').addEventListener('click', function () {
    if(start){
    
    var c = check(3);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('4').addEventListener('click', function () {
    if(start){
    
    var c = check(4);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('5').addEventListener('click', function () {
    if(start){
    
    var c = check(5);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('6').addEventListener('click', function () {
    if(start){
    
    var c = check(6);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    else {
        setTimeout(reset,3000);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('7').addEventListener('click', function () {
    if(start){
    
    var c = check(7);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    
    else {
        setTimeout(reset,3000);
        console.log(win);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})
document.getElementById('8').addEventListener('click', function () {
    if(start){
    
    var c = check(8);
    console.log(c + "c");
    wincheck();
    if (!win && count<9) {
        if (c)
            player();
    }
    
    else {
        setTimeout(reset,3000);
        console.log(win);
    }
}
else{
    document.getElementById('alert').innerHTML = "Please start the game!"
}
})

function wincheck() {
    
    if ((arr[0] == 'x' && arr[1] == 'x' && arr[2] == 'x') || (arr[3] == 'x' && arr[4] == 'x' && arr[5] == 'x') || (arr[6] == 'x' && arr[7] == 'x' && arr[8] == 'x') || (arr[0] == 'x' && arr[3] == 'x' && arr[6] == 'x') || (arr[1] == 'x' && arr[4] == 'x' && arr[7] == 'x') || (arr[2] == 'x' && arr[5] == 'x' && arr[8] == 'x') || (arr[0] == 'x' && arr[4] == 'x' && arr[8] == 'x') || (arr[2] == 'x' && arr[4] == 'x' && arr[6] == 'x')) {
        win = true;
        gameover = true;
        document.getElementById('alert').innerHTML = "Player 1 won!"
        player1++;
        document.getElementsByTagName('td')[0].innerHTML = player1;
    }
    if ((arr[0] == 'o' && arr[1] == 'o' && arr[2] == 'o') || (arr[3] == 'o' && arr[4] == 'o' && arr[5] == 'o') || (arr[6] == 'o' && arr[7] == 'o' && arr[8] == 'o') || (arr[0] == 'o' && arr[3] == 'o' && arr[6] == 'o') ||  (arr[1] == 'o' && arr[4] == 'o' && arr[7] == 'o') || (arr[2] == 'o' && arr[5] == 'o' && arr[8] == 'o') || (arr[0] == 'o' && arr[4] == 'o' && arr[8] == 'o') || (arr[2] == 'o' && arr[4] == 'o' && arr[6] == 'o')) {
        win = true;
        gameover = true;
        document.getElementById('alert').innerHTML = "Player 2 won!"
        player2++;
        document.getElementsByTagName('td')[1].innerHTML = player2;
    }
}

function reset() {


    checked = [false, false, false, false, false, false, false, false, false];
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    count = 0;
    p1 = false;
    p2 = false;
    win = false;
    gameover = false;
    start = false;
    document.getElementById('alert').innerHTML = "may the best win!";
    document.getElementById('player').innerHTML = '';
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].innerHTML = '';
    }
}

document.getElementById('but2').addEventListener('click',function(){
    reset();
    player1 = 0;
    player2 = 0;
    document.getElementsByTagName('td')[0].innerHTML = player1;
    document.getElementsByTagName('td')[1].innerHTML = player2;
})




