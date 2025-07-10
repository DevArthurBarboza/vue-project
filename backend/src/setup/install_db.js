require('dotenv').config();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`CREATE DATABASE ${process.env.DB_NAME}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query(
    'CREATE TABLE product (entity_id INT PRIMARY KEY, name VARCHAR(50) NOT NULL, price NUMBER(6,2))',
    (err, result) => {
        if(error) throw err;
        console.log(result)
    });

    con.query(
    'CREATE TABLE customer (entity_id INT PRIMARY KEY, name VARCHAR(50) NOT NULL)',
    (err, result) => {
        if(error) throw err;
        console.log(result)
    });

    con.query(
      'CREATE TABLE category (entity_id INT PRIMARY KEY, name VARCHAR(50) NOT NULL)',
      (err, result) => {
          if(error) throw err;
          console.log(result)
      });


      con.query(
        "CREATE TABLE category_product (entity_id INT PRIMARY KEY, product_id INT NOT NULL, category_id INT NOT NULL), FOREIGN KEY (product_id) REFERENCES product (entity_id), FOREIGN KEY (category_id) REFERENCES category (entity_id)",
        (err, result) => {
            if(error) throw err;
            console.log(result)
        });

});

