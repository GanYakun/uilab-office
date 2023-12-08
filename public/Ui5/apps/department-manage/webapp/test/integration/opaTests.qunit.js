sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/departmentmanage/test/integration/FirstJourney',
		'com/banfftech/departmentmanage/test/integration/pages/DepartmentsList',
		'com/banfftech/departmentmanage/test/integration/pages/DepartmentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, DepartmentsList, DepartmentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/departmentmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDepartmentsList: DepartmentsList,
					onTheDepartmentsObjectPage: DepartmentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);