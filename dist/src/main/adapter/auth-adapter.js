"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdapter = void 0;
const generateToken_1 = require("../../utils/generateToken");
const getToken_1 = require("../../utils/getToken");
const adapter_1 = require("./adapter");
const jwtToken = new generateToken_1.JwtToken();
class UserAdapter extends adapter_1.Adapter {
    authorized(req) {
        try {
            const token = (0, getToken_1.getToken)(req);
            const isValid = jwtToken.tokenIsValid(token);
            return isValid;
        }
        catch (error) {
            return false;
        }
    }
}
exports.UserAdapter = UserAdapter;
