const data = [
    { title: '', src: 'images/1.png' },
    { title: '', src: 'images/2.png' },
    { title: '', src: 'images/3.png' },
    { title: '', src: 'images/4.png' },
    { title: '', src: 'images/5.png' },
    { title: '', src: 'images/6.png' },
    { title: '', src: 'images/7.png' },
    { title: '', src: 'images/8.png' },
    { title: '', src: 'images/9.png' },
    { title: '', src: 'images/10.png' },
    { title: '', src: 'images/11.png' },
    { title: '', src: 'images/12.png' },
    { title: '', src: 'images/13.png' },
    { title: '', src: 'images/14.png' },
    { title: '', src: 'images/15.png' },
    { title: '', src: 'images/16.png' },
    { title: '', src: 'images/17.png' },
    { title: '', src: 'images/18.png' }
]

const carouselInner = document.querySelector('.carousel-inner');

function renderSlider() {
    //адаптивность чтобы не скрывать элементы на странице
    carouselInner.innerHTML = '';

    let width = document.body.offsetWidth;

    let blockCount = 3;
    let imageCount = 6;

    if (width >= 1200) {
        blockCount = 3;
        imageCount = 6;
    }
    else if (width >= 600 && width < 1200) {
        blockCount = 4;
        imageCount = 4;

    }
    else {
        blockCount = 9;
        imageCount = 2;
    }



    for (let i = 0; i < blockCount; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (i === 0) carouselItem.classList.add('active');

        const carouselItemBlock = document.createElement('div');
        carouselItemBlock.classList.add('carousel-item-block');

        for (let k = 0; k < imageCount; k++) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = data[i * imageCount + k].src;
            div.append(img);
            carouselItemBlock.append(div)
        }

        carouselItem.append(carouselItemBlock)
        carouselInner.append(carouselItem);
    }
}
renderSlider();
window.addEventListener('resize', renderSlider);
screen.orientation.addEventListener("change",renderSlider);
