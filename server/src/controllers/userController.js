import User from "../models/User.js";

export const createUser = async (req,res) =>{
    try {
        
        const newUser = new User({...req.body})
        await newUser.save();
        return res.status(201).json({message:'Registered Successfully'});

    } catch (error) {
        console.error(error);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

export const getUsers = async (req,res)=>{
    try {
        const userdata = await User.find();
        if(userdata.length === 0)
        {
            return res.status(404).json({message : 'please create user '});
        }
        return res.json(userdata);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}

export const updateUser = async (req,res) => {
    try{
        const updatedata = await User.findByIdAndUpdate({
            _id : req.params.id},
            {
            $set : req.body
            },{new:true});
        if(!updatedata)
        {
            return res.status(404).json({error : 'Data not found'});
        }
        return res.json({message : 'update data successfully'});
    }catch(error){
        console.error(error);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}
export const getUser = async(req,res) => {
    try {
        const getdata = await User.findById(req.params.id);
        if(!getdata)
        {
            return res.status(404).json({message : 'data not found'});
        }
        return res.status(200).json({getdata});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}
export const deleteUser = async (req,res) => {
    try{
        const deletedata = await User.findById({_id : req.params.id});
        if(!deletedata)
        {
            return res.status(404).json({error:'Data not found'});
        }
        await User.findByIdAndDelete(deletedata._id);
        return res.json({message : 'deleted successfully',deletedata});
    }catch(error)
    {
        console.error(error);
        return res.status(500).json({error : 'Internal Server Error'});
    }
}