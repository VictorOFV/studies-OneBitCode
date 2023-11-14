export function br() {
    const br = document.createElement("br")
    return br
}

export function label(attributes) {
    const label = document.createElement("label")
    Object.assign(label, attributes)
    return label
}

export function input(attributes) {
    const input = document.createElement("input")
    Object.assign(input, attributes)
    return input
}