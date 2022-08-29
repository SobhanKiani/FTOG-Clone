"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const user_schema_object_1 = require("./DbSchemaObjects/user.schema-object");
const auth_controller_1 = require("./auth.controller");
const constants_1 = require("./jwt/constants");
const jwt_startegt_class_1 = require("./jwt/jwt-startegt.class");
const roles_guard_1 = require("./jwt/roles.guard");
const microservices_1 = require("@nestjs/microservices");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([user_schema_object_1.UserSchemaObject]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: '30d',
                },
            }),
            microservices_1.ClientsModule.register([
                { name: 'ORDER_SERVICE', transport: microservices_1.Transport.NATS },
            ]),
        ],
        providers: [
            auth_service_1.AuthService,
            jwt_startegt_class_1.JwtStrategy,
            roles_guard_1.RolesGuard,
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map