# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Check Code](https://github.com/bachitterch/sunnyside-lp)
- Live Site URL: [Visit Page](https://sunnyside.bachitterch.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS variables & Nesting
- Flexbox
- CSS Grid
- Mobile-first workflow
- Webpack 5

### What I learned

With this project I learned how to use CSS Grid to create responsive layouts and project setup with Webpack 5

```css
.transform {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  direction: rtl;
}

&:hover {
  color: $white;
  background-color: rgb($white, 0.3);
}
```

```js
!Nav.classList.contains('open')
  ? Nav.classList.add('open')
  : Nav.classList.remove('open')
```

## Author

- Website - [bachitter.dev](https://bachitter.dev)
- Frontend Mentor - [@bachitterch](https://www.frontendmentor.io/profile/bachitterch)
- Twitter - [@bachitterch](https://www.twitter.com/bachitterch)
