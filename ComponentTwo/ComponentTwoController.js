({
	handleApplicationEvent : function(component, event, helper) {
		component.set("v.textVariable", event.getParam("Param"));
	}
})