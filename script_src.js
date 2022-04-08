function game(choice) {
    var hand = Math.floor(Math.random() * 3)
    /*
    0 == Rock
    1 == Paper
    2 == Scissor
    */
    switch (choice) {
        case 'R':
            if (hand == 0) {
                alert('Draw')
            } else if (hand == 1) {
                alert('Defeat')
            } else if (hand == 2) {
                alert('Win')
            }
            break;

        case 'P':
            if (hand == 0) {
                alert('Win')
            } else if (hand == 1) {
                alert('Draw')
            } else if (hand == 2) {
                alert('Defeat')
            }
            break;

        case 'S':
            if (hand == 0) {
                alert('Defeat')
            } else if (hand == 1) {
                alert('Win')
            } else if (hand == 2) {
                alert('Draw')
            }
            break;

    }
}

var updatetime = 1000

function run() {
    setInterval(updatetime, rotate)
}

function rotate() {
    if updatetime == 2000{
        game()

    } else{
        
    }
}