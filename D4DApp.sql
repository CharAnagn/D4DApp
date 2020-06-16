create table Registration (
    Id INT AUTO_INCREMENT PRIMARY KEY  ,
    Name VARCHAR(200),
    Lname VARCHAR(200),
    Username VARCHAR(200) UNIQUE,
    Password VARCHAR(200),
    Birth_date VARCHAR(200),
    Place_of_birth VARCHAR(300),
    Home_adress VARCHAR(300),
    Phone_number VARCHAR(15),
    Email VARCHAR (300) UNIQUE,
    Workplace VARCHAR (300),
    Sport VARCHAR(100),
    Education VARCHAR(300)
    );


