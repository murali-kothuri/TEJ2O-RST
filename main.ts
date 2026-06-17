/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali and Yusuf
 * Created on: June 2026
 * This program is for the microbit elevator
 *  where it uses a pulley and a steper motor 
 * to pull the shaft up.
*/

let Level_Number = 0

// Button A: Go UP one floor (Max floor is 2)
input.onButtonPressed(Button.A, function () {
    // Only allow moving up if we are below Floor 2
    if (Level_Number < 2) {
        Level_Number += 1
        basic.showArrow(ArrowNames.North)

        // Moves both Stepper M1 and M2 forward by 360 degrees (1 full turn)
        robotbit.StepperDual(460, 460)

        basic.showNumber(Level_Number)
    }
})

// Button B: Go DOWN one floor
input.onButtonPressed(Button.B, function () {
    if (Level_Number > 0) {
        Level_Number -= 1
        basic.showArrow(ArrowNames.South)

        // Moves both Stepper M1 and M2 backward by 360 degrees (-360)
        robotbit.StepperDual(-470, -470)

        basic.showNumber(Level_Number)
        check_if_ground_floor()
    }
})

// Check if back at ground level
function check_if_ground_floor() {
    if (Level_Number == 0) {
        basic.showString("G")
    }
}
