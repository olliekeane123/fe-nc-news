# Northcoders News

A React-based news aggregation website where users can browse, read, and interact with articles. Users can log in to post articles, vote, and comment. The site integrates with the Northcoders News API.

## Live Demo
Visit the site: [Northcoders News](https://ollie-northcoders-news.netlify.app/explore/article/12)

## Features
- View a list of articles and filter by topic.
- Read full articles with comments.
- Logged-in users can upvote/like articles and post comments.
- Sorting options for articles (by date, comment count, votes and topic).

## User Access
By default, users are **not logged in**, restricting certain features such as posting and voting. To log in, use:
- **Username:** `grumpy19`
- **Password:** *(any value)*

## Tech Stack
- **Frontend:** React, JavaScript
- **State Management:** React Context
- **Styling:** CSS, Other than React-Dropzone, used for drag and drop image functionality, no other libraries are used
- **API Integration:** Axios (fetching from the Northcoders News API)

## Setup Instructions
1. Clone the repository:
   ```sh
   git clonet[https://github.com/olliekeane123/fe-nc-news.git]
   cd fe-nc-news
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## To-Do List
- [ ] Improve loading visuals.
- [ ] Add loading indicators when using sort/filter queries.
- [ ] Implement user authentication.
- [ ] Create user sign-up functionality (requires backend support).
- [ ] Improve UI/UX and responsiveness.
- [ ] Add styling for account page
- [ ] Add account information, including bookmarked articles and user's own articles
- [ ] Add ability to delete article
- [ ] Add ability to save article as draft before posting


