const express = require("express");
const attendanceService = require("../services/attendanceService")
const attendanceRouter = express.Router();

attendanceRouter.post("/create", attendanceService.createAttendance);
attendanceRouter.post("/abc", attendanceService.test);


module.exports = attendanceRouter;
