"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
class Adapter {
    make(controller) {
        return async (req, res) => {
            try {
                if (!this.authorized(req))
                    return res.status(401).json("Unathorized!");
                const { body, statusCode } = await controller.handle({
                    ...req.body,
                    ...req.params,
                    ...req.query,
                    file: req?.file?.filename,
                });
                return res.status(statusCode).json(body);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Internal server error!");
            }
        };
    }
    authorized(req) {
        return true;
    }
}
exports.Adapter = Adapter;
