const splunkjs = require('splunk-sdk');
const yaml = require("js-yaml");
const fs   = require('fs');

require('dotenv').config()

const loadYaml = () => {
  try {
    var doc = yaml.safeLoad(fs.readFileSync('./alerts/z-service.yaml', 'utf8'));
    console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
  }
}

const connectToSplunk = () => {
  return new splunkjs.Service(http, {
    scheme: 'http',
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version: '7.0.2'
  });
}

const main = () => {
  const yaml = loadYaml();



  console.log(yaml.name)
  console.log(yaml.exclusions)
}

main()

