```javascript
// Correct approach using $inc with a numeric field
db.collection('myCollection').updateOne( { name: "John" }, { $inc: { age: 1 } } );

// Alternative approach for string fields (if you need to append or modify a string)
db.collection('myCollection').updateOne( { name: "John" }, { $set: { version: "v2" } } );
```