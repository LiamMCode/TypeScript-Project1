/// <reference path="typings/knockout-2.2.d.ts"/>
var amb_dec;
(function (amb_dec) {
    var name = ko.observable('Liam Morgan');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullname: name
    };
    var value = guy.fullname();
    console.log(value);
})(amb_dec || (amb_dec = {}));
