module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _jsxFileName = \"/Users/siddharth/Documents/work/webapp_nextjs/components/contact/contact-form.js\";\n\n\n\n\nasync function sendContactData(contactDetails) {\n  const response = await fetch('/api/contact', {\n    method: 'POST',\n    body: JSON.stringify(contactDetails),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.message || 'Something went wrong!');\n  }\n}\n\nfunction ContactForm() {\n  const {\n    0: enteredEmail,\n    1: setEnteredEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredName,\n    1: setEnteredName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredMessage,\n    1: setEnteredMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: requestStatus,\n    1: setRequestStatus\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); // 'pending', 'success', 'error'\n\n  const {\n    0: requestError,\n    1: setRequestError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (requestStatus === 'success' || requestStatus === 'error') {\n      const timer = setTimeout(() => {\n        setRequestStatus(null);\n        setRequestError(null);\n      }, 3000);\n      return () => clearTimeout(timer);\n    }\n  }, [requestStatus]);\n\n  async function sendMessageHandler(event) {\n    event.preventDefault(); // optional: add client-side validation\n\n    setRequestStatus('pending');\n\n    try {\n      await sendContactData({\n        email: enteredEmail,\n        name: enteredName,\n        message: enteredMessage\n      });\n      setRequestStatus('success');\n      setEnteredMessage('');\n      setEnteredEmail('');\n      setEnteredName('');\n    } catch (error) {\n      setRequestError(error.message);\n      setRequestStatus('error');\n    }\n  }\n\n  let notification;\n\n  if (requestStatus === 'pending') {\n    notification = {\n      status: 'pending',\n      title: 'Sending message...',\n      message: 'Your message is on its way!'\n    };\n  }\n\n  if (requestStatus === 'success') {\n    notification = {\n      status: 'success',\n      title: 'Success!',\n      message: 'Message sent successfully!'\n    };\n  }\n\n  if (requestStatus === 'error') {\n    notification = {\n      status: 'error',\n      title: 'Error!',\n      message: requestError\n    };\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"How can I help you?\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Your Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: event => setEnteredEmail(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Your Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: event => setEnteredName(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Your Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"message\",\n          rows: \"5\",\n          required: true,\n          value: enteredMessage,\n          onChange: event => setEnteredMessage(event.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Send Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), notification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      status: notification.status,\n      title: notification.title,\n      message: notification.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwibmFtZXMiOlsic2VuZENvbnRhY3REYXRhIiwiY29udGFjdERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwidXNlU3RhdGUiLCJlbnRlcmVkTmFtZSIsInNldEVudGVyZWROYW1lIiwiZW50ZXJlZE1lc3NhZ2UiLCJzZXRFbnRlcmVkTWVzc2FnZSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwicmVxdWVzdEVycm9yIiwic2V0UmVxdWVzdEVycm9yIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwibmFtZSIsImVycm9yIiwibm90aWZpY2F0aW9uIiwic3RhdHVzIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsZUFBZUEsZUFBZixDQUErQkMsY0FBL0IsRUFBK0M7QUFDN0MsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNDQyxVQUFNLEVBQUUsTUFEbUM7QUFFM0NDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGNBQWYsQ0FGcUM7QUFHM0NPLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURUO0FBSGtDLEdBQWpCLENBQTVCO0FBUUEsUUFB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VjtBQUlFLGVBQUssRUFBRXZCLGNBSlQ7QUFLRSxrQkFBUSxFQUFHVyxLQUFELElBQVdWLGlCQUFpQixDQUFDVSxLQUFLLENBQUNhLE1BQU4sQ0FBYUMsS0FBZDtBQUx4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQWtDRTtBQUFLLGlCQUFTLEVBQUVOLCtEQUFPLENBQUNPLE9BQXhCO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBd0NHVixZQUFZLGlCQUNYLHFFQUFDLHdEQUFEO0FBQ0UsWUFBTSxFQUFFQSxZQUFZLENBQUNDLE1BRHZCO0FBRUUsV0FBSyxFQUFFRCxZQUFZLENBQUNFLEtBRnRCO0FBR0UsYUFBTyxFQUFFRixZQUFZLENBQUN2QjtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztBQUVjQywwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vdWkvbm90aWZpY2F0aW9uJztcblxuYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3REYXRhKGNvbnRhY3REZXRhaWxzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0RGV0YWlscyksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgW2VudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbnRlcmVkTWVzc2FnZSwgc2V0RW50ZXJlZE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZSgpOyAvLyAncGVuZGluZycsICdzdWNjZXNzJywgJ2Vycm9yJ1xuICBjb25zdCBbcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSAnc3VjY2VzcycgfHwgcmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhudWxsKTtcbiAgICAgICAgc2V0UmVxdWVzdEVycm9yKG51bGwpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgfSwgW3JlcXVlc3RTdGF0dXNdKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gb3B0aW9uYWw6IGFkZCBjbGllbnQtc2lkZSB2YWxpZGF0aW9uXG5cbiAgICBzZXRSZXF1ZXN0U3RhdHVzKCdwZW5kaW5nJyk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2VuZENvbnRhY3REYXRhKHtcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXG4gICAgICAgIG1lc3NhZ2U6IGVudGVyZWRNZXNzYWdlLFxuICAgICAgfSk7XG4gICAgICBzZXRSZXF1ZXN0U3RhdHVzKCdzdWNjZXNzJyk7XG4gICAgICBzZXRFbnRlcmVkTWVzc2FnZSgnJyk7XG4gICAgICBzZXRFbnRlcmVkRW1haWwoJycpO1xuICAgICAgc2V0RW50ZXJlZE5hbWUoJycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRSZXF1ZXN0U3RhdHVzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBub3RpZmljYXRpb247XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgdGl0bGU6ICdTZW5kaW5nIG1lc3NhZ2UuLi4nLFxuICAgICAgbWVzc2FnZTogJ1lvdXIgbWVzc2FnZSBpcyBvbiBpdHMgd2F5IScsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxuICAgICAgbWVzc2FnZTogJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhJyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICBtZXNzYWdlOiByZXF1ZXN0RXJyb3IsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxuICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kTWVzc2FnZUhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhbHVlPXtlbnRlcmVkRW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVudGVyZWRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5Zb3VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB2YWx1ZT17ZW50ZXJlZE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVudGVyZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPllvdXIgTWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD0nbWVzc2FnZSdcbiAgICAgICAgICAgIHJvd3M9JzUnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgdmFsdWU9e2VudGVyZWRNZXNzYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW50ZXJlZE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7bm90aWZpY2F0aW9uICYmIChcbiAgICAgICAgPE5vdGlmaWNhdGlvblxuICAgICAgICAgIHN0YXR1cz17bm90aWZpY2F0aW9uLnN0YXR1c31cbiAgICAgICAgICB0aXRsZT17bm90aWZpY2F0aW9uLnRpdGxlfVxuICAgICAgICAgIG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLm1vZHVsZS5jc3M/MGJjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.module.css\n");

/***/ }),

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/siddharth/Documents/work/webapp_nextjs/components/ui/notification.js\";\n\n\n\nfunction Notification(props) {\n  const {\n    title,\n    message,\n    status\n  } = props;\n  let statusClasses = '';\n\n  if (status === 'success') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.success;\n  }\n\n  if (status === 'error') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error;\n  }\n\n  const cssClasses = `${_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification} ${statusClasses}`;\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cssClasses,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this), document.getElementById('notifications'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcz8wZWExIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInByb3BzIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJjc3NDbGFzc2VzIiwibm90aWZpY2F0aW9uIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUE2QkgsS0FBbkM7QUFFQSxNQUFJSSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBSUQsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNDLE9BQXhCO0FBQ0Q7O0FBRUQsTUFBSUgsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNFLEtBQXhCO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFJLEdBQUVILCtEQUFPLENBQUNJLFlBQWEsSUFBR0wsYUFBYyxFQUE1RDtBQUVBLHNCQUFPTSxnREFBUSxDQUFDQyxZQUFULGVBQ0w7QUFBSyxhQUFTLEVBQUVILFVBQWhCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS1A7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESyxFQUtMVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FMSyxDQUFQO0FBT0Q7O0FBRWNkLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMgfSA9IHByb3BzO1xuXG4gIGxldCBzdGF0dXNDbGFzc2VzID0gJyc7XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuc3VjY2VzcztcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5lcnJvcjtcbiAgfVxuXG4gIGNvbnN0IGNzc0NsYXNzZXMgPSBgJHtjbGFzc2VzLm5vdGlmaWNhdGlvbn0gJHtzdGF0dXNDbGFzc2VzfWA7XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zJylcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n");

/***/ }),

/***/ "./components/ui/notification.module.css":
/*!***********************************************!*\
  !*** ./components/ui/notification.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"notification\": \"notification_notification__3oWBf\",\n\t\"success\": \"notification_success__3Hbna\",\n\t\"error\": \"notification_error__1LYKp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzPzQ3ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZmljYXRpb25fXzNvV0JmXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSGJuYVwiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18xTFlLcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.module.css\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contact/contact-form */ \"./components/contact/contact-form.js\");\n\nvar _jsxFileName = \"/Users/siddharth/Documents/work/webapp_nextjs/pages/contact.js\";\n\n\n\n\nfunction ContactPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Contact Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Send me your messages!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUNyQixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVjQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtJztcblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db250YWN0IE1lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1NlbmQgbWUgeW91ciBtZXNzYWdlcyEnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });