# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

<p>Desktop version</p>
<img src="screenshots/ping-coming-soon-desktop.png" width="100%" alt="desktop-version" />
<p>Mobile version</p>
<img src="screenshots/ping-coming-soon-mobile.png" width="375px" alt="mobile-version" /

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-ping-coming-page-using-vanillajs-tailwindcss-J56kvRO11x](https://www.frontendmentor.io/solutions/responsive-ping-coming-page-using-vanillajs-tailwindcss-J56kvRO11x)
- Live Site URL: [https://kennylun123.github.io/fm-ping-coming-soon-page/](https://kennylun123.github.io/fm-ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TailwindCSS

### What I learned

- Code seperation in index.js
- [onblur event](https://www.w3schools.com/jsref/event_onblur.asp), occurs when an element loses focus.

```js
emailInput.addEventListener("blur", () => {
  validateEmail(emailInput.value);
});
```

## Author

- Github - [Kenny Ng](https://www.github.com/kennylun123)
- Frontend Mentor - [@kennylun123](https://www.frontendmentor.io/profile/kennylun123)
- Twitter - [@kenny_ng123](https://www.twitter.com/kenny_ng123)
