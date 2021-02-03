"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.source = void 0;
exports.source = "var pwExport =\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/server/injected/utilityScript.ts\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./node_modules/webpack/buildin/global.js\":\n/*!***********************************!*\\\n  !*** (webpack)/buildin/global.js ***!\n  \\***********************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nvar g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n/***/ }),\n\n/***/ \"./src/server/common/utilityScriptSerializers.ts\":\n/*!*******************************************************!*\\\n  !*** ./src/server/common/utilityScriptSerializers.ts ***!\n  \\*******************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global) {\n/**\n * Copyright (c) Microsoft Corporation.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.serializeAsCallArgument = exports.parseEvaluationResultValue = void 0;\nfunction isRegExp(obj) {\n    return obj instanceof RegExp || Object.prototype.toString.call(obj) === '[object RegExp]';\n}\nfunction isDate(obj) {\n    return obj instanceof Date || Object.prototype.toString.call(obj) === '[object Date]';\n}\nfunction isError(obj) {\n    return obj instanceof Error || (obj && obj.__proto__ && obj.__proto__.name === 'Error');\n}\nfunction parseEvaluationResultValue(value, handles = []) {\n    if (Object.is(value, undefined))\n        return undefined;\n    if (typeof value === 'object' && value) {\n        if ('v' in value) {\n            if (value.v === 'undefined')\n                return undefined;\n            if (value.v === 'null')\n                return null;\n            if (value.v === 'NaN')\n                return NaN;\n            if (value.v === 'Infinity')\n                return Infinity;\n            if (value.v === '-Infinity')\n                return -Infinity;\n            if (value.v === '-0')\n                return -0;\n            return undefined;\n        }\n        if ('d' in value)\n            return new Date(value.d);\n        if ('r' in value)\n            return new RegExp(value.r.p, value.r.f);\n        if ('a' in value)\n            return value.a.map((a) => parseEvaluationResultValue(a, handles));\n        if ('o' in value) {\n            const result = {};\n            for (const { k, v } of value.o)\n                result[k] = parseEvaluationResultValue(v, handles);\n            return result;\n        }\n        if ('h' in value)\n            return handles[value.h];\n    }\n    return value;\n}\nexports.parseEvaluationResultValue = parseEvaluationResultValue;\nfunction serializeAsCallArgument(value, handleSerializer) {\n    return serialize(value, handleSerializer, new Set());\n}\nexports.serializeAsCallArgument = serializeAsCallArgument;\nfunction serialize(value, handleSerializer, visited) {\n    const result = handleSerializer(value);\n    if ('fallThrough' in result)\n        value = result.fallThrough;\n    else\n        return result;\n    if (visited.has(value))\n        throw new Error('Argument is a circular structure');\n    if (typeof value === 'symbol')\n        return { v: 'undefined' };\n    if (Object.is(value, undefined))\n        return { v: 'undefined' };\n    if (Object.is(value, null))\n        return { v: 'null' };\n    if (Object.is(value, NaN))\n        return { v: 'NaN' };\n    if (Object.is(value, Infinity))\n        return { v: 'Infinity' };\n    if (Object.is(value, -Infinity))\n        return { v: '-Infinity' };\n    if (Object.is(value, -0))\n        return { v: '-0' };\n    if (typeof value === 'boolean')\n        return value;\n    if (typeof value === 'number')\n        return value;\n    if (typeof value === 'string')\n        return value;\n    if (isError(value)) {\n        const error = value;\n        if ('captureStackTrace' in global.Error) {\n            // v8\n            return error.stack || '';\n        }\n        return `${error.name}: ${error.message}\\n${error.stack}`;\n    }\n    if (isDate(value))\n        return { d: value.toJSON() };\n    if (isRegExp(value))\n        return { r: { p: value.source, f: value.flags } };\n    if (Array.isArray(value)) {\n        const a = [];\n        visited.add(value);\n        for (let i = 0; i < value.length; ++i)\n            a.push(serialize(value[i], handleSerializer, visited));\n        visited.delete(value);\n        return { a };\n    }\n    if (typeof value === 'object') {\n        const o = [];\n        visited.add(value);\n        for (const name of Object.keys(value)) {\n            let item;\n            try {\n                item = value[name];\n            }\n            catch (e) {\n                continue; // native bindings will throw sometimes\n            }\n            if (name === 'toJSON' && typeof item === 'function')\n                o.push({ k: name, v: { o: [] } });\n            else\n                o.push({ k: name, v: serialize(item, handleSerializer, visited) });\n        }\n        visited.delete(value);\n        return { o };\n    }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n/***/ }),\n\n/***/ \"./src/server/injected/utilityScript.ts\":\n/*!**********************************************!*\\\n  !*** ./src/server/injected/utilityScript.ts ***!\n  \\**********************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global) {\n/**\n * Copyright (c) Microsoft Corporation.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst utilityScriptSerializers_1 = __webpack_require__(/*! ../common/utilityScriptSerializers */ \"./src/server/common/utilityScriptSerializers.ts\");\nclass UtilityScript {\n    evaluate(returnByValue, expression) {\n        const result = global.eval(expression);\n        return returnByValue ? this._promiseAwareJsonValueNoThrow(result) : result;\n    }\n    callFunction(returnByValue, functionText, argCount, ...argsAndHandles) {\n        const args = argsAndHandles.slice(0, argCount);\n        const handles = argsAndHandles.slice(argCount);\n        const parameters = args.map(a => utilityScriptSerializers_1.parseEvaluationResultValue(a, handles));\n        const func = global.eval('(' + functionText + ')');\n        const result = func(...parameters);\n        return returnByValue ? this._promiseAwareJsonValueNoThrow(result) : result;\n    }\n    jsonValue(returnByValue, value) {\n        // Special handling of undefined to work-around multi-step returnByValue handling in WebKit.\n        if (Object.is(value, undefined))\n            return undefined;\n        return utilityScriptSerializers_1.serializeAsCallArgument(value, (value) => ({ fallThrough: value }));\n    }\n    _promiseAwareJsonValueNoThrow(value) {\n        const safeJson = (value) => {\n            try {\n                return this.jsonValue(true, value);\n            }\n            catch (e) {\n                return undefined;\n            }\n        };\n        if (value && typeof value === 'object' && typeof value.then === 'function') {\n            return (async () => {\n                // By using async function we ensure that return value is a native Promise,\n                // and not some overriden Promise in the page.\n                // This makes Firefox and WebKit debugging protocols recognize it as a Promise,\n                // properly await and return the value.\n                const promiseValue = await value;\n                return safeJson(promiseValue);\n            })();\n        }\n        return safeJson(value);\n    }\n}\nexports.default = UtilityScript;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n/***/ })\n\n/******/ })[\"default\"];";
//# sourceMappingURL=utilityScriptSource.js.map