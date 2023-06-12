"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadFeedController = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const feed_1 = require("../../usecases/post/feed");
function makeLoadFeedController() {
    return new load_1.LoadController((0, feed_1.makeLoadFeedUsecase)());
}
exports.makeLoadFeedController = makeLoadFeedController;
