sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/usergroupmanage/test/integration/FirstJourney',
		'com/banfftech/usergroupmanage/test/integration/pages/UserGroupsList',
		'com/banfftech/usergroupmanage/test/integration/pages/UserGroupsObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserGroupsList, UserGroupsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/usergroupmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserGroupsList: UserGroupsList,
					onTheUserGroupsObjectPage: UserGroupsObjectPage
                }
            },
            opaJourney.run
        );
    }
);