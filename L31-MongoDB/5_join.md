# Learning to apply joins in mongodb

1. create students collection
2. create address collection

- db.address.insertMany([]);
  Sample: [
    {
        _id: ObjectId('662277c2ace149be62f34a2b'),
        details: 'Lahore, Pakistan'
    }
  ]
- db.students.insertMany([]);
  Sample: [
    {
        _id: ObjectId('66227812ace149be62f34a2e'),
        name: 'Harsh',
        age: 22,
        subject: 'CP',
        marks: 90,
        a_id: ObjectId('662277c2ace149be62f34a2b')
    }
  ]

<!-- Query -->

db.students.aggregate([
{
    $lookup:{
        from: "address",
        localField: "a_id",
        foreignField: "_id",
        as: "AddressDetails"
    }
}])

<!--
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
 -->
