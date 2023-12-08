sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/leaveapprovalmanage/test/integration/FirstJourney',
		'com/banfftech/leaveapprovalmanage/test/integration/pages/LeaveApprovalsList',
		'com/banfftech/leaveapprovalmanage/test/integration/pages/LeaveApprovalsObjectPage'
    ],
    function(JourneyRunner, opaJourney, LeaveApprovalsList, LeaveApprovalsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/leaveapprovalmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLeaveApprovalsList: LeaveApprovalsList,
					onTheLeaveApprovalsObjectPage: LeaveApprovalsObjectPage
                }
            },
            opaJourney.run
        );
    }
);