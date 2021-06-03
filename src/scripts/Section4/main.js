/// <reference path='require.d.ts' />
require.config({
    baseUrl: './scripts/Section4'
});
require(['bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
