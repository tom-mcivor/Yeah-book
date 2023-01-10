# Year-book!

## What is Year-book?
A facebook-like app that lets the user view and chat to old friends from bootcamp

## Where to look for the planning?
[Check out the Miro board!](https://miro.com/app/board/uXjVP-_6Y3M=/)

## After cloning what should I do?
```
git checkout -b <branchname>
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
Then have a look over the code to get a feel for it.

## Before Creating a Pull Request
Make sure there are no linting or testing errors.
```
npm run lint
npm run test
```

Additionally, to check you have written tests with good coverage.
```
npm run test:coverage
```



## Extras:
<hr>
<br>

#### Styling

This project uses a sass loader and scss modules for styling
&&
check out the Matine doc for our styling
(Matine) ? :) : :( 

[Matine!](https://matine.com/)
<br>


#### Home.jsx

This is the homepage of year-book this shows the user year-books

#### Year-book.jsx

A component that displays images and names of the cohort 


AnimalTile is set up to take an animal prop (with id, imageUrl, name and description) and display the info in a card format.

There is an optional `clickHandler` prop which, when specified, executes the function passed using the animal id as a parameter. (This will be necessary for the logic in the Play component)

```js
function clickHandler(id){
  //some logic
}

...
<AnimalTile animal={animal} clickHandler={clickHandler} />
```

</details>

![badge-r](https://media.istockphoto.com/id/1176579693/vector/year-book-colorful-typography-banner.jpg?s=612x612&w=0&k=20&c=vK9fQYr5iu5-KBgqa4e3jdDwyVH7cAi5_5zhzOEAvs8=)

hello
