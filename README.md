# gatsby-plugin-metomic

Easily add metomic cookie consent to your Gatsby site.

## Install

`npm install --save gatsby-plugin-metomic`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-metomic`,
      options: {
        clientId: "YOUR_METOMIC_CLIENT_ID",
      },
    },
  ],
}
```

