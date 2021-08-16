# Pricing component with toggle

- Live website -(https://cpwd-pricing-component-with-toggle.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/129633127-acc01363-7920-4803-a45b-21dde0c5b4a8.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS FlexBox
- JavaScript
- Media Queries

### What I learned

This challenged helped me get familiar with event listeners and it helped test my css skills to make a slider.

Here is some code that I wrote in order to complete this project

```HTML
<div class="switch">
    <label class="switch" data-switch-label>
    <input type="checkbox" name="checkbox">
    <span class="slider round"></span>
    </label>
</div>
```

```Javascript
const toggleSwitch = document.querySelector("input[name=checkbox]");
const cards = document.getElementById('cards')


toggleSwitch.addEventListener('change', ()=>{
    console.log('switch')
    cards.classList.toggle("monthly-switch")
})
```

```CSS
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
```

### Questions

- I wasn't able to use Font Awesome icons since they always appeared as blank squares so I resulted to downloading png icons. However I found it difficult to change the colors when I hover over the social icons. The default colors for two of them where black and I tried to use filter but was only able to turn them white.

### Useful resources

- [How TO - Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp) - this is a tutorial that helped me understand how to create a dropdown menu for mobile screens

- [Having a Little Fun With Custom Focus Styles](https://css-tricks.com/having-a-little-fun-with-custom-focus-styles/) - this how to helped me make and style my slider

- [Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) - this documentation helped my add a focus to my toggle so that it'll be more accessible to keyboard users

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://github.com/Carlos-A-P/Pricing-component-with-toggle)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
