const background_image = [
    {
        'src':'frontend/assets/1.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/2.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/3.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/4.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/5.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/6.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/7.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
    {
        'src':'frontend/assets/8.jpg',
        'title':'ALi Koja',
        'description':'Wlcome On Mr ALi Koja Web'},
];

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.content-box');
    setTimeout(() => {
        boxes.forEach((box, index) => {
            setTimeout(() => {

                const imagePlot = document.createElement('div');
                imagePlot.classList.add('image-plot');

                imagePlot.innerHTML = `
                    <div class="shadow-box-image">
                        <div class="content-box-inside">
                            <h1 class="title-box-inside">${background_image[index]['title']}</h1>
                            <span class="desc-box-inside">${background_image[index]['description']}</span>
                        </div>
                    </div>
                    <img class="pict${index+1}" src="${background_image[index]['src']}">`

                box.appendChild(imagePlot);
                box.classList.add('active');
            },
            index * 300);
        });
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.scale-box');
    setTimeout(() => {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('active');
            },
            index * 300);
        });
    }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelector('.menu-box');
    setTimeout(() => {
        boxes.classList.add('active');
    }, 2000);
});

// Disable All Action

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('*');
    elements.forEach(function(element) {
        element.addEventListener('selectstart', function(event) {
            event.preventDefault();
        });
    });
});