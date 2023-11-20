sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/securitygroupmanage/test/integration/FirstJourney',
		'com/banfftech/securitygroupmanage/test/integration/pages/SecurityGroupsList',
		'com/banfftech/securitygroupmanage/test/integration/pages/SecurityGroupsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SecurityGroupsList, SecurityGroupsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/securitygroupmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSecurityGroupsList: SecurityGroupsList,
					onTheSecurityGroupsObjectPage: SecurityGroupsObjectPage
                }
            },
            opaJourney.run
        );
    }
);