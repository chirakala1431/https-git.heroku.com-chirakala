var exp=require('express');
var app=exp();
var path=require('path');
var bodyParser=require('body-parser');
var bcrypt=require('bcryptjs');
var mongoose=require('mongoose');
var mongoclient=require('mongodb').MongoClient;
var url="mongodb://krishna:krishna1234@ds261114.mlab.com:61114/pharma";
var dbo;
var name;

mongoclient.connect(url,(err,client)=>{
    if(err)
    {
        console.log('error in database');
    }
    else
    {
        dbo=client.db('pharma');
        console.log('connected to data base');
    }
})

app.use(bodyParser.json());

app.use(exp.static(path.join(__dirname,'dist/medi')))

app.post('/home/sign',(req,res,next)=>{
    console.log(req.body);
    dbo.collection('signup').find({username:req.body.username}).toArray((err,data)=>{
      
        if(data.length===0)
        {
            bcrypt.hash(req.body.password,10,(err,hashcode)=>{
                if(err)
                {
                    console.log('error occured')
                }
                else
                {
                    dbo.collection('signup').insert({firstname:req.body.firstname,
                    Lastname:req.body.Lastname,
                    Email:req.body.Email,
                    username:req.body.username,
                    gen:req.body.gen,
                    password:hashcode
                    },(err,succ)=>{
                        if(err)
                        {

                        }
                        else{
                            res.json("register successfully");
                        }
                    })
                
                }
            })
            
        }
        else
        {
            res.json("user already exsisted")
        }
    })
  
})


app.get('/admin/user',(req,res,next)=>{
    dbo.collection('signup').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log('err')
        }
        else
        {
            res.send(data)
        }
    })
})

app.post('/home/log',(req,res,next)=>{
    dbo.collection('signup').find({username:req.body.username}).toArray((err,data)=>{
        if(data.length===0)
        {
            res.json("invalid username")
        }
        else
        {
            bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
                if(success==true)
                {
                    res.json("login succcessful")
                    name=req.body.username;
                    console.log(name);
                }
                else{
                    res.json("password wrong")
                }
            })
        }
    })
})


app.post('/admin/medicine',(req,res,next)=>{
    dbo.collection('medicine').insert((req.body),(err,success)=>{
        if(err)
        {
            console.log("error occured")
        }
        if(success)
        {
            res.json("data send")
        }
    })
})

app.get('/admin/medicine',(req,res,next)=>{
    dbo.collection('medicine').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data)
        }
    })
})

app.put('/admin/medicine',(req,res,next)=>{
        var object=new mongoose.Types.ObjectId(req.body._id);
        console.log(req.body._id)
        console.log(object)
        dbo.collection('medicine').update({_id:object},{$set:{category:req.body.category,
            medicine:req.body.medicine,
            price:req.body.price,
            quantity:req.body.quantity,
            expiry:req.body.exp}},(err,succ)=>{
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    dbo.collection('medicine').find({}).toArray((err,data)=>{
                        if(err)
                        {
                            console.log("error while inserting")
                        }
                        else
                        {
                            res.json(data)
                        }
                    })
                }
            })
})


app.get('/admin/stock',(req,res,next)=>{
    dbo.collection('medicine').find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data)
        }
    })
})

app.get('/client/cart',(req,res,next)=>{
    dbo.collection(name).find({}).toArray((err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data)
        }
    })
})

app.post('/client/pharma',(req,res,next)=>{
    console.log(req.body)
    dbo.collection(name).insertOne((req.body),(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data)
        }
    })
})


app.delete('/admin/medicine',(req,res)=>{
    dbo.collection('medicine').remove({medicine:req.body.medicine},(err,success)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            dbo.collection('medicine').find({}).toArray((err,data)=>{
                if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(data)
        }
            })
        }
    })
})



app.listen(process.env.PORT || 8080,()=>{
    console.log('server is listening...')
})