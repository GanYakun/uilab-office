sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/fileview/test/integration/FirstJourney',
		'com/banfftech/fileview/test/integration/pages/FilesList',
		'com/banfftech/fileview/test/integration/pages/FilesObjectPage'
    ],
    function(JourneyRunner, opaJourney, FilesList, FilesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/fileview') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFilesList: FilesList,
					onTheFilesObjectPage: FilesObjectPage
                }
            },
            opaJourney.run
        );
    }
);