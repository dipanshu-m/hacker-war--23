"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("../controller/Controller");
const router = (0, express_1.Router)();
router.post('/updateLocation', Controller_1.updateLocation);
router.post('/createLocation', Controller_1.createLocation);
router.post('/createDestination', Controller_1.createDestination);
exports.default = router;
//# sourceMappingURL=Routes.js.map