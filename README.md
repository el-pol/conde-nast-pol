# Conde Nast coding test

I did this test for Conde Nast. **I had a time limit of 2h.**

## Task description

```
Build a JavaScript application that shows the latest news world-wide, using the newsapi.org service.

Running the app we should be able to see the latest news. The user should have the ability to filter by keywords (see everything endpoint api). Optionally, if the user clicks on a news item it will navigate to a page displaying the full news article selected.

This is a full stack challenge and we are expecting both a Frontend application and a Backend application that communicate with each other.

A Full Stack developer is someone with familiarity in each layer; you might be stronger on the frontend, or vice-versa. Feel free to focus more on what you know best, be creative and show us your skills!
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- I used TypeScript but didn't have time to complete the types. In a real project, we would take time to type everything properly.
- My first idea was to leverage NextJS to generate dynamic pages. I wanted to query the API for each article and they would have their own page inside the app. Then I found out there is no way with this API to query an individual article. Also, the `content` response was not formatted and I could not find an easy way to make it look nice. That's why I decided to just link each article to the original source. Doing this, I found no need to use a backend. And also looking back, not really a need for NextJS - a simple React app would have worked.
- I used TailwindCSS for fast prototyping, to not have to write the styles manually.
- With more time I would have added a nice loader, error handling and some animations. The website is moderately responsive so it should work on all devices.
- In the beginning I had a lot of trouble with ESLint + Prettier, that's why you will see some not-so-interesting commits.
