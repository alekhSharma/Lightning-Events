({
    displayInfoToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Info Message',
            message: 'this is normal Message',
            duration:' 5000',
            type: 'info',
        });
        toastEvent.fire();
    },
	createRecord : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Account",
             'defaultFieldValues': {
                    'Name' : 'Cognizant',
                    'Type' : 'Prospect',
                    'Industry' : 'Apparel',
                    'Rating' : 'Hot'
                }
        });
        createRecordEvent.fire();
	},
    displaySuccessToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Success Message',
            message: 'this is success Message',
            duration:' 5000',
            type: 'success',
        });
        toastEvent.fire();
    },
    displayErrorToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Error Message',
            message: 'this is error Message',
            duration:' 5000',
            type: 'error',
        });
        toastEvent.fire();
    },
})