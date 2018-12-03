const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');
const msg = {
  to: 'yuhki.n@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

function test(){
console.log('hello')
}
test();