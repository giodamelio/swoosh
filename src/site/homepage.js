const path = require('path');

const nunjucks = require('nunjucks');

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, 'templates/')));

module.exports.handler = async (event, context) => {
  console.log('Event', event);
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: env.render('homepage.html')
  };
};
