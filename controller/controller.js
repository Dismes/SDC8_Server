
module.exports = function (app) {

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

    app.get("/pole", function(req,res){
        res.render('pole',{
            title: 'Vote!',
            thing: 'jfdskalfjsalkf'
        })
    })

    app.get("/d20roller", function (req, res) {
        res.render("d20statroller", {
            title: 'd20roller'
        });
    })

   
    app.get("/dashboard", function (req, res) {
        res.render("dashboard", {
            title: "no"
        })
    })

    app.get("/", function (req, res) {
        //res.sendFile(__dirname + '/html/login.html');
        res.render("dashboard", {title: "no"});
    })

    app.get('/auth', (req, res) => {
        res.render('auth');
    })

    app.get('/pole/:title/:options/:multi', (req,res) =>{
        var str = options.split("-");

        
    })
}