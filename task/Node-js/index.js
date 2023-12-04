const { error, log } = require('console');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'masterdatabase'
})

connection.connect((err)=>{
    if (err){
        console.error('Failed to connect to the database',err);
        return;
    }    
})
console.log('connected to the database');

//crud operation

//Create  a record

const table = 'product';
// const  newRecord={state_title:'surat',countryid:1};

// connection.query('INSERT INTO ?? SET ?', [table,newRecord], (err,result)=>{
//     if(err){
//         console.error('Failed to Create record', err);
//         return;
//     }
//     console.log('Record created successfully');

//     connection.end((err) => {
//         if (err) {
//           console.error('Failed to close the database connection:', err);
//           return;
//         }
    
//         console.log('Database connection closed');
//       });
// });

//Read records

connection.query('SELECT * FROM ??',[table],(err,rows)=>{
    if(err){
        console.error('Failed to fetch records:',err)
        return;
    }
    console.log('Fetched records:',rows);

    connection.end((err) => {
                if (err) {
                  console.error('Failed to close the database connection:', err);
                  return;
                }
            
                console.log('Database connection closed');
              });
});
