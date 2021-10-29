function scrollWin(y) {
    
    window.scrollBy(0, y);
}
window.addEventListener('load', function() {
    const y = document.body.offsetHeight
    setTimeout(() => {
        scrollWin(y)
    }, 600);
})
