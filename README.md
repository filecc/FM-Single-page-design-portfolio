# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Github Project](https://github.com/filecc/FM-Single-page-design-portfolio)
- Live Site URL: [Live Site](https://filecc.github.io/FM-Single-page-design-portfolio/)

### Screenshot

# Desktop
![Desktop](./screenshots/desktop.png)

# Tablet
![Tablet](./screenshots/desktop.png)

# Mobile
![Mobile](./screenshots/mobile.png.png)


## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind](https://tailwindcss.org/) - CSS framework
- Vanilla JS


### What I learned

### Obsessed with this function I create

```js
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

```

### Love the adjustment in the slider of image for trying to have always the selected one in the center

```js
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
```

## Author

- Website - [filecc](https://www.filecc.dev)
- Instagram - [Instagram](https://www.instagram.com/filecc)
- Frontend Mentor - [@filecc](https://www.frontendmentor.io/profile/filecc)
- Twitter - [@_filecc](https://www.twitter.com/_filecc)

