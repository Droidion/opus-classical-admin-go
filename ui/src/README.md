# Opus Classical Admin UI

## How to run

Have Node.js of the latest LTS version installed.

Have the latest `pnpm` installed.

Create `.env` file:

```dotenv
VITE_OAUTH_CLIENT_ID=secret.apps.googleusercontent.com
```

`VITE_OAUTH_CLIENT_ID` is Google OAuth 2.0 client ID, obtained from https://console.cloud.google.com/apis/credentials.

Install packages `$ pnpm i`.

Run app `$ pnpm run dev`.