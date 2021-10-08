/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/dropdown/templates/dropdown.html":
/*!*************************************************!*\
  !*** ./src/ts/dropdown/templates/dropdown.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"mismis dropdown {{#rtl}}mismis-rtl{{/rtl}}\"  data-uniq-id=\"{{uniqId}}\" >\r\n  {{> header}}\r\n  <div class=\"body\">\r\n    {{#search}}\r\n    {{> search}}\r\n    {{/search}}\r\n    <div class=\"mismis scrollbar\"></div>\r\n  </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/ts/dropdown/templates/header.html":
/*!***********************************************!*\
  !*** ./src/ts/dropdown/templates/header.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"header\">\r\n   <div class=\"value\">{{placeHolder}}</div>\r\n   <img src=\"{{arrowDownIconUrl}}\" class=\"arrow-down\" />\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/ts/dropdown/templates/items.html":
/*!**********************************************!*\
  !*** ./src/ts/dropdown/templates/items.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"items\">\r\n   {{#items}}\r\n   {{> row}}\r\n   {{/items}}\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/ts/dropdown/templates/row.html":
/*!********************************************!*\
  !*** ./src/ts/dropdown/templates/row.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"row\" data-row-id=\"{{id}}\">{{title}}</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/ts/dropdown/templates/search.html":
/*!***********************************************!*\
  !*** ./src/ts/dropdown/templates/search.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"search-container\">\r\n   <input type=\"text\" class=\"search\" />\r\n   <img src=\"{{clearIconUrl}}\" class=\"clear\" />\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/ts/scrollbar/templates/scrollbar.html":
/*!***************************************************!*\
  !*** ./src/ts/scrollbar/templates/scrollbar.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"mismis scrollbar {{#rtl}}mismis-rtl{{/rtl}}\" data-uniq-id={{uniqId}}>\r\n\t<ul class=\"scrollY myScroll\">\r\n\t\t<div class=\"viewport\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t{{{content}}}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ul>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/scss/dropdown.scss":
/*!********************************!*\
  !*** ./src/scss/dropdown.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/scrollbar.scss":
/*!*********************************!*\
  !*** ./src/scss/scrollbar.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/asset/image/arrow-down.svg":
/*!****************************************!*\
  !*** ./src/asset/image/arrow-down.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzODYuMjU3IDM4Ni4yNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4Ni4yNTcgMzg2LjI1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8cG9seWdvbiBwb2ludHM9IjAsOTYuODc5IDE5My4xMjksMjg5LjM3OSAzODYuMjU3LDk2Ljg3OSAiLz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPC9zdmc+IA=="

/***/ }),

/***/ "./src/asset/image/clear.svg":
/*!***********************************!*\
  !*** ./src/asset/image/clear.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyIgd2lkdGg9IjE3IiBoZWlnaHQ9IjE4IiB2ZXJzaW9uPSIxLjEiPjxyZWN0IGlkPSJiYWNrZ3JvdW5kcmVjdCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMDIiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9IlN2Z2pzRzEwMDgiIGNsYXNzPSIiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgaWQ9InN2Z18xIiB4PSItNy4zODMwMDYwOTU4ODYyMzA1IiB5PSItNi43MzMxMzI4MzkyMDI4ODEiPjxnIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFwZSIgaWQ9InN2Z18yIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNjMWMxYzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjIzMjE0MDAwMDAwMDAwMDIiIGQ9Ik03LjM4MzAwNjI1Nzg0OSw2LjczMzEzMjY1NiBMMjQuODE4ODIyODc2OTQsMjQuOTQ2OTkzMjI1NiBNNy4zODMwMDYyNTc4NDksMjQuOTQ2OTkzMjI1NiBMMjQuODE4ODIyODc2OTQsNi43MzMxMzI2NTYgIiBvcGFjaXR5PSIuOCIgY2xhc3M9ImNvbG9yU3Ryb2tlcmVkIHN2Z1N0cm9rZSIgaWQ9InN2Z18zIi8+PC9nPjwvc3ZnPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./src/ts/declartion/popup-state.ts":
/*!******************************************!*\
  !*** ./src/ts/declartion/popup-state.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PopupState;
(function (PopupState) {
    PopupState[PopupState["Open"] = 1] = "Open";
    PopupState[PopupState["Close"] = 2] = "Close";
})(PopupState || (PopupState = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupState);


/***/ }),

/***/ "./src/ts/dropdown/index.ts":
/*!**********************************!*\
  !*** ./src/ts/dropdown/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _templates_dropdown_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/dropdown.html */ "./src/ts/dropdown/templates/dropdown.html");
/* harmony import */ var _templates_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/header.html */ "./src/ts/dropdown/templates/header.html");
/* harmony import */ var _templates_search_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/search.html */ "./src/ts/dropdown/templates/search.html");
/* harmony import */ var _templates_row_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/row.html */ "./src/ts/dropdown/templates/row.html");
/* harmony import */ var _templates_items_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/items.html */ "./src/ts/dropdown/templates/items.html");
/* harmony import */ var _asset_image_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../asset/image/arrow-down.svg */ "./src/asset/image/arrow-down.svg");
/* harmony import */ var _asset_image_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_asset_image_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _asset_image_clear_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../asset/image/clear.svg */ "./src/asset/image/clear.svg");
/* harmony import */ var _asset_image_clear_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_asset_image_clear_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/index */ "./src/ts/framework/index.ts");
/* harmony import */ var _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../declartion/popup-state */ "./src/ts/declartion/popup-state.ts");
/* harmony import */ var _scrollbar_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../scrollbar/index */ "./src/ts/scrollbar/index.ts");
/* harmony import */ var _scss_dropdown_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../scss/dropdown.scss */ "./src/scss/dropdown.scss");












var DropDown = /** @class */ (function () {
    function DropDown(config) {
        var _this = this;
        this.insideQuerySelect = function (query) { return _this.componentElement.querySelector(query); };
        this.uniqId = _framework_index__WEBPACK_IMPORTED_MODULE_8__["default"].createUUID();
        this.element = config.element;
        this.data = config.data;
        this.defaultValueId = config.defaultValueId;
        this.placeHolder = config.placeHolder;
        this.rtl = config.rtl;
        this.search = config.search;
        this.popupState = _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__["default"].Close;
        this.selectItem = this.selectItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.onSelect = config.onSelect;
        this.rowRender = config.rowRender;
    }
    DropDown.prototype.validate = function () {
        if (!this.element) {
            console.log("Element is empty");
            return false;
        }
        if (!this.data) {
            console.log("Data is empty");
            return false;
        }
        return true;
    };
    DropDown.prototype.createComponent = function () {
        var html = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_templates_dropdown_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
            uniqId: this.uniqId,
            placeHolder: this.placeHolder,
            rtl: this.rtl,
            search: this.search,
            arrowDownIconUrl: (_asset_image_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6___default()),
            clearIconUrl: (_asset_image_clear_svg__WEBPACK_IMPORTED_MODULE_7___default())
        }, {
            header: _templates_header_html__WEBPACK_IMPORTED_MODULE_2__["default"],
            search: _templates_search_html__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        this.componentElement = _framework_index__WEBPACK_IMPORTED_MODULE_8__["default"].htmlToElement(html);
        this.getBody();
        this.element.insertAdjacentElement('afterend', this.componentElement);
        this.element.remove();
    };
    DropDown.prototype.getBody = function () {
        var _this = this;
        var data = this.data.filter(function (x) { return !_this.filter || x.title.toLowerCase().includes(_this.filter.toLowerCase()); });
        var items = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_templates_items_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
            items: data
        }, {
            row: this.rowRender ? this.rowRender() : _templates_row_html__WEBPACK_IMPORTED_MODULE_4__["default"]
        });
        return (0,_scrollbar_index__WEBPACK_IMPORTED_MODULE_10__["default"])({
            element: this.componentElement.querySelector('.body > div:not(.search-container)'),
            content: items,
            height: '200px',
            rtl: this.rtl
        });
    };
    DropDown.prototype.bindEvents = function () {
        var _this = this;
        var self = this;
        this.componentElement.querySelector('.arrow-down').addEventListener('click', function (e) {
            self.popup(_this.popupState != _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__["default"].Open);
        });
        this.componentElement.querySelectorAll('.items .row').forEach(function (row) {
            row.addEventListener('click', function (e) {
                self.selectItem(e.currentTarget.getAttribute('data-row-id'));
                self.popup(false);
            });
        });
        document.addEventListener('click', function (e) {
            if (self.popupState != _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__["default"].Open) {
                return;
            }
            if (!_framework_index__WEBPACK_IMPORTED_MODULE_8__["default"].eventChildOf(e, "[data-uniq-id='" + _this.uniqId + "']")) {
                self.popup(false);
            }
        });
        if (this.search) {
            this.componentElement.querySelector('.search').addEventListener('input', function (e) {
                self.filter = e.currentTarget.value;
                self.getBody();
            });
            this.componentElement.querySelector('.search-container .clear').addEventListener('click', function (e) {
                var search = _this.componentElement.querySelector('.search');
                self.filter = search.value = null;
                search.dispatchEvent(new Event('input'));
            });
        }
    };
    DropDown.prototype.popup = function (show) {
        if (show) {
            this.componentElement.classList.add('open');
            this.popupState = _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__["default"].Open;
        }
        else {
            this.componentElement.classList.remove('open');
            this.popupState = _declartion_popup_state__WEBPACK_IMPORTED_MODULE_9__["default"].Close;
        }
        this.componentElement.querySelectorAll('.body *').forEach(function (x) {
            x.dispatchEvent(new Event('resize'));
        });
    };
    DropDown.prototype.selectItem = function (id) {
        this.selectedItem = this.data.filter(function (x) { return x.id == id; })[0];
        if (!!this.selectedItem) {
            this.componentElement.querySelector('.header .value').innerHTML = this.selectedItem.title;
            this.componentElement.querySelectorAll('.body .items .row').forEach(function (x) { return x.classList.remove('selected'); });
            this.componentElement.querySelector('.body .items .row[data-row-id="' + id + '"]').classList.add('selected');
        }
        this.onSelect && this.onSelect(this.selectedItem);
    };
    DropDown.Initializer = function (config) {
        var dropDown = new DropDown(config);
        if (!dropDown.validate()) {
            return;
        }
        dropDown.createComponent();
        dropDown.selectItem(config.defaultValueId);
        dropDown.bindEvents();
        return dropDown.componentElement.outerHTML;
    };
    return DropDown;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown.Initializer);


/***/ }),

/***/ "./src/ts/framework/index.ts":
/*!***********************************!*\
  !*** ./src/ts/framework/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
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
var Framework = {
    extend: function (obj1, obj2) {
        var result = __assign({}, obj1);
        for (var prop in obj2) {
            if (!result[prop]) {
                result[prop] = obj2[prop];
            }
        }
        return result;
    },
    createUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    htmlToElement: function (html) {
        var template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstChild;
    },
    closest: function (target, selector) {
        while (target !== document.body) {
            target = target.parentElement;
            if (target.matches(selector))
                return target;
        }
        return null;
    },
    eventChildOf: function (e, selector) {
        if (!!selector) {
            var target = e.target;
            if (!target) {
                return null;
            }
            return Framework.closest(target, selector);
        }
        return null;
    },
    addEventForChild: function (parent, eventName, childSelector, callback) {
        parent.addEventListener(eventName, function (e) {
            var target = e.target;
            if (!target) {
                return null;
            }
            var matchingChild = Framework.closest(target, childSelector);
            if (matchingChild) {
                callback(e, matchingChild);
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Framework);


/***/ }),

/***/ "./src/ts/scrollbar/index.ts":
/*!***********************************!*\
  !*** ./src/ts/scrollbar/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/index */ "./src/ts/framework/index.ts");
/* harmony import */ var _templates_scrollbar_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/scrollbar.html */ "./src/ts/scrollbar/templates/scrollbar.html");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll */ "./src/ts/scrollbar/scroll.ts");
/* harmony import */ var _scss_scrollbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/scrollbar.scss */ "./src/scss/scrollbar.scss");





var Scrollbar = /** @class */ (function () {
    function Scrollbar(config) {
        this.uniqId = _framework_index__WEBPACK_IMPORTED_MODULE_1__["default"].createUUID();
        this.element = config.element;
        this.content = config.content;
        this.height = config.height;
        this.rtl = config.rtl;
    }
    Scrollbar.prototype.createComponent = function () {
        var html = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_templates_scrollbar_html__WEBPACK_IMPORTED_MODULE_2__["default"], {
            uniqId: this.uniqId,
            content: this.content,
            rtl: this.rtl
        });
        this.componentElement = _framework_index__WEBPACK_IMPORTED_MODULE_1__["default"].htmlToElement(html);
        this.element.insertAdjacentElement('afterend', this.componentElement);
        this.element.remove();
    };
    Scrollbar.Initializer = function (config) {
        var scrollbar = new Scrollbar(config);
        scrollbar.createComponent();
        new _scroll__WEBPACK_IMPORTED_MODULE_3__["default"](scrollbar.componentElement.querySelector('.scrollX, .scrollY'), scrollbar.rtl);
        return scrollbar.componentElement.outerHTML;
    };
    return Scrollbar;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar.Initializer);


/***/ }),

/***/ "./src/ts/scrollbar/scroll.ts":
/*!************************************!*\
  !*** ./src/ts/scrollbar/scroll.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/index */ "./src/ts/framework/index.ts");

var Scroll = /** @class */ (function () {
    function Scroll(el, rtl) {
        this.scrollbarSize = 0;
        this.scrollbarTpl = '<div><div class="thumb"></div></div>';
        this.scrollbar = {
            x: null,
            y: null
        };
        this.thumb = {
            x: null,
            y: null
        };
        this.lastScroll = {
            top: -1,
            left: -1
        };
        this.el = el;
        this.rtl = rtl;
        this.viewport = el.querySelector(':scope > .viewport');
        this.content = this.viewport.querySelector(':scope > .content');
        this.getScrollbarSize();
        this.init();
    }
    Scroll.prototype.update = function () {
        var self = this;
        var scroll = {
            top: this.viewport.scrollTop,
            left: this.viewport.scrollLeft
        };
        var perform = function (vertical) {
            var vocab = self.vocabulary(vertical);
            var scrollSize = self.content['scroll' + vocab.sizeUpper];
            var viewportSize = self.viewport ? self.viewport[vocab.size] : null;
            if (scrollSize <= viewportSize) {
                if (self.scrollbar[vocab.axis]) {
                    self.scrollbar[vocab.axis].classList.add('disabled');
                }
                return;
            }
            else {
                if (self.scrollbar[vocab.axis]) {
                    self.scrollbar[vocab.axis].classList.remove('disabled');
                }
            }
            if (scroll[vocab.pos] !== self.lastScroll[vocab.pos]) {
                self.lastScroll[vocab.pos] = scroll[vocab.pos];
                var elSize = self.el[vocab.size];
                var maxScrollSize = scrollSize - elSize;
                var ratio = elSize / scrollSize;
                var scrollRelative = scroll[vocab.pos] / maxScrollSize;
                var thumbSize = ((ratio > 1) ? 1 : ratio) * elSize;
                var scrollbarSize = self.scrollbar[vocab.axis][vocab.size];
                if (self.thumb[vocab.axis]) {
                    self.thumb[vocab.axis].style[vocab.setSize] = thumbSize + 'px';
                    self.thumb[vocab.axis].style[vocab.pos] = (scrollRelative * (scrollbarSize - thumbSize)) + 'px';
                }
            }
        };
        perform(true);
        perform(false);
    };
    Scroll.prototype.vocabulary = function (vertical) {
        return {
            axis: vertical ? 'y' : 'x',
            axisUpper: vertical ? 'Y' : 'X',
            pos: vertical ? 'top' : 'left',
            posUpper: vertical ? 'Top' : 'Left',
            size: vertical ? 'offsetHeight' : 'offsetWidth',
            setSize: vertical ? 'height' : 'width',
            sizeUpper: vertical ? 'Height' : 'Width'
        };
    };
    Scroll.prototype.setupEvents = function () {
        var self = this;
        this.viewport.addEventListener('scroll', function (e) {
            self.update();
        });
        this.viewport.addEventListener('resize', function (e) {
            self.update();
        });
        this.el.addEventListener('mouseover', function (e) {
            self.update();
        });
        var setupOrientation = function (vertical) {
            var _a, _b;
            var vocab = self.vocabulary(vertical);
            (_a = self.scrollbar[vocab.axis]) === null || _a === void 0 ? void 0 : _a.click(function (e) {
                if (_framework_index__WEBPACK_IMPORTED_MODULE_0__["default"].eventChildOf(e, self.scrollbar[vocab.axis])) {
                    var move = self.viewport[vocab.size]();
                    if (parseFloat(self.thumb[vocab.axis].css(vocab.pos)) >
                        (e['page' + vocab.axisUpper] - self.scrollbar[vocab.axis].offset()[vocab.pos])) {
                        move *= -1;
                    }
                    self.viewport['scroll' + vocab.posUpper](self.viewport['scroll' + vocab.posUpper]() + move);
                    self.update();
                }
            });
            (_b = self.thumb[vocab.axis]) === null || _b === void 0 ? void 0 : _b.addEventListener('mousedown', function (e) {
                var body = document.body;
                var origUnselectable = body.getAttribute('unselectable');
                body.setAttribute('unselectable', 'on');
                var last = e['page' + vocab.axisUpper];
                self.scrollbar[vocab.axis].classList.add('dragScrolling');
                var mouseMoveHandler = function (e) {
                    var elSize = self.el[vocab.size];
                    var scrollSize = self.content['scroll' + vocab.sizeUpper];
                    var ratio = elSize / scrollSize;
                    var move = (e['page' + vocab.axisUpper] - last) / ratio;
                    self.viewport['scroll' + vocab.posUpper] = self.viewport['scroll' + vocab.posUpper] + move;
                    last = e['page' + vocab.axisUpper];
                    self.update();
                    e.preventDefault();
                };
                document.addEventListener('mousemove', mouseMoveHandler);
                document.addEventListener('mouseup', function (e) {
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    body.setAttribute('unselectable', origUnselectable || 'off');
                    self.scrollbar[vocab.axis].classList.remove('dragScrolling');
                }, { once: true });
            });
        };
        setupOrientation(true);
        setupOrientation(false);
    };
    Scroll.prototype.getScrollbarSize = function () {
        var container = _framework_index__WEBPACK_IMPORTED_MODULE_0__["default"].htmlToElement('<div><div></div></div>');
        document.body.append(container);
        container.style.overflow = 'scroll';
        container.style.height = '100px';
        container.style.width = '100px';
        var scroll = container.querySelector(':scope > div');
        scroll.style.height = '100%';
        scroll.style.width = '100%';
        this.scrollbarSize = container.offsetWidth - scroll.offsetWidth;
        container.remove();
    };
    Scroll.prototype.init = function () {
        var _a, _b;
        if (this.el.classList.contains('scrollX')) {
            this.viewport.style.paddingTop = this.scrollbarSize + 'px';
            this.viewport.style.paddingBottom = (-this.scrollbarSize) + 'px';
            this.content.style.marginBottom = (-this.scrollbarSize) + 'px';
            var scrollbarTplElement_1 = _framework_index__WEBPACK_IMPORTED_MODULE_0__["default"].htmlToElement(this.scrollbarTpl);
            scrollbarTplElement_1.classList.add('scrollbarX');
            this.el.insertAdjacentElement('beforebegin', scrollbarTplElement_1);
        }
        if (this.el.classList.contains('scrollY')) {
            this.viewport.style[this.rtl ? 'paddingLeft' : 'paddingRight'] = this.scrollbarSize + 'px';
            this.viewport.style[this.rtl ? 'marginLeft' : 'marginRight'] = (-this.scrollbarSize) + 'px';
            this.content.style[this.rtl ? 'marginLeft' : 'marginRight'] = (-this.scrollbarSize) + 'px';
            var scrollbarTplElement = _framework_index__WEBPACK_IMPORTED_MODULE_0__["default"].htmlToElement(this.scrollbarTpl);
            scrollbarTplElement.classList.add('scrollbarY');
            this.el.insertAdjacentElement('afterbegin', scrollbarTplElement);
        }
        this.scrollbar.x = this.el.querySelector(':scope > .scrollbarX');
        this.scrollbar.y = this.el.querySelector(':scope > .scrollbarY');
        this.thumb.x = (_a = this.scrollbar.x) === null || _a === void 0 ? void 0 : _a.querySelector(':scope > .thumb');
        this.thumb.y = (_b = this.scrollbar.y) === null || _b === void 0 ? void 0 : _b.querySelector(':scope > .thumb');
        this.setupEvents();
        this.el.classList.add('initialized');
        this.update();
    };
    return Scroll;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);


/***/ }),

/***/ "./node_modules/mustache/mustache.mjs":
/*!********************************************!*\
  !*** ./node_modules/mustache/mustache.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mustache);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollbar_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollbar/index */ "./src/ts/scrollbar/index.ts");
/* harmony import */ var _dropdown_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown/index */ "./src/ts/dropdown/index.ts");


var MisMis = {
    dropdown: _dropdown_index__WEBPACK_IMPORTED_MODULE_1__["default"],
    scrollbar: _scrollbar_index__WEBPACK_IMPORTED_MODULE_0__["default"]
};
window['MisMis'] = MisMis;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sdUNBQXVDO0FBQzdDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsV0FBVyxVQUFVLFNBQVMsS0FBSyxvQkFBb0I7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsZUFBZTtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDM3ZCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0Y7QUFPeEMsSUFBTSxNQUFNLEdBQVk7SUFDckIsUUFBUSxFQUFFLHVEQUFRO0lBQ2xCLFNBQVMsRUFBRSx3REFBUztDQUN0QixDQUFDO0FBRUQsTUFBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pc21pcy8uL3NyYy90cy9kcm9wZG93bi90ZW1wbGF0ZXMvZHJvcGRvd24uaHRtbCIsIndlYnBhY2s6Ly9taXNtaXMvLi9zcmMvdHMvZHJvcGRvd24vdGVtcGxhdGVzL2hlYWRlci5odG1sIiwid2VicGFjazovL21pc21pcy8uL3NyYy90cy9kcm9wZG93bi90ZW1wbGF0ZXMvaXRlbXMuaHRtbCIsIndlYnBhY2s6Ly9taXNtaXMvLi9zcmMvdHMvZHJvcGRvd24vdGVtcGxhdGVzL3Jvdy5odG1sIiwid2VicGFjazovL21pc21pcy8uL3NyYy90cy9kcm9wZG93bi90ZW1wbGF0ZXMvc2VhcmNoLmh0bWwiLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL3RzL3Njcm9sbGJhci90ZW1wbGF0ZXMvc2Nyb2xsYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL3Njc3MvZHJvcGRvd24uc2Nzcz9kNmU4Iiwid2VicGFjazovL21pc21pcy8uL3NyYy9zY3NzL3Njcm9sbGJhci5zY3NzPzg4MzgiLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL2Fzc2V0L2ltYWdlL2Fycm93LWRvd24uc3ZnIiwid2VicGFjazovL21pc21pcy8uL3NyYy9hc3NldC9pbWFnZS9jbGVhci5zdmciLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL3RzL2RlY2xhcnRpb24vcG9wdXAtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL3RzL2Ryb3Bkb3duL2luZGV4LnRzIiwid2VicGFjazovL21pc21pcy8uL3NyYy90cy9mcmFtZXdvcmsvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWlzbWlzLy4vc3JjL3RzL3Njcm9sbGJhci9pbmRleC50cyIsIndlYnBhY2s6Ly9taXNtaXMvLi9zcmMvdHMvc2Nyb2xsYmFyL3Njcm9sbC50cyIsIndlYnBhY2s6Ly9taXNtaXMvLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUubWpzIiwid2VicGFjazovL21pc21pcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taXNtaXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWlzbWlzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9taXNtaXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9taXNtaXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9taXNtaXMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwibWlzbWlzIGRyb3Bkb3duIHt7I3J0bH19bWlzbWlzLXJ0bHt7L3J0bH19XFxcIiAgZGF0YS11bmlxLWlkPVxcXCJ7e3VuaXFJZH19XFxcIiA+XFxyXFxuICB7ez4gaGVhZGVyfX1cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImJvZHlcXFwiPlxcclxcbiAgICB7eyNzZWFyY2h9fVxcclxcbiAgICB7ez4gc2VhcmNofX1cXHJcXG4gICAge3svc2VhcmNofX1cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWlzbWlzIHNjcm9sbGJhclxcXCI+PC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCI+e3twbGFjZUhvbGRlcn19PC9kaXY+XFxyXFxuICAgPGltZyBzcmM9XFxcInt7YXJyb3dEb3duSWNvblVybH19XFxcIiBjbGFzcz1cXFwiYXJyb3ctZG93blxcXCIgLz5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiaXRlbXNcXFwiPlxcclxcbiAgIHt7I2l0ZW1zfX1cXHJcXG4gICB7ez4gcm93fX1cXHJcXG4gICB7ey9pdGVtc319XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgZGF0YS1yb3ctaWQ9XFxcInt7aWR9fVxcXCI+e3t0aXRsZX19PC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNlYXJjaC1jb250YWluZXJcXFwiPlxcclxcbiAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwic2VhcmNoXFxcIiAvPlxcclxcbiAgIDxpbWcgc3JjPVxcXCJ7e2NsZWFySWNvblVybH19XFxcIiBjbGFzcz1cXFwiY2xlYXJcXFwiIC8+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcIm1pc21pcyBzY3JvbGxiYXIge3sjcnRsfX1taXNtaXMtcnRse3svcnRsfX1cXFwiIGRhdGEtdW5pcS1pZD17e3VuaXFJZH19PlxcclxcblxcdDx1bCBjbGFzcz1cXFwic2Nyb2xsWSBteVNjcm9sbFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwidmlld3BvcnRcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcblxcdFxcdFxcdFxcdHt7e2NvbnRlbnR9fX1cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L3VsPlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dMUzArSUR4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXpPRFl1TWpVM0lETTROaTR5TlRjaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURNNE5pNHlOVGNnTXpnMkxqSTFOenNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBpQThjRzlzZVdkdmJpQndiMmx1ZEhNOUlqQXNPVFl1T0RjNUlERTVNeTR4TWprc01qZzVMak0zT1NBek9EWXVNalUzTERrMkxqZzNPU0FpTHo0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BHYytJRHd2Wno0Z1BDOXpkbWMrSUE9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNGJXeHVjenB6ZG1kcWN6MGlhSFIwY0RvdkwzTjJaMnB6TG1OdmJTOXpkbWRxY3lJZ2QybGtkR2c5SWpFM0lpQm9aV2xuYUhROUlqRTRJaUIyWlhKemFXOXVQU0l4TGpFaVBqeHlaV04wSUdsa1BTSmlZV05yWjNKdmRXNWtjbVZqZENJZ2QybGtkR2c5SWpFd01DVWlJR2hsYVdkb2REMGlNVEF3SlNJZ2VEMGlNQ0lnZVQwaU1DSWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxQU0p1YjI1bElpOCtQR1JsWm5NZ2FXUTlJbE4yWjJwelJHVm1jekV3TURJaUx6NDhaeUJqYkdGemN6MGlZM1Z5Y21WdWRFeGhlV1Z5SWlCemRIbHNaVDBpSWo0OGRHbDBiR1UrVEdGNVpYSWdNVHd2ZEdsMGJHVStQR2NnYVdROUlsTjJaMnB6UnpFd01EZ2lJR05zWVhOelBTSWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCM2FXUjBhRDBpTWpnNElpQm9aV2xuYUhROUlqSTRPQ0lnYVdROUluTjJaMTh4SWlCNFBTSXROeTR6T0RNd01EWXdPVFU0T0RZeU16QTFJaUI1UFNJdE5pNDNNek14TXpJNE16a3lNREk0T0RFaVBqeG5JR1pwYkd3OUlpTXdNREF3TURBaUlHTnNZWE56UFNKamIyeHZjakF3TUNCemRtZFRhR0Z3WlNJZ2FXUTlJbk4yWjE4eUlqNDhjR0YwYUNCbWFXeHNQU0p1YjI1bElpQnpkSEp2YTJVOUlpTmpNV014WXpFaUlITjBjbTlyWlMxc2FXNWxZMkZ3UFNKeWIzVnVaQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXpMakl6TWpFME1EQXdNREF3TURBd01ESWlJR1E5SWswM0xqTTRNekF3TmpJMU56ZzBPU3cyTGpjek16RXpNalkxTmlCTU1qUXVPREU0T0RJeU9EYzJPVFFzTWpRdU9UUTJPVGt6TWpJMU5pQk5OeTR6T0RNd01EWXlOVGM0TkRrc01qUXVPVFEyT1Rrek1qSTFOaUJNTWpRdU9ERTRPREl5T0RjMk9UUXNOaTQzTXpNeE16STJOVFlnSWlCdmNHRmphWFI1UFNJdU9DSWdZMnhoYzNNOUltTnZiRzl5VTNSeWIydGxjbVZrSUhOMloxTjBjbTlyWlNJZ2FXUTlJbk4yWjE4eklpOCtQQzluUGp3dmMzWm5Qand2Wno0OEwyYytQQzl6ZG1jK1wiIiwiZW51bSBQb3B1cFN0YXRle1xyXG4gICBPcGVuID0gMSxcclxuICAgQ2xvc2UgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwU3RhdGU7IiwiaW1wb3J0IERyb3Bkb3duQ29uZmlnIGZyb20gJy4uL2RlY2xhcnRpb24vZHJvcGRvd24tY29uZmlnJztcclxuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vdGVtcGxhdGVzL2Ryb3Bkb3duLmh0bWwnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vdGVtcGxhdGVzL2hlYWRlci5odG1sJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3RlbXBsYXRlcy9zZWFyY2guaHRtbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAnLi90ZW1wbGF0ZXMvcm93Lmh0bWwnO1xyXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi90ZW1wbGF0ZXMvaXRlbXMuaHRtbCc7XHJcbmltcG9ydCBhcnJvd0Rvd24gZnJvbSAnLi4vLi4vYXNzZXQvaW1hZ2UvYXJyb3ctZG93bi5zdmcnO1xyXG5pbXBvcnQgY2xlYXIgZnJvbSAnLi4vLi4vYXNzZXQvaW1hZ2UvY2xlYXIuc3ZnJztcclxuaW1wb3J0IEZyYW1ld29yayBmcm9tICcuLi9mcmFtZXdvcmsvaW5kZXgnO1xyXG5pbXBvcnQgRHJvcGRvd25EYXRhIGZyb20gJy4uL2RlY2xhcnRpb24vZHJvcGRvd24tZGF0YSc7XHJcbmltcG9ydCBQb3B1cFN0YXRlIGZyb20gJy4uL2RlY2xhcnRpb24vcG9wdXAtc3RhdGUnO1xyXG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gJy4vLi4vc2Nyb2xsYmFyL2luZGV4JztcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2Ryb3Bkb3duLnNjc3MnO1xyXG5cclxuY2xhc3MgRHJvcERvd24ge1xyXG4gICB1bmlxSWQ6IHN0cmluZztcclxuICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGNvbXBvbmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBkYXRhOiBEcm9wZG93bkRhdGFbXTtcclxuICAgZGVmYXVsdFZhbHVlSWQ6IHN0cmluZztcclxuICAgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICAgcnRsOiBib29sZWFuO1xyXG4gICBzZWFyY2g6IGJvb2xlYW47XHJcbiAgIHBvcHVwU3RhdGU6IFBvcHVwU3RhdGU7XHJcbiAgIHNlbGVjdGVkSXRlbTogRHJvcGRvd25EYXRhO1xyXG4gICBmaWx0ZXI6IHN0cmluZztcclxuICAgb25TZWxlY3Q6IChyb3c6IERyb3Bkb3duRGF0YSkgPT4gdm9pZDtcclxuICAgcm93UmVuZGVyOiAoKSA9PiBzdHJpbmc7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihjb25maWc6IERyb3Bkb3duQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMudW5pcUlkID0gRnJhbWV3b3JrLmNyZWF0ZVVVSUQoKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY29uZmlnLmVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGNvbmZpZy5kYXRhO1xyXG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZUlkID0gY29uZmlnLmRlZmF1bHRWYWx1ZUlkO1xyXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gY29uZmlnLnBsYWNlSG9sZGVyO1xyXG4gICAgICB0aGlzLnJ0bCA9IGNvbmZpZy5ydGw7XHJcbiAgICAgIHRoaXMuc2VhcmNoID0gY29uZmlnLnNlYXJjaDtcclxuICAgICAgdGhpcy5wb3B1cFN0YXRlID0gUG9wdXBTdGF0ZS5DbG9zZTtcclxuICAgICAgdGhpcy5zZWxlY3RJdGVtID0gdGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0SXRlbSA9IHRoaXMuc2VsZWN0SXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uU2VsZWN0ID0gY29uZmlnLm9uU2VsZWN0O1xyXG4gICAgICB0aGlzLnJvd1JlbmRlciA9IGNvbmZpZy5yb3dSZW5kZXI7XHJcbiAgIH1cclxuXHJcbiAgIGluc2lkZVF1ZXJ5U2VsZWN0ID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuXHJcbiAgIHZhbGlkYXRlKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVsZW1lbnQgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLmRhdGEpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVDb21wb25lbnQoKSB7XHJcbiAgICAgIHZhciBodG1sID0gTXVzdGFjaGUucmVuZGVyKGRyb3Bkb3duLCB7XHJcbiAgICAgICAgIHVuaXFJZDogdGhpcy51bmlxSWQsXHJcbiAgICAgICAgIHBsYWNlSG9sZGVyOiB0aGlzLnBsYWNlSG9sZGVyLFxyXG4gICAgICAgICBydGw6IHRoaXMucnRsLFxyXG4gICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxyXG4gICAgICAgICBhcnJvd0Rvd25JY29uVXJsOiBhcnJvd0Rvd24sXHJcbiAgICAgICAgIGNsZWFySWNvblVybDogY2xlYXJcclxuICAgICAgfSwge1xyXG4gICAgICAgICBoZWFkZXI6IEhlYWRlcixcclxuICAgICAgICAgc2VhcmNoOiBTZWFyY2hcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudCA9IEZyYW1ld29yay5odG1sVG9FbGVtZW50KGh0bWwpO1xyXG4gICAgICB0aGlzLmdldEJvZHkoKTtcclxuICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0aGlzLmNvbXBvbmVudEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldEJvZHkoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKHggPT4gIXRoaXMuZmlsdGVyIHx8IHgudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLmZpbHRlci50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgIHZhciBpdGVtcyA9IE11c3RhY2hlLnJlbmRlcihJdGVtcywge1xyXG4gICAgICAgICBpdGVtczogZGF0YVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgIHJvdzogdGhpcy5yb3dSZW5kZXIgPyB0aGlzLnJvd1JlbmRlcigpIDogUm93XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIFNjcm9sbGJhcih7XHJcbiAgICAgICAgIGVsZW1lbnQ6IHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keSA+IGRpdjpub3QoLnNlYXJjaC1jb250YWluZXIpJyksXHJcbiAgICAgICAgIGNvbnRlbnQ6IGl0ZW1zLFxyXG4gICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgIHJ0bDogdGhpcy5ydGxcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5wb3B1cCh0aGlzLnBvcHVwU3RhdGUgIT0gUG9wdXBTdGF0ZS5PcGVuKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1zIC5yb3cnKS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdEl0ZW0oKGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdy1pZCcpKTtcclxuICAgICAgICAgICAgc2VsZi5wb3B1cChmYWxzZSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGlmIChzZWxmLnBvcHVwU3RhdGUgIT0gUG9wdXBTdGF0ZS5PcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKCFGcmFtZXdvcmsuZXZlbnRDaGlsZE9mKGUsIGBbZGF0YS11bmlxLWlkPScke3RoaXMudW5pcUlkfSddYCkpIHtcclxuICAgICAgICAgICAgc2VsZi5wb3B1cChmYWxzZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZWFyY2gpIHtcclxuICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmZpbHRlciA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Qm9keSgpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lciAuY2xlYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPSB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHNlbGYuZmlsdGVyID0gc2VhcmNoLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VhcmNoLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHBvcHVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgdGhpcy5wb3B1cFN0YXRlID0gUG9wdXBTdGF0ZS5PcGVuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICB0aGlzLnBvcHVwU3RhdGUgPSBQb3B1cFN0YXRlLkNsb3NlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9keSAqJykuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgeC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpXHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBzZWxlY3RJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGEuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcbiAgICAgIGlmICghIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC52YWx1ZScpLmlubmVySFRNTCA9IHRoaXMuc2VsZWN0ZWRJdGVtLnRpdGxlO1xyXG4gICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvZHkgLml0ZW1zIC5yb3cnKS5mb3JFYWNoKHggPT4geC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5IC5pdGVtcyAucm93W2RhdGEtcm93LWlkPVwiJyArIGlkICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblNlbGVjdCAmJiB0aGlzLm9uU2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIEluaXRpYWxpemVyKGNvbmZpZzogRHJvcGRvd25Db25maWcpIHtcclxuICAgICAgdmFyIGRyb3BEb3duID0gbmV3IERyb3BEb3duKGNvbmZpZyk7XHJcbiAgICAgIGlmICghZHJvcERvd24udmFsaWRhdGUoKSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZHJvcERvd24uY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgIGRyb3BEb3duLnNlbGVjdEl0ZW0oY29uZmlnLmRlZmF1bHRWYWx1ZUlkKTtcclxuICAgICAgZHJvcERvd24uYmluZEV2ZW50cygpO1xyXG4gICAgICByZXR1cm4gZHJvcERvd24uY29tcG9uZW50RWxlbWVudC5vdXRlckhUTUw7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd24uSW5pdGlhbGl6ZXI7IiwiY29uc3QgRnJhbWV3b3JrID0ge1xyXG4gICBleHRlbmQ6IChvYmoxOiBhbnksIG9iajI6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQ6IGFueSA9IHsgLi4ub2JqMSB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XHJcbiAgICAgICAgIGlmICghcmVzdWx0W3Byb3BdKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IG9iajJbcHJvcF07XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfSxcclxuICAgY3JlYXRlVVVJRDogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcclxuICAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfSk7XHJcbiAgIH0sXHJcbiAgIGh0bWxUb0VsZW1lbnQ6IChodG1sOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICAgfSxcclxuICAgY2xvc2VzdDogKHRhcmdldDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgd2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRhcmdldDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgfSxcclxuICAgZXZlbnRDaGlsZE9mOiAoZTogRXZlbnQsIHNlbGVjdG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKCEhc2VsZWN0b3IpIHtcclxuICAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBlLnRhcmdldDtcclxuICAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIEZyYW1ld29yay5jbG9zZXN0KHRhcmdldCwgc2VsZWN0b3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICB9LFxyXG4gICBhZGRFdmVudEZvckNoaWxkOiAocGFyZW50OiBIVE1MRWxlbWVudCB8IERvY3VtZW50LCBldmVudE5hbWU6IHN0cmluZywgY2hpbGRTZWxlY3Rvcjogc3RyaW5nLCBjYWxsYmFjazogKGU6IEV2ZW50LCBlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zdCBtYXRjaGluZ0NoaWxkID0gRnJhbWV3b3JrLmNsb3Nlc3QodGFyZ2V0LCBjaGlsZFNlbGVjdG9yKVxyXG4gICAgICAgICBpZiAobWF0Y2hpbmdDaGlsZCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlLCBtYXRjaGluZ0NoaWxkKVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhbWV3b3JrOyIsImltcG9ydCBTY3JvbGxiYXJDb25maWcgZnJvbSAnLi4vZGVjbGFydGlvbi9zY3JvbGxiYXItY29uZmlnJztcclxuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IEZyYW1ld29yayBmcm9tICcuLi9mcmFtZXdvcmsvaW5kZXgnO1xyXG5pbXBvcnQgc2Nyb2xsYmFyIGZyb20gJy4vdGVtcGxhdGVzL3Njcm9sbGJhci5odG1sJztcclxuaW1wb3J0IFNjcm9sbCBmcm9tICcuL3Njcm9sbCc7XHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9zY3JvbGxiYXIuc2Nzcyc7XHJcblxyXG5jbGFzcyBTY3JvbGxiYXIge1xyXG4gICB1bmlxSWQ6IHN0cmluZztcclxuICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgIHJ0bDogYm9vbGVhbjtcclxuICAgY29tcG9uZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihjb25maWc6IFNjcm9sbGJhckNvbmZpZykge1xyXG4gICAgICB0aGlzLnVuaXFJZCA9IEZyYW1ld29yay5jcmVhdGVVVUlEKCk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNvbmZpZy5lbGVtZW50O1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBjb25maWcuY29udGVudDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xyXG4gICAgICB0aGlzLnJ0bCA9IGNvbmZpZy5ydGw7XHJcbiAgIH1cclxuXHJcbiAgIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcihzY3JvbGxiYXIsIHtcclxuICAgICAgICAgdW5pcUlkOiB0aGlzLnVuaXFJZCxcclxuICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxyXG4gICAgICAgICBydGw6IHRoaXMucnRsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQgPSBGcmFtZXdvcmsuaHRtbFRvRWxlbWVudChodG1sKTtcclxuICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0aGlzLmNvbXBvbmVudEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBJbml0aWFsaXplcihjb25maWc6IFNjcm9sbGJhckNvbmZpZykge1xyXG4gICAgICBjb25zdCBzY3JvbGxiYXIgPSBuZXcgU2Nyb2xsYmFyKGNvbmZpZyk7XHJcbiAgICAgIHNjcm9sbGJhci5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgbmV3IFNjcm9sbChzY3JvbGxiYXIuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsWCwgLnNjcm9sbFknKSwgc2Nyb2xsYmFyLnJ0bCk7XHJcbiAgICAgIHJldHVybiBzY3JvbGxiYXIuY29tcG9uZW50RWxlbWVudC5vdXRlckhUTUw7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYmFyLkluaXRpYWxpemVyOyIsImltcG9ydCBGcmFtZXdvcmsgZnJvbSBcIi4uL2ZyYW1ld29yay9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsIHtcclxuICAgZWw6IEhUTUxFbGVtZW50O1xyXG4gICB2aWV3cG9ydDogSFRNTEVsZW1lbnQ7XHJcbiAgIGNvbnRlbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBydGw6IGJvb2xlYW47XHJcbiAgIHNjcm9sbGJhclNpemUgPSAwO1xyXG4gICBzY3JvbGxiYXJUcGwgPSAnPGRpdj48ZGl2IGNsYXNzPVwidGh1bWJcIj48L2Rpdj48L2Rpdj4nO1xyXG4gICBzY3JvbGxiYXIgPSB7XHJcbiAgICAgIHg6IG51bGwsXHJcbiAgICAgIHk6IG51bGxcclxuICAgfTtcclxuICAgdGh1bWIgPSB7XHJcbiAgICAgIHg6IG51bGwsXHJcbiAgICAgIHk6IG51bGxcclxuICAgfVxyXG4gICBsYXN0U2Nyb2xsID0ge1xyXG4gICAgICB0b3A6IC0xLFxyXG4gICAgICBsZWZ0OiAtMVxyXG4gICB9O1xyXG5cclxuICAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50LCBydGw6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgICB0aGlzLnJ0bCA9IHJ0bDtcclxuICAgICAgdGhpcy52aWV3cG9ydCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC52aWV3cG9ydCcpO1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnZpZXdwb3J0LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5jb250ZW50Jyk7XHJcbiAgICAgIHRoaXMuZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGwgPSB7XHJcbiAgICAgICAgIHRvcDogdGhpcy52aWV3cG9ydC5zY3JvbGxUb3AsXHJcbiAgICAgICAgIGxlZnQ6IHRoaXMudmlld3BvcnQuc2Nyb2xsTGVmdFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcGVyZm9ybSA9IGZ1bmN0aW9uICh2ZXJ0aWNhbDogYm9vbGVhbikge1xyXG4gICAgICAgICB2YXIgdm9jYWIgPSBzZWxmLnZvY2FidWxhcnkodmVydGljYWwpO1xyXG4gICAgICAgICB2YXIgc2Nyb2xsU2l6ZSA9IHNlbGYuY29udGVudFsnc2Nyb2xsJyArIHZvY2FiLnNpemVVcHBlcl07XHJcbiAgICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSBzZWxmLnZpZXdwb3J0ID8gc2VsZi52aWV3cG9ydFt2b2NhYi5zaXplXSA6IG51bGw7XHJcbiAgICAgICAgIGlmIChzY3JvbGxTaXplIDw9IHZpZXdwb3J0U2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zY3JvbGxiYXJbdm9jYWIuYXhpc10pIHtcclxuICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxiYXJbdm9jYWIuYXhpc10uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNjcm9sbGJhclt2b2NhYi5heGlzXSkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnNjcm9sbGJhclt2b2NhYi5heGlzXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmIChzY3JvbGxbdm9jYWIucG9zXSAhPT0gc2VsZi5sYXN0U2Nyb2xsW3ZvY2FiLnBvc10pIHtcclxuICAgICAgICAgICAgc2VsZi5sYXN0U2Nyb2xsW3ZvY2FiLnBvc10gPSBzY3JvbGxbdm9jYWIucG9zXTtcclxuICAgICAgICAgICAgY29uc3QgZWxTaXplID0gc2VsZi5lbFt2b2NhYi5zaXplXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbFNpemUgPSBzY3JvbGxTaXplIC0gZWxTaXplO1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IGVsU2l6ZSAvIHNjcm9sbFNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJlbGF0aXZlID0gc2Nyb2xsW3ZvY2FiLnBvc10gLyBtYXhTY3JvbGxTaXplO1xyXG4gICAgICAgICAgICBjb25zdCB0aHVtYlNpemUgPSAoKHJhdGlvID4gMSkgPyAxIDogcmF0aW8pICogZWxTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJTaXplID0gc2VsZi5zY3JvbGxiYXJbdm9jYWIuYXhpc11bdm9jYWIuc2l6ZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi50aHVtYlt2b2NhYi5heGlzXSkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnRodW1iW3ZvY2FiLmF4aXNdLnN0eWxlW3ZvY2FiLnNldFNpemVdID0gdGh1bWJTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgICAgc2VsZi50aHVtYlt2b2NhYi5heGlzXS5zdHlsZVt2b2NhYi5wb3NdID0gKHNjcm9sbFJlbGF0aXZlICogKHNjcm9sbGJhclNpemUgLSB0aHVtYlNpemUpKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBlcmZvcm0odHJ1ZSk7XHJcbiAgICAgIHBlcmZvcm0oZmFsc2UpO1xyXG4gICB9XHJcblxyXG4gICB2b2NhYnVsYXJ5KHZlcnRpY2FsOiBib29sZWFuKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIGF4aXM6IHZlcnRpY2FsID8gJ3knIDogJ3gnLFxyXG4gICAgICAgICBheGlzVXBwZXI6IHZlcnRpY2FsID8gJ1knIDogJ1gnLFxyXG4gICAgICAgICBwb3M6IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXHJcbiAgICAgICAgIHBvc1VwcGVyOiB2ZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnLFxyXG4gICAgICAgICBzaXplOiB2ZXJ0aWNhbCA/ICdvZmZzZXRIZWlnaHQnIDogJ29mZnNldFdpZHRoJyxcclxuICAgICAgICAgc2V0U2l6ZTogdmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCcsXHJcbiAgICAgICAgIHNpemVVcHBlcjogdmVydGljYWwgPyAnSGVpZ2h0JyA6ICdXaWR0aCdcclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgc2V0dXBFdmVudHMoKSB7XHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgdGhpcy52aWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgc2VsZi51cGRhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudmlld3BvcnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHNlbGYudXBkYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICBzZWxmLnVwZGF0ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBzZXR1cE9yaWVudGF0aW9uID0gZnVuY3Rpb24gKHZlcnRpY2FsOiBib29sZWFuKSB7XHJcbiAgICAgICAgIGNvbnN0IHZvY2FiID0gc2VsZi52b2NhYnVsYXJ5KHZlcnRpY2FsKTtcclxuICAgICAgICAgc2VsZi5zY3JvbGxiYXJbdm9jYWIuYXhpc10/LmNsaWNrKChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRnJhbWV3b3JrLmV2ZW50Q2hpbGRPZihlLCBzZWxmLnNjcm9sbGJhclt2b2NhYi5heGlzXSkpIHtcclxuICAgICAgICAgICAgICAgbGV0IG1vdmUgPSBzZWxmLnZpZXdwb3J0W3ZvY2FiLnNpemVdKCk7XHJcbiAgICAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KHNlbGYudGh1bWJbdm9jYWIuYXhpc10uY3NzKHZvY2FiLnBvcykpID5cclxuICAgICAgICAgICAgICAgICAgKGVbJ3BhZ2UnICsgdm9jYWIuYXhpc1VwcGVyXSAtIHNlbGYuc2Nyb2xsYmFyW3ZvY2FiLmF4aXNdLm9mZnNldCgpW3ZvY2FiLnBvc10pKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vdmUgKj0gLTE7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgc2VsZi52aWV3cG9ydFsnc2Nyb2xsJyArIHZvY2FiLnBvc1VwcGVyXShzZWxmLnZpZXdwb3J0WydzY3JvbGwnICsgdm9jYWIucG9zVXBwZXJdKCkgKyBtb3ZlKTtcclxuICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgc2VsZi50aHVtYlt2b2NhYi5heGlzXT8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnVW5zZWxlY3RhYmxlID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScpO1xyXG4gICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZSgndW5zZWxlY3RhYmxlJywgJ29uJyk7XHJcbiAgICAgICAgICAgIGxldCBsYXN0ID0gZVsncGFnZScgKyB2b2NhYi5heGlzVXBwZXJdO1xyXG4gICAgICAgICAgICBzZWxmLnNjcm9sbGJhclt2b2NhYi5heGlzXS5jbGFzc0xpc3QuYWRkKCdkcmFnU2Nyb2xsaW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgY29uc3QgZWxTaXplID0gc2VsZi5lbFt2b2NhYi5zaXplXTtcclxuICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IHNlbGYuY29udGVudFsnc2Nyb2xsJyArIHZvY2FiLnNpemVVcHBlcl07XHJcbiAgICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gZWxTaXplIC8gc2Nyb2xsU2l6ZTtcclxuICAgICAgICAgICAgICAgY29uc3QgbW92ZSA9IChlWydwYWdlJyArIHZvY2FiLmF4aXNVcHBlcl0gLSBsYXN0KSAvIHJhdGlvO1xyXG4gICAgICAgICAgICAgICBzZWxmLnZpZXdwb3J0WydzY3JvbGwnICsgdm9jYWIucG9zVXBwZXJdID0gc2VsZi52aWV3cG9ydFsnc2Nyb2xsJyArIHZvY2FiLnBvc1VwcGVyXSArIG1vdmU7XHJcbiAgICAgICAgICAgICAgIGxhc3QgPSBlWydwYWdlJyArIHZvY2FiLmF4aXNVcHBlcl07XHJcbiAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCd1bnNlbGVjdGFibGUnLCBvcmlnVW5zZWxlY3RhYmxlIHx8ICdvZmYnKTtcclxuICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxiYXJbdm9jYWIuYXhpc10uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ1Njcm9sbGluZycpO1xyXG4gICAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXR1cE9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgICBzZXR1cE9yaWVudGF0aW9uKGZhbHNlKTtcclxuICAgfVxyXG5cclxuICAgZ2V0U2Nyb2xsYmFyU2l6ZSgpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gRnJhbWV3b3JrLmh0bWxUb0VsZW1lbnQoJzxkaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsOiBIVE1MRWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiBkaXYnKTtcclxuICAgICAgc2Nyb2xsLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgc2Nyb2xsLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cclxuICAgICAgdGhpcy5zY3JvbGxiYXJTaXplID0gY29udGFpbmVyLm9mZnNldFdpZHRoIC0gc2Nyb2xsLm9mZnNldFdpZHRoO1xyXG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsWCcpKSB7XHJcbiAgICAgICAgIHRoaXMudmlld3BvcnQuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuc2Nyb2xsYmFyU2l6ZSArICdweCc7XHJcbiAgICAgICAgIHRoaXMudmlld3BvcnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICgtdGhpcy5zY3JvbGxiYXJTaXplKSArICdweCc7XHJcbiAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAoLXRoaXMuc2Nyb2xsYmFyU2l6ZSkgKyAncHgnO1xyXG4gICAgICAgICBjb25zdCBzY3JvbGxiYXJUcGxFbGVtZW50ID0gRnJhbWV3b3JrLmh0bWxUb0VsZW1lbnQodGhpcy5zY3JvbGxiYXJUcGwpO1xyXG4gICAgICAgICBzY3JvbGxiYXJUcGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGJhclgnKTtcclxuICAgICAgICAgdGhpcy5lbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgc2Nyb2xsYmFyVHBsRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY3JvbGxZJykpIHtcclxuICAgICAgICAgdGhpcy52aWV3cG9ydC5zdHlsZVt0aGlzLnJ0bCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J10gPSB0aGlzLnNjcm9sbGJhclNpemUgKyAncHgnO1xyXG4gICAgICAgICB0aGlzLnZpZXdwb3J0LnN0eWxlW3RoaXMucnRsID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0J10gPSAoLXRoaXMuc2Nyb2xsYmFyU2l6ZSkgKyAncHgnO1xyXG4gICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbdGhpcy5ydGwgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luUmlnaHQnXSA9ICgtdGhpcy5zY3JvbGxiYXJTaXplKSArICdweCc7XHJcbiAgICAgICAgIHZhciBzY3JvbGxiYXJUcGxFbGVtZW50ID0gRnJhbWV3b3JrLmh0bWxUb0VsZW1lbnQodGhpcy5zY3JvbGxiYXJUcGwpO1xyXG4gICAgICAgICBzY3JvbGxiYXJUcGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGJhclknKTtcclxuICAgICAgICAgdGhpcy5lbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBzY3JvbGxiYXJUcGxFbGVtZW50KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnggPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5zY3JvbGxiYXJYJyk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnkgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5zY3JvbGxiYXJZJyk7XHJcbiAgICAgIHRoaXMudGh1bWIueCA9IHRoaXMuc2Nyb2xsYmFyLng/LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC50aHVtYicpO1xyXG4gICAgICB0aGlzLnRodW1iLnkgPSB0aGlzLnNjcm9sbGJhci55Py5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAudGh1bWInKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuXHJcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgfVxyXG59IiwiLyohXG4gKiBtdXN0YWNoZS5qcyAtIExvZ2ljLWxlc3Mge3ttdXN0YWNoZX19IHRlbXBsYXRlcyB3aXRoIEphdmFTY3JpcHRcbiAqIGh0dHA6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanNcbiAqL1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbCAob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gKi9cbmZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbn1cblxuLyoqXG4gKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAqIGluY2x1ZGluZyBpdHMgcHJvdG90eXBlLCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgKHByb3BOYW1lIGluIG9iaik7XG59XG5cbi8qKlxuICogU2FmZSB3YXkgb2YgZGV0ZWN0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiB0aGluZyBpcyBhIHByaW1pdGl2ZSBhbmRcbiAqIHdoZXRoZXIgaXQgaGFzIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eSAocHJpbWl0aXZlLCBwcm9wTmFtZSkge1xuICByZXR1cm4gKFxuICAgIHByaW1pdGl2ZSAhPSBudWxsXG4gICAgJiYgdHlwZW9mIHByaW1pdGl2ZSAhPT0gJ29iamVjdCdcbiAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHlcbiAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpXG4gICk7XG59XG5cbi8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01Nzdcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg5XG52YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbmZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSwgc3RyaW5nKTtcbn1cblxudmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAoc3RyaW5nKSB7XG4gIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xufVxuXG52YXIgZW50aXR5TWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnLFxuICAnLyc6ICcmI3gyRjsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgIHJldHVybiBlbnRpdHlNYXBbc107XG4gIH0pO1xufVxuXG52YXIgd2hpdGVSZSA9IC9cXHMqLztcbnZhciBzcGFjZVJlID0gL1xccysvO1xudmFyIGVxdWFsc1JlID0gL1xccyo9LztcbnZhciBjdXJseVJlID0gL1xccypcXH0vO1xudmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbi8qKlxuICogQnJlYWtzIHVwIHRoZSBnaXZlbiBgdGVtcGxhdGVgIHN0cmluZyBpbnRvIGEgdHJlZSBvZiB0b2tlbnMuIElmIHRoZSBgdGFnc2BcbiAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICogY291cnNlLCB0aGUgZGVmYXVsdCBpcyB0byB1c2UgbXVzdGFjaGVzIChpLmUuIG11c3RhY2hlLnRhZ3MpLlxuICpcbiAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAqIG11c3RhY2hlIHN5bWJvbCB0aGF0IHdhcyB1c2VkIGluc2lkZSB0aGUgdGFnLCBlLmcuIFwiI1wiIG9yIFwiJlwiLiBJZiB0aGUgdGFnXG4gKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gKlxuICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICogdGhpcyBpcyB0aGUgdGV4dCBpdHNlbGYuXG4gKlxuICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICogcmVzcGVjdGl2ZWx5LCBvZiB0aGUgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIHRlbXBsYXRlLlxuICpcbiAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICogYXJyYXkgb2YgdG9rZW5zIGluIHRoZSBzdWJ0cmVlIGFuZCAyKSB0aGUgaW5kZXggaW4gdGhlIG9yaWdpbmFsIHRlbXBsYXRlIGF0XG4gKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gKlxuICogVG9rZW5zIGZvciBwYXJ0aWFscyBhbHNvIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGEgc3RyaW5nIHZhbHVlIG9mXG4gKiBpbmRlbmRhdGlvbiBwcmlvciB0byB0aGF0IHRhZyBhbmQgMikgdGhlIGluZGV4IG9mIHRoYXQgdGFnIG9uIHRoYXQgbGluZSAtXG4gKiBlZyBhIHZhbHVlIG9mIDIgaW5kaWNhdGVzIHRoZSBwYXJ0aWFsIGlzIHRoZSB0aGlyZCB0YWcgb24gdGhpcyBsaW5lLlxuICovXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICBpZiAoIXRlbXBsYXRlKVxuICAgIHJldHVybiBbXTtcbiAgdmFyIGxpbmVIYXNOb25TcGFjZSA9IGZhbHNlO1xuICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gIHZhciBzcGFjZXMgPSBbXTsgICAgICAgLy8gSW5kaWNlcyBvZiB3aGl0ZXNwYWNlIHRva2VucyBvbiB0aGUgY3VycmVudCBsaW5lXG4gIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuICB2YXIgaW5kZW50YXRpb24gPSAnJzsgIC8vIFRyYWNrcyBpbmRlbnRhdGlvbiBmb3IgdGFncyB0aGF0IHVzZSBpdFxuICB2YXIgdGFnSW5kZXggPSAwOyAgICAgIC8vIFN0b3JlcyBhIGNvdW50IG9mIG51bWJlciBvZiB0YWdzIGVuY291bnRlcmVkIG9uIGEgbGluZVxuXG4gIC8vIFN0cmlwcyBhbGwgd2hpdGVzcGFjZSB0b2tlbnMgYXJyYXkgZm9yIHRoZSBjdXJyZW50IGxpbmVcbiAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICBpZiAoaGFzVGFnICYmICFub25TcGFjZSkge1xuICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhY2VzID0gW107XG4gICAgfVxuXG4gICAgaGFzVGFnID0gZmFsc2U7XG4gICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBvcGVuaW5nVGFnUmUsIGNsb3NpbmdUYWdSZSwgY2xvc2luZ0N1cmx5UmU7XG4gIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgIHRhZ3NUb0NvbXBpbGUgPSB0YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsIDIpO1xuXG4gICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgIG9wZW5pbmdUYWdSZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pICsgJ1xcXFxzKicpO1xuICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gIH1cblxuICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gIHZhciBzdGFydCwgdHlwZSwgdmFsdWUsIGNociwgdG9rZW4sIG9wZW5TZWN0aW9uO1xuICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgLy8gTWF0Y2ggYW55IHRleHQgYmV0d2VlbiB0YWdzLlxuICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpIDwgdmFsdWVMZW5ndGg7ICsraSkge1xuICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgc3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCk7XG4gICAgICAgICAgaW5kZW50YXRpb24gKz0gY2hyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIGluZGVudGF0aW9uICs9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgIHN0YXJ0ICs9IDE7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlc3BhY2Ugb24gdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpIHtcbiAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgICAgaW5kZW50YXRpb24gPSAnJztcbiAgICAgICAgICB0YWdJbmRleCA9IDA7XG4gICAgICAgICAgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGUgb3BlbmluZyB0YWcuXG4gICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgIGJyZWFrO1xuXG4gICAgaGFzVGFnID0gdHJ1ZTtcblxuICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgdHlwZSA9IHNjYW5uZXIuc2Nhbih0YWdSZSkgfHwgJ25hbWUnO1xuICAgIHNjYW5uZXIuc2Nhbih3aGl0ZVJlKTtcblxuICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xuICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgc2Nhbm5lci5zY2FuKGN1cmx5UmUpO1xuICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIHR5cGUgPSAnJic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGUgY2xvc2luZyB0YWcuXG4gICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICBpZiAodHlwZSA9PSAnPicpIHtcbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zLCBpbmRlbnRhdGlvbiwgdGFnSW5kZXgsIGxpbmVIYXNOb25TcGFjZSBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IFsgdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvcyBdO1xuICAgIH1cbiAgICB0YWdJbmRleCsrO1xuICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgIGlmIChvcGVuU2VjdGlvblsxXSAhPT0gdmFsdWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgIG5vblNwYWNlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgIGNvbXBpbGVUYWdzKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzdHJpcFNwYWNlKCk7XG5cbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICBpZiAob3BlblNlY3Rpb24pXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xufVxuXG4vKipcbiAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gKiB0byBhIHNpbmdsZSB0b2tlbi5cbiAqL1xuZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgdmFyIHNxdWFzaGVkVG9rZW5zID0gW107XG5cbiAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGxhc3RUb2tlblsxXSArPSB0b2tlblsxXTtcbiAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xufVxuXG4vKipcbiAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gKiB0b2tlbnMgdGhhdCByZXByZXNlbnQgYSBzZWN0aW9uIGhhdmUgdHdvIGFkZGl0aW9uYWwgaXRlbXM6IDEpIGFuIGFycmF5IG9mXG4gKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICovXG5mdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICB2YXIgY29sbGVjdG9yID0gbmVzdGVkVG9rZW5zO1xuICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgIGNhc2UgJyMnOlxuICAgICAgY2FzZSAnXic6XG4gICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcbiAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICBjb2xsZWN0b3IgPSBzZWN0aW9ucy5sZW5ndGggPiAwID8gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV1bNF0gOiBuZXN0ZWRUb2tlbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXN0ZWRUb2tlbnM7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgc3RyaW5nIHNjYW5uZXIgdGhhdCBpcyB1c2VkIGJ5IHRoZSB0ZW1wbGF0ZSBwYXJzZXIgdG8gZmluZFxuICogdG9rZW5zIGluIHRlbXBsYXRlIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIFNjYW5uZXIgKHN0cmluZykge1xuICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgdGhpcy50YWlsID0gc3RyaW5nO1xuICB0aGlzLnBvcyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHRhaWwgaXMgZW1wdHkgKGVuZCBvZiBzdHJpbmcpLlxuICovXG5TY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICByZXR1cm4gdGhpcy50YWlsID09PSAnJztcbn07XG5cbi8qKlxuICogVHJpZXMgdG8gbWF0Y2ggdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBhdCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAqIFJldHVybnMgdGhlIG1hdGNoZWQgdGV4dCBpZiBpdCBjYW4gbWF0Y2gsIHRoZSBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICovXG5TY2FubmVyLnByb3RvdHlwZS5zY2FuID0gZnVuY3Rpb24gc2NhbiAocmUpIHtcbiAgdmFyIG1hdGNoID0gdGhpcy50YWlsLm1hdGNoKHJlKTtcblxuICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgIHJldHVybiAnJztcblxuICB2YXIgc3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgdGhpcy5wb3MgKz0gc3RyaW5nLmxlbmd0aDtcblxuICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBTa2lwcyBhbGwgdGV4dCB1bnRpbCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGNhbiBiZSBtYXRjaGVkLiBSZXR1cm5zXG4gKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAqL1xuU2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsID0gZnVuY3Rpb24gc2NhblVudGlsIChyZSkge1xuICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgc3dpdGNoIChpbmRleCkge1xuICAgIGNhc2UgLTE6XG4gICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9ICcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAwOlxuICAgICAgbWF0Y2ggPSAnJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXRjaCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XG4gIH1cblxuICB0aGlzLnBvcyArPSBtYXRjaC5sZW5ndGg7XG5cbiAgcmV0dXJuIG1hdGNoO1xufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGNvbnRleHQgYnkgd3JhcHBpbmcgYSB2aWV3IG9iamVjdCBhbmRcbiAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAqL1xuZnVuY3Rpb24gQ29udGV4dCAodmlldywgcGFyZW50Q29udGV4dCkge1xuICB0aGlzLnZpZXcgPSB2aWV3O1xuICB0aGlzLmNhY2hlID0geyAnLic6IHRoaXMudmlldyB9O1xuICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBjb250ZXh0IHVzaW5nIHRoZSBnaXZlbiB2aWV3IHdpdGggdGhpcyBjb250ZXh0XG4gKiBhcyB0aGUgcGFyZW50LlxuICovXG5Db250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAodmlldykge1xuICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICogdXAgdGhlIGNvbnRleHQgaGllcmFyY2h5IGlmIHRoZSB2YWx1ZSBpcyBhYnNlbnQgaW4gdGhpcyBjb250ZXh0J3Mgdmlldy5cbiAqL1xuQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgdmFyIHZhbHVlO1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICB2YWx1ZSA9IGNhY2hlW25hbWVdO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcywgaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzLCBpbmRleCwgbG9va3VwSGl0ID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoY29udGV4dCkge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlldztcbiAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNpbmcgdGhlIGRvdCBub3Rpb24gcGF0aCBpbiBgbmFtZWAsIHdlIGRlc2NlbmQgdGhyb3VnaCB0aGVcbiAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGJlIGNlcnRhaW4gdGhhdCB0aGUgbG9va3VwIGhhcyBiZWVuIHN1Y2Nlc3NmdWwsIHdlIGhhdmUgdG9cbiAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICogd2UgYXJlIGxvb2tpbmcgZm9yLiBXZSBzdG9yZSB0aGUgcmVzdWx0IGluIGBsb29rdXBIaXRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgKiBgdW5kZWZpbmVkYCBhbmQgd2Ugd2FudCB0byBhdm9pZCBsb29raW5nIHVwIHBhcmVudCBjb250ZXh0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgZG90IG5vdGF0aW9uIGlzIHVzZWQsIHdlIGNvbnNpZGVyIHRoZSBsb29rdXBcbiAgICAgICAgICogdG8gYmUgc3VjY2Vzc2Z1bCBldmVuIGlmIHRoZSBsYXN0IFwib2JqZWN0XCIgaW4gdGhlIHBhdGggaXNcbiAgICAgICAgICogbm90IGFjdHVhbGx5IGFuIG9iamVjdCBidXQgYSBwcmltaXRpdmUgKGUuZy4sIGEgc3RyaW5nLCBvciBhblxuICAgICAgICAgKiBpbnRlZ2VyKSwgYmVjYXVzZSBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGFjY2VzcyBhIHByb3BlcnR5XG4gICAgICAgICAqIG9mIGFuIGF1dG9ib3hlZCBwcmltaXRpdmUsIHN1Y2ggYXMgdGhlIGxlbmd0aCBvZiBhIHN0cmluZy5cbiAgICAgICAgICoqL1xuICAgICAgICB3aGlsZSAoaW50ZXJtZWRpYXRlVmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gbmFtZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGxvb2t1cEhpdCA9IChcbiAgICAgICAgICAgICAgaGFzUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcbiAgICAgICAgICAgICAgfHwgcHJpbWl0aXZlSGFzT3duUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlW25hbWVzW2luZGV4KytdXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgY2hlY2tpbmcgYWdhaW5zdCBgaGFzUHJvcGVydHlgLCB3aGljaCBhbHdheXMgcmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICAgICAqIGBjb250ZXh0LnZpZXdgIGlzIG5vdCBhbiBvYmplY3QuIERlbGliZXJhdGVseSBvbWl0dGluZyB0aGUgY2hlY2tcbiAgICAgICAgICogYWdhaW5zdCBgcHJpbWl0aXZlSGFzT3duUHJvcGVydHlgIGlmIGRvdCBub3RhdGlvbiBpcyBub3QgdXNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29uc2lkZXIgdGhpcyBleGFtcGxlOlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogTXVzdGFjaGUucmVuZGVyKFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIHt7I2xlbmd0aH19e3tsZW5ndGh9fXt7L2xlbmd0aH19LlwiLCB7bGVuZ3RoOiBcIjEwMCB5YXJkc1wifSlcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHdlIHdlcmUgdG8gY2hlY2sgYWxzbyBhZ2FpbnN0IGBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eWAsIGFzIHdlIGRvXG4gICAgICAgICAqIGluIHRoZSBkb3Qgbm90YXRpb24gY2FzZSwgdGhlbiByZW5kZXIgY2FsbCB3b3VsZCByZXR1cm46XG4gICAgICAgICAqXG4gICAgICAgICAqIFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIDkuXCJcbiAgICAgICAgICpcbiAgICAgICAgICogcmF0aGVyIHRoYW4gdGhlIGV4cGVjdGVkOlxuICAgICAgICAgKlxuICAgICAgICAgKiBcIlRoZSBsZW5ndGggb2YgYSBmb290YmFsbCBmaWVsZCBpcyAxMDAgeWFyZHMuXCJcbiAgICAgICAgICoqL1xuICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobG9va3VwSGl0KSB7XG4gICAgICAgIHZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSlcbiAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIEEgV3JpdGVyIGtub3dzIGhvdyB0byB0YWtlIGEgc3RyZWFtIG9mIHRva2VucyBhbmQgcmVuZGVyIHRoZW0gdG8gYVxuICogc3RyaW5nLCBnaXZlbiBhIGNvbnRleHQuIEl0IGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGVtcGxhdGVzIHRvXG4gKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAqL1xuZnVuY3Rpb24gV3JpdGVyICgpIHtcbiAgdGhpcy50ZW1wbGF0ZUNhY2hlID0ge1xuICAgIF9jYWNoZToge30sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0IChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy50ZW1wbGF0ZUNhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiBgdGVtcGxhdGVgIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gYHRhZ3NgIG9yXG4gKiBgbXVzdGFjaGUudGFnc2AgaWYgYHRhZ3NgIGlzIG9taXR0ZWQsICBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9rZW5zXG4gKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICB2YXIgY2FjaGUgPSB0aGlzLnRlbXBsYXRlQ2FjaGU7XG4gIHZhciBjYWNoZUtleSA9IHRlbXBsYXRlICsgJzonICsgKHRhZ3MgfHwgbXVzdGFjaGUudGFncykuam9pbignOicpO1xuICB2YXIgaXNDYWNoZUVuYWJsZWQgPSB0eXBlb2YgY2FjaGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgdG9rZW5zID0gaXNDYWNoZUVuYWJsZWQgPyBjYWNoZS5nZXQoY2FjaGVLZXkpIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0b2tlbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdG9rZW5zID0gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGFncyk7XG4gICAgaXNDYWNoZUVuYWJsZWQgJiYgY2FjaGUuc2V0KGNhY2hlS2V5LCB0b2tlbnMpO1xuICB9XG4gIHJldHVybiB0b2tlbnM7XG59O1xuXG4vKipcbiAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICogdGhlIGdpdmVuIGB2aWV3YC5cbiAqXG4gKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gKiBuYW1lcyBhbmQgdGVtcGxhdGVzIG9mIHBhcnRpYWxzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLiBJdCBtYXlcbiAqIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gbG9hZCBwYXJ0aWFsIHRlbXBsYXRlcyBvbiB0aGUgZmx5XG4gKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAqXG4gKiBJZiB0aGUgb3B0aW9uYWwgYGNvbmZpZ2AgYXJndW1lbnQgaXMgZ2l2ZW4gaGVyZSwgdGhlbiBpdCBzaG91bGQgYmUgYW5cbiAqIG9iamVjdCB3aXRoIGEgYHRhZ3NgIGF0dHJpYnV0ZSBvciBhbiBgZXNjYXBlYCBhdHRyaWJ1dGUgb3IgYm90aC5cbiAqIElmIGFuIGFycmF5IGlzIHBhc3NlZCwgdGhlbiBpdCB3aWxsIGJlIGludGVycHJldGVkIHRoZSBzYW1lIHdheSBhc1xuICogYSBgdGFnc2AgYXR0cmlidXRlIG9uIGEgYGNvbmZpZ2Agb2JqZWN0LlxuICpcbiAqIFRoZSBgdGFnc2AgYXR0cmlidXRlIG9mIGEgYGNvbmZpZ2Agb2JqZWN0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d29cbiAqIHN0cmluZyB2YWx1ZXM6IHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZ3MgdXNlZCBpbiB0aGUgdGVtcGxhdGUgKGUuZy5cbiAqIFsgXCI8JVwiLCBcIiU+XCIgXSkuIFRoZSBkZWZhdWx0IGlzIHRvIG11c3RhY2hlLnRhZ3MuXG4gKlxuICogVGhlIGBlc2NhcGVgIGF0dHJpYnV0ZSBvZiBhIGBjb25maWdgIG9iamVjdCBtdXN0IGJlIGEgZnVuY3Rpb24gd2hpY2hcbiAqIGFjY2VwdHMgYSBzdHJpbmcgYXMgaW5wdXQgYW5kIG91dHB1dHMgYSBzYWZlbHkgZXNjYXBlZCBzdHJpbmcuXG4gKiBJZiBhbiBgZXNjYXBlYCBmdW5jdGlvbiBpcyBub3QgcHJvdmlkZWQsIHRoZW4gYW4gSFRNTC1zYWZlIHN0cmluZ1xuICogZXNjYXBpbmcgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgZGVmYXVsdC5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIHZhciB0YWdzID0gdGhpcy5nZXRDb25maWdUYWdzKGNvbmZpZyk7XG4gIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcsIHVuZGVmaW5lZCk7XG4gIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSwgY29uZmlnKTtcbn07XG5cbi8qKlxuICogTG93LWxldmVsIG1ldGhvZCB0aGF0IHJlbmRlcnMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIHVzaW5nXG4gKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICpcbiAqIE5vdGU6IFRoZSBgb3JpZ2luYWxUZW1wbGF0ZWAgaXMgb25seSBldmVyIHVzZWQgdG8gZXh0cmFjdCB0aGUgcG9ydGlvblxuICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICogSWYgdGhlIHRlbXBsYXRlIGRvZXNuJ3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucywgdGhpcyBhcmd1bWVudCBtYXlcbiAqIGJlIG9taXR0ZWQuXG4gKi9cbldyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zID0gZnVuY3Rpb24gcmVuZGVyVG9rZW5zICh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuXG4gIHZhciB0b2tlbiwgc3ltYm9sLCB2YWx1ZTtcbiAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgaWYgKHN5bWJvbCA9PT0gJyMnKSB2YWx1ZSA9IHRoaXMucmVuZGVyU2VjdGlvbih0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHZhbHVlID0gdGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgZWxzZSBpZiAoc3ltYm9sID09PSAnPicpIHZhbHVlID0gdGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICcmJykgdmFsdWUgPSB0aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCwgY29uZmlnKTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICd0ZXh0JykgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbiA9IGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24gKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbmRlciBhbiBhcmJpdHJhcnkgdGVtcGxhdGVcbiAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gIGZ1bmN0aW9uIHN1YlJlbmRlciAodGVtcGxhdGUpIHtcbiAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpO1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWUpLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlJyk7XG5cbiAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQgPSBmdW5jdGlvbiByZW5kZXJJbnZlcnRlZCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gIC8vIFVzZSBKYXZhU2NyaXB0J3MgZGVmaW5pdGlvbiBvZiBmYWxzeS4gSW5jbHVkZSBlbXB0eSBhcnJheXMuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gIGlmICghdmFsdWUgfHwgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUuaW5kZW50UGFydGlhbCA9IGZ1bmN0aW9uIGluZGVudFBhcnRpYWwgKHBhcnRpYWwsIGluZGVudGF0aW9uLCBsaW5lSGFzTm9uU3BhY2UpIHtcbiAgdmFyIGZpbHRlcmVkSW5kZW50YXRpb24gPSBpbmRlbnRhdGlvbi5yZXBsYWNlKC9bXiBcXHRdL2csICcnKTtcbiAgdmFyIHBhcnRpYWxCeU5sID0gcGFydGlhbC5zcGxpdCgnXFxuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGlhbEJ5TmwubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFydGlhbEJ5TmxbaV0ubGVuZ3RoICYmIChpID4gMCB8fCAhbGluZUhhc05vblNwYWNlKSkge1xuICAgICAgcGFydGlhbEJ5TmxbaV0gPSBmaWx0ZXJlZEluZGVudGF0aW9uICsgcGFydGlhbEJ5TmxbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0aWFsQnlObC5qb2luKCdcXG4nKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIGlmICghcGFydGlhbHMpIHJldHVybjtcbiAgdmFyIHRhZ3MgPSB0aGlzLmdldENvbmZpZ1RhZ3MoY29uZmlnKTtcblxuICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHBhcnRpYWxzKSA/IHBhcnRpYWxzKHRva2VuWzFdKSA6IHBhcnRpYWxzW3Rva2VuWzFdXTtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICB2YXIgbGluZUhhc05vblNwYWNlID0gdG9rZW5bNl07XG4gICAgdmFyIHRhZ0luZGV4ID0gdG9rZW5bNV07XG4gICAgdmFyIGluZGVudGF0aW9uID0gdG9rZW5bNF07XG4gICAgdmFyIGluZGVudGVkVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGFnSW5kZXggPT0gMCAmJiBpbmRlbnRhdGlvbikge1xuICAgICAgaW5kZW50ZWRWYWx1ZSA9IHRoaXMuaW5kZW50UGFydGlhbCh2YWx1ZSwgaW5kZW50YXRpb24sIGxpbmVIYXNOb25TcGFjZSk7XG4gICAgfVxuICAgIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKGluZGVudGVkVmFsdWUsIHRhZ3MpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnRlZFZhbHVlLCBjb25maWcpO1xuICB9XG59O1xuXG5Xcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0LCBjb25maWcpIHtcbiAgdmFyIGVzY2FwZSA9IHRoaXMuZ2V0Q29uZmlnRXNjYXBlKGNvbmZpZykgfHwgbXVzdGFjaGUuZXNjYXBlO1xuICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBlc2NhcGUgPT09IG11c3RhY2hlLmVzY2FwZSkgPyBTdHJpbmcodmFsdWUpIDogZXNjYXBlKHZhbHVlKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmF3VmFsdWUgPSBmdW5jdGlvbiByYXdWYWx1ZSAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdO1xufTtcblxuV3JpdGVyLnByb3RvdHlwZS5nZXRDb25maWdUYWdzID0gZnVuY3Rpb24gZ2V0Q29uZmlnVGFncyAoY29uZmlnKSB7XG4gIGlmIChpc0FycmF5KGNvbmZpZykpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGVsc2UgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBjb25maWcudGFncztcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5Xcml0ZXIucHJvdG90eXBlLmdldENvbmZpZ0VzY2FwZSA9IGZ1bmN0aW9uIGdldENvbmZpZ0VzY2FwZSAoY29uZmlnKSB7XG4gIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWcuZXNjYXBlO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbnZhciBtdXN0YWNoZSA9IHtcbiAgbmFtZTogJ211c3RhY2hlLmpzJyxcbiAgdmVyc2lvbjogJzQuMi4wJyxcbiAgdGFnczogWyAne3snLCAnfX0nIF0sXG4gIGNsZWFyQ2FjaGU6IHVuZGVmaW5lZCxcbiAgZXNjYXBlOiB1bmRlZmluZWQsXG4gIHBhcnNlOiB1bmRlZmluZWQsXG4gIHJlbmRlcjogdW5kZWZpbmVkLFxuICBTY2FubmVyOiB1bmRlZmluZWQsXG4gIENvbnRleHQ6IHVuZGVmaW5lZCxcbiAgV3JpdGVyOiB1bmRlZmluZWQsXG4gIC8qKlxuICAgKiBBbGxvd3MgYSB1c2VyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNhY2hpbmcgc3RyYXRlZ3ksIGJ5IHByb3ZpZGluZyBhblxuICAgKiBvYmplY3Qgd2l0aCBzZXQsIGdldCBhbmQgY2xlYXIgbWV0aG9kcy4gVGhpcyBjYW4gYWxzbyBiZSB1c2VkIHRvIGRpc2FibGVcbiAgICogdGhlIGNhY2hlIGJ5IHNldHRpbmcgaXQgdG8gdGhlIGxpdGVyYWwgYHVuZGVmaW5lZGAuXG4gICAqL1xuICBzZXQgdGVtcGxhdGVDYWNoZSAoY2FjaGUpIHtcbiAgICBkZWZhdWx0V3JpdGVyLnRlbXBsYXRlQ2FjaGUgPSBjYWNoZTtcbiAgfSxcbiAgLyoqXG4gICAqIEdldHMgdGhlIGRlZmF1bHQgb3Igb3ZlcnJpZGRlbiBjYWNoaW5nIG9iamVjdCBmcm9tIHRoZSBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIGdldCB0ZW1wbGF0ZUNhY2hlICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci50ZW1wbGF0ZUNhY2hlO1xuICB9XG59O1xuXG4vLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG52YXIgZGVmYXVsdFdyaXRlciA9IG5ldyBXcml0ZXIoKTtcblxuLyoqXG4gKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICovXG5tdXN0YWNoZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAqIGFycmF5IG9mIHRva2VucyBpdCBjb250YWlucy4gRG9pbmcgdGhpcyBhaGVhZCBvZiB0aW1lIGF2b2lkcyB0aGUgbmVlZCB0b1xuICogcGFyc2UgdGVtcGxhdGVzIG9uIHRoZSBmbHkgYXMgdGhleSBhcmUgcmVuZGVyZWQuXG4gKi9cbm11c3RhY2hlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgYHRlbXBsYXRlYCB3aXRoIHRoZSBnaXZlbiBgdmlld2AsIGBwYXJ0aWFsc2AsIGFuZCBgY29uZmlnYFxuICogdXNpbmcgdGhlIGRlZmF1bHQgd3JpdGVyLlxuICovXG5tdXN0YWNoZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyknKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMsIGNvbmZpZyk7XG59O1xuXG4vLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8yNDRcbm11c3RhY2hlLmVzY2FwZSA9IGVzY2FwZUh0bWw7XG5cbi8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbm11c3RhY2hlLlNjYW5uZXIgPSBTY2FubmVyO1xubXVzdGFjaGUuQ29udGV4dCA9IENvbnRleHQ7XG5tdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IG11c3RhY2hlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTY3JvbGxiYXIgZnJvbSAnLi9zY3JvbGxiYXIvaW5kZXgnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bi9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgSU1pc01pcyB7XHJcbiAgIGRyb3Bkb3duOiBhbnksXHJcbiAgIHNjcm9sbGJhcjogYW55XHJcbn1cclxuXHJcbmNvbnN0IE1pc01pczogSU1pc01pcyA9IHtcclxuICAgZHJvcGRvd246IERyb3Bkb3duLFxyXG4gICBzY3JvbGxiYXI6IFNjcm9sbGJhclxyXG59O1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpWydNaXNNaXMnXSA9IE1pc01pczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=