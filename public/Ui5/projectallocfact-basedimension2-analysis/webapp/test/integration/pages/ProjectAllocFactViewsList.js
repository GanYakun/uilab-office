sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.banfftech.projectallocfactbasedimension2analysis',
            componentId: 'ProjectAllocFactViewsList',
            entitySet: 'ProjectAllocFactViews'
        },
        CustomPageDefinitions
    );
});