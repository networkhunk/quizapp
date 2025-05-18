# AWS Amplify Quiz App

## Setup and run locally

1. Install dependencies:

```
npm install
```

2. Run the app in development mode:

```
npm start
```

3. Build the app for production:

```
npm run build
```

4. The build output will be in the `build/` directory, ready for deployment.

## AWS Amplify Deployment

- Connect your GitHub repo to AWS Amplify Console.
- Set build command to `npm run build`.
- Set output directory to `build`.
- Amplify will handle the rest.

## Notes

- Update `src/aws-exports.js` after configuring Amplify backend.
- GraphQL schema is in `graphql/schema.graphql`.
