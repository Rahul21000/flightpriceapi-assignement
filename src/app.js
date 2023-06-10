var express=require('express');
var app=express();
const fs=require('fs');
const port=process.env.PORT||3000;
const host='127.0.0.1';
app.get('/api/flight',(req,res)=>{
    
        // res.set({'content-type':'text/html'});
        res.send('<form action="saveform" method="get">source <input type="text" name="source" value="delhi" id="">destination <input type="text" name="destination" value="jaipur" id="">date<input type="date" name="date" value="2023-04-15" id=" "><input type="submit" value="search" id="ids"></form>');
        res.end();
        });
        // endpont of api
 app.get('/api/saveform',(req,res)=>{
    const {source,destination,date}=req.query;
    // reading file from current working directoty
        fs.readFile(__dirname+"/"+"data.json",'utf8',(err,data)=>{
            if(err) throw err;
            // reading data json data and convert in javascript object then get its property
         const myObj=JSON.parse(data); 
         const src=myObj["source"];
         const dst=myObj["destination"];
         const dt=myObj["date"];
         const ftdata=myObj.flight;
          if(src==source && dst==destination && dt==date){
            res.set({'content-type':'text/json'});
               res.json(ftdata);
               res.end();
         }
        
        });

               
});
app.listen(port,host,(err)=>{
    if(err) throw err;
    console.log(`server is running at http://${host}:${port}/api/flight`);
});