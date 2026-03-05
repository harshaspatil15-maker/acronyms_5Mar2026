const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
                      host : "sql12.freesqldatabase.com",
                     user : "sql12818994",
                     password : "1ZqCew5DLf",
                     database: "sql12818994"
               });

app.post("/save" ,(req, res) =>{
            let data = [req.body.acronym];
            let sql = "select full_form from acronyms where acronym = ?";
            con.query(sql,data,(error,response) => {
                                      if(error)                           res.send(error);
                                   else if(response.length === 0)
                                             res.send({message : "Sorry, full form not available."});
                                    else
                                            res.send(response[0]);
                                });
});


app.listen(9000, ()=>{ console.log("ready @9000");});

                           

