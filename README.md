# Frontend Mentor - loop studios landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

DESKTOP:
![image](https://user-images.githubusercontent.com/76195521/172026501-16b3ab8c-32bc-40c9-84a9-3a959f085314.png)
MOBILE:
![image](https://user-images.githubusercontent.com/76195521/172026514-2888a008-4ba8-411d-a0a7-d7249b49ba6b.png)
MOBILE/MENU:
![image](https://user-images.githubusercontent.com/76195521/172026529-650c9f81-986b-494f-ac5d-f097434eed24.png)

### Links

- Solution URL: [Git Repo](https://github.com/T4R0TARO/loopstudios-landingpage)
- Live Site URL: [Git Pages](https://t4r0taro.github.io/loopstudios-landingpage/)

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- Flexbox
- CSS Grid

### What I learned

```css
// navbar nav for sm screens
.navbar-nav {
  position: fixed;
  top: 0;
  left: -100%; /*hides mobile menu*/
  width: 100%;
  height: 100vh;
  background: $black;
  padding: 25px;
  display: flex;
  align-items: center;
  z-index: 10;
  transition: ease 0.25s;
}

.active {
  left: 0;
}
```

set mobile navbar menu `left: -100%` to hide the menu out of view of the screen.
When navbar-nav toggles the active class left = 0 and mobile menu is back in view of the screen

```js
// navbar toggle function
const navbarToggle = function () {
  navBar.classList.toggle("active");
};
```

```css
header {
  background: #0006 url(../.././images/desktop/image-hero.jpg) no-repeat center;
  background-size: cover;
  background-blend-mode: multiply;
  padding: 65px $px-left-right;
  margin-bottom: $mb-default;
}
```

`background-blend-mode: ` applies a filter to images that can be used to customize an images appreance.

## Author

- Website - [Joshua Manansala](https://github.com/T4R0TARO)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)
- Twitter - [@taro_code](https://twitter.com/taro_code)
