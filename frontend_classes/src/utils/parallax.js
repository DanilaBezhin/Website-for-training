const parallax = () => document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX * .01).toFixed(4)}%;
            --move-y: ${(e.clientY * .01).toFixed(4)}%;
        `
    })
})

export default parallax