sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.banfftech.projectallocanalysis',
            componentId: 'ProjectAllocFactViewsList',
            entitySet: 'ProjectAllocFactViews'
        },
        CustomPageDefinitions
    );
});