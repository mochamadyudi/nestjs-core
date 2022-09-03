"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var prisma_1 = require("@yid/prisma");
var modules_1 = require("@yid/modules");
var modules_2 = require("@yid/modules");
var jwt_1 = require("@nestjs/jwt");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [prisma_1.PrismaModule],
            controllers: [modules_1.UserController],
            providers: [modules_2.UserService, jwt_1.JwtService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
