"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_controller_1 = require("./auth.controller");
var auth_service_1 = require("./auth.service");
var prisma_module_1 = require("../../prisma/prisma.module");
var user_service_1 = require("../user/user.service");
var jwt_1 = require("@nestjs/jwt");
var config_1 = require("@nestjs/config");
var strategy_1 = require("../../strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [prisma_module_1.PrismaModule, jwt_1.JwtModule.register({})],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, user_service_1.UserService, strategy_1.JwtStrategy, config_1.ConfigService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
