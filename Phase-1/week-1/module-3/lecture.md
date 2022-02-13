## Prereading
[MDN CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
[Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
[Floats](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
[Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#Fixed_positioning)


### What is Normal Flow?
- It is the DEFAULT, can be overridden with CSS
- Top down, left to right
### Floats
- It takes element out of normal flow
- In our case, we are pinning the image to the left side of the screen
- Do not use to style entire web page (we have other tools for that)
- Our ticket out of this flow is "clear" property. In our case, "clear: left;" on the list.

### Position
#### static
- default
- not affected by the top, bottom, left, and right properties.
#### fixed
- Removes element from document flow in the same way as absolute positioning. 
- However, offsets applied from the viewport. (not containing block, like absolute)
#### absolute
- Completely removes element from normal flow
- Offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.)
- Most useful in this case to use properties like "top" "bottom" "left" and "right" to position however you want
#### sticky
- Makes an element act like 
  - position: static 

- Until it hits a defined OFFSET from the viewport, 
- At which point it acts like 
  - position: fixed. 


Flow, Floats, Positioning, overflow, Touch of Pseudoclasses (Hover and active) 


## Project - Module 
- Float Images 
- Give `main` some padding
- Unline the Active Link
- Give Header and Footers Fixed Positioning
