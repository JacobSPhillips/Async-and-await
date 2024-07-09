const delayColorChange = (color, delay) => {
    return new Promise((fullfilled, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            fullfilled();
        }, delay)
    })
}

// delayColorChange('red', 1000)
//     .then(() => delayColorChange('orange', 1000))
//     .then(() => delayColorChange('yellow', 1000))
//     .then(() => delayColorChange('green', 1000))
//     .then(() => delayColorChange('blue', 1000))
//     .then(() => delayColorChange('idigo', 1000))
//     .then(() => delayColorChange('violet', 1000))


async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    await delayColorChange('indigo', 1000)
}