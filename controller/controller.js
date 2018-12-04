
module.exports = function (app) {

var Email = require('../public/assets/Js/Email.js')

    app.get('/dashboard/calendar/:title/:description/:where/:whenStart/:whenEnd/:start/:end', function (req, res) {
        let parms = {
            'summary': req.params.title,
            'description': req.params.description,
            'location': req.params.where,
            'start': {
                'dateTime': req.params.whenStart + 'T' + req.params.start + ':00',
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'dateTime': req.params.whenEnd + 'T' + req.params.end + ':00',
                'timeZone': 'America/Los_Angeles'
            },


        }

        calendar.createEvent(parms).then(()=> {
            
            res.render("dashboard", {
                title: "no"
            })
        });

    })

    app.get('/SendEmail/:FirstName/:LastName/:Email/:Subject/:Message', function(req, res){
        let params = {
            'FirstName' : req.params.FirstName,
            'LastName' : req.params.LastName,
            'Email' : req.params.Email,
            'Subject' : req.params.Subject,
            'Message' : req.params.Message
        }

        const msg = {
            to: 'yuhki.n@gmail.com',
            from: params.Email,
            subject: params.Subject,
            text: params.FirstName + " " + params.LastName + " asks " + params.Message,
            html: params.FirstName + " " + params.LastName + " <br><br> " + params.Message
          };
          config = require('../Private/config.js');

          Email.setApiKey(config.apikey);

          console.log(Email)
          console.log(msg)

          Email.send(msg).then((res) =>{
          
             
              return;
          });

        


    })

    app.get("/test", function (req, res) {
        alert('reee');
    })




    app.get("/", function (req, res) {
        //res.sendFile(__dirname + '/html/login.html');
        res.render("dashboard", {title: "SDconcentr8s"});
    })

    app.get('/sendmail/:First/:Last/:Email/:Subject/:Message', (req,res) =>{
        var str = options.split("-"); 
    })
}