# Barebones 'create-nuxt-app' project setup for @nuxtjs/pwa SPA build

#### Purpose:
Solves a problem with development mode playing nice with @nuxtjs/pwa module - as described in this issue: <https://github.com/nuxt-community/pwa-module/issues/219>

---
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

---
## Deploy as an SPA/PWA on Google Cloud App Engine:

####Configuration:
* `app.yaml` has already been created for you in the root directory, this is your deployment configuration for Google App Engine

####Setup:
* Install and Setup the Google Cloud SDK
-- <https://cloud.google.com/sdk/docs/quickstarts>

- Build the app with `npm run build`

#### Deploy:
From the command line in your project root directory:

`$ gcloud app deploy app.yaml --project [project-id]`

#### See Also:
####<https://nuxtjs.org/faq/appengine-deployment>
---
