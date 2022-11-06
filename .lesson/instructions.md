# React Render Collection

## Objective

To understand how to use React.js to create a collection of components from an array of JavaScript objects representing Pokemon.

## Learning

In this lab, we will use React.js to read from number of JavaScript objects which are contained in an array, and then use those objects to construct a React component for each object.

Topics:

- React components;
- React rendering collections;

## Achieving

Your work will result in:

- A parent component that displays a collection of child components containing Pokemon data.
- A function that returns components created from Pokemon objects.

## Procedure

### Create a single component to display the child components

- [ ] Use the `App` component to render (display) a parent container component.
- [ ] Reference the imported pokemon variable within the `App` component.

### Create a child component that would render a single Pokemon

- [ ] Within the `App` component, add a child component, such as <Pokemon />.
- [ ] Within the `<Pokemon />` component, add sub-components to display a single object's data from the `pokemon` variable imported in the file.
- [ ] Confirm that you can see the result of a single Pokemon from the `pokemon` collection.

### Create a function to iterate over the Pokemon collection

- [ ] Within the `<App />` component, create a function that reads each item in the `pokemon` variable, and then outputs an Array of React `<Pokemon />` components.
- [ ] For every item in the `pokemon` variable, use its data to produce a `<Pokemon />` component.

> Hint: It's possible to use the Array `.map()` function to produce a new Array of React components.

### Use the iteration function within the `<App />` component

- [ ] Within the `<App />` component, use the function that reads the `pokemon` variable to produce React components and assign the result to a variable.
- [ ] Use curly-brace expansion to expand the Array of `<Pokemon />` components into a parent component.

> Hint: The curly-braces within a React component interpolate JavaScript in place.

```jsx
const allNames = ['Alan', 'Ada', 'Grace'];
const nameToComponent = function (name) {
  return <Name>Hi, my name is: {name}</Name>
};

<NamesList>
  {allNames.map(nameToComponent)}
</NamesList>
```

## Review

In this lab, we will have created a small React application that tracks the values of a person's name, and then greets that person by their name along with a friendly message.

The software should:

- Take in the user's full name in a form
- Print their full name in a friendly message to the page.

## Going Further

- How you could you extract the inline `onChange` handler functions within the `<input />` components to use a shared `onChange` handler, rather then each using their own?

- Notice how the message updates when the user types new values into the `<input />` components. How could you make the form only update the message when the user **submits** the form?
