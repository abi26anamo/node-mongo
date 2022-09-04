const mongoClient =require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

mongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected correctly to the database');
    dboper.insertDocument(db,{name:"vadonut",description:"Test"},'dishes',(result)=>{
        console.log('Insert Document :n',result.ops);
        dboper.findDocuments(db,'dishes',(docs)=>{
            console.log('Found documents:\n',docs);

            dboper.updateDocument(db,{name:"vadonut"},{description:"Updated test"},'dishes',(result)=>{
                console.log('Updated document:\n',result.result);
                dboper.findDocuments(db,'dishes',(docs)=>{
                    console.log('Found documents:\n',docs);

                    db.dropCollection('dishes',(result)=>{
                        console.log('Dropped Collection',result);
                    });
        });
            });
        });
    });
    const db = client.db(dbname);
    const collection= db.collection('dishes');
    collection.insertOne({"name":"abinet","description":"test"},(err,result)=>{
       assert.equal(err,null);
       console.log('After Insert:\n');
       console.log(result.ops);
       collection.find({}).toArray((err,docs)=>{
         assert.equal(err,null);
         console.log('Found:\n');
         console.log(docs);
         db.dropCollection('dishes',(err,result)=>{
            assert.equal(err,null);
            client.close();
         });
       });
    });
})
