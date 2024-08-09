"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/account-summary-details.tsx":
/*!********************************************************!*\
  !*** ./src/app/components/account-summary-details.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountSummaryDetails: function() { return /* binding */ AccountSummaryDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AccountSummaryDetails = (props)=>{\n    _s();\n    console.log(\"=================================\");\n    console.log(props.account);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.account.Balance);\n    const handleWithdraw = ()=>{\n        const amount = parseFloat(prompt(\"Enter amount to withdraw:\"));\n        if (isNaN(amount) || amount <= 0) {\n            alert(\"Invalid amount\");\n            return;\n        }\n        if (amount > balance) {\n            alert(\"Insufficient funds\");\n            return;\n        }\n        // Update the balance\n        setBalance(balance - amount);\n    };\n    const handleDeposit = ()=>{\n        const amount = parseFloat(prompt(\"Enter amount to deposit:\"));\n        if (isNaN(amount) || amount <= 0) {\n            alert(\"Invalid amount\");\n            return;\n        }\n        // Update the balance\n        setBalance(balance + amount);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"account-details\",\n        style: {\n            border: \"dashed lightgreen\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"balance\",\n                children: [\n                    \"Balance: $\",\n                    balance.toFixed(2)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"action-button\",\n                        onClick: handleWithdraw,\n                        children: \"Withdraw\"\n                    }, void 0, false, {\n                        fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"action-button\",\n                        onClick: handleDeposit,\n                        children: \"Deposit\"\n                    }, void 0, false, {\n                        fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"action-button\",\n                        children: \"History\"\n                    }, void 0, false, {\n                        fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"action-button\",\n                        children: \"Manage\"\n                    }, void 0, false, {\n                        fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nickw/Documents/Revature/P2-Team1/Bank-FrontEnd/src/app/components/account-summary-details.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccountSummaryDetails, \"BMofZHO8CAk9sEkamBwOP6tusvs=\");\n_c = AccountSummaryDetails;\nvar _c;\n$RefreshReg$(_c, \"AccountSummaryDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LXN1bW1hcnktZGV0YWlscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBR2pDLE1BQU1FLHdCQUF3QixDQUFDQzs7SUFDbENDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLE9BQU87SUFDekIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDRSxNQUFNRyxPQUFPLENBQUNHLE9BQU87SUFFNUQsTUFBTUMsaUJBQWlCO1FBQ25CLE1BQU1DLFNBQVNDLFdBQVdDLE9BQU87UUFDakMsSUFBSUMsTUFBTUgsV0FBV0EsVUFBVSxHQUFHO1lBQzlCSSxNQUFNO1lBQ047UUFDSjtRQUVBLElBQUlKLFNBQVNKLFNBQVM7WUFDbEJRLE1BQU07WUFDTjtRQUNKO1FBRUEscUJBQXFCO1FBQ3JCUCxXQUFXRCxVQUFVSTtJQUN6QjtJQUVBLE1BQU1LLGdCQUFnQjtRQUNsQixNQUFNTCxTQUFTQyxXQUFXQyxPQUFPO1FBQ2pDLElBQUlDLE1BQU1ILFdBQVdBLFVBQVUsR0FBRztZQUM5QkksTUFBTTtZQUNOO1FBQ0o7UUFFQSxxQkFBcUI7UUFDckJQLFdBQVdELFVBQVVJO0lBQ3pCO0lBRUEscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVU7UUFBa0JDLE9BQU87WUFBRUMsUUFBUTtZQUFxQkMsU0FBUztRQUFPOzswQkFDbkYsOERBQUNDO2dCQUFFSixXQUFVOztvQkFBVTtvQkFBV1gsUUFBUWdCLE9BQU8sQ0FBQzs7Ozs7OzswQkFDbEQsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ007d0JBQU9OLFdBQVU7d0JBQWdCTyxTQUFTZjtrQ0FBZ0I7Ozs7OztrQ0FDM0QsOERBQUNjO3dCQUFPTixXQUFVO3dCQUFnQk8sU0FBU1Q7a0NBQWU7Ozs7OztrQ0FDMUQsOERBQUNRO3dCQUFPTixXQUFVO2tDQUFnQjs7Ozs7O2tDQUNsQyw4REFBQ007d0JBQU9OLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQsRUFBRTtHQTNDV2hCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LXN1bW1hcnktZGV0YWlscy50c3g/OTNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyLCBBY2NvdW50LCBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvZHRvc1wiO1xuXG5leHBvcnQgY29uc3QgQWNjb3VudFN1bW1hcnlEZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgY29uc29sZS5sb2cocHJvcHMuYWNjb3VudCk7XG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUocHJvcHMuYWNjb3VudC5CYWxhbmNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVdpdGhkcmF3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHByb21wdCgnRW50ZXIgYW1vdW50IHRvIHdpdGhkcmF3OicpKTtcbiAgICAgICAgaWYgKGlzTmFOKGFtb3VudCkgfHwgYW1vdW50IDw9IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFtb3VudCA+IGJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnN1ZmZpY2llbnQgZnVuZHMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFsYW5jZVxuICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UgLSBhbW91bnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZXBvc2l0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHByb21wdCgnRW50ZXIgYW1vdW50IHRvIGRlcG9zaXQ6JykpO1xuICAgICAgICBpZiAoaXNOYU4oYW1vdW50KSB8fCBhbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgYW1vdW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGJhbGFuY2VcbiAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlICsgYW1vdW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWRldGFpbHNcIiBzdHlsZT17eyBib3JkZXI6IFwiZGFzaGVkIGxpZ2h0Z3JlZW5cIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiYWxhbmNlXCI+QmFsYW5jZTogJHtiYWxhbmNlLnRvRml4ZWQoMil9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVXaXRoZHJhd30+V2l0aGRyYXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVEZXBvc2l0fT5EZXBvc2l0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uXCI+SGlzdG9yeTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvblwiPk1hbmFnZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWNjb3VudFN1bW1hcnlEZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiQmFsYW5jZSIsImhhbmRsZVdpdGhkcmF3IiwiYW1vdW50IiwicGFyc2VGbG9hdCIsInByb21wdCIsImlzTmFOIiwiYWxlcnQiLCJoYW5kbGVEZXBvc2l0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXIiLCJkaXNwbGF5IiwicCIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/account-summary-details.tsx\n"));

/***/ })

});