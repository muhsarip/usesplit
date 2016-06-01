window.MyApp = window.MyApp || {};
$(function () {
    var layoutSet = [
        { platform: "ios", tablet: true, controller: new DevExpress.framework.html.IOSSplitLayoutController() },
        { platform: "android", tablet: true, controller: new DevExpress.framework.html.AndroidSplitLayoutController() },
        { win: false, phone: true, controller: new DevExpress.framework.html.NavBarController() },
        { win: true, phone: true, root: true, controller: new DevExpress.framework.html.PivotLayoutController() },
        { platform: "android", phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() },
        { win: true, phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() }
    ];
	//Comment the row below when running this app on a device simulator
	DevExpress.devices.current({deviceType: 'tablet'});

    var device = DevExpress.devices.current(),
        startupView = "navigation";
    if (device.phone) {
        startupView = "categories";
    };
    if (device.platform == 'generic') {
        DevExpress.devices.current({ platform: "ios", deviceType: 'tablet' });
    };

    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        animationSet: DevExpress.framework.html.animationSets['default'],
        layoutSet: layoutSet,
        navigation:[
            {
                title: "Categories",
                onExecute: "#categories",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    });
    MyApp.app.router.register(":view/:id", { view: startupView, id: undefined });
    MyApp.app.navigate();
});