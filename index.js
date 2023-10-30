const btns = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => {
            btn.classList.remove('active')
        })

        contents.forEach((content) => {
            content.classList.remove('active')
        })

        btn.classList.add('active')
        contents[index].classList.add('active')
    })
})


