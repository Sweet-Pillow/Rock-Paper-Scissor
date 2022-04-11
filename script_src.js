var updatetime = 0.01
var myTimeout
var machineChild = document.body.querySelectorAll('.machineButton')
var machineHand = Math.floor(Math.random() * 3)
var humanChild = document.body.querySelectorAll('.humanButton')
var humanHand = 0
var cont = 0

function run(H) {
    reset()
    humanHand = H
    humanChild[humanHand].style.backgroundColor = 'darkmagenta'
    rotate()

}

function rotate() {
    if (updatetime >= 650) {
        game()

    } else {
        updatetime = cont ** 2
        cont++
        machineChild[machineHand].style.backgroundColor = 'rgb(199, 4, 43)'
        machineHand = (machineHand + 1) % 3
        machineChild[machineHand].style.backgroundColor = 'green'
        myTimeout = setTimeout(rotate, updatetime)

    }
}

function game() {

    if (humanHand == machineHand) {
        window.alert('Empate')
        return
    }

    switch (humanHand) {
        case 0:
            if (machineHand == 1) {
                window.alert('A Maquina ganhou!!')

            } else if (machineHand == 2) {
                window.alert('Você ganhou')

            }
            break;

        case 1:
            if (machineHand == 2) {
                window.alert('A Maquina ganhou!!')

            } else if (machineHand == 0) {
                window.alert('Você ganhou')

            }
            break;

        case 2:
            if (machineHand == 0) {
                window.alert('A Maquina ganhou!!')

            } else if (machineHand == 1) {
                window.alert('Você ganhou')

            }
            break;

        default:
            window.alert('Se essa mensagem apareceu é pq alguma coisa deu muito errado!!!! (corra para as colinas)')

    }

}

function reset() {
    console.log('reset ' + machineHand)
    clearTimeout(myTimeout)
    updatetime = 0.01
    cont = 0
    humanChild[humanHand].style.backgroundColor = '#008CBA'
    machineChild[machineHand].style.backgroundColor = 'rgb(199, 4, 43)'
    machineHand = Math.floor(Math.random() * 3)

}