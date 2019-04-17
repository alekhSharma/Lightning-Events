({
	handleClick : function(component, event, helper) {
		var cmpEvent = component.getEvent("compEvent");
        cmpEvent.setParams({
            "Param" : "Event called" 
        });
        cmpEvent.fire();
        console.log(cmpEvent);
	}
})