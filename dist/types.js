"use strict";
const x = 30;
const y = "50";
const res = x + y;
const personIntfSample = {
    age: 21,
    name: "Jhon",
    birthDate: new Date("1992-07-22"),
    lastName: "Doe",
};
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["CLIENT"] = "Client";
    UserRole["SUPER_ADMIN"] = "SuperAdmin";
})(UserRole || (UserRole = {}));
const clientSample = {
    userName: "client",
    password: "1234",
    role: "Loquesea",
};
const functionSample = (args) => {
    const { arg1 = 'someval', arg2 } = args;
    return arg1 + arg2;
};
const NOSEHACE = new Date('12');
