sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.banfftech.projectallocfactbasedimension3analysis',
            componentId: 'ProjectAllocFactViewsObjectPage',
            entitySet: 'ProjectAllocFactViews'
        },
        CustomPageDefinitions
    );
});