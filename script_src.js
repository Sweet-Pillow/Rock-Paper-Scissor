var updatetime
var child
var machineHand
var HumanHand
var cont

function run(H) {
    HumanHand = H
    updatetime = 0.01
    cont = 0
    machineHand = Math.floor(Math.random() * 3)
    rotate()

}

function rotate() {
    if (updatetime >= 750) {
        game()

    } else {
        updatetime = cont ** 2
        cont++
        child = document.body.querySelectorAll('#MachineButtons > button')
        child[machineHand].style.backgroundColor = 'rgb(199, 4, 43)'
        child[machineHand].style.backgroundColor = 'rgb(199, 4, 43)'
        machineHand = (machineHand + 1) % 3
        child[machineHand].style.backgroundColor = 'green'
        setTimeout(rotate, updatetime)

    }
}

function game() {

    if (HumanHand == machineHand) {
        window.alert('Empate')
        return
    }

    switch (HumanHand) {
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
