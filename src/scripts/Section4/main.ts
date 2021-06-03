/// <reference path='require.d.ts' />
require.config({
    baseUrl: './scripts/Section4'
})

require(['bootstrapper'], 
    (bootstrapper) => {
        bootstrapper.run();
    })