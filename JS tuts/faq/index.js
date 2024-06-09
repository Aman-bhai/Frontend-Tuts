const accordian = document.querySelectorAll(".accordian");

accordian.forEach((accordian) => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    accordian.addEventListener('click', () => {
        // icon.classList.toggle('icon-active')
        // answer.classList.toggle('answer-active')

        if (icon.classList.contains('icon-active')) {
            icon.classList.remove('icon-active')
            answer.style.maxHeight = null;

        }
        else {
            icon.classList.add('icon-active')
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
})