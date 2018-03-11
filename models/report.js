var mongoose=require("mongoose");

var reportSchema=new mongoose.Schema({
	startDate:String,
	endDate:String,
	status:String,
	statusLog:[],
	billing:{
		billed:String,
		paid:String,
		dateBilled:String,
		billingPeriod:String
	},
	author:
		{
			firstName:String,
			lastName:String,
			providerId:String,
			rate:String
		},
	recipient:
		{
			firstName:String,
			lastName:String,
			approvals:[],
			medicaidNumber:String,
			diagnosis:[],
			doctor:{
				firstName:String,
				lastName:String,
				practice:String,
				address:String,
    			npi:String,
    			providerId:String,
				specialty:String
			}
		},
	schedule:
		[
			{
				date:String,
				timeIn:[],
				timeOut:[]
			}
		],
	assistantLog:{
		log:
			[
				{
					setting:String,
					environmentalChange:String,
					participation:String,
					status:String,
					behaviors:[],
					intervention:{
						behavior:String,
						name:String,
						result:String
					},
					otherInterventions:[{
						behavior:String,
						name:String,
						result:String
					}],
					replacements:[],
					reinforces:String,
					progress:String
				}
			],
		signatures:{
			assistant:String,
			analyst:String,
			caregiver:String
		},
		state:String
	},
	behavior:[{
		upLimit:String,
		downLimit:String,
		name:String,
		justification:String,
		measurement:String,
		intensity:String,
		data:{},
		signatures:{
			assistant:String,
			analyst:String,
		},
		state:String
	}],
	replacement:[{
		upLimit:String,
		downLimit:String,
		name:String,
		justification:String,
		measurement:String,
		data:{},
		signatures:{
			assistant:String,
			analyst:String,
		},
		state:String
	}],
	supervision:{
		author:
		{
			firstName:String,
			lastName:String,
			providerId:String,
		},
		date:String,
		duration:Number,
		characteristics:[],
		performance:String,
		signatures:{
			assistant:String,
			analyst:String
		},
		state:String
	},
	medical:{
		medicalVisit:[
			{
				doctor:String,
				reason:String,
				date:String,
			}
		],
		medication:[
			{
				name:String,
				action:String
			}
		],
		signatures:{
			assistant:String,
			caregiver:String
		},
		state:String
	},
	analystLog:{
		log:
			[
				{
					progress:String
				}
			],
		signatures:{
			caregiver:String,
			analyst:String,
		},
		state:String
	},
	caregiver:{
		performance:[],
		date:String,
		signatures:{
			caregiver:String,
			analyst:String,
		},
		state:String
	}

},
{
	collection: 'reports'
});

module.exports=mongoose.model("Report",reportSchema);