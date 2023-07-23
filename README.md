# Myprop Community App

[![Build Status](https://app.bitrise.io/app/c3b08336e8fff56c/status.svg?token=3nCojMKraRzM7y6mIxCxRA&branch=master)](https://app.bitrise.io/app/c3b08336e8fff56c)

## Coding practice, directory structure and new API endpoints

In the repo you will find some components, screens and API call hooks already built. Have a look at the `Example` screen in the codebase, and the example API call that exists for it. Keep future screen & component implementations similar in terms of style files, types, directory structure, hooks etc.

## Styling

To style views & components we should consistently stick to using `styled-components/native`, we should not use inline styling.

## API usage

Since the API has not been built yet, we have setup API mocking with **MirageJS**. If you haven't used it before their docs are very heplful [https://miragejs.com/docs/]. If you don't want to read docs, just take a look at the codebase and continue the pattern of current implementations mocking the API.

The great thing about **MirageJS**: it makes it incredibly easy for us to distribute app builds without API being ready, since the API mock is included with the app build.

Thus for any tasks you work on that requires an API endpoint, you will have to add a mock for it. This means that there is not "data structure" yet defined about how the data will looking coming back from the API. Instead; you will have to put together some arbitrary JSON data which makes it as easy as possible for you to build the UI with. The API will then be built to give you this data format. Makes for very lean API's.

### Adding more mocks

In the `mock-server` directory you can add any json file on the `mocks/` directory and then update the mock server in `mock-server/index.js` to return your mocked JSON data for a specific API endpoint. You can then do fetch calls in the app code where your mocked data will be returned as if API existed.

### Tests

A basic check for all PR's is unit test code coverage. In general the threshold is very low actually, coverage needs to remain above 50%. Now to maintain a 50% coverage is actually quite easy, so in majority cases adding a test that just renders your screen, component etc will give sufficient code coverage.

## npm scripts used by CI

If you want to run checks locally before creating your PR (since it might be quicker) all the following scripts are run as part of the PR checks:

- `npm run lint`
- `npm run check:test`
- `npm run check:duplication`
- `npm run check:bundle`
