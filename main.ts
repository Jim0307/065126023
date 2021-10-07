let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    X += 0
    Y = 0
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
    basic.clearScreen()
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    X += 0
    Y = 0
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
        }
        if (true) {
        	
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    X += 0
    Y = 0
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
    basic.clearScreen()
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
})
