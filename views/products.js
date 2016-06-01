MyApp.products = function (params, viewInfo) {
    var showDetailAsRoot = viewInfo.layoutController.name === 'split';
    var viewModel = {
        categoryId: params.id,
        dataSource: new DevExpress.data.DataSource({
            pageSize: 10,            
            load: function(loadOptions) {
                return $.getJSON('http://sampleservices.devexpress.com/api/Products', {
                    CategoryID: viewModel.categoryId,
                    skip: loadOptions.skip,
                    take: loadOptions.take,
                    searchString: ''
                });            
            }
        }),
        navigateToDetails: function (productId) {
            this.selectedProductID(productId);
            MyApp.app.navigate({ view: 'product-details', id: productId }, { root: showDetailAsRoot });
        },
        selectedProductID: ko.observable()
    };

    return viewModel;
};