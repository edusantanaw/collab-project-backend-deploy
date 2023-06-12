"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("../adapter/adapter");
const auth_adapter_1 = require("../adapter/auth-adapter");
const addFollow_1 = require("../factories/controllers/user/addFollow");
const auth_controller_1 = require("../factories/controllers/user/auth-controller");
const createUser_1 = require("../factories/controllers/user/createUser");
const forgetPassword_1 = require("../factories/controllers/user/forgetPassword");
const loadById_1 = require("../factories/controllers/user/loadById");
const loadByName_1 = require("../factories/controllers/user/loadByName");
const loadFollow_1 = require("../factories/controllers/user/loadFollow");
const recoveryPassword_1 = require("../factories/controllers/user/recoveryPassword");
const update_1 = require("../factories/controllers/user/update");
const upload_file_1 = require("../middlewares/upload-file");
const adapter = new adapter_1.Adapter();
const authAdapter = new auth_adapter_1.UserAdapter();
function default_1(router) {
    router.post("/signup", adapter.make((0, createUser_1.makeCreateUserController)()));
    router.post("/signin", adapter.make((0, auth_controller_1.makeAuthController)()));
    router.get("/user/password/forget", adapter.make((0, forgetPassword_1.makeForgetPasswordController)()));
    router.put("/user/:id", upload_file_1.fileUpload, adapter.make((0, update_1.makeUpdateUserController)()));
    router.patch("/user/recovery/:id", adapter.make((0, recoveryPassword_1.makeRecoveryPasswordController)()));
    router.post("/follow/add/:userId", authAdapter.make((0, addFollow_1.makeAddFollowController)()));
    router.get("/user/search/:name", authAdapter.make((0, loadByName_1.makeLoadUserByNameController)()));
    router.get("/user/:id", authAdapter.make((0, loadById_1.makeLoadUserByIdController)()));
    router.get("/follow/following/:id", authAdapter.make((0, loadFollow_1.makeLoadFollowController)()));
}
exports.default = default_1;
