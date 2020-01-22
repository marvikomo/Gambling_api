/**
|-------------------------------------
| A callback class for all constant
| function callbacks
|-------------------------------------
*/

module.exports ={
	
	checkAmount(el){
		let regex =/^[1-9]\d*(?:\.\d{0,2})?$/;
		if(regex.test(el))
		{
            return true;
		}else{
			return false
		}
	  },

	 betLimit(amt)
	{
		if (amt > 60000 )
		{
			return true
		}else{
			return false
		}
	}
	

	
}

