angular.module('proton.bridge')
    .directive('bridgeFreePanel', (gettextCatalog, notification) => {
        const I18N = {
            info: gettextCatalog.getString('This feature is only available for paid users.', null, 'Info')
        };
        const onClick = () => notification.info(I18N.info);
        return {
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/bridge/bridgeFreePanel.tpl.html',
            link(scope, el) {
                const $btn = el.find('.bridgeFreePanel-btn');

                $btn.on('click', onClick);

                scope.$on('$destroy', () => {
                    $btn.off('click', onClick);
                });
            }
        };
    });
