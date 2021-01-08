const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentProgress = 1

nextBtn.addEventListener('click', () => {
    currentProgress++;
    if (currentProgress > circles.length) {
        currentProgress = 4;
    }
    update()
})

prevBtn.addEventListener('click', () => {
    currentProgress--;
    if (currentProgress < 1) {
        currentProgress = 1;
    }
    update()
})

function update() {
    // Adding Class function
    circles.forEach((circle, idx) => {
        if (currentProgress > idx) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
        // Disabling buttons if...
    })
    if (currentProgress === 1) {
        prevBtn.disabled = true;
    } else if (currentProgress === 4) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
// update width with progress
progress.style.width = ((currentProgress -1)/(circles.length - 1) * 100) + `%`;
}