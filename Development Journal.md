# Development Journal

I thought it might be useful to journal my thought process as I attempt this assessment.

## Plan

1. Start with my strength, Javascript/Typescript
2. Achieve the stated requirements
3. Do a pass for improved polish and performance
4. Push up a repo and submit the first solution
5. If I have time, port to Go to demonstrate multi-language proficiency
6. If still time, try CSharp for fun

## 1. JavaScript

First, I'll restructure the project for TypeScript

### Benefits

- Type info can mitigate JS quirks (type coercion)

### Trade offs

- Increased stack complexity (Babel transpilation; typedefs)
- Typing with Classes sucks. Taking a functional approach instead.

### Other tools and considerations

- I use VS Code because it has great built-in support for TypeScript
- I like providing all the JS stack config in the package.json for smaller projects, though in larger projects, this can become unwieldy.
- I also like using the following VS Code extensions:
  - a spell checker extension to address my notably bad spelling
  - Jest extension to speed up test running and development
  - Prettier to keep formatting tidy and consistent; I'm not opinionated when it comes to whitespace, so the defaults are great.
- I'd love to use modern tooling like Deno or Bun, but this was outside the defined parameters
- Finally, I ran `npm audit fix` to address any obvious vulnerabilities with the npm packages. It caught a few.
- My environment is all set!

### First thoughts

The first thing that came to mind when considering this task as a coding evaluation was that if we had a real world use case for prime number generation, I don't think I'd want to rely on a co-workers' or even my own implementation for use in a production environment. This problem has endless depth and performance considerations. People much smarter than me have produced far superior implementations.

All this to say, I wouldn't expect this work to be an accurate reflection of typical day-to-day tasks. But I can still see the merits of this exercise as an appraisal tool.

### Getting started

I started with a bunch of research into the Sieve of Eratosthenes and prime number generation in general, a seemingly endless well. Even as a math major in a former life, I had not heard of this specific algorithm. It is as ingenious as it is simple. I found many example implementations on Stack Overflow and even had ChatGPT spin up some attempts to compare.

My goal was to find an implementation that was a good balance of elegance and performance. I jotted down an implementation in pseudo-code, picking promising elements from what I researched, creating a personalized buffet plate of the ideas that resonated the most for me.

#### Performance considerations

- A caching or memoization strategy seems required for efficiency as the tests will run multiple assertions
- Pre-allocating arrays may have a marginal benefit considering how large the data sets are
- JS generators would seem pragmatic to yield/revisit long a running prime search. I also really like Douglas Crockford's generator-alternative pattern from his book "How JavaScript Works". However, I would end up abandoning this idea in favor of a more straight forward and compact solution.

## Update - Day 2

Taking another look at the project with fresh eyes, I decided to make two updates.

1. Swap out all the babel overhead for a simple two-line update to the npm scripts.
2. I did replace all the babel deps with a single ts-jest dep. This is only used for providing TS compatibility to VS Code. The test script only needs tsc now.
3. Adjust some comments. Add a small console log to inform about the upfront wait.
