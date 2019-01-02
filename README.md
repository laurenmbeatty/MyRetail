# Welcome to MyRetail!

Find the finished product at [http://my-retail.surge.sh/](http://my-retail.surge.sh/). For a different version using @reach/router to navigate to a page that shows all reviews, go to [http://lauren-target.surge.sh/](http://lauren-target.surge.sh/).

### Get Started

- `git clone https://github.com/laurenmbeatty/MyRetail.git` - Clone the repository to your machine.
- `npm install` - Install the necessary dependencies.
- `npm run dev` - Start a local development server at [locahost:1234](http://localhost:1234).

### Other Useful npm scripts (see package.json for all npm scripts)

- `npm run test` - Run jest tests 🤡
- `npm run test:coverage` - Runs tests and checks code coverage
- `npm run test:update` - Runs tests and updates snapshot
- `npm run lint` - Linting with eslint
- `npm run format` - Format with prettier 💄
- `npm run build` - Build the application for production 🏗️
- `npm run deploy` - Runs the build script and deploys to surge. Application is running at [http://my-retail.surge.sh/](http://my-retail.surge.sh/). Ship it! 🛳️

### Deploy!

- Anytime you push to github, the project is set up to build, and then deploy to [http://my-retail.surge.sh/](http://my-retail.surge.sh/). I set up this process via a git hook.

- For a more complex project, with lots of team members, we could integrate automatic linting and testing that runs anytime someone tries to push to github (or gitlab, or BitBucket, etc.). We could set it up to cancel the push to the remote branch if linting or tests failed. This would save time for everyone, especially developers, and having automated linting and testing would guarantee clean, uniform standards, without developers having to necessarily have the exact same IDE or set-up. Although I haven't used it personally, I hear that [Husky](https://github.com/typicode/husky) is a nice choice for this kind of process.

- When code gets pushed to the remote repository, it would run tests, then build a feature branch, OR, it could be set up to build a feature branch only when a pull request is submitted. This build process would run integration tests and further "style" type tests (with a tool like CodeClimate), as well. We could use Jenkins, TravisCI or CircleCI for the CI system.
  `

### Tech Stack

- [Parcel](https://parceljs.org/) as the bundler/build tool. 📦
- [React](https://reactjs.org/) as the frontend library. Note, this project was scaffolded/configured with a custom configuration, rather than using an out-of-the-box system like create-react-app.
- [styled-components](https://www.styled-components.com/) for modular CSS. 💅
- [Jest](https://jestjs.io/) and [react-testing-library](https://github.com/kentcdodds/react-testing-library#installation) for testing. I had never used react-testing-library before, and now I HIGHLY recommend it 💯 !
