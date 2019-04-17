({
	handleComponentEvent : function(component, event, helper) {
        console.log('inside the evbenmt');
		component.set("v.textVariable", event.getParam("Param"));
        console.log(component.get("v.textVariable"));
	}
})