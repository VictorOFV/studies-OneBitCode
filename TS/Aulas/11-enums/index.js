var Roles;
(function (Roles) {
    Roles[Roles["USER"] = 0] = "USER";
    Roles[Roles["SUPPORT"] = 1] = "SUPPORT";
    Roles[Roles["MODERATOR"] = 2] = "MODERATOR";
    Roles[Roles["ADMINISTRATOR"] = 3] = "ADMINISTRATOR";
    Roles[Roles["ADMINISTRATOR_MASTER"] = 4] = "ADMINISTRATOR_MASTER";
    Roles[Roles["FOUNDER"] = 5] = "FOUNDER";
})(Roles || (Roles = {}));
var user = {
    name: "Roberto",
    id: 1,
    role: 4
};
if (user.role >= Roles.MODERATOR) {
    console.log("Usuario tem permisao");
}
else {
    console.log("Usuario nao tem permissao");
}
