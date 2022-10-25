module.exports = {
  reactStrictMode: true,
  images:{
    domains:['bayut-production.s3.eu-central-1.amazonaws.com']
},

module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      execlude: /node-modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
}
}

