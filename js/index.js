(function() {
/* Add the specified classes to the given HTML element */
function addClasses(element, classes) {
  classes.forEach((_class) => element.classList.add(_class));
}

/* Adds the specified ID to the given HTML element */
function addID(element, id) {
  element.setAttribute('id', id);
}

/* Creates a new HTML element with an object in input */
function createChildFromObject(props) {
  const {
    tag, id, classes, text, ...rest
  } = props;
  const newElement = document.createElement(tag);
  if (classes) addClasses(newElement, classes);
  if (id) addID(newElement, id);
  if (text) (newElement.textContent = text);
  if (rest) {
    Object.entries(rest).forEach(([key, value]) => {
      newElement.setAttribute(key, value);
    });
  }
  return newElement;
}


const slider = document.getElementById('slider');

const images = [
  {
    file: 'image-slide-1.jpg',
    alt: 'slide 1'
  },
  {
    file: 'image-slide-2.jpg',
    alt: 'slide 2'
  },
  {
    file: 'image-slide-3.jpg',
    alt: 'slide 3'
  },
  {
    file: 'image-slide-4.jpg',
    alt: 'slide 4'
  },
  {
    file: 'image-slide-5.jpg',
    alt: 'slide 5'
  }
]

 images.forEach(element => {
  const slide = createChildFromObject({
    tag: 'img',
    classes: ['rounded-md', 'block', 'shadow-md'],
    src: './assets/'+ element.file,
    alt: element.alt
  });
  slider.appendChild(slide);
 });

 
let currentImage = 0;

const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', prevImage);
const nextBtn = document.getElementById('next')
nextBtn.addEventListener('click', nextImage);

function prevImage() {
  currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
  updateSlider();
}

function nextImage() {
  currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
  updateSlider();
}

function updateSlider() {
  const sliderComputed = window.getComputedStyle(slider);
  const sliderGap = parseInt(sliderComputed.getPropertyValue('gap'));
  const sliderWidth = parseInt(slider.offsetWidth);

  const images = document.querySelectorAll('#slider img');
  const imageComputed = window.getComputedStyle(images[currentImage]);
  const imageWidth = parseInt(imageComputed.getPropertyValue('width'));
 
  let position;
  if (currentImage === 0){
    position = 0;
  } else if (currentImage === images.length - 1) {
    position = imageWidth * images.length;
  } else {

    position = (
      (imageWidth * currentImage) + (sliderGap * currentImage)
      - (((sliderWidth - imageWidth) / 2) - (sliderGap * 2))
    );
  }
  console.log(sliderWidth);
  console.log(imageWidth);
  console.log((sliderWidth - imageWidth) / 2)
    slider.scrollTo({
      left: position,
      behavior: "smooth",
    });
}



})();
