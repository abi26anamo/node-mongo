const assert = require('assert');
const { Collection } = require('mongodb');

exports.insertDocument = (db,document,Collection,callback)=>{
   const coll = db.collection(collection);
   coll.insertDocument(document,(err,result)=>{
        assert.equal(err,null);
        console.log('Inserted'+result.result.n+
        'documents into the collection '+collection);
        callback(result);

   });

};
exports.findDocuments = (db,Collection,callback)=>{
   const coll = db.collection(collection);
   coll.findt({}).toArray((err,docs)=>{
       assert.equal(err,null);
       callback(docs);
   });

};
exports.removeDocument = (db,document,Collection,callback)=>{
    const coll = db.collection(collection);
    coll.deleteOne(document,(err,result)=>{
        assert.equal(err,null);
        console.log('Removed the document', document);
        callback(result);
        
    });

};
exports.updateDocument = (db,document,update,Collection,callback)=>{
    const coll = db.collection(collection);
    coll.updateOne(document,{$set:update},null,(err,result)=>{
        assert.equal(err,null);
        console.log("Updated the document with",update);
        callback(result);
    })

};