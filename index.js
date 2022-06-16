import express from "Express";
const app=express();
const port=8000;
app.listen(port, ()=>console.log("Server listening port `${port}`"));
const contacts=[
    {
        id:1,
        title:'this is contact 1',
        imgUrl:'url',
        isPublic:true
    },
    {
        id:2,
        title:'this is contact 2',
        imgUrl:'url',
        isPublic:false
    }
]

function getContactsController(req,res){
    return res.send({
        data:contacts
    })
}
function postContactsController(req,res){
    contacts.push({
        id:4,
        title:'this is contact 4',
        isPublic:false
    })
    return res.send({
        name:contacts
    })
}
app.get('/contacts', getContactsController)
app.post('/contacts', postContactsController)
// app.delete()
// app.put() 