input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    this_is_getting_too_complicated += 1
    basic.pause(1000)
    this_is_getting_too_complicated += -1
})
input.onButtonPressed(Button.A, function () {
    basic.showString("-")
    if (1 == send_or_not_you_will) {
        radio.sendString("-")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (1 == send_or_not_you_will) {
        radio.sendString(" ")
    }
})
radio.onReceivedString(function (receivedString) {
    while (0 != 0) {
        if (1 == this_is_getting_too_complicated) {
            basic.showString(receivedString)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    if (1 == send_or_not_you_will) {
        radio.sendString(".")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    send_or_not_you_will += 1
    basic.pause(44)
    send_or_not_you_will += -1
})
let send_or_not_you_will = 0
let this_is_getting_too_complicated = 0
let Do_I_carry_on = 0
this_is_getting_too_complicated = 0
let read_message_or_not_you_will = 0
send_or_not_you_will = 0
radio.setGroup(1)
radio.sendNumber(74)
radio.setTransmitPower(7)
