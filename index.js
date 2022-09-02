const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;
let selectedImgIndex = 0;

previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick);


autoScroll();
feather.replace()

function onPreviousClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderWidth;
    handleUserClick();
    selectedImgIndex--;
    handleActiveDot();
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
    handleUserClick();
    selectedImgIndex++;
    handleActiveDot();
}

function handleUserClick() {
    clearTimeout(timeout);
    clearInterval(interval);
    timeout = setTimeout( () => {
        autoScroll();
    }, 20000);


}

function handleActiveDot(){
    const list = Array.from(document.getElementsByClassName('dot'));

    if (selectedImgIndex < 0) selectedImgIndex = 0;
    if(selectedImgIndex >= list.length) selectedImgIndex = list.length - 1;


    
    list.forEach(el => el.classList.remove('active'));
    list[selectedImgIndex].classList.add('active');
}

function autoScroll() {
    interval = setInterval(() =>{
        const sliderWidth = sliderEl.offsetWidth;
        const selectedImage = Math.ceil((sliderEl.scrollLeft/sliderWidth) + 1);
        const numberOfImages = sliderEl.childElementCount;

        console.log(numberOfImages);
        console.log(selectedImage);

        // se for a ultima, volta pro 0
        if(numberOfImages === selectedImage ){
            sliderEl.scrollLeft = 0
            selectedImgIndex = 0;
            handleActiveDot();
            return;
        }

        //senao
        
        sliderEl.scrollLeft += sliderWidth;
        selectedImgIndex++;
        handleActiveDot();
    }
    , 3000)
}