"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg" || ".png" || ".wepg");
    },
});
const upload = (0, multer_1.default)({ storage }).single("image");
const fileUpload = (req, res, next) => {
    upload(req, res, (err) => {
        if (err)
            console.log(err);
        next(undefined);
    });
};
exports.fileUpload = fileUpload;
