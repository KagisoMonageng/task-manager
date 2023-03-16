const db = require("../config/db.config");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

const sender = "mercury.media2244@gmail.com";
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "griendgamer@outlook.com", //
    pass: "YourGamerFriend44", //
  },
});

emailDetails = {
  from: "", //where the email is from
  to: "", //where the email is to
  subject: "", //email subject
  text: "", //email
};

exports.login = async (req, res) =>  {
    const { cred, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = $1";

    db.query(sql, [cred], (err, results) =>{
        if (err) {
            res.status(400).json({ message: 'Database connection error'});
          } else {
            if (results.rowCount == 0) {
                res
                  .status(400)
                  .json({ message: "User does not exist" });
              }else{
                bcrypt.compare(password, results.rows[0].password, (err, result) => {
                    if (result) {
                        let key = jwt.sign({
                            user_id: results.rows[0].user_id,
                            name:results.rows[0].name,
                            email: results.rows[0].email,
                            surname:results.rows[0].surname,
                            image:results[0].image
                        },
                        'mc&ofj^%ihf(ifofhoh$$^%iuhf',
                        {
                            algorithm:'HS512',
                            expiresIn: '24h'
                        })

                        res.status(200).json({message:'Welcome! ' + results.rows[0].name,token:key})
                    } else {
                        res.status(400).json({message:'Invalid credentials, try again'})
                    }
                });
              }
          }
    })
};


const image = "https://res.cloudinary.com/dev-lab/image/upload/v1669475311/vecteezy_game-shop-vector-logo-design-shopping-bag-combination_10949766_hgwhg1.jpg";

exports.register = async (req, res) =>  {
    const { email, password, name, surname, gender } = req.body;

    const sql = "SELECT * FROM users WHERE email = $1";

    db.query(sql, [email], (err, results) => {
        if (results.rowCount == 0) {
            db.query(
                "INSERT INTO users (name,surname,email,password,image) VALUES ($1,$2,$3,$4,$5) RETURNING *",
                [name, surname, email, password, image],
                (db_err, results) => {
                  if (db_err) {
                    console.log(db_err)
                    res.status(400).json({ message: "Error registering user" });
                  } else {
                    let key = jwt.sign({
                        user_id: results.rows[0].user_id,
                        name:results.rows[0].name,
                        email: results.rows[0].email,
                        surname:results.rows[0].surname,
                        image:results.rows[0].image
                    },
                    'mc&ofj^%ihf(ifofhoh$$^%iuhf',
                    {
                        algorithm:'HS512',
                        expiresIn: '24h'
                    })

                    res.status(200).json({message:'Welcome! ' + results.rows[0].name,token:key})

                  }
                })
        }else{
            res.status(200).json({message:'Email already registered'})
        }
    })


};

exports.getUser = async (req, res) =>  {

    const user_id = req.params.user_id
    const sql = `SELECT * FROM users WHERE  user_id = ${user_id}`
    db.query(sql,[user_id],(err,user)=>{

    })


};