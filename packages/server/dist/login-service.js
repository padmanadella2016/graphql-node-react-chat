"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogInUserService = (function () {
    function LogInUserService() {
        this.logInUser = {
            userId: 6,
            name: 'MewMew_007',
            img: 'https://i.pravatar.cc/50?u=a042581f4e29026704f'
        };
    }
    LogInUserService.prototype.getAll = function () {
        return this.logInUser;
    };
    return LogInUserService;
}());
exports.LogInUserService = LogInUserService;
