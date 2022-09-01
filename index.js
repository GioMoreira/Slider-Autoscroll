const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;

previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick);


autoScroll();
feather.replace()

function onPreviousClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderWidth;
    handleUserClick();
}

function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
    handleUserClick();
}

function handleUserClick() {
    clearTimeout(timeout);
    clearInterval(interval);
    timeout = setTimeout( () => {
        autoScroll();
    }, 20000);


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
            return;
        }

        //senao
        
        sliderEl.scrollLeft += sliderWidth;
    }
    , 3000)
}