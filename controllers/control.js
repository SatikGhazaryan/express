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
 
 const  getContactsController=(req,res)=>{
    return res.send({
        data:contacts
    })
}
const  postContactsController=(req,res)=>{
    contacts.push({
        id:4,
        title:'this is contact 4',
        isPublic:false
    })
    return res.send({
        name:contacts 
    })
}
module.exports={
    getContactsController,
    postContactsController
}