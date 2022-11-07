const slides = document.querySelectorAll('.slide');
const titles = document.querySelectorAll('h3');
const body = document.querySelector('body');

const buildingsArr = [
    {
        location: 'Tokyo',
        link: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
    },
    {
        location: 'Netherlands',
        link: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        location: 'Madrid',
        link: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80'
    },
    {
        location: 'London',
        link: 'https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80'
    },
    {
        location: 'Toronto',
        link: 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80'
    },
];

for (let i = 0; i < buildingsArr.length; i++) {
    slides[i].style.backgroundImage = 'url(' + buildingsArr[i].link + ')';
    titles[i].textContent = buildingsArr[i].location;
}

const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('slide')) {
        clearActiveClasses()
        evt.target.classList.add('active');
        body.setAttribute = evt.target.getAttribute('style');
    }
})
