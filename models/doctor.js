var mongoose=require("mongoose");

var doctorSchema=new mongoose.Schema({
	firstName:String,
	lastName:String,
	practice:String,
	address:String,
    npi:String,
    providerId:String,
	specialty:String
		
},
{
	collection: 'doctors'
});

module.exports=mongoose.model("Doctor",doctorSchema);