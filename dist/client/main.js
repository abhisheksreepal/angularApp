"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4RUFBMkU7QUFDM0Usc0NBQTZDO0FBRTdDLCtDQUE2QztBQUU3QyxnREFBZ0Q7QUFDaEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLHFCQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQsaURBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuLy8gRW5hYmxlIHByb2R1Y3Rpb24gbW9kZSB1bmxlc3MgcnVubmluZyBsb2NhbGx5XG5pZiAoIS9sb2NhbGhvc3QvLnRlc3QoZG9jdW1lbnQubG9jYXRpb24uaG9zdCkpIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl19
