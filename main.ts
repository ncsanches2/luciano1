let d = 0
function get_distance () {
    d = maqueen.Ultrasonic(PingUnit.Centimeters)
    while (d == 0) {
        d = maqueen.Ultrasonic(PingUnit.Centimeters)
    }
    return d
}
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 27)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) != 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 27)
        basic.pause(1000)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) != 0) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 27)
            basic.pause(1000)
        }
    }
    d = get_distance()
    console.logValue("distance", d)
if (d <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 27)
        basic.pause(1000)
    }
    if (d <= 5) {
        music.playMelody("C - C - G - G - ", 200)
        music.playMelody("A - A - G G - - ", 200)
        music.playMelody("F - F - E - E - ", 200)
        music.playMelody("D - D - C C - - ", 200)
    }
})
