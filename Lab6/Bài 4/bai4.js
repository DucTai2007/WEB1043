const output = document.querySelector('.output')
const message = document.querySelector ('.message')
message.TextContent = "Press to start";

const box = document.createElement('div');
box.classList.add('box');
output.append(box);
const game = {
    timer: 0,
    start: null
};
function randuNum(max) {
    return Math.floor(Math.random() * max);
}
function addBox(){
    message.textContent = 'Click it...';
    game.start = new Date().getTime();
    box.style.display =  'Block';
    box.style.top = randuNum(450) + 'px';
    box.style.left = randuNum(450) + 'px'; 
}
box.addEventListener('click', () => {
    box.textContent ="";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, randuNum(3000));
    if (!game.start) {
        message.textContent =  'Loading...';
    }else {
        const cur = new Date().getTime();
        const dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} secont to click`;
    }
});
addBox();