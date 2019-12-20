import crud from '../models/schema';

export const cre = (req,res) => 
{
    var note = new crud(req.body);
    note.save(function(err,result){
    if(err) res.send("Can't insert"); 
    else res.send("Inserted");});
}

export const del = (req,res) => {
    crud.deleteOne({id : req.body.id},function(err,result){
        if(err) {res.send("can't delete");}
        else 
        res.send("deleted");
    });
}    