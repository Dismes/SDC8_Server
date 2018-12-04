config = require('../../../Private/config.js')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.apikey);
const msg = {
  to: 'yuhki.n@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};


function test(){
console.log('hello')
console.log(config.apikey)
sgMail.send(msg).then((res) =>{
    console.log (res);
});
}
//test();

module.exports = sgMail;