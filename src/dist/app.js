"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.request = exports.layout = exports.getInitialState = exports.initialStateConfig = void 0;
var Footer_1 = require("@/components/Footer");
var RightContent_1 = require("@/components/RightContent");
var pro_components_1 = require("@ant-design/pro-components");
var umi_1 = require("umi");
var querystring_1 = require("querystring");
var defaultSettings_1 = require("../config/defaultSettings");
var odata_js_1 = require("../lib/Uilab-Comp/utils/odata/odata.js");
var appConfig_1 = require("../config/appConfig");
require("../lib/Uilab-Comp/smart-comp/Process/auto-update");
var loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个*/
exports.initialStateConfig = {
    loading: React.createElement(pro_components_1.PageLoading, null)
};
/** 获取初始状态 */
function getInitialState() {
    return __awaiter(this, void 0, Promise, function () {
        var fetchUserInfo, currentUser;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fetchUserInfo = function () { return __awaiter(_this, void 0, void 0, function () {
                        var option, result;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    option = {
                                        path: "Me",
                                        url: appConfig_1.appConfig.ServiceName + "/control/odatasvc/launchpadManage/",
                                        parameters: (_a = appConfig_1.appConfig === null || appConfig_1.appConfig === void 0 ? void 0 : appConfig_1.appConfig.fetchUserInfo) === null || _a === void 0 ? void 0 : _a.parameters
                                    };
                                    return [4 /*yield*/, odata_js_1["default"].read(option)];
                                case 1:
                                    result = _b.sent();
                                    return [2 /*return*/, result.data];
                            }
                        });
                    }); };
                    if (!(umi_1.history.location.pathname !== loginPath)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    currentUser = _a.sent();
                    return [2 /*return*/, {
                            fetchUserInfo: fetchUserInfo,
                            currentUser: currentUser,
                            settings: defaultSettings_1["default"]
                        }];
                case 2: return [2 /*return*/, {
                        fetchUserInfo: fetchUserInfo,
                        settings: defaultSettings_1["default"]
                    }];
            }
        });
    });
}
exports.getInitialState = getInitialState;
/**
 * 格式化树形结构数据 生成 menu 层级结构 点击菜单按钮事件
 * @param menuList 原始的菜单数据
 */
var menuDataRender = function (menuList) {
    return menuList.map(function (item) {
        var isLink = item.isLink, entry = item.entry, path = item.path, children = item.children;
        var localItem = __assign(__assign({}, item), { children: item.children ? menuDataRender(item.children) : [], onTitleClick: function () {
                if (isLink) {
                    window.open(entry);
                    umi_1.history.replace('/');
                }
                //页面路由重置
                if (!children) {
                    umi_1.history.replace(path);
                }
            } });
        return localItem;
    });
};
/**
 * 静态菜单数据
 * @param menuList 原始的菜单数据
 */
exports.layout = function (_a) {
    var _b;
    var initialState = _a.initialState;
    return __assign({ rightContentRender: function () { return React.createElement(RightContent_1["default"], null); }, disableContentMargin: false, waterMarkProps: {
            content: (_b = initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) === null || _b === void 0 ? void 0 : _b.name
        }, footerRender: function () { return React.createElement(Footer_1["default"], null); }, onPageChange: function () {
            var location = umi_1.history.location;
            var _a = location.query, query = _a === void 0 ? {} : _a, search = location.search, pathname = location.pathname;
            var redirect = query.redirect;
            // 如果没有登录，重定向到 login
            if (!(initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) && location.pathname !== loginPath) {
                if (!redirect) {
                    umi_1.history.replace({
                        pathname: loginPath,
                        search: querystring_1.stringify({
                            redirect: pathname + search
                        })
                    });
                }
                else {
                    umi_1.history.push(loginPath);
                }
            }
        }, menuHeaderRender: undefined, menuDataRender: menuDataRender }, initialState === null || initialState === void 0 ? void 0 : initialState.settings);
};
exports.request = {
    errorConfig: {
        adaptor: function (resData) {
            return __assign(__assign({}, resData), { success: resData.ok, errorMessage: (resData === null || resData === void 0 ? void 0 : resData.message) ? resData.message : 'error' });
        }
    }
};
