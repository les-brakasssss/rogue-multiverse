export class InputState {
    constructor(public states: any = {}, public changed: boolean = true, public released: boolean = false) { }
}

export class SimpleGamepadState {
    constructor(public axis_threshold: number = 0.4, public connected: boolean = false) { }
}

export class Velocity {
    constructor(public vx: number = 0, public vy: number = 0) { }
}

export class Position {
    constructor(public x: number = 0, public y: number = 0) { }
}

export class Appearance {
    constructor(public character: string = "", public color: string = "") { }
}

