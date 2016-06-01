MyApp.categories = function (params) {

    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function (loadOptions) {
                return $.getJSON('http://sampleservices.devexpress.com/api/Categories');
            }
        })
    };

    return viewModel;
};