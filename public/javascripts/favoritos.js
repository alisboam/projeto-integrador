function scrollWin(y) {
    
    window.scrollBy(0, y);
}
window.addEventListener ('load', function() {
    const y = document.body.offsetHeight
    const scrollY =   y - 800
    setTimeout(() => {
        scrollWin(scrollY)
    }, 600);
})
