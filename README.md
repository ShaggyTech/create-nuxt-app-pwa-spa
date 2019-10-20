# NuxtJS SPA + PWA Starter Template

> Barebones 'create-nuxt-app' project setup for @nuxtjs/pwa SPA build

---
#### Purpose:
Solves a problem with development mode playing nice with @nuxtjs/pwa module - as described in this issue: <https://github.com/nuxt-community/pwa-module/issues/219>

#### Features:

* Slightly modified `create-nuxt-app` barebones project

* Nuxt has been upgraded from version `2.0.0` in the base `create-nuxt-app` to version `2.10.1`

* @nuxtjs/pwa version `3.0.0-beta.19`

* Setup for deployment to Google Cloud App Engine

* Installable as an online/offline app to your device or desktop

---
## Build Setup

- First clone this repository:
`$ git clone https://github.com/ShaggyTech/create-nuxt-app-pwa-spa.git`

```bash
# clone this repository
$ git clone https://github.com/ShaggyTech/create-nuxt-app-pwa-spa.git

# cd into the project directory
$ cd create-nuxt-app-pwa-spa

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

#### Configuration:
* `app.yaml` has already been created for you in the root directory, this is your deployment configuration for Google App Engine

#### Setup:
* Install and Setup the Google Cloud SDK
-- <https://cloud.google.com/sdk/docs/quickstarts>

- Build the app with `npm run build`

#### Deploy:
From the command line in your project root directory:

`$ gcloud app deploy app.yaml --project [project-id]`

#### See Also:

#### <https://nuxtjs.org/faq/appengine-deployment>

---

### Live Version:

See this repo deployed and live on Google App Engine:

### <https://pwa-nuxt.appspot.com/>
