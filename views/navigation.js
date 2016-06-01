MyApp.navigation = function (params) {

    $.each(MyApp.app.navigation, function (_, command) {
        command.option("root", false);
    })

    var viewModel = {
        commands: MyApp.app.navigation
    };

    return viewModel;
};