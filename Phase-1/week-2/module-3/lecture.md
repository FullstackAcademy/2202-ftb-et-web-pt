# Media Queries 

# PreReading
- [Pseudo-Diner](https://flukeout.github.io/)
- CSS Pseudo-classes 
  - `:first-child`, `:last-child`, `:nth-child`
  - `:first-of-type`, `:last-of-type`, and `:nth-of-type`
  - `:not`

# Quick Review: Set up a media query
```css
.container:first-child {
  border: 5px solid blue;
}
```

# Demo 
|Selector    |Example      |Description   |
|---         |---          |---           |
|element     |`h1`         |Select all elements that are an `h1 ` tag.   |
|class       |`.foo`       |Select elements that have `class="foo"`   |
|id          |`#bar`       |Select elements that have `id="bar"`   |
|both        |`.foo#bar`   |Both the `foo` class and `bar` id   |
|descendents |`.foo #bar`  |Space between: All descendents (not necessarily direct)   |
|direct child|`.foo > #bar`|carat sybol: Only direct child (not all descendents)   |
|pseudo      |`.foo:hover` |only if the cursor is hovering over the element   |

## First or Last of Type

- Grab the first or last of a specific type (in our case the "type" was a p tag) and style it. Does not matter if different types show up in the list before them.

## First Child or Last Child
- Grab the first or last child. This does look at what is actually first, so if another type shows up first/last, it will not work.

## Nth-Child

- Step: n starts at 0, increases by 1. Keep going until we are out of children. In our case...

3n... 3(0) = 0, 3(1) = 3, 3(2) = 6, 3(3) = 9, out of children.

- Formula (A(n) + B): A as skipping/striding and B is our offset. In our case...

3n+1... 3(0) + 1 = 1, 3(1) + 1 = 4, 3(2) + 1 = 7, 3(3) + 1 = 10

- Odd/Even: grab all odds or all evens

- Ranges: In our case we want 3 - 6. Let's start with 3+. (0 + 3) = 3, (1 + 3) = 4, ... ,(6 + 3) = 9. Let's continue with 6-. (0 + 6) = 6, (-1 + 6) = 5, (-2 + 6) = 4, ... , (-5 + 6) = 1. We want to style only the elements that match BOTH so we use the selectors together: 
```
#range > p:nth-child(n + 3):nth-child(-n + 6) 
```


# Workshop 
[Tic Tac Toe](https://learn.fullstackacademy.com/workshop/5e30aef4326e9e00048348fa/content/5e30aef4326e9e0004834906/text)

# Project 
- [Header and Nav](https://learn.fullstackacademy.com/workshop/5e308fc3b3c09200045a7a13/content/5e308fc4b3c09200045a7a25/text)
- `main-nav` and `sub-nav` and `.nav-list`
