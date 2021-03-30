export function getRandomFloat(min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min
}

export function getRandomInt(min: number = 0, max: number = 1): number {
    return Math.round(getRandomFloat(min, max))
}

const models: string[] = ["🐆", "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌", "🦃"]

export function getRandomCharacter(): string {
    return models[getRandomInt(0, models.length - 1)]
}

export function getRandomColor(): string {
    return `#${getRandomInt(0, 127).toString(16).padStart(2, "0")}${getRandomInt(0, 127).toString(16).padStart(2, "0")}${getRandomInt(0, 127).toString(16).padStart(2, "0")}`
}