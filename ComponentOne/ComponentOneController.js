({
	handleClick : function(component, event, helper) {
        var appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({
            "Param" : "Event Called" 
        });
        appEvent.fire();
	}
})