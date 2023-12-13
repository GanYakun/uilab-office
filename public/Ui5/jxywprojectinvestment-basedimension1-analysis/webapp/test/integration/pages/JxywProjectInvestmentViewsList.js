sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.banfftech.jxywprojectinvestmentbasedimension1analysis',
            componentId: 'JxywProjectInvestmentViewsList',
            entitySet: 'JxywProjectInvestmentViews'
        },
        CustomPageDefinitions
    );
});