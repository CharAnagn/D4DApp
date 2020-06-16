/////////////// REQUIREMENT //////////////////

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const mysql = require('mysql');
var morgan = require('morgan');
var cors = require('cors')


// ____________________________________________________________________ //


////////////// MYSQL_CONNECTION ///////////////

var con = mysql.createConnection({
    host: 'localhost',
    user: 'D4DApp',
    password: 'D4DApp',
    database: 'D4DApp'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

// ____________________________________________________________________ //


///////////// MIDLE_HANDLERS ///////////////

// app.use(express.static(__dirname + "/static")) 
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(cors())




// ____________________________________________________________________ //


/////////////// REGISTRATION /////////////////////

app.post('/api/registration', function (req, resp, next) {

    resp.json({ msg: 'Registration have been complited' })




    ///////////// RESTORING REQ_BODY ON VARABILES /////////////


    var Name = req.body.Name;
    var Lname = req.body.Lname;
    var Username = req.body.Username;
    var Password = req.body.Password;
    var Birth_date = req.body.Birth_date;
    var Place_of_birth = req.body.Place_of_birth;
    var Home_adress = req.body.Home_adress;
    var Phone_number = req.body.Phone_number;
    var Email = req.body.Email;
    var Workplace = req.body.Workplace;
    var Sport = req.body.Sport;
    var Education = req.body.Education;

    console.log('Data =' + Name, Lname, Username, Password, Birth_date, Place_of_birth, Home_adress, Phone_number, Education, Workplace, Sport, Email)



    //////////////// CONNECTING TO SQL DATABASE ///////////////



    ////////////////// INSERTING NAME AND LNAME AND EMAIL TO STUDENT TABLE ////////////////////

    var input_name_val = [[Name, Lname, Username, Password, Birth_date, Place_of_birth, Home_adress, Phone_number, Email, Workplace, Sport, Education]];
    var insert_name = "INSERT INTO Registration(Name,Lname,Username,Password,Birth_date,Place_of_birth,Home_adress,Phone_number,Email,Workplace,Sport,Education) VALUES ?";
    con.query(insert_name, [input_name_val], function (err, result) {
        if (err) throw err;
        return console.log("Coach Data have been passed into Registation table " + result.affectedRows);
    });
});


// ____________________________________________________________________//




app.get('/api/registration', function (req, resp, next) {



   



    ////////////////// INSERTING NAME AND LNAME AND EMAIL TO STUDENT TABLE ////////////////////

    if (req.headers.key == 'd4dapplicationregistrationapigetmethod1234567890') {
        con.query("SELECT Email,Username FROM Registration", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const emailuser = result;
            resp.json({emailuser: emailuser})
            next();
        })
    }
    else{
        console.log('You dont allow to access the database')
        next();
    }
    })


// ____________________________________________________________________//




const env = require('./env');
const { get } = require("./env");
env.get();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({ "greeting": "Hello World!" });
})

app.listen(80, () => console.log(`Example app listening at http://localhost:8000`))
