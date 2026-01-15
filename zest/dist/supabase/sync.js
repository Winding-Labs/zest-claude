var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __reExport = (target, mod, secondTarget) => {
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(target, key) && key !== "default")
      __defProp(target, key, {
        get: () => mod[key],
        enumerable: true
      });
  if (secondTarget) {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(secondTarget, key) && key !== "default")
        __defProp(secondTarget, key, {
          get: () => mod[key],
          enumerable: true
        });
    return secondTarget;
  }
};
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// ../../node_modules/@supabase/functions-js/node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// ../../node_modules/@supabase/functions-js/dist/main/helper.js
var require_helper = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveFetch = undefined;
  var resolveFetch = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };
  exports.resolveFetch = resolveFetch;
});

// ../../node_modules/@supabase/functions-js/dist/main/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FunctionRegion = exports.FunctionsHttpError = exports.FunctionsRelayError = exports.FunctionsFetchError = exports.FunctionsError = undefined;

  class FunctionsError extends Error {
    constructor(message, name = "FunctionsError", context) {
      super(message);
      this.name = name;
      this.context = context;
    }
  }
  exports.FunctionsError = FunctionsError;

  class FunctionsFetchError extends FunctionsError {
    constructor(context) {
      super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
  }
  exports.FunctionsFetchError = FunctionsFetchError;

  class FunctionsRelayError extends FunctionsError {
    constructor(context) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
  }
  exports.FunctionsRelayError = FunctionsRelayError;

  class FunctionsHttpError extends FunctionsError {
    constructor(context) {
      super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
  }
  exports.FunctionsHttpError = FunctionsHttpError;
  var FunctionRegion;
  (function(FunctionRegion2) {
    FunctionRegion2["Any"] = "any";
    FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion2["ApSouth1"] = "ap-south-1";
    FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion2["CaCentral1"] = "ca-central-1";
    FunctionRegion2["EuCentral1"] = "eu-central-1";
    FunctionRegion2["EuWest1"] = "eu-west-1";
    FunctionRegion2["EuWest2"] = "eu-west-2";
    FunctionRegion2["EuWest3"] = "eu-west-3";
    FunctionRegion2["SaEast1"] = "sa-east-1";
    FunctionRegion2["UsEast1"] = "us-east-1";
    FunctionRegion2["UsWest1"] = "us-west-1";
    FunctionRegion2["UsWest2"] = "us-west-2";
  })(FunctionRegion || (exports.FunctionRegion = FunctionRegion = {}));
});

// ../../node_modules/@supabase/functions-js/dist/main/FunctionsClient.js
var require_FunctionsClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FunctionsClient = undefined;
  var tslib_1 = require_tslib();
  var helper_1 = require_helper();
  var types_1 = require_types();

  class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = types_1.FunctionRegion.Any } = {}) {
      this.url = url;
      this.headers = headers;
      this.region = region;
      this.fetch = (0, helper_1.resolveFetch)(customFetch);
    }
    setAuth(token) {
      this.headers.Authorization = `Bearer ${token}`;
    }
    invoke(functionName_1) {
      return tslib_1.__awaiter(this, arguments, undefined, function* (functionName, options = {}) {
        var _a;
        let timeoutId;
        let timeoutController;
        try {
          const { headers, method, body: functionArgs, signal, timeout } = options;
          let _headers = {};
          let { region } = options;
          if (!region) {
            region = this.region;
          }
          const url = new URL(`${this.url}/${functionName}`);
          if (region && region !== "any") {
            _headers["x-region"] = region;
            url.searchParams.set("forceFunctionRegion", region);
          }
          let body;
          if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
            if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
              _headers["Content-Type"] = "application/octet-stream";
              body = functionArgs;
            } else if (typeof functionArgs === "string") {
              _headers["Content-Type"] = "text/plain";
              body = functionArgs;
            } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) {
              body = functionArgs;
            } else {
              _headers["Content-Type"] = "application/json";
              body = JSON.stringify(functionArgs);
            }
          } else {
            body = functionArgs;
          }
          let effectiveSignal = signal;
          if (timeout) {
            timeoutController = new AbortController;
            timeoutId = setTimeout(() => timeoutController.abort(), timeout);
            if (signal) {
              effectiveSignal = timeoutController.signal;
              signal.addEventListener("abort", () => timeoutController.abort());
            } else {
              effectiveSignal = timeoutController.signal;
            }
          }
          const response = yield this.fetch(url.toString(), {
            method: method || "POST",
            headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
            body,
            signal: effectiveSignal
          }).catch((fetchError) => {
            throw new types_1.FunctionsFetchError(fetchError);
          });
          const isRelayError = response.headers.get("x-relay-error");
          if (isRelayError && isRelayError === "true") {
            throw new types_1.FunctionsRelayError(response);
          }
          if (!response.ok) {
            throw new types_1.FunctionsHttpError(response);
          }
          let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== undefined ? _a : "text/plain").split(";")[0].trim();
          let data;
          if (responseType === "application/json") {
            data = yield response.json();
          } else if (responseType === "application/octet-stream" || responseType === "application/pdf") {
            data = yield response.blob();
          } else if (responseType === "text/event-stream") {
            data = response;
          } else if (responseType === "multipart/form-data") {
            data = yield response.formData();
          } else {
            data = yield response.text();
          }
          return { data, error: null, response };
        } catch (error) {
          return {
            data: null,
            error,
            response: error instanceof types_1.FunctionsHttpError || error instanceof types_1.FunctionsRelayError ? error.context : undefined
          };
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      });
    }
  }
  exports.FunctionsClient = FunctionsClient;
});

// ../../node_modules/@supabase/functions-js/dist/main/index.js
var require_main = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FunctionRegion = exports.FunctionsRelayError = exports.FunctionsHttpError = exports.FunctionsFetchError = exports.FunctionsError = exports.FunctionsClient = undefined;
  var FunctionsClient_1 = require_FunctionsClient();
  Object.defineProperty(exports, "FunctionsClient", { enumerable: true, get: function() {
    return FunctionsClient_1.FunctionsClient;
  } });
  var types_1 = require_types();
  Object.defineProperty(exports, "FunctionsError", { enumerable: true, get: function() {
    return types_1.FunctionsError;
  } });
  Object.defineProperty(exports, "FunctionsFetchError", { enumerable: true, get: function() {
    return types_1.FunctionsFetchError;
  } });
  Object.defineProperty(exports, "FunctionsHttpError", { enumerable: true, get: function() {
    return types_1.FunctionsHttpError;
  } });
  Object.defineProperty(exports, "FunctionsRelayError", { enumerable: true, get: function() {
    return types_1.FunctionsRelayError;
  } });
  Object.defineProperty(exports, "FunctionRegion", { enumerable: true, get: function() {
    return types_1.FunctionRegion;
  } });
});

// ../../node_modules/@supabase/realtime-js/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/websocket-factory.js
var require_websocket_factory = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebSocketFactory = undefined;

  class WebSocketFactory {
    constructor() {}
    static detectEnvironment() {
      var _a;
      if (typeof WebSocket !== "undefined") {
        return { type: "native", constructor: WebSocket };
      }
      if (typeof globalThis !== "undefined" && typeof globalThis.WebSocket !== "undefined") {
        return { type: "native", constructor: globalThis.WebSocket };
      }
      if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
        return { type: "native", constructor: global.WebSocket };
      }
      if (typeof globalThis !== "undefined" && typeof globalThis.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
        return {
          type: "cloudflare",
          error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
          workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
      }
      if (typeof globalThis !== "undefined" && globalThis.EdgeRuntime || typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === undefined ? undefined : _a.includes("Vercel-Edge"))) {
        return {
          type: "unsupported",
          error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
          workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
      }
      if (typeof process !== "undefined") {
        const processVersions = process["versions"];
        if (processVersions && processVersions["node"]) {
          const versionString = processVersions["node"];
          const nodeVersion = parseInt(versionString.replace(/^v/, "").split(".")[0]);
          if (nodeVersion >= 22) {
            if (typeof globalThis.WebSocket !== "undefined") {
              return { type: "native", constructor: globalThis.WebSocket };
            }
            return {
              type: "unsupported",
              error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
          return {
            type: "unsupported",
            error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
            workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
` + `import ws from "ws"
` + "new RealtimeClient(url, { transport: ws })"
          };
        }
      }
      return {
        type: "unsupported",
        error: "Unknown JavaScript runtime without WebSocket support.",
        workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
      };
    }
    static getWebSocketConstructor() {
      const env = this.detectEnvironment();
      if (env.constructor) {
        return env.constructor;
      }
      let errorMessage = env.error || "WebSocket not supported in this environment.";
      if (env.workaround) {
        errorMessage += `

Suggested solution: ${env.workaround}`;
      }
      throw new Error(errorMessage);
    }
    static createWebSocket(url, protocols) {
      const WS = this.getWebSocketConstructor();
      return new WS(url, protocols);
    }
    static isWebSocketSupported() {
      try {
        const env = this.detectEnvironment();
        return env.type === "native" || env.type === "ws";
      } catch (_a) {
        return false;
      }
    }
  }
  exports.WebSocketFactory = WebSocketFactory;
  exports.default = WebSocketFactory;
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/version.js
var require_version = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.version = undefined;
  exports.version = "2.89.0";
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CONNECTION_STATE = exports.TRANSPORTS = exports.CHANNEL_EVENTS = exports.CHANNEL_STATES = exports.SOCKET_STATES = exports.MAX_PUSH_BUFFER_SIZE = exports.WS_CLOSE_NORMAL = exports.DEFAULT_TIMEOUT = exports.VERSION = exports.DEFAULT_VSN = exports.VSN_2_0_0 = exports.VSN_1_0_0 = exports.DEFAULT_VERSION = undefined;
  var version_1 = require_version();
  exports.DEFAULT_VERSION = `realtime-js/${version_1.version}`;
  exports.VSN_1_0_0 = "1.0.0";
  exports.VSN_2_0_0 = "2.0.0";
  exports.DEFAULT_VSN = exports.VSN_1_0_0;
  exports.VERSION = version_1.version;
  exports.DEFAULT_TIMEOUT = 1e4;
  exports.WS_CLOSE_NORMAL = 1000;
  exports.MAX_PUSH_BUFFER_SIZE = 100;
  var SOCKET_STATES;
  (function(SOCKET_STATES2) {
    SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
    SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
    SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
    SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
  })(SOCKET_STATES || (exports.SOCKET_STATES = SOCKET_STATES = {}));
  var CHANNEL_STATES;
  (function(CHANNEL_STATES2) {
    CHANNEL_STATES2["closed"] = "closed";
    CHANNEL_STATES2["errored"] = "errored";
    CHANNEL_STATES2["joined"] = "joined";
    CHANNEL_STATES2["joining"] = "joining";
    CHANNEL_STATES2["leaving"] = "leaving";
  })(CHANNEL_STATES || (exports.CHANNEL_STATES = CHANNEL_STATES = {}));
  var CHANNEL_EVENTS;
  (function(CHANNEL_EVENTS2) {
    CHANNEL_EVENTS2["close"] = "phx_close";
    CHANNEL_EVENTS2["error"] = "phx_error";
    CHANNEL_EVENTS2["join"] = "phx_join";
    CHANNEL_EVENTS2["reply"] = "phx_reply";
    CHANNEL_EVENTS2["leave"] = "phx_leave";
    CHANNEL_EVENTS2["access_token"] = "access_token";
  })(CHANNEL_EVENTS || (exports.CHANNEL_EVENTS = CHANNEL_EVENTS = {}));
  var TRANSPORTS;
  (function(TRANSPORTS2) {
    TRANSPORTS2["websocket"] = "websocket";
  })(TRANSPORTS || (exports.TRANSPORTS = TRANSPORTS = {}));
  var CONNECTION_STATE;
  (function(CONNECTION_STATE2) {
    CONNECTION_STATE2["Connecting"] = "connecting";
    CONNECTION_STATE2["Open"] = "open";
    CONNECTION_STATE2["Closing"] = "closing";
    CONNECTION_STATE2["Closed"] = "closed";
  })(CONNECTION_STATE || (exports.CONNECTION_STATE = CONNECTION_STATE = {}));
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/serializer.js
var require_serializer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });

  class Serializer {
    constructor(allowedMetadataKeys) {
      this.HEADER_LENGTH = 1;
      this.USER_BROADCAST_PUSH_META_LENGTH = 6;
      this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 };
      this.BINARY_ENCODING = 0;
      this.JSON_ENCODING = 1;
      this.BROADCAST_EVENT = "broadcast";
      this.allowedMetadataKeys = [];
      this.allowedMetadataKeys = allowedMetadataKeys !== null && allowedMetadataKeys !== undefined ? allowedMetadataKeys : [];
    }
    encode(msg, callback) {
      if (msg.event === this.BROADCAST_EVENT && !(msg.payload instanceof ArrayBuffer) && typeof msg.payload.event === "string") {
        return callback(this._binaryEncodeUserBroadcastPush(msg));
      }
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
    _binaryEncodeUserBroadcastPush(message) {
      var _a;
      if (this._isArrayBuffer((_a = message.payload) === null || _a === undefined ? undefined : _a.payload)) {
        return this._encodeBinaryUserBroadcastPush(message);
      } else {
        return this._encodeJsonUserBroadcastPush(message);
      }
    }
    _encodeBinaryUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === undefined ? undefined : _a.payload) !== null && _b !== undefined ? _b : new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(message, this.BINARY_ENCODING, userPayload);
    }
    _encodeJsonUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === undefined ? undefined : _a.payload) !== null && _b !== undefined ? _b : {};
      const encoder = new TextEncoder;
      const encodedUserPayload = encoder.encode(JSON.stringify(userPayload)).buffer;
      return this._encodeUserBroadcastPush(message, this.JSON_ENCODING, encodedUserPayload);
    }
    _encodeUserBroadcastPush(message, encodingType, encodedPayload) {
      var _a, _b;
      const topic = message.topic;
      const ref = (_a = message.ref) !== null && _a !== undefined ? _a : "";
      const joinRef = (_b = message.join_ref) !== null && _b !== undefined ? _b : "";
      const userEvent = message.payload.event;
      const rest = this.allowedMetadataKeys ? this._pick(message.payload, this.allowedMetadataKeys) : {};
      const metadata = Object.keys(rest).length === 0 ? "" : JSON.stringify(rest);
      if (joinRef.length > 255) {
        throw new Error(`joinRef length ${joinRef.length} exceeds maximum of 255`);
      }
      if (ref.length > 255) {
        throw new Error(`ref length ${ref.length} exceeds maximum of 255`);
      }
      if (topic.length > 255) {
        throw new Error(`topic length ${topic.length} exceeds maximum of 255`);
      }
      if (userEvent.length > 255) {
        throw new Error(`userEvent length ${userEvent.length} exceeds maximum of 255`);
      }
      if (metadata.length > 255) {
        throw new Error(`metadata length ${metadata.length} exceeds maximum of 255`);
      }
      const metaLength = this.USER_BROADCAST_PUSH_META_LENGTH + joinRef.length + ref.length + topic.length + userEvent.length + metadata.length;
      const header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.userBroadcastPush);
      view.setUint8(offset++, joinRef.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, userEvent.length);
      view.setUint8(offset++, metadata.length);
      view.setUint8(offset++, encodingType);
      Array.from(joinRef, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(userEvent, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(metadata, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + encodedPayload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(encodedPayload), header.byteLength);
      return combined.buffer;
    }
    decode(rawPayload, callback) {
      if (this._isArrayBuffer(rawPayload)) {
        let result = this._binaryDecode(rawPayload);
        return callback(result);
      }
      if (typeof rawPayload === "string") {
        const jsonPayload = JSON.parse(rawPayload);
        const [join_ref, ref, topic, event, payload] = jsonPayload;
        return callback({ join_ref, ref, topic, event, payload });
      }
      return callback({});
    }
    _binaryDecode(buffer) {
      const view = new DataView(buffer);
      const kind = view.getUint8(0);
      const decoder = new TextDecoder;
      switch (kind) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(buffer, view, decoder);
      }
    }
    _decodeUserBroadcast(buffer, view, decoder) {
      const topicSize = view.getUint8(1);
      const userEventSize = view.getUint8(2);
      const metadataSize = view.getUint8(3);
      const payloadEncoding = view.getUint8(4);
      let offset = this.HEADER_LENGTH + 4;
      const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      const userEvent = decoder.decode(buffer.slice(offset, offset + userEventSize));
      offset = offset + userEventSize;
      const metadata = decoder.decode(buffer.slice(offset, offset + metadataSize));
      offset = offset + metadataSize;
      const payload = buffer.slice(offset, buffer.byteLength);
      const parsedPayload = payloadEncoding === this.JSON_ENCODING ? JSON.parse(decoder.decode(payload)) : payload;
      const data = {
        type: this.BROADCAST_EVENT,
        event: userEvent,
        payload: parsedPayload
      };
      if (metadataSize > 0) {
        data["meta"] = JSON.parse(metadata);
      }
      return { join_ref: null, ref: null, topic, event: this.BROADCAST_EVENT, payload: data };
    }
    _isArrayBuffer(buffer) {
      var _a;
      return buffer instanceof ArrayBuffer || ((_a = buffer === null || buffer === undefined ? undefined : buffer.constructor) === null || _a === undefined ? undefined : _a.name) === "ArrayBuffer";
    }
    _pick(obj, keys) {
      if (!obj || typeof obj !== "object") {
        return {};
      }
      return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    }
  }
  exports.default = Serializer;
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/timer.js
var require_timer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });

  class Timer {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = undefined;
      this.tries = 0;
      this.callback = callback;
      this.timerCalc = timerCalc;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  }
  exports.default = Timer;
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/transformers.js
var require_transformers = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.httpEndpointURL = exports.toTimestampString = exports.toArray = exports.toJson = exports.toNumber = exports.toBoolean = exports.convertCell = exports.convertColumn = exports.convertChangeData = exports.PostgresTypes = undefined;
  var PostgresTypes;
  (function(PostgresTypes2) {
    PostgresTypes2["abstime"] = "abstime";
    PostgresTypes2["bool"] = "bool";
    PostgresTypes2["date"] = "date";
    PostgresTypes2["daterange"] = "daterange";
    PostgresTypes2["float4"] = "float4";
    PostgresTypes2["float8"] = "float8";
    PostgresTypes2["int2"] = "int2";
    PostgresTypes2["int4"] = "int4";
    PostgresTypes2["int4range"] = "int4range";
    PostgresTypes2["int8"] = "int8";
    PostgresTypes2["int8range"] = "int8range";
    PostgresTypes2["json"] = "json";
    PostgresTypes2["jsonb"] = "jsonb";
    PostgresTypes2["money"] = "money";
    PostgresTypes2["numeric"] = "numeric";
    PostgresTypes2["oid"] = "oid";
    PostgresTypes2["reltime"] = "reltime";
    PostgresTypes2["text"] = "text";
    PostgresTypes2["time"] = "time";
    PostgresTypes2["timestamp"] = "timestamp";
    PostgresTypes2["timestamptz"] = "timestamptz";
    PostgresTypes2["timetz"] = "timetz";
    PostgresTypes2["tsrange"] = "tsrange";
    PostgresTypes2["tstzrange"] = "tstzrange";
  })(PostgresTypes || (exports.PostgresTypes = PostgresTypes = {}));
  var convertChangeData = (columns, record, options = {}) => {
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== undefined ? _a : [];
    if (!record) {
      return {};
    }
    return Object.keys(record).reduce((acc, rec_key) => {
      acc[rec_key] = (0, exports.convertColumn)(rec_key, columns, record, skipTypes);
      return acc;
    }, {});
  };
  exports.convertChangeData = convertChangeData;
  var convertColumn = (columnName, columns, record, skipTypes) => {
    const column = columns.find((x) => x.name === columnName);
    const colType = column === null || column === undefined ? undefined : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
      return (0, exports.convertCell)(colType, value);
    }
    return noop(value);
  };
  exports.convertColumn = convertColumn;
  var convertCell = (type, value) => {
    if (type.charAt(0) === "_") {
      const dataType = type.slice(1, type.length);
      return (0, exports.toArray)(value, dataType);
    }
    switch (type) {
      case PostgresTypes.bool:
        return (0, exports.toBoolean)(value);
      case PostgresTypes.float4:
      case PostgresTypes.float8:
      case PostgresTypes.int2:
      case PostgresTypes.int4:
      case PostgresTypes.int8:
      case PostgresTypes.numeric:
      case PostgresTypes.oid:
        return (0, exports.toNumber)(value);
      case PostgresTypes.json:
      case PostgresTypes.jsonb:
        return (0, exports.toJson)(value);
      case PostgresTypes.timestamp:
        return (0, exports.toTimestampString)(value);
      case PostgresTypes.abstime:
      case PostgresTypes.date:
      case PostgresTypes.daterange:
      case PostgresTypes.int4range:
      case PostgresTypes.int8range:
      case PostgresTypes.money:
      case PostgresTypes.reltime:
      case PostgresTypes.text:
      case PostgresTypes.time:
      case PostgresTypes.timestamptz:
      case PostgresTypes.timetz:
      case PostgresTypes.tsrange:
      case PostgresTypes.tstzrange:
        return noop(value);
      default:
        return noop(value);
    }
  };
  exports.convertCell = convertCell;
  var noop = (value) => {
    return value;
  };
  var toBoolean = (value) => {
    switch (value) {
      case "t":
        return true;
      case "f":
        return false;
      default:
        return value;
    }
  };
  exports.toBoolean = toBoolean;
  var toNumber = (value) => {
    if (typeof value === "string") {
      const parsedValue = parseFloat(value);
      if (!Number.isNaN(parsedValue)) {
        return parsedValue;
      }
    }
    return value;
  };
  exports.toNumber = toNumber;
  var toJson = (value) => {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    }
    return value;
  };
  exports.toJson = toJson;
  var toArray = (value, type) => {
    if (typeof value !== "string") {
      return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    if (openBrace === "{" && closeBrace === "}") {
      let arr;
      const valTrim = value.slice(1, lastIdx);
      try {
        arr = JSON.parse("[" + valTrim + "]");
      } catch (_) {
        arr = valTrim ? valTrim.split(",") : [];
      }
      return arr.map((val) => (0, exports.convertCell)(type, val));
    }
    return value;
  };
  exports.toArray = toArray;
  var toTimestampString = (value) => {
    if (typeof value === "string") {
      return value.replace(" ", "T");
    }
    return value;
  };
  exports.toTimestampString = toTimestampString;
  var httpEndpointURL = (socketUrl) => {
    const wsUrl = new URL(socketUrl);
    wsUrl.protocol = wsUrl.protocol.replace(/^ws/i, "http");
    wsUrl.pathname = wsUrl.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
    if (wsUrl.pathname === "" || wsUrl.pathname === "/") {
      wsUrl.pathname = "/api/broadcast";
    } else {
      wsUrl.pathname = wsUrl.pathname + "/api/broadcast";
    }
    return wsUrl.href;
  };
  exports.httpEndpointURL = httpEndpointURL;
});

// ../../node_modules/@supabase/realtime-js/dist/main/lib/push.js
var require_push = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var constants_1 = require_constants();

  class Push {
    constructor(channel, event, payload = {}, timeout = constants_1.DEFAULT_TIMEOUT) {
      this.channel = channel;
      this.event = event;
      this.payload = payload;
      this.timeout = timeout;
      this.sent = false;
      this.timeoutTimer = undefined;
      this.ref = "";
      this.receivedResp = null;
      this.recHooks = [];
      this.refEvent = null;
    }
    resend(timeout) {
      this.timeout = timeout;
      this._cancelRefEvent();
      this.ref = "";
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
      this.send();
    }
    send() {
      if (this._hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef()
      });
    }
    updatePayload(payload) {
      this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
      var _a;
      if (this._hasReceived(status)) {
        callback((_a = this.receivedResp) === null || _a === undefined ? undefined : _a.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        return;
      }
      this.ref = this.channel.socket._makeRef();
      this.refEvent = this.channel._replyEventName(this.ref);
      const callback = (payload) => {
        this._cancelRefEvent();
        this._cancelTimeout();
        this.receivedResp = payload;
        this._matchReceive(payload);
      };
      this.channel._on(this.refEvent, {}, callback);
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    trigger(status, response) {
      if (this.refEvent)
        this.channel._trigger(this.refEvent, { status, response });
    }
    destroy() {
      this._cancelRefEvent();
      this._cancelTimeout();
    }
    _cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    _hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
  }
  exports.default = Push;
});

// ../../node_modules/@supabase/realtime-js/dist/main/RealtimePresence.js
var require_RealtimePresence = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.REALTIME_PRESENCE_LISTEN_EVENTS = undefined;
  var REALTIME_PRESENCE_LISTEN_EVENTS;
  (function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
    REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
  })(REALTIME_PRESENCE_LISTEN_EVENTS || (exports.REALTIME_PRESENCE_LISTEN_EVENTS = REALTIME_PRESENCE_LISTEN_EVENTS = {}));

  class RealtimePresence {
    constructor(channel, opts) {
      this.channel = channel;
      this.state = {};
      this.pendingDiffs = [];
      this.joinRef = null;
      this.enabled = false;
      this.caller = {
        onJoin: () => {},
        onLeave: () => {},
        onSync: () => {}
      };
      const events = (opts === null || opts === undefined ? undefined : opts.events) || {
        state: "presence_state",
        diff: "presence_diff"
      };
      this.channel._on(events.state, {}, (newState) => {
        const { onJoin, onLeave, onSync } = this.caller;
        this.joinRef = this.channel._joinRef();
        this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
        this.pendingDiffs.forEach((diff) => {
          this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
        });
        this.pendingDiffs = [];
        onSync();
      });
      this.channel._on(events.diff, {}, (diff) => {
        const { onJoin, onLeave, onSync } = this.caller;
        if (this.inPendingSyncState()) {
          this.pendingDiffs.push(diff);
        } else {
          this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
          onSync();
        }
      });
      this.onJoin((key, currentPresences, newPresences) => {
        this.channel._trigger("presence", {
          event: "join",
          key,
          currentPresences,
          newPresences
        });
      });
      this.onLeave((key, currentPresences, leftPresences) => {
        this.channel._trigger("presence", {
          event: "leave",
          key,
          currentPresences,
          leftPresences
        });
      });
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
    }
    static syncState(currentState, newState, onJoin, onLeave) {
      const state = this.cloneDeep(currentState);
      const transformedState = this.transformState(newState);
      const joins = {};
      const leaves = {};
      this.map(state, (key, presences) => {
        if (!transformedState[key]) {
          leaves[key] = presences;
        }
      });
      this.map(transformedState, (key, newPresences) => {
        const currentPresences = state[key];
        if (currentPresences) {
          const newPresenceRefs = newPresences.map((m) => m.presence_ref);
          const curPresenceRefs = currentPresences.map((m) => m.presence_ref);
          const joinedPresences = newPresences.filter((m) => curPresenceRefs.indexOf(m.presence_ref) < 0);
          const leftPresences = currentPresences.filter((m) => newPresenceRefs.indexOf(m.presence_ref) < 0);
          if (joinedPresences.length > 0) {
            joins[key] = joinedPresences;
          }
          if (leftPresences.length > 0) {
            leaves[key] = leftPresences;
          }
        } else {
          joins[key] = newPresences;
        }
      });
      return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
    }
    static syncDiff(state, diff, onJoin, onLeave) {
      const { joins, leaves } = {
        joins: this.transformState(diff.joins),
        leaves: this.transformState(diff.leaves)
      };
      if (!onJoin) {
        onJoin = () => {};
      }
      if (!onLeave) {
        onLeave = () => {};
      }
      this.map(joins, (key, newPresences) => {
        var _a;
        const currentPresences = (_a = state[key]) !== null && _a !== undefined ? _a : [];
        state[key] = this.cloneDeep(newPresences);
        if (currentPresences.length > 0) {
          const joinedPresenceRefs = state[key].map((m) => m.presence_ref);
          const curPresences = currentPresences.filter((m) => joinedPresenceRefs.indexOf(m.presence_ref) < 0);
          state[key].unshift(...curPresences);
        }
        onJoin(key, currentPresences, newPresences);
      });
      this.map(leaves, (key, leftPresences) => {
        let currentPresences = state[key];
        if (!currentPresences)
          return;
        const presenceRefsToRemove = leftPresences.map((m) => m.presence_ref);
        currentPresences = currentPresences.filter((m) => presenceRefsToRemove.indexOf(m.presence_ref) < 0);
        state[key] = currentPresences;
        onLeave(key, currentPresences, leftPresences);
        if (currentPresences.length === 0)
          delete state[key];
      });
      return state;
    }
    static map(obj, func) {
      return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
    }
    static transformState(state) {
      state = this.cloneDeep(state);
      return Object.getOwnPropertyNames(state).reduce((newState, key) => {
        const presences = state[key];
        if ("metas" in presences) {
          newState[key] = presences.metas.map((presence) => {
            presence["presence_ref"] = presence["phx_ref"];
            delete presence["phx_ref"];
            delete presence["phx_ref_prev"];
            return presence;
          });
        } else {
          newState[key] = presences;
        }
        return newState;
      }, {});
    }
    static cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    onJoin(callback) {
      this.caller.onJoin = callback;
    }
    onLeave(callback) {
      this.caller.onLeave = callback;
    }
    onSync(callback) {
      this.caller.onSync = callback;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }
  exports.default = RealtimePresence;
});

// ../../node_modules/@supabase/realtime-js/dist/main/RealtimeChannel.js
var require_RealtimeChannel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.REALTIME_CHANNEL_STATES = exports.REALTIME_SUBSCRIBE_STATES = exports.REALTIME_LISTEN_TYPES = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = undefined;
  var tslib_1 = require_tslib2();
  var constants_1 = require_constants();
  var push_1 = tslib_1.__importDefault(require_push());
  var timer_1 = tslib_1.__importDefault(require_timer());
  var RealtimePresence_1 = tslib_1.__importDefault(require_RealtimePresence());
  var Transformers = tslib_1.__importStar(require_transformers());
  var transformers_1 = require_transformers();
  var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  (function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
  })(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
  var REALTIME_LISTEN_TYPES;
  (function(REALTIME_LISTEN_TYPES2) {
    REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
  })(REALTIME_LISTEN_TYPES || (exports.REALTIME_LISTEN_TYPES = REALTIME_LISTEN_TYPES = {}));
  var REALTIME_SUBSCRIBE_STATES;
  (function(REALTIME_SUBSCRIBE_STATES2) {
    REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
  })(REALTIME_SUBSCRIBE_STATES || (exports.REALTIME_SUBSCRIBE_STATES = REALTIME_SUBSCRIBE_STATES = {}));
  exports.REALTIME_CHANNEL_STATES = constants_1.CHANNEL_STATES;

  class RealtimeChannel {
    constructor(topic, params = { config: {} }, socket) {
      var _a, _b;
      this.topic = topic;
      this.params = params;
      this.socket = socket;
      this.bindings = {};
      this.state = constants_1.CHANNEL_STATES.closed;
      this.joinedOnce = false;
      this.pushBuffer = [];
      this.subTopic = topic.replace(/^realtime:/i, "");
      this.params.config = Object.assign({
        broadcast: { ack: false, self: false },
        presence: { key: "", enabled: false },
        private: false
      }, params.config);
      this.timeout = this.socket.timeout;
      this.joinPush = new push_1.default(this, constants_1.CHANNEL_EVENTS.join, this.params, this.timeout);
      this.rejoinTimer = new timer_1.default(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
      this.joinPush.receive("ok", () => {
        this.state = constants_1.CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this._onClose(() => {
        this.rejoinTimer.reset();
        this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
        this.state = constants_1.CHANNEL_STATES.closed;
        this.socket._remove(this);
      });
      this._onError((reason) => {
        if (this._isLeaving() || this._isClosed()) {
          return;
        }
        this.socket.log("channel", `error ${this.topic}`, reason);
        this.state = constants_1.CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this.joinPush.receive("timeout", () => {
        if (!this._isJoining()) {
          return;
        }
        this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
        this.state = constants_1.CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this.joinPush.receive("error", (reason) => {
        if (this._isLeaving() || this._isClosed()) {
          return;
        }
        this.socket.log("channel", `error ${this.topic}`, reason);
        this.state = constants_1.CHANNEL_STATES.errored;
        this.rejoinTimer.scheduleTimeout();
      });
      this._on(constants_1.CHANNEL_EVENTS.reply, {}, (payload, ref) => {
        this._trigger(this._replyEventName(ref), payload);
      });
      this.presence = new RealtimePresence_1.default(this);
      this.broadcastEndpointURL = (0, transformers_1.httpEndpointURL)(this.socket.endPoint);
      this.private = this.params.config.private || false;
      if (!this.private && ((_b = (_a = this.params.config) === null || _a === undefined ? undefined : _a.broadcast) === null || _b === undefined ? undefined : _b.replay)) {
        throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
      }
    }
    subscribe(callback, timeout = this.timeout) {
      var _a, _b, _c;
      if (!this.socket.isConnected()) {
        this.socket.connect();
      }
      if (this.state == constants_1.CHANNEL_STATES.closed) {
        const { config: { broadcast, presence, private: isPrivate } } = this.params;
        const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === undefined ? undefined : _a.map((r) => r.filter)) !== null && _b !== undefined ? _b : [];
        const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === undefined ? undefined : _c.enabled) === true;
        const accessTokenPayload = {};
        const config = {
          broadcast,
          presence: Object.assign(Object.assign({}, presence), { enabled: presence_enabled }),
          postgres_changes,
          private: isPrivate
        };
        if (this.socket.accessTokenValue) {
          accessTokenPayload.access_token = this.socket.accessTokenValue;
        }
        this._onError((e) => callback === null || callback === undefined ? undefined : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
        this._onClose(() => callback === null || callback === undefined ? undefined : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
        this.updateJoinPayload(Object.assign({ config }, accessTokenPayload));
        this.joinedOnce = true;
        this._rejoin(timeout);
        this.joinPush.receive("ok", async ({ postgres_changes: postgres_changes2 }) => {
          var _a2;
          if (!this.socket._isManualToken()) {
            this.socket.setAuth();
          }
          if (postgres_changes2 === undefined) {
            callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          } else {
            const clientPostgresBindings = this.bindings.postgres_changes;
            const bindingsLen = (_a2 = clientPostgresBindings === null || clientPostgresBindings === undefined ? undefined : clientPostgresBindings.length) !== null && _a2 !== undefined ? _a2 : 0;
            const newPostgresBindings = [];
            for (let i = 0;i < bindingsLen; i++) {
              const clientPostgresBinding = clientPostgresBindings[i];
              const { filter: { event, schema, table, filter } } = clientPostgresBinding;
              const serverPostgresFilter = postgres_changes2 && postgres_changes2[i];
              if (serverPostgresFilter && serverPostgresFilter.event === event && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.schema, schema) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.table, table) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.filter, filter)) {
                newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
              } else {
                this.unsubscribe();
                this.state = constants_1.CHANNEL_STATES.errored;
                callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                return;
              }
            }
            this.bindings.postgres_changes = newPostgresBindings;
            callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          }
        }).receive("error", (error) => {
          this.state = constants_1.CHANNEL_STATES.errored;
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
          return;
        }).receive("timeout", () => {
          callback === null || callback === undefined || callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
          return;
        });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(payload, opts = {}) {
      return await this.send({
        type: "presence",
        event: "track",
        payload
      }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
      return await this.send({
        type: "presence",
        event: "untrack"
      }, opts);
    }
    on(type, filter, callback) {
      if (this.state === constants_1.CHANNEL_STATES.joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
        this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
        this.unsubscribe().then(async () => await this.subscribe());
      }
      return this._on(type, filter, callback);
    }
    async httpSend(event, payload, opts = {}) {
      var _a;
      if (payload === undefined || payload === null) {
        return Promise.reject("Payload is required for httpSend()");
      }
      const headers = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
      }
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event,
              payload,
              private: this.private
            }
          ]
        })
      };
      const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== undefined ? _a : this.timeout);
      if (response.status === 202) {
        return { success: true };
      }
      let errorMessage = response.statusText;
      try {
        const errorBody = await response.json();
        errorMessage = errorBody.error || errorBody.message || errorMessage;
      } catch (_b) {}
      return Promise.reject(new Error(errorMessage));
    }
    async send(args, opts = {}) {
      var _a, _b;
      if (!this._canPush() && args.type === "broadcast") {
        console.warn("Realtime send() is automatically falling back to REST API. " + "This behavior will be deprecated in the future. " + "Please use httpSend() explicitly for REST delivery.");
        const { event, payload: endpoint_payload } = args;
        const headers = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        };
        if (this.socket.accessTokenValue) {
          headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
        }
        const options = {
          method: "POST",
          headers,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event,
                payload: endpoint_payload,
                private: this.private
              }
            ]
          })
        };
        try {
          const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== undefined ? _a : this.timeout);
          await ((_b = response.body) === null || _b === undefined ? undefined : _b.cancel());
          return response.ok ? "ok" : "error";
        } catch (error) {
          if (error.name === "AbortError") {
            return "timed out";
          } else {
            return "error";
          }
        }
      } else {
        return new Promise((resolve) => {
          var _a2, _b2, _c;
          const push = this._push(args.type, args, opts.timeout || this.timeout);
          if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === undefined ? undefined : _a2.config) === null || _b2 === undefined ? undefined : _b2.broadcast) === null || _c === undefined ? undefined : _c.ack)) {
            resolve("ok");
          }
          push.receive("ok", () => resolve("ok"));
          push.receive("error", () => resolve("error"));
          push.receive("timeout", () => resolve("timed out"));
        });
      }
    }
    updateJoinPayload(payload) {
      this.joinPush.updatePayload(payload);
    }
    unsubscribe(timeout = this.timeout) {
      this.state = constants_1.CHANNEL_STATES.leaving;
      const onClose = () => {
        this.socket.log("channel", `leave ${this.topic}`);
        this._trigger(constants_1.CHANNEL_EVENTS.close, "leave", this._joinRef());
      };
      this.joinPush.destroy();
      let leavePush = null;
      return new Promise((resolve) => {
        leavePush = new push_1.default(this, constants_1.CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive("ok", () => {
          onClose();
          resolve("ok");
        }).receive("timeout", () => {
          onClose();
          resolve("timed out");
        }).receive("error", () => {
          resolve("error");
        });
        leavePush.send();
        if (!this._canPush()) {
          leavePush.trigger("ok", {});
        }
      }).finally(() => {
        leavePush === null || leavePush === undefined || leavePush.destroy();
      });
    }
    teardown() {
      this.pushBuffer.forEach((push) => push.destroy());
      this.pushBuffer = [];
      this.rejoinTimer.reset();
      this.joinPush.destroy();
      this.state = constants_1.CHANNEL_STATES.closed;
      this.bindings = {};
    }
    async _fetchWithTimeout(url, options, timeout) {
      const controller = new AbortController;
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
      clearTimeout(id);
      return response;
    }
    _push(event, payload, timeout = this.timeout) {
      if (!this.joinedOnce) {
        throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      }
      let pushEvent = new push_1.default(this, event, payload, timeout);
      if (this._canPush()) {
        pushEvent.send();
      } else {
        this._addToPushBuffer(pushEvent);
      }
      return pushEvent;
    }
    _addToPushBuffer(pushEvent) {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
      if (this.pushBuffer.length > constants_1.MAX_PUSH_BUFFER_SIZE) {
        const removedPush = this.pushBuffer.shift();
        if (removedPush) {
          removedPush.destroy();
          this.socket.log("channel", `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
        }
      }
    }
    _onMessage(_event, payload, _ref) {
      return payload;
    }
    _isMember(topic) {
      return this.topic === topic;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(type, payload, ref) {
      var _a, _b;
      const typeLower = type.toLocaleLowerCase();
      const { close, error, leave, join: join4 } = constants_1.CHANNEL_EVENTS;
      const events = [close, error, leave, join4];
      if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
        return;
      }
      let handledPayload = this._onMessage(typeLower, payload, ref);
      if (payload && !handledPayload) {
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      }
      if (["insert", "update", "delete"].includes(typeLower)) {
        (_a = this.bindings.postgres_changes) === null || _a === undefined || _a.filter((bind) => {
          var _a2, _b2, _c;
          return ((_a2 = bind.filter) === null || _a2 === undefined ? undefined : _a2.event) === "*" || ((_c = (_b2 = bind.filter) === null || _b2 === undefined ? undefined : _b2.event) === null || _c === undefined ? undefined : _c.toLocaleLowerCase()) === typeLower;
        }).map((bind) => bind.callback(handledPayload, ref));
      } else {
        (_b = this.bindings[typeLower]) === null || _b === undefined || _b.filter((bind) => {
          var _a2, _b2, _c, _d, _e, _f;
          if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
            if ("id" in bind) {
              const bindId = bind.id;
              const bindEvent = (_a2 = bind.filter) === null || _a2 === undefined ? undefined : _a2.event;
              return bindId && ((_b2 = payload.ids) === null || _b2 === undefined ? undefined : _b2.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === undefined ? undefined : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === undefined ? undefined : _c.type.toLocaleLowerCase()));
            } else {
              const bindEvent = (_e = (_d = bind === null || bind === undefined ? undefined : bind.filter) === null || _d === undefined ? undefined : _d.event) === null || _e === undefined ? undefined : _e.toLocaleLowerCase();
              return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === undefined ? undefined : payload.event) === null || _f === undefined ? undefined : _f.toLocaleLowerCase());
            }
          } else {
            return bind.type.toLocaleLowerCase() === typeLower;
          }
        }).map((bind) => {
          if (typeof handledPayload === "object" && "ids" in handledPayload) {
            const postgresChanges = handledPayload.data;
            const { schema, table, commit_timestamp, type: type2, errors } = postgresChanges;
            const enrichedPayload = {
              schema,
              table,
              commit_timestamp,
              eventType: type2,
              new: {},
              old: {},
              errors
            };
            handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
          }
          bind.callback(handledPayload, ref);
        });
      }
    }
    _isClosed() {
      return this.state === constants_1.CHANNEL_STATES.closed;
    }
    _isJoined() {
      return this.state === constants_1.CHANNEL_STATES.joined;
    }
    _isJoining() {
      return this.state === constants_1.CHANNEL_STATES.joining;
    }
    _isLeaving() {
      return this.state === constants_1.CHANNEL_STATES.leaving;
    }
    _replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    _on(type, filter, callback) {
      const typeLower = type.toLocaleLowerCase();
      const binding = {
        type: typeLower,
        filter,
        callback
      };
      if (this.bindings[typeLower]) {
        this.bindings[typeLower].push(binding);
      } else {
        this.bindings[typeLower] = [binding];
      }
      return this;
    }
    _off(type, filter) {
      const typeLower = type.toLocaleLowerCase();
      if (this.bindings[typeLower]) {
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind) => {
          var _a;
          return !(((_a = bind.type) === null || _a === undefined ? undefined : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
        });
      }
      return this;
    }
    static isEqual(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (const k in obj1) {
        if (obj1[k] !== obj2[k]) {
          return false;
        }
      }
      return true;
    }
    static isFilterValueEqual(serverValue, clientValue) {
      const normalizedServer = serverValue !== null && serverValue !== undefined ? serverValue : undefined;
      const normalizedClient = clientValue !== null && clientValue !== undefined ? clientValue : undefined;
      return normalizedServer === normalizedClient;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout();
      if (this.socket.isConnected()) {
        this._rejoin();
      }
    }
    _onClose(callback) {
      this._on(constants_1.CHANNEL_EVENTS.close, {}, callback);
    }
    _onError(callback) {
      this._on(constants_1.CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(timeout = this.timeout) {
      if (this._isLeaving()) {
        return;
      }
      this.socket._leaveOpenTopic(this.topic);
      this.state = constants_1.CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    _getPayloadRecords(payload) {
      const records = {
        new: {},
        old: {}
      };
      if (payload.type === "INSERT" || payload.type === "UPDATE") {
        records.new = Transformers.convertChangeData(payload.columns, payload.record);
      }
      if (payload.type === "UPDATE" || payload.type === "DELETE") {
        records.old = Transformers.convertChangeData(payload.columns, payload.old_record);
      }
      return records;
    }
  }
  exports.default = RealtimeChannel;
});

// ../../node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
var require_RealtimeClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib2();
  var websocket_factory_1 = tslib_1.__importDefault(require_websocket_factory());
  var constants_1 = require_constants();
  var serializer_1 = tslib_1.__importDefault(require_serializer());
  var timer_1 = tslib_1.__importDefault(require_timer());
  var transformers_1 = require_transformers();
  var RealtimeChannel_1 = tslib_1.__importDefault(require_RealtimeChannel());
  var noop = () => {};
  var CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25000,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
  };
  var RECONNECT_INTERVALS = [1000, 2000, 5000, 1e4];
  var DEFAULT_RECONNECT_FALLBACK = 1e4;
  var WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;

  class RealtimeClient {
    constructor(endPoint, options) {
      var _a;
      this.accessTokenValue = null;
      this.apiKey = null;
      this._manuallySetToken = false;
      this.channels = new Array;
      this.endPoint = "";
      this.httpEndpoint = "";
      this.headers = {};
      this.params = {};
      this.timeout = constants_1.DEFAULT_TIMEOUT;
      this.transport = null;
      this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this.heartbeatTimer = undefined;
      this.pendingHeartbeatRef = null;
      this.heartbeatCallback = noop;
      this.ref = 0;
      this.reconnectTimer = null;
      this.vsn = constants_1.DEFAULT_VSN;
      this.logger = noop;
      this.conn = null;
      this.sendBuffer = [];
      this.serializer = new serializer_1.default;
      this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: []
      };
      this.accessToken = null;
      this._connectionState = "disconnected";
      this._wasManualDisconnect = false;
      this._authPromise = null;
      this._resolveFetch = (customFetch) => {
        if (customFetch) {
          return (...args) => customFetch(...args);
        }
        return (...args) => fetch(...args);
      };
      if (!((_a = options === null || options === undefined ? undefined : options.params) === null || _a === undefined ? undefined : _a.apikey)) {
        throw new Error("API key is required to connect to Realtime");
      }
      this.apiKey = options.params.apikey;
      this.endPoint = `${endPoint}/${constants_1.TRANSPORTS.websocket}`;
      this.httpEndpoint = (0, transformers_1.httpEndpointURL)(endPoint);
      this._initializeOptions(options);
      this._setupReconnectionTimer();
      this.fetch = this._resolveFetch(options === null || options === undefined ? undefined : options.fetch);
    }
    connect() {
      if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
        return;
      }
      this._setConnectionState("connecting");
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL());
      } else {
        try {
          this.conn = websocket_factory_1.default.createWebSocket(this.endpointURL());
        } catch (error) {
          this._setConnectionState("disconnected");
          const errorMessage = error.message;
          if (errorMessage.includes("Node.js")) {
            throw new Error(`${errorMessage}

` + `To use Realtime in Node.js, you need to provide a WebSocket implementation:

` + `Option 1: Use Node.js 22+ which has native WebSocket support
` + `Option 2: Install and provide the "ws" package:

` + `  npm install ws

` + `  import ws from "ws"
` + `  const client = new RealtimeClient(url, {
` + `    ...options,
` + `    transport: ws
` + "  })");
          }
          throw new Error(`WebSocket not available: ${errorMessage}`);
        }
      }
      this._setupConnectionHandlers();
    }
    endpointURL() {
      return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
    }
    disconnect(code, reason) {
      if (this.isDisconnecting()) {
        return;
      }
      this._setConnectionState("disconnecting", true);
      if (this.conn) {
        const fallbackTimer = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(fallbackTimer);
          this._setConnectionState("disconnected");
        };
        if (typeof this.conn.close === "function") {
          if (code) {
            this.conn.close(code, reason !== null && reason !== undefined ? reason : "");
          } else {
            this.conn.close();
          }
        }
        this._teardownConnection();
      } else {
        this._setConnectionState("disconnected");
      }
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(channel) {
      const status = await channel.unsubscribe();
      if (this.channels.length === 0) {
        this.disconnect();
      }
      return status;
    }
    async removeAllChannels() {
      const values_1 = await Promise.all(this.channels.map((channel) => channel.unsubscribe()));
      this.channels = [];
      this.disconnect();
      return values_1;
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case constants_1.SOCKET_STATES.connecting:
          return constants_1.CONNECTION_STATE.Connecting;
        case constants_1.SOCKET_STATES.open:
          return constants_1.CONNECTION_STATE.Open;
        case constants_1.SOCKET_STATES.closing:
          return constants_1.CONNECTION_STATE.Closing;
        default:
          return constants_1.CONNECTION_STATE.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === constants_1.CONNECTION_STATE.Open;
    }
    isConnecting() {
      return this._connectionState === "connecting";
    }
    isDisconnecting() {
      return this._connectionState === "disconnecting";
    }
    channel(topic, params = { config: {} }) {
      const realtimeTopic = `realtime:${topic}`;
      const exists = this.getChannels().find((c) => c.topic === realtimeTopic);
      if (!exists) {
        const chan = new RealtimeChannel_1.default(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
      } else {
        return exists;
      }
    }
    push(data) {
      const { topic, event, payload, ref } = data;
      const callback = () => {
        this.encode(data, (result) => {
          var _a;
          (_a = this.conn) === null || _a === undefined || _a.send(result);
        });
      };
      this.log("push", `${topic} ${event} (${ref})`, payload);
      if (this.isConnected()) {
        callback();
      } else {
        this.sendBuffer.push(callback);
      }
    }
    async setAuth(token = null) {
      this._authPromise = this._performAuth(token);
      try {
        await this._authPromise;
      } finally {
        this._authPromise = null;
      }
    }
    _isManualToken() {
      return this._manuallySetToken;
    }
    async sendHeartbeat() {
      var _a;
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        this._wasManualDisconnect = false;
        (_a = this.conn) === null || _a === undefined || _a.close(constants_1.WS_CLOSE_NORMAL, "heartbeat timeout");
        setTimeout(() => {
          var _a2;
          if (!this.isConnected()) {
            (_a2 = this.reconnectTimer) === null || _a2 === undefined || _a2.scheduleTimeout();
          }
        }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
        return;
      }
      this.pendingHeartbeatRef = this._makeRef();
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      });
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this._setAuthSafely("heartbeat");
    }
    onHeartbeat(callback) {
      this.heartbeatCallback = callback;
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    _makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    _leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c._isJoined() || c._isJoining()));
      if (dupChannel) {
        this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.unsubscribe();
      }
    }
    _remove(channel) {
      this.channels = this.channels.filter((c) => c.topic !== channel.topic);
    }
    _onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        if (msg.topic === "phoenix" && msg.event === "phx_reply") {
          try {
            this.heartbeatCallback(msg.payload.status === "ok" ? "ok" : "error");
          } catch (e) {
            this.log("error", "error in heartbeat callback", e);
          }
        }
        if (msg.ref && msg.ref === this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null;
        }
        const { topic, event, payload, ref } = msg;
        const refString = ref ? `(${ref})` : "";
        const status = payload.status || "";
        this.log("receive", `${status} ${topic} ${event} ${refString}`.trim(), payload);
        this.channels.filter((channel) => channel._isMember(topic)).forEach((channel) => channel._trigger(event, payload, ref));
        this._triggerStateCallbacks("message", msg);
      });
    }
    _clearTimer(timer) {
      var _a;
      if (timer === "heartbeat" && this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = undefined;
      } else if (timer === "reconnect") {
        (_a = this.reconnectTimer) === null || _a === undefined || _a.reset();
      }
    }
    _clearAllTimers() {
      this._clearTimer("heartbeat");
      this._clearTimer("reconnect");
    }
    _setupConnectionHandlers() {
      if (!this.conn)
        return;
      if ("binaryType" in this.conn) {
        this.conn.binaryType = "arraybuffer";
      }
      this.conn.onopen = () => this._onConnOpen();
      this.conn.onerror = (error) => this._onConnError(error);
      this.conn.onmessage = (event) => this._onConnMessage(event);
      this.conn.onclose = (event) => this._onConnClose(event);
      if (this.conn.readyState === constants_1.SOCKET_STATES.open) {
        this._onConnOpen();
      }
    }
    _teardownConnection() {
      if (this.conn) {
        if (this.conn.readyState === constants_1.SOCKET_STATES.open || this.conn.readyState === constants_1.SOCKET_STATES.connecting) {
          try {
            this.conn.close();
          } catch (e) {
            this.log("error", "Error closing connection", e);
          }
        }
        this.conn.onopen = null;
        this.conn.onerror = null;
        this.conn.onmessage = null;
        this.conn.onclose = null;
        this.conn = null;
      }
      this._clearAllTimers();
      this._terminateWorker();
      this.channels.forEach((channel) => channel.teardown());
    }
    _onConnOpen() {
      this._setConnectionState("connected");
      this.log("transport", `connected to ${this.endpointURL()}`);
      const authPromise = this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve());
      authPromise.then(() => {
        this.flushSendBuffer();
      }).catch((e) => {
        this.log("error", "error waiting for auth on connect", e);
        this.flushSendBuffer();
      });
      this._clearTimer("reconnect");
      if (!this.worker) {
        this._startHeartbeat();
      } else {
        if (!this.workerRef) {
          this._startWorkerHeartbeat();
        }
      }
      this._triggerStateCallbacks("open");
    }
    _startHeartbeat() {
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    _startWorkerHeartbeat() {
      if (this.workerUrl) {
        this.log("worker", `starting worker for from ${this.workerUrl}`);
      } else {
        this.log("worker", `starting default worker`);
      }
      const objectUrl = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(objectUrl);
      this.workerRef.onerror = (error) => {
        this.log("worker", "worker error", error.message);
        this._terminateWorker();
      };
      this.workerRef.onmessage = (event) => {
        if (event.data.event === "keepAlive") {
          this.sendHeartbeat();
        }
      };
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    _terminateWorker() {
      if (this.workerRef) {
        this.log("worker", "terminating worker");
        this.workerRef.terminate();
        this.workerRef = undefined;
      }
    }
    _onConnClose(event) {
      var _a;
      this._setConnectionState("disconnected");
      this.log("transport", "close", event);
      this._triggerChanError();
      this._clearTimer("heartbeat");
      if (!this._wasManualDisconnect) {
        (_a = this.reconnectTimer) === null || _a === undefined || _a.scheduleTimeout();
      }
      this._triggerStateCallbacks("close", event);
    }
    _onConnError(error) {
      this._setConnectionState("disconnected");
      this.log("transport", `${error}`);
      this._triggerChanError();
      this._triggerStateCallbacks("error", error);
    }
    _triggerChanError() {
      this.channels.forEach((channel) => channel._trigger(constants_1.CHANNEL_EVENTS.error));
    }
    _appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      const prefix = url.match(/\?/) ? "&" : "?";
      const query = new URLSearchParams(params);
      return `${url}${prefix}${query}`;
    }
    _workerObjectUrl(url) {
      let result_url;
      if (url) {
        result_url = url;
      } else {
        const blob = new Blob([WORKER_SCRIPT], { type: "application/javascript" });
        result_url = URL.createObjectURL(blob);
      }
      return result_url;
    }
    _setConnectionState(state, manual = false) {
      this._connectionState = state;
      if (state === "connecting") {
        this._wasManualDisconnect = false;
      } else if (state === "disconnecting") {
        this._wasManualDisconnect = manual;
      }
    }
    async _performAuth(token = null) {
      let tokenToSend;
      let isManualToken = false;
      if (token) {
        tokenToSend = token;
        isManualToken = true;
      } else if (this.accessToken) {
        try {
          tokenToSend = await this.accessToken();
        } catch (e) {
          this.log("error", "Error fetching access token from callback", e);
          tokenToSend = this.accessTokenValue;
        }
      } else {
        tokenToSend = this.accessTokenValue;
      }
      if (isManualToken) {
        this._manuallySetToken = true;
      } else if (this.accessToken) {
        this._manuallySetToken = false;
      }
      if (this.accessTokenValue != tokenToSend) {
        this.accessTokenValue = tokenToSend;
        this.channels.forEach((channel) => {
          const payload = {
            access_token: tokenToSend,
            version: constants_1.DEFAULT_VERSION
          };
          tokenToSend && channel.updateJoinPayload(payload);
          if (channel.joinedOnce && channel._isJoined()) {
            channel._push(constants_1.CHANNEL_EVENTS.access_token, {
              access_token: tokenToSend
            });
          }
        });
      }
    }
    async _waitForAuthIfNeeded() {
      if (this._authPromise) {
        await this._authPromise;
      }
    }
    _setAuthSafely(context = "general") {
      if (!this._isManualToken()) {
        this.setAuth().catch((e) => {
          this.log("error", `Error setting auth in ${context}`, e);
        });
      }
    }
    _triggerStateCallbacks(event, data) {
      try {
        this.stateChangeCallbacks[event].forEach((callback) => {
          try {
            callback(data);
          } catch (e) {
            this.log("error", `error in ${event} callback`, e);
          }
        });
      } catch (e) {
        this.log("error", `error triggering ${event} callbacks`, e);
      }
    }
    _setupReconnectionTimer() {
      this.reconnectTimer = new timer_1.default(async () => {
        setTimeout(async () => {
          await this._waitForAuthIfNeeded();
          if (!this.isConnected()) {
            this.connect();
          }
        }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
      }, this.reconnectAfterMs);
    }
    _initializeOptions(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      this.transport = (_a = options === null || options === undefined ? undefined : options.transport) !== null && _a !== undefined ? _a : null;
      this.timeout = (_b = options === null || options === undefined ? undefined : options.timeout) !== null && _b !== undefined ? _b : constants_1.DEFAULT_TIMEOUT;
      this.heartbeatIntervalMs = (_c = options === null || options === undefined ? undefined : options.heartbeatIntervalMs) !== null && _c !== undefined ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this.worker = (_d = options === null || options === undefined ? undefined : options.worker) !== null && _d !== undefined ? _d : false;
      this.accessToken = (_e = options === null || options === undefined ? undefined : options.accessToken) !== null && _e !== undefined ? _e : null;
      this.heartbeatCallback = (_f = options === null || options === undefined ? undefined : options.heartbeatCallback) !== null && _f !== undefined ? _f : noop;
      this.vsn = (_g = options === null || options === undefined ? undefined : options.vsn) !== null && _g !== undefined ? _g : constants_1.DEFAULT_VSN;
      if (options === null || options === undefined ? undefined : options.params)
        this.params = options.params;
      if (options === null || options === undefined ? undefined : options.logger)
        this.logger = options.logger;
      if ((options === null || options === undefined ? undefined : options.logLevel) || (options === null || options === undefined ? undefined : options.log_level)) {
        this.logLevel = options.logLevel || options.log_level;
        this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel });
      }
      this.reconnectAfterMs = (_h = options === null || options === undefined ? undefined : options.reconnectAfterMs) !== null && _h !== undefined ? _h : (tries) => {
        return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
      };
      switch (this.vsn) {
        case constants_1.VSN_1_0_0:
          this.encode = (_j = options === null || options === undefined ? undefined : options.encode) !== null && _j !== undefined ? _j : (payload, callback) => {
            return callback(JSON.stringify(payload));
          };
          this.decode = (_k = options === null || options === undefined ? undefined : options.decode) !== null && _k !== undefined ? _k : (payload, callback) => {
            return callback(JSON.parse(payload));
          };
          break;
        case constants_1.VSN_2_0_0:
          this.encode = (_l = options === null || options === undefined ? undefined : options.encode) !== null && _l !== undefined ? _l : this.serializer.encode.bind(this.serializer);
          this.decode = (_m = options === null || options === undefined ? undefined : options.decode) !== null && _m !== undefined ? _m : this.serializer.decode.bind(this.serializer);
          break;
        default:
          throw new Error(`Unsupported serializer version: ${this.vsn}`);
      }
      if (this.worker) {
        if (typeof window !== "undefined" && !window.Worker) {
          throw new Error("Web Worker is not supported");
        }
        this.workerUrl = options === null || options === undefined ? undefined : options.workerUrl;
      }
    }
  }
  exports.default = RealtimeClient;
});

// ../../node_modules/@supabase/realtime-js/dist/main/index.js
var require_main2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebSocketFactory = exports.REALTIME_CHANNEL_STATES = exports.REALTIME_SUBSCRIBE_STATES = exports.REALTIME_PRESENCE_LISTEN_EVENTS = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = exports.REALTIME_LISTEN_TYPES = exports.RealtimeClient = exports.RealtimeChannel = exports.RealtimePresence = undefined;
  var tslib_1 = require_tslib2();
  var RealtimeClient_1 = tslib_1.__importDefault(require_RealtimeClient());
  exports.RealtimeClient = RealtimeClient_1.default;
  var RealtimeChannel_1 = tslib_1.__importStar(require_RealtimeChannel());
  exports.RealtimeChannel = RealtimeChannel_1.default;
  Object.defineProperty(exports, "REALTIME_LISTEN_TYPES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_LISTEN_TYPES;
  } });
  Object.defineProperty(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  } });
  Object.defineProperty(exports, "REALTIME_SUBSCRIBE_STATES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_SUBSCRIBE_STATES;
  } });
  Object.defineProperty(exports, "REALTIME_CHANNEL_STATES", { enumerable: true, get: function() {
    return RealtimeChannel_1.REALTIME_CHANNEL_STATES;
  } });
  var RealtimePresence_1 = tslib_1.__importStar(require_RealtimePresence());
  exports.RealtimePresence = RealtimePresence_1.default;
  Object.defineProperty(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", { enumerable: true, get: function() {
    return RealtimePresence_1.REALTIME_PRESENCE_LISTEN_EVENTS;
  } });
  var websocket_factory_1 = tslib_1.__importDefault(require_websocket_factory());
  exports.WebSocketFactory = websocket_factory_1.default;
});

// ../../node_modules/@supabase/auth-js/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys2 = function(o) {
      ownKeys2 = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys2(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys2(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path, preserveJsx) {
      if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/version.js
var require_version2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.version = undefined;
  exports.version = "2.89.0";
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/constants.js
var require_constants2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JWKS_TTL = exports.BASE64URL_REGEX = exports.API_VERSIONS = exports.API_VERSION_HEADER_NAME = exports.NETWORK_FAILURE = exports.DEFAULT_HEADERS = exports.AUDIENCE = exports.STORAGE_KEY = exports.GOTRUE_URL = exports.EXPIRY_MARGIN_MS = exports.AUTO_REFRESH_TICK_THRESHOLD = exports.AUTO_REFRESH_TICK_DURATION_MS = undefined;
  var version_1 = require_version2();
  exports.AUTO_REFRESH_TICK_DURATION_MS = 30 * 1000;
  exports.AUTO_REFRESH_TICK_THRESHOLD = 3;
  exports.EXPIRY_MARGIN_MS = exports.AUTO_REFRESH_TICK_THRESHOLD * exports.AUTO_REFRESH_TICK_DURATION_MS;
  exports.GOTRUE_URL = "http://localhost:9999";
  exports.STORAGE_KEY = "supabase.auth.token";
  exports.AUDIENCE = "";
  exports.DEFAULT_HEADERS = { "X-Client-Info": `gotrue-js/${version_1.version}` };
  exports.NETWORK_FAILURE = {
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
  };
  exports.API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
  exports.API_VERSIONS = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01"
    }
  };
  exports.BASE64URL_REGEX = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
  exports.JWKS_TTL = 10 * 60 * 1000;
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/errors.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AuthInvalidJwtError = exports.AuthWeakPasswordError = exports.AuthRetryableFetchError = exports.AuthPKCECodeVerifierMissingError = exports.AuthPKCEGrantCodeExchangeError = exports.AuthImplicitGrantRedirectError = exports.AuthInvalidCredentialsError = exports.AuthInvalidTokenResponseError = exports.AuthSessionMissingError = exports.CustomAuthError = exports.AuthUnknownError = exports.AuthApiError = exports.AuthError = undefined;
  exports.isAuthError = isAuthError;
  exports.isAuthApiError = isAuthApiError;
  exports.isAuthSessionMissingError = isAuthSessionMissingError;
  exports.isAuthImplicitGrantRedirectError = isAuthImplicitGrantRedirectError;
  exports.isAuthPKCECodeVerifierMissingError = isAuthPKCECodeVerifierMissingError;
  exports.isAuthRetryableFetchError = isAuthRetryableFetchError;
  exports.isAuthWeakPasswordError = isAuthWeakPasswordError;

  class AuthError extends Error {
    constructor(message, status, code) {
      super(message);
      this.__isAuthError = true;
      this.name = "AuthError";
      this.status = status;
      this.code = code;
    }
  }
  exports.AuthError = AuthError;
  function isAuthError(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
  }

  class AuthApiError extends AuthError {
    constructor(message, status, code) {
      super(message, status, code);
      this.name = "AuthApiError";
      this.status = status;
      this.code = code;
    }
  }
  exports.AuthApiError = AuthApiError;
  function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
  }

  class AuthUnknownError extends AuthError {
    constructor(message, originalError) {
      super(message);
      this.name = "AuthUnknownError";
      this.originalError = originalError;
    }
  }
  exports.AuthUnknownError = AuthUnknownError;

  class CustomAuthError extends AuthError {
    constructor(message, name, status, code) {
      super(message, status, code);
      this.name = name;
      this.status = status;
    }
  }
  exports.CustomAuthError = CustomAuthError;

  class AuthSessionMissingError extends CustomAuthError {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
    }
  }
  exports.AuthSessionMissingError = AuthSessionMissingError;
  function isAuthSessionMissingError(error) {
    return isAuthError(error) && error.name === "AuthSessionMissingError";
  }

  class AuthInvalidTokenResponseError extends CustomAuthError {
    constructor() {
      super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
    }
  }
  exports.AuthInvalidTokenResponseError = AuthInvalidTokenResponseError;

  class AuthInvalidCredentialsError extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidCredentialsError", 400, undefined);
    }
  }
  exports.AuthInvalidCredentialsError = AuthInvalidCredentialsError;

  class AuthImplicitGrantRedirectError extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthImplicitGrantRedirectError", 500, undefined);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details
      };
    }
  }
  exports.AuthImplicitGrantRedirectError = AuthImplicitGrantRedirectError;
  function isAuthImplicitGrantRedirectError(error) {
    return isAuthError(error) && error.name === "AuthImplicitGrantRedirectError";
  }

  class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
    constructor(message, details = null) {
      super(message, "AuthPKCEGrantCodeExchangeError", 500, undefined);
      this.details = null;
      this.details = details;
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details
      };
    }
  }
  exports.AuthPKCEGrantCodeExchangeError = AuthPKCEGrantCodeExchangeError;

  class AuthPKCECodeVerifierMissingError extends CustomAuthError {
    constructor() {
      super("PKCE code verifier not found in storage. " + "This can happen if the auth flow was initiated in a different browser or device, " + "or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), " + "use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
    }
  }
  exports.AuthPKCECodeVerifierMissingError = AuthPKCECodeVerifierMissingError;
  function isAuthPKCECodeVerifierMissingError(error) {
    return isAuthError(error) && error.name === "AuthPKCECodeVerifierMissingError";
  }

  class AuthRetryableFetchError extends CustomAuthError {
    constructor(message, status) {
      super(message, "AuthRetryableFetchError", status, undefined);
    }
  }
  exports.AuthRetryableFetchError = AuthRetryableFetchError;
  function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
  }

  class AuthWeakPasswordError extends CustomAuthError {
    constructor(message, status, reasons) {
      super(message, "AuthWeakPasswordError", status, "weak_password");
      this.reasons = reasons;
    }
  }
  exports.AuthWeakPasswordError = AuthWeakPasswordError;
  function isAuthWeakPasswordError(error) {
    return isAuthError(error) && error.name === "AuthWeakPasswordError";
  }

  class AuthInvalidJwtError extends CustomAuthError {
    constructor(message) {
      super(message, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
  }
  exports.AuthInvalidJwtError = AuthInvalidJwtError;
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/base64url.js
var require_base64url = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.byteToBase64URL = byteToBase64URL;
  exports.byteFromBase64URL = byteFromBase64URL;
  exports.stringToBase64URL = stringToBase64URL;
  exports.stringFromBase64URL = stringFromBase64URL;
  exports.codepointToUTF8 = codepointToUTF8;
  exports.stringToUTF8 = stringToUTF8;
  exports.stringFromUTF8 = stringFromUTF8;
  exports.base64UrlToUint8Array = base64UrlToUint8Array;
  exports.stringToUint8Array = stringToUint8Array;
  exports.bytesToBase64URL = bytesToBase64URL;
  var TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
  var IGNORE_BASE64URL = ` 	
\r=`.split("");
  var FROM_BASE64URL = (() => {
    const charMap = new Array(128);
    for (let i = 0;i < charMap.length; i += 1) {
      charMap[i] = -1;
    }
    for (let i = 0;i < IGNORE_BASE64URL.length; i += 1) {
      charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
    }
    for (let i = 0;i < TO_BASE64URL.length; i += 1) {
      charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
    }
    return charMap;
  })();
  function byteToBase64URL(byte, state, emit) {
    if (byte !== null) {
      state.queue = state.queue << 8 | byte;
      state.queuedBits += 8;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    } else if (state.queuedBits > 0) {
      state.queue = state.queue << 6 - state.queuedBits;
      state.queuedBits = 6;
      while (state.queuedBits >= 6) {
        const pos = state.queue >> state.queuedBits - 6 & 63;
        emit(TO_BASE64URL[pos]);
        state.queuedBits -= 6;
      }
    }
  }
  function byteFromBase64URL(charCode, state, emit) {
    const bits = FROM_BASE64URL[charCode];
    if (bits > -1) {
      state.queue = state.queue << 6 | bits;
      state.queuedBits += 6;
      while (state.queuedBits >= 8) {
        emit(state.queue >> state.queuedBits - 8 & 255);
        state.queuedBits -= 8;
      }
    } else if (bits === -2) {
      return;
    } else {
      throw new Error(`Invalid Base64-URL character "${String.fromCharCode(charCode)}"`);
    }
  }
  function stringToBase64URL(str) {
    const base64 = [];
    const emitter = (char) => {
      base64.push(char);
    };
    const state = { queue: 0, queuedBits: 0 };
    stringToUTF8(str, (byte) => {
      byteToBase64URL(byte, state, emitter);
    });
    byteToBase64URL(null, state, emitter);
    return base64.join("");
  }
  function stringFromBase64URL(str) {
    const conv = [];
    const utf8Emit = (codepoint) => {
      conv.push(String.fromCodePoint(codepoint));
    };
    const utf8State = {
      utf8seq: 0,
      codepoint: 0
    };
    const b64State = { queue: 0, queuedBits: 0 };
    const byteEmit = (byte) => {
      stringFromUTF8(byte, utf8State, utf8Emit);
    };
    for (let i = 0;i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), b64State, byteEmit);
    }
    return conv.join("");
  }
  function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 127) {
      emit(codepoint);
      return;
    } else if (codepoint <= 2047) {
      emit(192 | codepoint >> 6);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 65535) {
      emit(224 | codepoint >> 12);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    } else if (codepoint <= 1114111) {
      emit(240 | codepoint >> 18);
      emit(128 | codepoint >> 12 & 63);
      emit(128 | codepoint >> 6 & 63);
      emit(128 | codepoint & 63);
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
  }
  function stringToUTF8(str, emit) {
    for (let i = 0;i < str.length; i += 1) {
      let codepoint = str.charCodeAt(i);
      if (codepoint > 55295 && codepoint <= 56319) {
        const highSurrogate = (codepoint - 55296) * 1024 & 65535;
        const lowSurrogate = str.charCodeAt(i + 1) - 56320 & 65535;
        codepoint = (lowSurrogate | highSurrogate) + 65536;
        i += 1;
      }
      codepointToUTF8(codepoint, emit);
    }
  }
  function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
      if (byte <= 127) {
        emit(byte);
        return;
      }
      for (let leadingBit = 1;leadingBit < 6; leadingBit += 1) {
        if ((byte >> 7 - leadingBit & 1) === 0) {
          state.utf8seq = leadingBit;
          break;
        }
      }
      if (state.utf8seq === 2) {
        state.codepoint = byte & 31;
      } else if (state.utf8seq === 3) {
        state.codepoint = byte & 15;
      } else if (state.utf8seq === 4) {
        state.codepoint = byte & 7;
      } else {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
      if (byte <= 127) {
        throw new Error("Invalid UTF-8 sequence");
      }
      state.codepoint = state.codepoint << 6 | byte & 63;
      state.utf8seq -= 1;
      if (state.utf8seq === 0) {
        emit(state.codepoint);
      }
    }
  }
  function base64UrlToUint8Array(str) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onByte = (byte) => {
      result.push(byte);
    };
    for (let i = 0;i < str.length; i += 1) {
      byteFromBase64URL(str.charCodeAt(i), state, onByte);
    }
    return new Uint8Array(result);
  }
  function stringToUint8Array(str) {
    const result = [];
    stringToUTF8(str, (byte) => result.push(byte));
    return new Uint8Array(result);
  }
  function bytesToBase64URL(bytes) {
    const result = [];
    const state = { queue: 0, queuedBits: 0 };
    const onChar = (char) => {
      result.push(char);
    };
    bytes.forEach((byte) => byteToBase64URL(byte, state, onChar));
    byteToBase64URL(null, state, onChar);
    return result.join("");
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/helpers.js
var require_helpers = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Deferred = exports.removeItemAsync = exports.getItemAsync = exports.setItemAsync = exports.looksLikeFetchResponse = exports.resolveFetch = exports.supportsLocalStorage = exports.isBrowser = undefined;
  exports.expiresAt = expiresAt;
  exports.generateCallbackId = generateCallbackId;
  exports.parseParametersFromURL = parseParametersFromURL;
  exports.decodeJWT = decodeJWT;
  exports.sleep = sleep;
  exports.retryable = retryable;
  exports.generatePKCEVerifier = generatePKCEVerifier;
  exports.generatePKCEChallenge = generatePKCEChallenge;
  exports.getCodeChallengeAndMethod = getCodeChallengeAndMethod;
  exports.parseResponseAPIVersion = parseResponseAPIVersion;
  exports.validateExp = validateExp;
  exports.getAlgorithm = getAlgorithm;
  exports.validateUUID = validateUUID;
  exports.userNotAvailableProxy = userNotAvailableProxy;
  exports.insecureUserWarningProxy = insecureUserWarningProxy;
  exports.deepClone = deepClone;
  var constants_1 = require_constants2();
  var errors_1 = require_errors();
  var base64url_1 = require_base64url();
  function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
  }
  function generateCallbackId() {
    return Symbol("auth-callback");
  }
  var isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
  exports.isBrowser = isBrowser;
  var localStorageWriteTests = {
    tested: false,
    writable: false
  };
  var supportsLocalStorage = () => {
    if (!(0, exports.isBrowser)()) {
      return false;
    }
    try {
      if (typeof globalThis.localStorage !== "object") {
        return false;
      }
    } catch (e) {
      return false;
    }
    if (localStorageWriteTests.tested) {
      return localStorageWriteTests.writable;
    }
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(randomKey, randomKey);
      globalThis.localStorage.removeItem(randomKey);
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = true;
    } catch (e) {
      localStorageWriteTests.tested = true;
      localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
  };
  exports.supportsLocalStorage = supportsLocalStorage;
  function parseParametersFromURL(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") {
      try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key) => {
          result[key] = value;
        });
      } catch (e) {}
    }
    url.searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  var resolveFetch2 = (customFetch) => {
    if (customFetch) {
      return (...args) => customFetch(...args);
    }
    return (...args) => fetch(...args);
  };
  exports.resolveFetch = resolveFetch2;
  var looksLikeFetchResponse = (maybeResponse) => {
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
  };
  exports.looksLikeFetchResponse = looksLikeFetchResponse;
  var setItemAsync = async (storage, key, data) => {
    await storage.setItem(key, JSON.stringify(data));
  };
  exports.setItemAsync = setItemAsync;
  var getItemAsync = async (storage, key) => {
    const value = await storage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (_a) {
      return value;
    }
  };
  exports.getItemAsync = getItemAsync;
  var removeItemAsync = async (storage, key) => {
    await storage.removeItem(key);
  };
  exports.removeItemAsync = removeItemAsync;

  class Deferred {
    constructor() {
      this.promise = new Deferred.promiseConstructor((res, rej) => {
        this.resolve = res;
        this.reject = rej;
      });
    }
  }
  exports.Deferred = Deferred;
  Deferred.promiseConstructor = Promise;
  function decodeJWT(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new errors_1.AuthInvalidJwtError("Invalid JWT structure");
    }
    for (let i = 0;i < parts.length; i++) {
      if (!constants_1.BASE64URL_REGEX.test(parts[i])) {
        throw new errors_1.AuthInvalidJwtError("JWT not in base64url format");
      }
    }
    const data = {
      header: JSON.parse((0, base64url_1.stringFromBase64URL)(parts[0])),
      payload: JSON.parse((0, base64url_1.stringFromBase64URL)(parts[1])),
      signature: (0, base64url_1.base64UrlToUint8Array)(parts[2]),
      raw: {
        header: parts[0],
        payload: parts[1]
      }
    };
    return data;
  }
  async function sleep(time) {
    return await new Promise((accept) => {
      setTimeout(() => accept(null), time);
    });
  }
  function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject) => {
      (async () => {
        for (let attempt = 0;attempt < Infinity; attempt++) {
          try {
            const result = await fn(attempt);
            if (!isRetryable(attempt, null, result)) {
              accept(result);
              return;
            }
          } catch (e) {
            if (!isRetryable(attempt, e)) {
              reject(e);
              return;
            }
          }
        }
      })();
    });
    return promise;
  }
  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
      const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      const charSetLen = charSet.length;
      let verifier = "";
      for (let i = 0;i < verifierLength; i++) {
        verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
      }
      return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
  }
  async function sha256(randomString) {
    const encoder = new TextEncoder;
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c) => String.fromCharCode(c)).join("");
  }
  async function generatePKCEChallenge(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
      console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
      return verifier;
    }
    const hashed = await sha256(verifier);
    return btoa(hashed).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
    const codeVerifier = generatePKCEVerifier();
    let storedCodeVerifier = codeVerifier;
    if (isPasswordRecovery) {
      storedCodeVerifier += "/PASSWORD_RECOVERY";
    }
    await (0, exports.setItemAsync)(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
    return [codeChallenge, codeChallengeMethod];
  }
  var API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function parseResponseAPIVersion(response) {
    const apiVersion = response.headers.get(constants_1.API_VERSION_HEADER_NAME);
    if (!apiVersion) {
      return null;
    }
    if (!apiVersion.match(API_VERSION_REGEX)) {
      return null;
    }
    try {
      const date = new Date(`${apiVersion}T00:00:00.0Z`);
      return date;
    } catch (e) {
      return null;
    }
  }
  function validateExp(exp) {
    if (!exp) {
      throw new Error("Missing exp claim");
    }
    const timeNow = Math.floor(Date.now() / 1000);
    if (exp <= timeNow) {
      throw new Error("JWT has expired");
    }
  }
  function getAlgorithm(alg) {
    switch (alg) {
      case "RS256":
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: { name: "SHA-256" }
        };
      case "ES256":
        return {
          name: "ECDSA",
          namedCurve: "P-256",
          hash: { name: "SHA-256" }
        };
      default:
        throw new Error("Invalid alg claim");
    }
  }
  var UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  function validateUUID(str) {
    if (!UUID_REGEX.test(str)) {
      throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
    }
  }
  function userNotAvailableProxy() {
    const proxyTarget = {};
    return new Proxy(proxyTarget, {
      get: (target, prop) => {
        if (prop === "__isUserNotAvailableProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)") {
            return;
          }
        }
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${prop}" property of the session object is not supported. Please use getUser() instead.`);
      },
      set: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      },
      deleteProperty: (_target, prop) => {
        throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${prop}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
      }
    });
  }
  function insecureUserWarningProxy(user, suppressWarningRef) {
    return new Proxy(user, {
      get: (target, prop, receiver) => {
        if (prop === "__isInsecureUserWarningProxy") {
          return true;
        }
        if (typeof prop === "symbol") {
          const sProp = prop.toString();
          if (sProp === "Symbol(Symbol.toPrimitive)" || sProp === "Symbol(Symbol.toStringTag)" || sProp === "Symbol(util.inspect.custom)" || sProp === "Symbol(nodejs.util.inspect.custom)") {
            return Reflect.get(target, prop, receiver);
          }
        }
        if (!suppressWarningRef.value && typeof prop === "string") {
          console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
          suppressWarningRef.value = true;
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/fetch.js
var require_fetch = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.handleError = handleError2;
  exports._request = _request;
  exports._sessionResponse = _sessionResponse;
  exports._sessionResponsePassword = _sessionResponsePassword;
  exports._userResponse = _userResponse;
  exports._ssoResponse = _ssoResponse;
  exports._generateLinkResponse = _generateLinkResponse;
  exports._noResolveJsonResponse = _noResolveJsonResponse;
  var tslib_1 = require_tslib3();
  var constants_1 = require_constants2();
  var helpers_1 = require_helpers();
  var errors_1 = require_errors();
  var _getErrorMessage2 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
  var NETWORK_ERROR_CODES = [502, 503, 504];
  async function handleError2(error) {
    var _a;
    if (!(0, helpers_1.looksLikeFetchResponse)(error)) {
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(error), 0);
    }
    if (NETWORK_ERROR_CODES.includes(error.status)) {
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(error), error.status);
    }
    let data;
    try {
      data = await error.json();
    } catch (e) {
      throw new errors_1.AuthUnknownError(_getErrorMessage2(e), e);
    }
    let errorCode = undefined;
    const responseAPIVersion = (0, helpers_1.parseResponseAPIVersion)(error);
    if (responseAPIVersion && responseAPIVersion.getTime() >= constants_1.API_VERSIONS["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") {
      errorCode = data.code;
    } else if (typeof data === "object" && data && typeof data.error_code === "string") {
      errorCode = data.error_code;
    }
    if (!errorCode) {
      if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
        throw new errors_1.AuthWeakPasswordError(_getErrorMessage2(data), error.status, data.weak_password.reasons);
      }
    } else if (errorCode === "weak_password") {
      throw new errors_1.AuthWeakPasswordError(_getErrorMessage2(data), error.status, ((_a = data.weak_password) === null || _a === undefined ? undefined : _a.reasons) || []);
    } else if (errorCode === "session_not_found") {
      throw new errors_1.AuthSessionMissingError;
    }
    throw new errors_1.AuthApiError(_getErrorMessage2(data), error.status || 500, errorCode);
  }
  var _getRequestParams2 = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === undefined ? undefined : options.headers) || {} };
    if (method === "GET") {
      return params;
    }
    params.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, options === null || options === undefined ? undefined : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
  };
  async function _request(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === undefined ? undefined : options.headers);
    if (!headers[constants_1.API_VERSION_HEADER_NAME]) {
      headers[constants_1.API_VERSION_HEADER_NAME] = constants_1.API_VERSIONS["2024-01-01"].name;
    }
    if (options === null || options === undefined ? undefined : options.jwt) {
      headers["Authorization"] = `Bearer ${options.jwt}`;
    }
    const qs = (_a = options === null || options === undefined ? undefined : options.query) !== null && _a !== undefined ? _a : {};
    if (options === null || options === undefined ? undefined : options.redirectTo) {
      qs["redirect_to"] = options.redirectTo;
    }
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await _handleRequest2(fetcher, method, url + queryString, {
      headers,
      noResolveJson: options === null || options === undefined ? undefined : options.noResolveJson
    }, {}, options === null || options === undefined ? undefined : options.body);
    return (options === null || options === undefined ? undefined : options.xform) ? options === null || options === undefined ? undefined : options.xform(data) : { data: Object.assign({}, data), error: null };
  }
  async function _handleRequest2(fetcher, method, url, options, parameters, body) {
    const requestParams = _getRequestParams2(method, options, parameters, body);
    let result;
    try {
      result = await fetcher(url, Object.assign({}, requestParams));
    } catch (e) {
      console.error(e);
      throw new errors_1.AuthRetryableFetchError(_getErrorMessage2(e), 0);
    }
    if (!result.ok) {
      await handleError2(result);
    }
    if (options === null || options === undefined ? undefined : options.noResolveJson) {
      return result;
    }
    try {
      return await result.json();
    } catch (e) {
      await handleError2(e);
    }
  }
  function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
      session = Object.assign({}, data);
      if (!data.expires_at) {
        session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
      }
    }
    const user = (_a = data.user) !== null && _a !== undefined ? _a : data;
    return { data: { session, user }, error: null };
  }
  function _sessionResponsePassword(data) {
    const response = _sessionResponse(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i) => a && typeof i === "string", true)) {
      response.data.weak_password = data.weak_password;
    }
    return response;
  }
  function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== undefined ? _a : data;
    return { data: { user }, error: null };
  }
  function _ssoResponse(data) {
    return { data, error: null };
  }
  function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = tslib_1.__rest(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
    const properties = {
      action_link,
      email_otp,
      hashed_token,
      redirect_to,
      verification_type
    };
    const user = Object.assign({}, rest);
    return {
      data: {
        properties,
        user
      },
      error: null
    };
  }
  function _noResolveJsonResponse(data) {
    return data;
  }
  function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/types.js
var require_types2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SIGN_OUT_SCOPES = undefined;
  exports.SIGN_OUT_SCOPES = ["global", "local", "others"];
});

// ../../node_modules/@supabase/auth-js/dist/main/GoTrueAdminApi.js
var require_GoTrueAdminApi = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib3();
  var fetch_1 = require_fetch();
  var helpers_1 = require_helpers();
  var types_1 = require_types2();
  var errors_1 = require_errors();

  class GoTrueAdminApi {
    constructor({ url = "", headers = {}, fetch: fetch2 }) {
      this.url = url;
      this.headers = headers;
      this.fetch = (0, helpers_1.resolveFetch)(fetch2);
      this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this)
      };
      this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
      };
    }
    async signOut(jwt, scope = types_1.SIGN_OUT_SCOPES[0]) {
      if (types_1.SIGN_OUT_SCOPES.indexOf(scope) < 0) {
        throw new Error(`@supabase/auth-js: Parameter scope must be one of ${types_1.SIGN_OUT_SCOPES.join(", ")}`);
      }
      try {
        await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
          headers: this.headers,
          jwt,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async inviteUserByEmail(email, options = {}) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/invite`, {
          body: { email, data: options.data },
          headers: this.headers,
          redirectTo: options.redirectTo,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async generateLink(params) {
      try {
        const { options } = params, rest = tslib_1.__rest(params, ["options"]);
        const body = Object.assign(Object.assign({}, rest), options);
        if ("newEmail" in rest) {
          body.new_email = rest === null || rest === undefined ? undefined : rest.newEmail;
          delete body["newEmail"];
        }
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body,
          headers: this.headers,
          xform: fetch_1._generateLinkResponse,
          redirectTo: options === null || options === undefined ? undefined : options.redirectTo
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return {
            data: {
              properties: null,
              user: null
            },
            error
          };
        }
        throw error;
      }
    }
    async createUser(attributes) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/users`, {
          body: attributes,
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async listUsers(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === undefined ? undefined : params.page) === null || _a === undefined ? undefined : _a.toString()) !== null && _b !== undefined ? _b : "",
            per_page: (_d = (_c = params === null || params === undefined ? undefined : params.perPage) === null || _c === undefined ? undefined : _c.toString()) !== null && _d !== undefined ? _d : ""
          },
          xform: fetch_1._noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const users = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== undefined ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === undefined ? undefined : _f.split(",")) !== null && _g !== undefined ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, users), pagination), error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { users: [] }, error };
        }
        throw error;
      }
    }
    async getUserById(uid) {
      (0, helpers_1.validateUUID)(uid);
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async updateUserById(uid, attributes) {
      (0, helpers_1.validateUUID)(uid);
      try {
        return await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
          body: attributes,
          headers: this.headers,
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async deleteUser(id, shouldSoftDelete = false) {
      (0, helpers_1.validateUUID)(id);
      try {
        return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
          headers: this.headers,
          body: {
            should_soft_delete: shouldSoftDelete
          },
          xform: fetch_1._userResponse
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { user: null }, error };
        }
        throw error;
      }
    }
    async _listFactors(params) {
      (0, helpers_1.validateUUID)(params.userId);
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
          headers: this.headers,
          xform: (factors) => {
            return { data: { factors }, error: null };
          }
        });
        return { data, error };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteFactor(params) {
      (0, helpers_1.validateUUID)(params.userId);
      (0, helpers_1.validateUUID)(params.id);
      try {
        const data = await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
          headers: this.headers
        });
        return { data, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _listOAuthClients(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      try {
        const pagination = { nextPage: null, lastPage: 0, total: 0 };
        const response = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: true,
          query: {
            page: (_b = (_a = params === null || params === undefined ? undefined : params.page) === null || _a === undefined ? undefined : _a.toString()) !== null && _b !== undefined ? _b : "",
            per_page: (_d = (_c = params === null || params === undefined ? undefined : params.perPage) === null || _c === undefined ? undefined : _c.toString()) !== null && _d !== undefined ? _d : ""
          },
          xform: fetch_1._noResolveJsonResponse
        });
        if (response.error)
          throw response.error;
        const clients = await response.json();
        const total = (_e = response.headers.get("x-total-count")) !== null && _e !== undefined ? _e : 0;
        const links = (_g = (_f = response.headers.get("link")) === null || _f === undefined ? undefined : _f.split(",")) !== null && _g !== undefined ? _g : [];
        if (links.length > 0) {
          links.forEach((link) => {
            const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
            const rel = JSON.parse(link.split(";")[1].split("=")[1]);
            pagination[`${rel}Page`] = page;
          });
          pagination.total = parseInt(total);
        }
        return { data: Object.assign(Object.assign({}, clients), pagination), error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: { clients: [] }, error };
        }
        throw error;
      }
    }
    async _createOAuthClient(params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _getOAuthClient(clientId) {
      try {
        return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _updateOAuthClient(clientId, params) {
      try {
        return await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${clientId}`, {
          body: params,
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _deleteOAuthClient(clientId) {
      try {
        await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${clientId}`, {
          headers: this.headers,
          noResolveJson: true
        });
        return { data: null, error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
    async _regenerateOAuthClientSecret(clientId) {
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/admin/oauth/clients/${clientId}/regenerate_secret`, {
          headers: this.headers,
          xform: (client) => {
            return { data: client, error: null };
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        throw error;
      }
    }
  }
  exports.default = GoTrueAdminApi;
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/local-storage.js
var require_local_storage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.memoryLocalStorageAdapter = memoryLocalStorageAdapter;
  function memoryLocalStorageAdapter(store = {}) {
    return {
      getItem: (key) => {
        return store[key] || null;
      },
      setItem: (key, value) => {
        store[key] = value;
      },
      removeItem: (key) => {
        delete store[key];
      }
    };
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/locks.js
var require_locks = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProcessLockAcquireTimeoutError = exports.NavigatorLockAcquireTimeoutError = exports.LockAcquireTimeoutError = exports.internals = undefined;
  exports.navigatorLock = navigatorLock;
  exports.processLock = processLock;
  var helpers_1 = require_helpers();
  exports.internals = {
    debug: !!(globalThis && (0, helpers_1.supportsLocalStorage)() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
  };

  class LockAcquireTimeoutError extends Error {
    constructor(message) {
      super(message);
      this.isAcquireTimeout = true;
    }
  }
  exports.LockAcquireTimeoutError = LockAcquireTimeoutError;

  class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {
  }
  exports.NavigatorLockAcquireTimeoutError = NavigatorLockAcquireTimeoutError;

  class ProcessLockAcquireTimeoutError extends LockAcquireTimeoutError {
  }
  exports.ProcessLockAcquireTimeoutError = ProcessLockAcquireTimeoutError;
  async function navigatorLock(name, acquireTimeout, fn) {
    if (exports.internals.debug) {
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    }
    const abortController = new globalThis.AbortController;
    if (acquireTimeout > 0) {
      setTimeout(() => {
        abortController.abort();
        if (exports.internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
        }
      }, acquireTimeout);
    }
    return await Promise.resolve().then(() => globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
      mode: "exclusive",
      ifAvailable: true
    } : {
      mode: "exclusive",
      signal: abortController.signal
    }, async (lock) => {
      if (lock) {
        if (exports.internals.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
        }
        try {
          return await fn();
        } finally {
          if (exports.internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
          }
        }
      } else {
        if (acquireTimeout === 0) {
          if (exports.internals.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
          }
          throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
        } else {
          if (exports.internals.debug) {
            try {
              const result = await globalThis.navigator.locks.query();
              console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
            } catch (e) {
              console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
            }
          }
          console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
          return await fn();
        }
      }
    }));
  }
  var PROCESS_LOCKS = {};
  async function processLock(name, acquireTimeout, fn) {
    var _a;
    const previousOperation = (_a = PROCESS_LOCKS[name]) !== null && _a !== undefined ? _a : Promise.resolve();
    const currentOperation = Promise.race([
      previousOperation.catch(() => {
        return null;
      }),
      acquireTimeout >= 0 ? new Promise((_, reject) => {
        setTimeout(() => {
          reject(new ProcessLockAcquireTimeoutError(`Acquiring process lock with name "${name}" timed out`));
        }, acquireTimeout);
      }) : null
    ].filter((x) => x)).catch((e) => {
      if (e && e.isAcquireTimeout) {
        throw e;
      }
      return null;
    }).then(async () => {
      return await fn();
    });
    PROCESS_LOCKS[name] = currentOperation.catch(async (e) => {
      if (e && e.isAcquireTimeout) {
        await previousOperation;
        return null;
      }
      throw e;
    });
    return await currentOperation;
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/polyfills.js
var require_polyfills = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.polyfillGlobalThis = polyfillGlobalThis;
  function polyfillGlobalThis() {
    if (typeof globalThis === "object")
      return;
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch (e) {
      if (typeof self !== "undefined") {
        self.globalThis = self;
      }
    }
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/web3/ethereum.js
var require_ethereum = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAddress = getAddress;
  exports.fromHex = fromHex;
  exports.toHex = toHex;
  exports.createSiweMessage = createSiweMessage;
  function getAddress(address) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new Error(`@supabase/auth-js: Address "${address}" is invalid.`);
    }
    return address.toLowerCase();
  }
  function fromHex(hex) {
    return parseInt(hex, 16);
  }
  function toHex(value) {
    const bytes = new TextEncoder().encode(value);
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return "0x" + hex;
  }
  function createSiweMessage(parameters) {
    var _a;
    const { chainId, domain, expirationTime, issuedAt = new Date, nonce, notBefore, requestId, resources, scheme, uri, version: version2 } = parameters;
    {
      if (!Number.isInteger(chainId))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${chainId}`);
      if (!domain)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
      if (nonce && nonce.length < 8)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${nonce}`);
      if (!uri)
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
      if (version2 !== "1")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${version2}`);
      if ((_a = parameters.statement) === null || _a === undefined ? undefined : _a.includes(`
`))
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${parameters.statement}`);
    }
    const address = getAddress(parameters.address);
    const origin = scheme ? `${scheme}://${domain}` : domain;
    const statement = parameters.statement ? `${parameters.statement}
` : "";
    const prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`;
    let suffix = `URI: ${uri}
Version: ${version2}
Chain ID: ${chainId}${nonce ? `
Nonce: ${nonce}` : ""}
Issued At: ${issuedAt.toISOString()}`;
    if (expirationTime)
      suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
    if (notBefore)
      suffix += `
Not Before: ${notBefore.toISOString()}`;
    if (requestId)
      suffix += `
Request ID: ${requestId}`;
    if (resources) {
      let content = `
Resources:`;
      for (const resource of resources) {
        if (!resource || typeof resource !== "string")
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${resource}`);
        content += `
- ${resource}`;
      }
      suffix += content;
    }
    return `${prefix}
${suffix}`;
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/webauthn.errors.js
var require_webauthn_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebAuthnUnknownError = exports.WebAuthnError = undefined;
  exports.isWebAuthnError = isWebAuthnError;
  exports.identifyRegistrationError = identifyRegistrationError;
  exports.identifyAuthenticationError = identifyAuthenticationError;
  var webauthn_1 = require_webauthn();

  class WebAuthnError extends Error {
    constructor({ message, code, cause, name }) {
      var _a;
      super(message, { cause });
      this.__isWebAuthnError = true;
      this.name = (_a = name !== null && name !== undefined ? name : cause instanceof Error ? cause.name : undefined) !== null && _a !== undefined ? _a : "Unknown Error";
      this.code = code;
    }
  }
  exports.WebAuthnError = WebAuthnError;

  class WebAuthnUnknownError extends WebAuthnError {
    constructor(message, originalError) {
      super({
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: originalError,
        message
      });
      this.name = "WebAuthnUnknownError";
      this.originalError = originalError;
    }
  }
  exports.WebAuthnUnknownError = WebAuthnUnknownError;
  function isWebAuthnError(error) {
    return typeof error === "object" && error !== null && "__isWebAuthnError" in error;
  }
  function identifyRegistrationError({ error, options }) {
    var _a, _b, _c;
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Registration ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "ConstraintError") {
      if (((_a = publicKey.authenticatorSelection) === null || _a === undefined ? undefined : _a.requireResidentKey) === true) {
        return new WebAuthnError({
          message: "Discoverable credentials were required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
          cause: error
        });
      } else if (options.mediation === "conditional" && ((_b = publicKey.authenticatorSelection) === null || _b === undefined ? undefined : _b.userVerification) === "required") {
        return new WebAuthnError({
          message: "User verification was required during automatic registration but it could not be performed",
          code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
          cause: error
        });
      } else if (((_c = publicKey.authenticatorSelection) === null || _c === undefined ? undefined : _c.userVerification) === "required") {
        return new WebAuthnError({
          message: "User verification was required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
          cause: error
        });
      }
    } else if (error.name === "InvalidStateError") {
      return new WebAuthnError({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: error
      });
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "NotSupportedError") {
      const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === "public-key");
      if (validPubKeyCredParams.length === 0) {
        return new WebAuthnError({
          message: 'No entry in pubKeyCredParams was of type "public-key"',
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: error
        });
      }
      return new WebAuthnError({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!(0, webauthn_1.isValidDomain)(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rp.id !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rp.id}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "TypeError") {
      if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {
        return new WebAuthnError({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }
  function identifyAuthenticationError({ error, options }) {
    const { publicKey } = options;
    if (!publicKey) {
      throw Error("options was missing required publicKey property");
    }
    if (error.name === "AbortError") {
      if (options.signal instanceof AbortSignal) {
        return new WebAuthnError({
          message: "Authentication ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: error
        });
      }
    } else if (error.name === "NotAllowedError") {
      return new WebAuthnError({
        message: error.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: error
      });
    } else if (error.name === "SecurityError") {
      const effectiveDomain = window.location.hostname;
      if (!(0, webauthn_1.isValidDomain)(effectiveDomain)) {
        return new WebAuthnError({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: error
        });
      } else if (publicKey.rpId !== effectiveDomain) {
        return new WebAuthnError({
          message: `The RP ID "${publicKey.rpId}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: error
        });
      }
    } else if (error.name === "UnknownError") {
      return new WebAuthnError({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: error
      });
    }
    return new WebAuthnError({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: error
    });
  }
});

// ../../node_modules/@supabase/auth-js/dist/main/lib/webauthn.js
var require_webauthn = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WebAuthnApi = exports.DEFAULT_REQUEST_OPTIONS = exports.DEFAULT_CREATION_OPTIONS = exports.webAuthnAbortService = exports.WebAuthnAbortService = exports.identifyAuthenticationError = exports.identifyRegistrationError = exports.isWebAuthnError = exports.WebAuthnError = undefined;
  exports.deserializeCredentialCreationOptions = deserializeCredentialCreationOptions;
  exports.deserializeCredentialRequestOptions = deserializeCredentialRequestOptions;
  exports.serializeCredentialCreationResponse = serializeCredentialCreationResponse;
  exports.serializeCredentialRequestResponse = serializeCredentialRequestResponse;
  exports.isValidDomain = isValidDomain;
  exports.createCredential = createCredential;
  exports.getCredential = getCredential;
  exports.mergeCredentialCreationOptions = mergeCredentialCreationOptions;
  exports.mergeCredentialRequestOptions = mergeCredentialRequestOptions;
  var tslib_1 = require_tslib3();
  var base64url_1 = require_base64url();
  var errors_1 = require_errors();
  var helpers_1 = require_helpers();
  var webauthn_errors_1 = require_webauthn_errors();
  Object.defineProperty(exports, "identifyAuthenticationError", { enumerable: true, get: function() {
    return webauthn_errors_1.identifyAuthenticationError;
  } });
  Object.defineProperty(exports, "identifyRegistrationError", { enumerable: true, get: function() {
    return webauthn_errors_1.identifyRegistrationError;
  } });
  Object.defineProperty(exports, "isWebAuthnError", { enumerable: true, get: function() {
    return webauthn_errors_1.isWebAuthnError;
  } });
  Object.defineProperty(exports, "WebAuthnError", { enumerable: true, get: function() {
    return webauthn_errors_1.WebAuthnError;
  } });

  class WebAuthnAbortService {
    createNewAbortSignal() {
      if (this.controller) {
        const abortError = new Error("Cancelling existing WebAuthn API call for new one");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
      }
      const newController = new AbortController;
      this.controller = newController;
      return newController.signal;
    }
    cancelCeremony() {
      if (this.controller) {
        const abortError = new Error("Manually cancelling existing WebAuthn API call");
        abortError.name = "AbortError";
        this.controller.abort(abortError);
        this.controller = undefined;
      }
    }
  }
  exports.WebAuthnAbortService = WebAuthnAbortService;
  exports.webAuthnAbortService = new WebAuthnAbortService;
  function deserializeCredentialCreationOptions(options) {
    if (!options) {
      throw new Error("Credential creation options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON === "function") {
      return PublicKeyCredential.parseCreationOptionsFromJSON(options);
    }
    const { challenge: challengeStr, user: userOpts, excludeCredentials } = options, restOptions = tslib_1.__rest(options, ["challenge", "user", "excludeCredentials"]);
    const challenge = (0, base64url_1.base64UrlToUint8Array)(challengeStr).buffer;
    const user = Object.assign(Object.assign({}, userOpts), { id: (0, base64url_1.base64UrlToUint8Array)(userOpts.id).buffer });
    const result = Object.assign(Object.assign({}, restOptions), {
      challenge,
      user
    });
    if (excludeCredentials && excludeCredentials.length > 0) {
      result.excludeCredentials = new Array(excludeCredentials.length);
      for (let i = 0;i < excludeCredentials.length; i++) {
        const cred = excludeCredentials[i];
        result.excludeCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: (0, base64url_1.base64UrlToUint8Array)(cred.id).buffer,
          type: cred.type || "public-key",
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function deserializeCredentialRequestOptions(options) {
    if (!options) {
      throw new Error("Credential request options are required");
    }
    if (typeof PublicKeyCredential !== "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON === "function") {
      return PublicKeyCredential.parseRequestOptionsFromJSON(options);
    }
    const { challenge: challengeStr, allowCredentials } = options, restOptions = tslib_1.__rest(options, ["challenge", "allowCredentials"]);
    const challenge = (0, base64url_1.base64UrlToUint8Array)(challengeStr).buffer;
    const result = Object.assign(Object.assign({}, restOptions), { challenge });
    if (allowCredentials && allowCredentials.length > 0) {
      result.allowCredentials = new Array(allowCredentials.length);
      for (let i = 0;i < allowCredentials.length; i++) {
        const cred = allowCredentials[i];
        result.allowCredentials[i] = Object.assign(Object.assign({}, cred), {
          id: (0, base64url_1.base64UrlToUint8Array)(cred.id).buffer,
          type: cred.type || "public-key",
          transports: cred.transports
        });
      }
    }
    return result;
  }
  function serializeCredentialCreationResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    return {
      id: credential.id,
      rawId: credential.id,
      response: {
        attestationObject: (0, base64url_1.bytesToBase64URL)(new Uint8Array(credential.response.attestationObject)),
        clientDataJSON: (0, base64url_1.bytesToBase64URL)(new Uint8Array(credential.response.clientDataJSON))
      },
      type: "public-key",
      clientExtensionResults: credential.getClientExtensionResults(),
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== undefined ? _a : undefined
    };
  }
  function serializeCredentialRequestResponse(credential) {
    var _a;
    if ("toJSON" in credential && typeof credential.toJSON === "function") {
      return credential.toJSON();
    }
    const credentialWithAttachment = credential;
    const clientExtensionResults = credential.getClientExtensionResults();
    const assertionResponse = credential.response;
    return {
      id: credential.id,
      rawId: credential.id,
      response: {
        authenticatorData: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.authenticatorData)),
        clientDataJSON: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.clientDataJSON)),
        signature: (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.signature)),
        userHandle: assertionResponse.userHandle ? (0, base64url_1.bytesToBase64URL)(new Uint8Array(assertionResponse.userHandle)) : undefined
      },
      type: "public-key",
      clientExtensionResults,
      authenticatorAttachment: (_a = credentialWithAttachment.authenticatorAttachment) !== null && _a !== undefined ? _a : undefined
    };
  }
  function isValidDomain(hostname) {
    return hostname === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(hostname);
  }
  function browserSupportsWebAuthn() {
    var _a, _b;
    return !!((0, helpers_1.isBrowser)() && ("PublicKeyCredential" in window) && window.PublicKeyCredential && ("credentials" in navigator) && typeof ((_a = navigator === null || navigator === undefined ? undefined : navigator.credentials) === null || _a === undefined ? undefined : _a.create) === "function" && typeof ((_b = navigator === null || navigator === undefined ? undefined : navigator.credentials) === null || _b === undefined ? undefined : _b.get) === "function");
  }
  async function createCredential(options) {
    try {
      const response = await navigator.credentials.create(options);
      if (!response) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: (0, webauthn_errors_1.identifyRegistrationError)({
          error: err,
          options
        })
      };
    }
  }
  async function getCredential(options) {
    try {
      const response = await navigator.credentials.get(options);
      if (!response) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Empty credential response", response)
        };
      }
      if (!(response instanceof PublicKeyCredential)) {
        return {
          data: null,
          error: new webauthn_errors_1.WebAuthnUnknownError("Browser returned unexpected credential type", response)
        };
      }
      return { data: response, error: null };
    } catch (err) {
      return {
        data: null,
        error: (0, webauthn_errors_1.identifyAuthenticationError)({
          error: err,
          options
        })
      };
    }
  }
  exports.DEFAULT_CREATION_OPTIONS = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: false,
      userVerification: "preferred",
      residentKey: "discouraged"
    },
    attestation: "direct"
  };
  exports.DEFAULT_REQUEST_OPTIONS = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct"
  };
  function deepMerge(...sources) {
    const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    const isArrayBufferLike = (val) => val instanceof ArrayBuffer || ArrayBuffer.isView(val);
    const result = {};
    for (const source of sources) {
      if (!source)
        continue;
      for (const key in source) {
        const value = source[key];
        if (value === undefined)
          continue;
        if (Array.isArray(value)) {
          result[key] = value;
        } else if (isArrayBufferLike(value)) {
          result[key] = value;
        } else if (isObject(value)) {
          const existing = result[key];
          if (isObject(existing)) {
            result[key] = deepMerge(existing, value);
          } else {
            result[key] = deepMerge(value);
          }
        } else {
          result[key] = value;
        }
      }
    }
    return result;
  }
  function mergeCredentialCreationOptions(baseOptions, overrides) {
    return deepMerge(exports.DEFAULT_CREATION_OPTIONS, baseOptions, overrides || {});
  }
  function mergeCredentialRequestOptions(baseOptions, overrides) {
    return deepMerge(exports.DEFAULT_REQUEST_OPTIONS, baseOptions, overrides || {});
  }

  class WebAuthnApi {
    constructor(client) {
      this.client = client;
      this.enroll = this._enroll.bind(this);
      this.challenge = this._challenge.bind(this);
      this.verify = this._verify.bind(this);
      this.authenticate = this._authenticate.bind(this);
      this.register = this._register.bind(this);
    }
    async _enroll(params) {
      return this.client.mfa.enroll(Object.assign(Object.assign({}, params), { factorType: "webauthn" }));
    }
    async _challenge({ factorId, webauthn, friendlyName, signal }, overrides) {
      try {
        const { data: challengeResponse, error: challengeError } = await this.client.mfa.challenge({
          factorId,
          webauthn
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const abortSignal = signal !== null && signal !== undefined ? signal : exports.webAuthnAbortService.createNewAbortSignal();
        if (challengeResponse.webauthn.type === "create") {
          const { user } = challengeResponse.webauthn.credential_options.publicKey;
          if (!user.name) {
            user.name = `${user.id}:${friendlyName}`;
          }
          if (!user.displayName) {
            user.displayName = user.name;
          }
        }
        switch (challengeResponse.webauthn.type) {
          case "create": {
            const options = mergeCredentialCreationOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === undefined ? undefined : overrides.create);
            const { data, error } = await createCredential({
              publicKey: options,
              signal: abortSignal
            });
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
          case "request": {
            const options = mergeCredentialRequestOptions(challengeResponse.webauthn.credential_options.publicKey, overrides === null || overrides === undefined ? undefined : overrides.request);
            const { data, error } = await getCredential(Object.assign(Object.assign({}, challengeResponse.webauthn.credential_options), { publicKey: options, signal: abortSignal }));
            if (data) {
              return {
                data: {
                  factorId,
                  challengeId: challengeResponse.id,
                  webauthn: {
                    type: challengeResponse.webauthn.type,
                    credential_response: data
                  }
                },
                error: null
              };
            }
            return { data: null, error };
          }
        }
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in challenge", error)
        };
      }
    }
    async _verify({ challengeId, factorId, webauthn }) {
      return this.client.mfa.verify({
        factorId,
        challengeId,
        webauthn
      });
    }
    async _authenticate({ factorId, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : undefined, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : undefined, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new errors_1.AuthError("rpId is required for WebAuthn authentication")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: challengeResponse, error: challengeError } = await this.challenge({
          factorId,
          webauthn: { rpId, rpOrigins },
          signal
        }, { request: overrides });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        const { webauthn } = challengeResponse;
        return this._verify({
          factorId,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            type: webauthn.type,
            rpId,
            rpOrigins,
            credential_response: webauthn.credential_response
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in authenticate", error)
        };
      }
    }
    async _register({ friendlyName, webauthn: { rpId = typeof window !== "undefined" ? window.location.hostname : undefined, rpOrigins = typeof window !== "undefined" ? [window.location.origin] : undefined, signal } = {} }, overrides) {
      if (!rpId) {
        return {
          data: null,
          error: new errors_1.AuthError("rpId is required for WebAuthn registration")
        };
      }
      try {
        if (!browserSupportsWebAuthn()) {
          return {
            data: null,
            error: new errors_1.AuthUnknownError("Browser does not support WebAuthn", null)
          };
        }
        const { data: factor, error: enrollError } = await this._enroll({
          friendlyName
        });
        if (!factor) {
          await this.client.mfa.listFactors().then((factors) => {
            var _a;
            return (_a = factors.data) === null || _a === undefined ? undefined : _a.all.find((v) => v.factor_type === "webauthn" && v.friendly_name === friendlyName && v.status !== "unverified");
          }).then((factor2) => factor2 ? this.client.mfa.unenroll({ factorId: factor2 === null || factor2 === undefined ? undefined : factor2.id }) : undefined);
          return { data: null, error: enrollError };
        }
        const { data: challengeResponse, error: challengeError } = await this._challenge({
          factorId: factor.id,
          friendlyName: factor.friendly_name,
          webauthn: { rpId, rpOrigins },
          signal
        }, {
          create: overrides
        });
        if (!challengeResponse) {
          return { data: null, error: challengeError };
        }
        return this._verify({
          factorId: factor.id,
          challengeId: challengeResponse.challengeId,
          webauthn: {
            rpId,
            rpOrigins,
            type: challengeResponse.webauthn.type,
            credential_response: challengeResponse.webauthn.credential_response
          }
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return { data: null, error };
        }
        return {
          data: null,
          error: new errors_1.AuthUnknownError("Unexpected error in register", error)
        };
      }
    }
  }
  exports.WebAuthnApi = WebAuthnApi;
});

// ../../node_modules/@supabase/auth-js/dist/main/GoTrueClient.js
var require_GoTrueClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib3();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  var constants_1 = require_constants2();
  var errors_1 = require_errors();
  var fetch_1 = require_fetch();
  var helpers_1 = require_helpers();
  var local_storage_1 = require_local_storage();
  var locks_1 = require_locks();
  var polyfills_1 = require_polyfills();
  var version_1 = require_version2();
  var base64url_1 = require_base64url();
  var ethereum_1 = require_ethereum();
  var webauthn_1 = require_webauthn();
  (0, polyfills_1.polyfillGlobalThis)();
  var DEFAULT_OPTIONS = {
    url: constants_1.GOTRUE_URL,
    storageKey: constants_1.STORAGE_KEY,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: constants_1.DEFAULT_HEADERS,
    flowType: "implicit",
    debug: false,
    hasCustomAuthorizationHeader: false,
    throwOnError: false
  };
  async function lockNoOp(name, acquireTimeout, fn) {
    return await fn();
  }
  var GLOBAL_JWKS = {};

  class GoTrueClient {
    get jwks() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === undefined ? undefined : _a.jwks) !== null && _b !== undefined ? _b : { keys: [] };
    }
    set jwks(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { jwks: value });
    }
    get jwks_cached_at() {
      var _a, _b;
      return (_b = (_a = GLOBAL_JWKS[this.storageKey]) === null || _a === undefined ? undefined : _a.cachedAt) !== null && _b !== undefined ? _b : Number.MIN_SAFE_INTEGER;
    }
    set jwks_cached_at(value) {
      GLOBAL_JWKS[this.storageKey] = Object.assign(Object.assign({}, GLOBAL_JWKS[this.storageKey]), { cachedAt: value });
    }
    constructor(options) {
      var _a, _b, _c;
      this.userStorage = null;
      this.memoryStorage = null;
      this.stateChangeEmitters = new Map;
      this.autoRefreshTicker = null;
      this.visibilityChangedCallback = null;
      this.refreshingDeferred = null;
      this.initializePromise = null;
      this.detectSessionInUrl = true;
      this.hasCustomAuthorizationHeader = false;
      this.suppressGetSessionWarning = false;
      this.lockAcquired = false;
      this.pendingInLock = [];
      this.broadcastChannel = null;
      this.logger = console.log;
      const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
      this.storageKey = settings.storageKey;
      this.instanceID = (_a = GoTrueClient.nextInstanceID[this.storageKey]) !== null && _a !== undefined ? _a : 0;
      GoTrueClient.nextInstanceID[this.storageKey] = this.instanceID + 1;
      this.logDebugMessages = !!settings.debug;
      if (typeof settings.debug === "function") {
        this.logger = settings.debug;
      }
      if (this.instanceID > 0 && (0, helpers_1.isBrowser)()) {
        const message = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
        console.warn(message);
        if (this.logDebugMessages) {
          console.trace(message);
        }
      }
      this.persistSession = settings.persistSession;
      this.autoRefreshToken = settings.autoRefreshToken;
      this.admin = new GoTrueAdminApi_1.default({
        url: settings.url,
        headers: settings.headers,
        fetch: settings.fetch
      });
      this.url = settings.url;
      this.headers = settings.headers;
      this.fetch = (0, helpers_1.resolveFetch)(settings.fetch);
      this.lock = settings.lock || lockNoOp;
      this.detectSessionInUrl = settings.detectSessionInUrl;
      this.flowType = settings.flowType;
      this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
      this.throwOnError = settings.throwOnError;
      if (settings.lock) {
        this.lock = settings.lock;
      } else if (this.persistSession && (0, helpers_1.isBrowser)() && ((_b = globalThis === null || globalThis === undefined ? undefined : globalThis.navigator) === null || _b === undefined ? undefined : _b.locks)) {
        this.lock = locks_1.navigatorLock;
      } else {
        this.lock = lockNoOp;
      }
      if (!this.jwks) {
        this.jwks = { keys: [] };
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
      }
      this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new webauthn_1.WebAuthnApi(this)
      };
      this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this)
      };
      if (this.persistSession) {
        if (settings.storage) {
          this.storage = settings.storage;
        } else {
          if ((0, helpers_1.supportsLocalStorage)()) {
            this.storage = globalThis.localStorage;
          } else {
            this.memoryStorage = {};
            this.storage = (0, local_storage_1.memoryLocalStorageAdapter)(this.memoryStorage);
          }
        }
        if (settings.userStorage) {
          this.userStorage = settings.userStorage;
        }
      } else {
        this.memoryStorage = {};
        this.storage = (0, local_storage_1.memoryLocalStorageAdapter)(this.memoryStorage);
      }
      if ((0, helpers_1.isBrowser)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
        } catch (e) {
          console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
        }
        (_c = this.broadcastChannel) === null || _c === undefined || _c.addEventListener("message", async (event) => {
          this._debug("received broadcast notification from other tab or client", event);
          await this._notifyAllSubscribers(event.data.event, event.data.session, false);
        });
      }
      this.initialize();
    }
    isThrowOnErrorEnabled() {
      return this.throwOnError;
    }
    _returnResult(result) {
      if (this.throwOnError && result && result.error) {
        throw result.error;
      }
      return result;
    }
    _logPrefix() {
      return "GoTrueClient@" + `${this.storageKey}:${this.instanceID} (${version_1.version}) ${new Date().toISOString()}`;
    }
    _debug(...args) {
      if (this.logDebugMessages) {
        this.logger(this._logPrefix(), ...args);
      }
      return this;
    }
    async initialize() {
      if (this.initializePromise) {
        return await this.initializePromise;
      }
      this.initializePromise = (async () => {
        return await this._acquireLock(-1, async () => {
          return await this._initialize();
        });
      })();
      return await this.initializePromise;
    }
    async _initialize() {
      var _a;
      try {
        let params = {};
        let callbackUrlType = "none";
        if ((0, helpers_1.isBrowser)()) {
          params = (0, helpers_1.parseParametersFromURL)(window.location.href);
          if (this._isImplicitGrantCallback(params)) {
            callbackUrlType = "implicit";
          } else if (await this._isPKCECallback(params)) {
            callbackUrlType = "pkce";
          }
        }
        if ((0, helpers_1.isBrowser)() && this.detectSessionInUrl && callbackUrlType !== "none") {
          const { data, error } = await this._getSessionFromURL(params, callbackUrlType);
          if (error) {
            this._debug("#_initialize()", "error detecting session from URL", error);
            if ((0, errors_1.isAuthImplicitGrantRedirectError)(error)) {
              const errorCode = (_a = error.details) === null || _a === undefined ? undefined : _a.code;
              if (errorCode === "identity_already_exists" || errorCode === "identity_not_found" || errorCode === "single_identity_not_deletable") {
                return { error };
              }
            }
            await this._removeSession();
            return { error };
          }
          const { session, redirectType } = data;
          this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
          await this._saveSession(session);
          setTimeout(async () => {
            if (redirectType === "recovery") {
              await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
            } else {
              await this._notifyAllSubscribers("SIGNED_IN", session);
            }
          }, 0);
          return { error: null };
        }
        await this._recoverAndRefresh();
        return { error: null };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ error });
        }
        return this._returnResult({
          error: new errors_1.AuthUnknownError("Unexpected error during initialization", error)
        });
      } finally {
        await this._handleVisibilityChange();
        this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(credentials) {
      var _a, _b, _c;
      try {
        const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data: (_b = (_a = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _a === undefined ? undefined : _a.data) !== null && _b !== undefined ? _b : {},
            gotrue_meta_security: { captcha_token: (_c = credentials === null || credentials === undefined ? undefined : credentials.options) === null || _c === undefined ? undefined : _c.captchaToken }
          },
          xform: fetch_1._sessionResponse
        });
        const { data, error } = res;
        if (error || !data) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signUp(credentials) {
      var _a, _b, _c;
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo,
            body: {
              email,
              password,
              data: (_a = options === null || options === undefined ? undefined : options.data) !== null && _a !== undefined ? _a : {},
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            xform: fetch_1._sessionResponse
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone,
              password,
              data: (_b = options === null || options === undefined ? undefined : options.data) !== null && _b !== undefined ? _b : {},
              channel: (_c = options === null || options === undefined ? undefined : options.channel) !== null && _c !== undefined ? _c : "sms",
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponse
          });
        } else {
          throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error || !data) {
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        const session = data.session;
        const user = data.user;
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithPassword(credentials) {
      try {
        let res;
        if ("email" in credentials) {
          const { email, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              email,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponsePassword
          });
        } else if ("phone" in credentials) {
          const { phone, password, options } = credentials;
          res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              phone,
              password,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponsePassword
          });
        } else {
          throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
        }
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({
          data: Object.assign({ user: data.user, session: data.session }, data.weak_password ? { weakPassword: data.weak_password } : null),
          error
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithOAuth(credentials) {
      var _a, _b, _c, _d;
      return await this._handleProviderSignIn(credentials.provider, {
        redirectTo: (_a = credentials.options) === null || _a === undefined ? undefined : _a.redirectTo,
        scopes: (_b = credentials.options) === null || _b === undefined ? undefined : _b.scopes,
        queryParams: (_c = credentials.options) === null || _c === undefined ? undefined : _c.queryParams,
        skipBrowserRedirect: (_d = credentials.options) === null || _d === undefined ? undefined : _d.skipBrowserRedirect
      });
    }
    async exchangeCodeForSession(authCode) {
      await this.initializePromise;
      return this._acquireLock(-1, async () => {
        return this._exchangeCodeForSession(authCode);
      });
    }
    async signInWithWeb3(credentials) {
      const { chain } = credentials;
      switch (chain) {
        case "ethereum":
          return await this.signInWithEthereum(credentials);
        case "solana":
          return await this.signInWithSolana(credentials);
        default:
          throw new Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
      }
    }
    async signInWithEthereum(credentials) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!(0, helpers_1.isBrowser)()) {
          if (typeof wallet !== "object" || !(options === null || options === undefined ? undefined : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("ethereum" in windowAny && typeof windowAny.ethereum === "object" && "request" in windowAny.ethereum && typeof windowAny.ethereum.request === "function") {
            resolvedWallet = windowAny.ethereum;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === undefined ? undefined : options.url) !== null && _a !== undefined ? _a : window.location.href);
        const accounts = await resolvedWallet.request({
          method: "eth_requestAccounts"
        }).then((accs) => accs).catch(() => {
          throw new Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
        });
        if (!accounts || accounts.length === 0) {
          throw new Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
        }
        const address = (0, ethereum_1.getAddress)(accounts[0]);
        let chainId = (_b = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _b === undefined ? undefined : _b.chainId;
        if (!chainId) {
          const chainIdHex = await resolvedWallet.request({
            method: "eth_chainId"
          });
          chainId = (0, ethereum_1.fromHex)(chainIdHex);
        }
        const siweMessage = {
          domain: url.host,
          address,
          statement,
          uri: url.href,
          version: "1",
          chainId,
          nonce: (_c = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _c === undefined ? undefined : _c.nonce,
          issuedAt: (_e = (_d = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _d === undefined ? undefined : _d.issuedAt) !== null && _e !== undefined ? _e : new Date,
          expirationTime: (_f = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _f === undefined ? undefined : _f.expirationTime,
          notBefore: (_g = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _g === undefined ? undefined : _g.notBefore,
          requestId: (_h = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _h === undefined ? undefined : _h.requestId,
          resources: (_j = options === null || options === undefined ? undefined : options.signInWithEthereum) === null || _j === undefined ? undefined : _j.resources
        };
        message = (0, ethereum_1.createSiweMessage)(siweMessage);
        signature = await resolvedWallet.request({
          method: "personal_sign",
          params: [(0, ethereum_1.toHex)(message), address]
        });
      }
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({
            chain: "ethereum",
            message,
            signature
          }, ((_k = credentials.options) === null || _k === undefined ? undefined : _k.captchaToken) ? { gotrue_meta_security: { captcha_token: (_l = credentials.options) === null || _l === undefined ? undefined : _l.captchaToken } } : null),
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithSolana(credentials) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      let message;
      let signature;
      if ("message" in credentials) {
        message = credentials.message;
        signature = credentials.signature;
      } else {
        const { chain, wallet, statement, options } = credentials;
        let resolvedWallet;
        if (!(0, helpers_1.isBrowser)()) {
          if (typeof wallet !== "object" || !(options === null || options === undefined ? undefined : options.url)) {
            throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
          }
          resolvedWallet = wallet;
        } else if (typeof wallet === "object") {
          resolvedWallet = wallet;
        } else {
          const windowAny = window;
          if ("solana" in windowAny && typeof windowAny.solana === "object" && (("signIn" in windowAny.solana) && typeof windowAny.solana.signIn === "function" || ("signMessage" in windowAny.solana) && typeof windowAny.solana.signMessage === "function")) {
            resolvedWallet = windowAny.solana;
          } else {
            throw new Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
          }
        }
        const url = new URL((_a = options === null || options === undefined ? undefined : options.url) !== null && _a !== undefined ? _a : window.location.href);
        if ("signIn" in resolvedWallet && resolvedWallet.signIn) {
          const output = await resolvedWallet.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: new Date().toISOString() }, options === null || options === undefined ? undefined : options.signInWithSolana), {
            version: "1",
            domain: url.host,
            uri: url.href
          }), statement ? { statement } : null));
          let outputToProcess;
          if (Array.isArray(output) && output[0] && typeof output[0] === "object") {
            outputToProcess = output[0];
          } else if (output && typeof output === "object" && "signedMessage" in output && "signature" in output) {
            outputToProcess = output;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
          }
          if ("signedMessage" in outputToProcess && "signature" in outputToProcess && (typeof outputToProcess.signedMessage === "string" || outputToProcess.signedMessage instanceof Uint8Array) && outputToProcess.signature instanceof Uint8Array) {
            message = typeof outputToProcess.signedMessage === "string" ? outputToProcess.signedMessage : new TextDecoder().decode(outputToProcess.signedMessage);
            signature = outputToProcess.signature;
          } else {
            throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
          }
        } else {
          if (!("signMessage" in resolvedWallet) || typeof resolvedWallet.signMessage !== "function" || !("publicKey" in resolvedWallet) || typeof resolvedWallet !== "object" || !resolvedWallet.publicKey || !("toBase58" in resolvedWallet.publicKey) || typeof resolvedWallet.publicKey.toBase58 !== "function") {
            throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
          }
          message = [
            `${url.host} wants you to sign in with your Solana account:`,
            resolvedWallet.publicKey.toBase58(),
            ...statement ? ["", statement, ""] : [""],
            "Version: 1",
            `URI: ${url.href}`,
            `Issued At: ${(_c = (_b = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _b === undefined ? undefined : _b.issuedAt) !== null && _c !== undefined ? _c : new Date().toISOString()}`,
            ...((_d = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _d === undefined ? undefined : _d.notBefore) ? [`Not Before: ${options.signInWithSolana.notBefore}`] : [],
            ...((_e = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _e === undefined ? undefined : _e.expirationTime) ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : [],
            ...((_f = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _f === undefined ? undefined : _f.chainId) ? [`Chain ID: ${options.signInWithSolana.chainId}`] : [],
            ...((_g = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _g === undefined ? undefined : _g.nonce) ? [`Nonce: ${options.signInWithSolana.nonce}`] : [],
            ...((_h = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _h === undefined ? undefined : _h.requestId) ? [`Request ID: ${options.signInWithSolana.requestId}`] : [],
            ...((_k = (_j = options === null || options === undefined ? undefined : options.signInWithSolana) === null || _j === undefined ? undefined : _j.resources) === null || _k === undefined ? undefined : _k.length) ? [
              "Resources",
              ...options.signInWithSolana.resources.map((resource) => `- ${resource}`)
            ] : []
          ].join(`
`);
          const maybeSignature = await resolvedWallet.signMessage(new TextEncoder().encode(message), "utf8");
          if (!maybeSignature || !(maybeSignature instanceof Uint8Array)) {
            throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
          }
          signature = maybeSignature;
        }
      }
      try {
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
          headers: this.headers,
          body: Object.assign({ chain: "solana", message, signature: (0, base64url_1.bytesToBase64URL)(signature) }, ((_l = credentials.options) === null || _l === undefined ? undefined : _l.captchaToken) ? { gotrue_meta_security: { captcha_token: (_m = credentials.options) === null || _m === undefined ? undefined : _m.captchaToken } } : null),
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign({}, data), error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async _exchangeCodeForSession(authCode) {
      const storageItem = await (0, helpers_1.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== undefined ? storageItem : "").split("/");
      try {
        if (!codeVerifier && this.flowType === "pkce") {
          throw new errors_1.AuthPKCECodeVerifierMissingError;
        }
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
          headers: this.headers,
          body: {
            auth_code: authCode,
            code_verifier: codeVerifier
          },
          xform: fetch_1._sessionResponse
        });
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if (error) {
          throw error;
        }
        if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error: invalidTokenError
          });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data: Object.assign(Object.assign({}, data), { redirectType: redirectType !== null && redirectType !== undefined ? redirectType : null }), error });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error
          });
        }
        throw error;
      }
    }
    async signInWithIdToken(credentials) {
      try {
        const { options, provider, token, access_token, nonce } = credentials;
        const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          body: {
            provider,
            id_token: token,
            access_token,
            nonce,
            gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
          },
          xform: fetch_1._sessionResponse
        });
        const { data, error } = res;
        if (error) {
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if (!data || !data.session || !data.user) {
          const invalidTokenError = new errors_1.AuthInvalidTokenResponseError;
          return this._returnResult({ data: { user: null, session: null }, error: invalidTokenError });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return this._returnResult({ data, error });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithOtp(credentials) {
      var _a, _b, _c, _d, _e;
      try {
        if ("email" in credentials) {
          const { email, options } = credentials;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce") {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          const { error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email,
              data: (_a = options === null || options === undefined ? undefined : options.data) !== null && _a !== undefined ? _a : {},
              create_user: (_b = options === null || options === undefined ? undefined : options.shouldCreateUser) !== null && _b !== undefined ? _b : true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod
            },
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        if ("phone" in credentials) {
          const { phone, options } = credentials;
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              phone,
              data: (_c = options === null || options === undefined ? undefined : options.data) !== null && _c !== undefined ? _c : {},
              create_user: (_d = options === null || options === undefined ? undefined : options.shouldCreateUser) !== null && _d !== undefined ? _d : true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken },
              channel: (_e = options === null || options === undefined ? undefined : options.channel) !== null && _e !== undefined ? _e : "sms"
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === undefined ? undefined : data.message_id },
            error
          });
        }
        throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number.");
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async verifyOtp(params) {
      var _a, _b;
      try {
        let redirectTo = undefined;
        let captchaToken = undefined;
        if ("options" in params) {
          redirectTo = (_a = params.options) === null || _a === undefined ? undefined : _a.redirectTo;
          captchaToken = (_b = params.options) === null || _b === undefined ? undefined : _b.captchaToken;
        }
        const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/verify`, {
          headers: this.headers,
          body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: captchaToken } }),
          redirectTo,
          xform: fetch_1._sessionResponse
        });
        if (error) {
          throw error;
        }
        if (!data) {
          const tokenVerificationError = new Error("An error occurred on token verification.");
          throw tokenVerificationError;
        }
        const session = data.session;
        const user = data.user;
        if (session === null || session === undefined ? undefined : session.access_token) {
          await this._saveSession(session);
          await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
        }
        return this._returnResult({ data: { user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async signInWithSSO(params) {
      var _a, _b, _c, _d, _e;
      try {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
          [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
        }
        const result = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? { provider_id: params.providerId } : null), "domain" in params ? { domain: params.domain } : null), { redirect_to: (_b = (_a = params.options) === null || _a === undefined ? undefined : _a.redirectTo) !== null && _b !== undefined ? _b : undefined }), ((_c = params === null || params === undefined ? undefined : params.options) === null || _c === undefined ? undefined : _c.captchaToken) ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
          headers: this.headers,
          xform: fetch_1._ssoResponse
        });
        if (((_d = result.data) === null || _d === undefined ? undefined : _d.url) && (0, helpers_1.isBrowser)() && !((_e = params.options) === null || _e === undefined ? undefined : _e.skipBrowserRedirect)) {
          window.location.assign(result.data.url);
        }
        return this._returnResult(result);
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async reauthenticate() {
      await this.initializePromise;
      return await this._acquireLock(-1, async () => {
        return await this._reauthenticate();
      });
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError)
            throw sessionError;
          if (!session)
            throw new errors_1.AuthSessionMissingError;
          const { error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/reauthenticate`, {
            headers: this.headers,
            jwt: session.access_token
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async resend(credentials) {
      try {
        const endpoint = `${this.url}/resend`;
        if ("email" in credentials) {
          const { email, type, options } = credentials;
          const { error } = await (0, fetch_1._request)(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              email,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo
          });
          return this._returnResult({ data: { user: null, session: null }, error });
        } else if ("phone" in credentials) {
          const { phone, type, options } = credentials;
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", endpoint, {
            headers: this.headers,
            body: {
              phone,
              type,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            }
          });
          return this._returnResult({
            data: { user: null, session: null, messageId: data === null || data === undefined ? undefined : data.message_id },
            error
          });
        }
        throw new errors_1.AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async getSession() {
      await this.initializePromise;
      const result = await this._acquireLock(-1, async () => {
        return this._useSession(async (result2) => {
          return result2;
        });
      });
      return result;
    }
    async _acquireLock(acquireTimeout, fn) {
      this._debug("#_acquireLock", "begin", acquireTimeout);
      try {
        if (this.lockAcquired) {
          const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
          const result = (async () => {
            await last;
            return await fn();
          })();
          this.pendingInLock.push((async () => {
            try {
              await result;
            } catch (e) {}
          })());
          return result;
        }
        return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async () => {
          this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
          try {
            this.lockAcquired = true;
            const result = fn();
            this.pendingInLock.push((async () => {
              try {
                await result;
              } catch (e) {}
            })());
            await result;
            while (this.pendingInLock.length) {
              const waitOn = [...this.pendingInLock];
              await Promise.all(waitOn);
              this.pendingInLock.splice(0, waitOn.length);
            }
            return await result;
          } finally {
            this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
            this.lockAcquired = false;
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(fn) {
      this._debug("#_useSession", "begin");
      try {
        const result = await this.__loadSession();
        return await fn(result);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin");
      if (!this.lockAcquired) {
        this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
      }
      try {
        let currentSession = null;
        const maybeSession = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
        this._debug("#getSession()", "session from storage", maybeSession);
        if (maybeSession !== null) {
          if (this._isValidSession(maybeSession)) {
            currentSession = maybeSession;
          } else {
            this._debug("#getSession()", "session from storage is not valid");
            await this._removeSession();
          }
        }
        if (!currentSession) {
          return { data: { session: null }, error: null };
        }
        const hasExpired = currentSession.expires_at ? currentSession.expires_at * 1000 - Date.now() < constants_1.EXPIRY_MARGIN_MS : false;
        this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
        if (!hasExpired) {
          if (this.userStorage) {
            const maybeUser = await (0, helpers_1.getItemAsync)(this.userStorage, this.storageKey + "-user");
            if (maybeUser === null || maybeUser === undefined ? undefined : maybeUser.user) {
              currentSession.user = maybeUser.user;
            } else {
              currentSession.user = (0, helpers_1.userNotAvailableProxy)();
            }
          }
          if (this.storage.isServer && currentSession.user && !currentSession.user.__isUserNotAvailableProxy) {
            const suppressWarningRef = { value: this.suppressGetSessionWarning };
            currentSession.user = (0, helpers_1.insecureUserWarningProxy)(currentSession.user, suppressWarningRef);
            if (suppressWarningRef.value) {
              this.suppressGetSessionWarning = true;
            }
          }
          return { data: { session: currentSession }, error: null };
        }
        const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
        if (error) {
          return this._returnResult({ data: { session: null }, error });
        }
        return this._returnResult({ data: { session }, error: null });
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(jwt) {
      if (jwt) {
        return await this._getUser(jwt);
      }
      await this.initializePromise;
      const result = await this._acquireLock(-1, async () => {
        return await this._getUser();
      });
      if (result.data.user) {
        this.suppressGetSessionWarning = true;
      }
      return result;
    }
    async _getUser(jwt) {
      try {
        if (jwt) {
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt,
            xform: fetch_1._userResponse
          });
        }
        return await this._useSession(async (result) => {
          var _a, _b, _c;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          if (!((_a = data.session) === null || _a === undefined ? undefined : _a.access_token) && !this.hasCustomAuthorizationHeader) {
            return { data: { user: null }, error: new errors_1.AuthSessionMissingError };
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: (_c = (_b = data.session) === null || _b === undefined ? undefined : _b.access_token) !== null && _c !== undefined ? _c : undefined,
            xform: fetch_1._userResponse
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          if ((0, errors_1.isAuthSessionMissingError)(error)) {
            await this._removeSession();
            await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          }
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    async updateUser(attributes, options = {}) {
      await this.initializePromise;
      return await this._acquireLock(-1, async () => {
        return await this._updateUser(attributes, options);
      });
    }
    async _updateUser(attributes, options = {}) {
      try {
        return await this._useSession(async (result) => {
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            throw sessionError;
          }
          if (!sessionData.session) {
            throw new errors_1.AuthSessionMissingError;
          }
          const session = sessionData.session;
          let codeChallenge = null;
          let codeChallengeMethod = null;
          if (this.flowType === "pkce" && attributes.email != null) {
            [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
          }
          const { data, error: userError } = await (0, fetch_1._request)(this.fetch, "PUT", `${this.url}/user`, {
            headers: this.headers,
            redirectTo: options === null || options === undefined ? undefined : options.emailRedirectTo,
            body: Object.assign(Object.assign({}, attributes), { code_challenge: codeChallenge, code_challenge_method: codeChallengeMethod }),
            jwt: session.access_token,
            xform: fetch_1._userResponse
          });
          if (userError) {
            throw userError;
          }
          session.user = data.user;
          await this._saveSession(session);
          await this._notifyAllSubscribers("USER_UPDATED", session);
          return this._returnResult({ data: { user: session.user }, error: null });
        });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null }, error });
        }
        throw error;
      }
    }
    async setSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(-1, async () => {
        return await this._setSession(currentSession);
      });
    }
    async _setSession(currentSession) {
      try {
        if (!currentSession.access_token || !currentSession.refresh_token) {
          throw new errors_1.AuthSessionMissingError;
        }
        const timeNow = Date.now() / 1000;
        let expiresAt = timeNow;
        let hasExpired = true;
        let session = null;
        const { payload } = (0, helpers_1.decodeJWT)(currentSession.access_token);
        if (payload.exp) {
          expiresAt = payload.exp;
          hasExpired = expiresAt <= timeNow;
        }
        if (hasExpired) {
          const { data: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!refreshedSession) {
            return { data: { user: null, session: null }, error: null };
          }
          session = refreshedSession;
        } else {
          const { data, error } = await this._getUser(currentSession.access_token);
          if (error) {
            throw error;
          }
          session = {
            access_token: currentSession.access_token,
            refresh_token: currentSession.refresh_token,
            user: data.user,
            token_type: "bearer",
            expires_in: expiresAt - timeNow,
            expires_at: expiresAt
          };
          await this._saveSession(session);
          await this._notifyAllSubscribers("SIGNED_IN", session);
        }
        return this._returnResult({ data: { user: session.user, session }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      }
    }
    async refreshSession(currentSession) {
      await this.initializePromise;
      return await this._acquireLock(-1, async () => {
        return await this._refreshSession(currentSession);
      });
    }
    async _refreshSession(currentSession) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          if (!currentSession) {
            const { data, error: error2 } = result;
            if (error2) {
              throw error2;
            }
            currentSession = (_a = data.session) !== null && _a !== undefined ? _a : undefined;
          }
          if (!(currentSession === null || currentSession === undefined ? undefined : currentSession.refresh_token)) {
            throw new errors_1.AuthSessionMissingError;
          }
          const { data: session, error } = await this._callRefreshToken(currentSession.refresh_token);
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          if (!session) {
            return this._returnResult({ data: { user: null, session: null }, error: null });
          }
          return this._returnResult({ data: { user: session.user, session }, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { user: null, session: null }, error });
        }
        throw error;
      }
    }
    async _getSessionFromURL(params, callbackUrlType) {
      try {
        if (!(0, helpers_1.isBrowser)())
          throw new errors_1.AuthImplicitGrantRedirectError("No browser detected.");
        if (params.error || params.error_description || params.error_code) {
          throw new errors_1.AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
            error: params.error || "unspecified_error",
            code: params.error_code || "unspecified_code"
          });
        }
        switch (callbackUrlType) {
          case "implicit":
            if (this.flowType === "pkce") {
              throw new errors_1.AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
            }
            break;
          case "pkce":
            if (this.flowType === "implicit") {
              throw new errors_1.AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
            }
            break;
          default:
        }
        if (callbackUrlType === "pkce") {
          this._debug("#_initialize()", "begin", "is PKCE flow", true);
          if (!params.code)
            throw new errors_1.AuthPKCEGrantCodeExchangeError("No code detected.");
          const { data: data2, error: error2 } = await this._exchangeCodeForSession(params.code);
          if (error2)
            throw error2;
          const url = new URL(window.location.href);
          url.searchParams.delete("code");
          window.history.replaceState(window.history.state, "", url.toString());
          return { data: { session: data2.session, redirectType: null }, error: null };
        }
        const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
        if (!access_token || !expires_in || !refresh_token || !token_type) {
          throw new errors_1.AuthImplicitGrantRedirectError("No session defined in URL");
        }
        const timeNow = Math.round(Date.now() / 1000);
        const expiresIn = parseInt(expires_in);
        let expiresAt = timeNow + expiresIn;
        if (expires_at) {
          expiresAt = parseInt(expires_at);
        }
        const actuallyExpiresIn = expiresAt - timeNow;
        if (actuallyExpiresIn * 1000 <= constants_1.AUTO_REFRESH_TICK_DURATION_MS) {
          console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
        }
        const issuedAt = expiresAt - expiresIn;
        if (timeNow - issuedAt >= 120) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt, timeNow);
        } else if (timeNow - issuedAt < 0) {
          console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", issuedAt, expiresAt, timeNow);
        }
        const { data, error } = await this._getUser(access_token);
        if (error)
          throw error;
        const session = {
          provider_token,
          provider_refresh_token,
          access_token,
          expires_in: expiresIn,
          expires_at: expiresAt,
          refresh_token,
          token_type,
          user: data.user
        };
        window.location.hash = "";
        this._debug("#_getSessionFromURL()", "clearing window.location.hash");
        return this._returnResult({ data: { session, redirectType: params.type }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, redirectType: null }, error });
        }
        throw error;
      }
    }
    _isImplicitGrantCallback(params) {
      if (typeof this.detectSessionInUrl === "function") {
        return this.detectSessionInUrl(new URL(window.location.href), params);
      }
      return Boolean(params.access_token || params.error_description);
    }
    async _isPKCECallback(params) {
      const currentStorageContent = await (0, helpers_1.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      return !!(params.code && currentStorageContent);
    }
    async signOut(options = { scope: "global" }) {
      await this.initializePromise;
      return await this._acquireLock(-1, async () => {
        return await this._signOut(options);
      });
    }
    async _signOut({ scope } = { scope: "global" }) {
      return await this._useSession(async (result) => {
        var _a;
        const { data, error: sessionError } = result;
        if (sessionError) {
          return this._returnResult({ error: sessionError });
        }
        const accessToken = (_a = data.session) === null || _a === undefined ? undefined : _a.access_token;
        if (accessToken) {
          const { error } = await this.admin.signOut(accessToken, scope);
          if (error) {
            if (!((0, errors_1.isAuthApiError)(error) && (error.status === 404 || error.status === 401 || error.status === 403))) {
              return this._returnResult({ error });
            }
          }
        }
        if (scope !== "others") {
          await this._removeSession();
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        }
        return this._returnResult({ error: null });
      });
    }
    onAuthStateChange(callback) {
      const id = (0, helpers_1.generateCallbackId)();
      const subscription = {
        id,
        callback,
        unsubscribe: () => {
          this._debug("#unsubscribe()", "state change callback with id removed", id);
          this.stateChangeEmitters.delete(id);
        }
      };
      this._debug("#onAuthStateChange()", "registered callback with id", id);
      this.stateChangeEmitters.set(id, subscription);
      (async () => {
        await this.initializePromise;
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(id);
        });
      })();
      return { data: { subscription } };
    }
    async _emitInitialSession(id) {
      return await this._useSession(async (result) => {
        var _a, _b;
        try {
          const { data: { session }, error } = result;
          if (error)
            throw error;
          await ((_a = this.stateChangeEmitters.get(id)) === null || _a === undefined ? undefined : _a.callback("INITIAL_SESSION", session));
          this._debug("INITIAL_SESSION", "callback id", id, "session", session);
        } catch (err) {
          await ((_b = this.stateChangeEmitters.get(id)) === null || _b === undefined ? undefined : _b.callback("INITIAL_SESSION", null));
          this._debug("INITIAL_SESSION", "callback id", id, "error", err);
          console.error(err);
        }
      });
    }
    async resetPasswordForEmail(email, options = {}) {
      let codeChallenge = null;
      let codeChallengeMethod = null;
      if (this.flowType === "pkce") {
        [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey, true);
      }
      try {
        return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email,
            code_challenge: codeChallenge,
            code_challenge_method: codeChallengeMethod,
            gotrue_meta_security: { captcha_token: options.captchaToken }
          },
          headers: this.headers,
          redirectTo: options.redirectTo
        });
      } catch (error) {
        await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async getUserIdentities() {
      var _a;
      try {
        const { data, error } = await this.getUser();
        if (error)
          throw error;
        return this._returnResult({ data: { identities: (_a = data.user.identities) !== null && _a !== undefined ? _a : [] }, error: null });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async linkIdentity(credentials) {
      if ("token" in credentials) {
        return this.linkIdentityIdToken(credentials);
      }
      return this.linkIdentityOAuth(credentials);
    }
    async linkIdentityOAuth(credentials) {
      var _a;
      try {
        const { data, error } = await this._useSession(async (result) => {
          var _a2, _b, _c, _d, _e;
          const { data: data2, error: error2 } = result;
          if (error2)
            throw error2;
          const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
            redirectTo: (_a2 = credentials.options) === null || _a2 === undefined ? undefined : _a2.redirectTo,
            scopes: (_b = credentials.options) === null || _b === undefined ? undefined : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === undefined ? undefined : _c.queryParams,
            skipBrowserRedirect: true
          });
          return await (0, fetch_1._request)(this.fetch, "GET", url, {
            headers: this.headers,
            jwt: (_e = (_d = data2.session) === null || _d === undefined ? undefined : _d.access_token) !== null && _e !== undefined ? _e : undefined
          });
        });
        if (error)
          throw error;
        if ((0, helpers_1.isBrowser)() && !((_a = credentials.options) === null || _a === undefined ? undefined : _a.skipBrowserRedirect)) {
          window.location.assign(data === null || data === undefined ? undefined : data.url);
        }
        return this._returnResult({
          data: { provider: credentials.provider, url: data === null || data === undefined ? undefined : data.url },
          error: null
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { provider: credentials.provider, url: null }, error });
        }
        throw error;
      }
    }
    async linkIdentityIdToken(credentials) {
      return await this._useSession(async (result) => {
        var _a;
        try {
          const { error: sessionError, data: { session } } = result;
          if (sessionError)
            throw sessionError;
          const { options, provider, token, access_token, nonce } = credentials;
          const res = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
            headers: this.headers,
            jwt: (_a = session === null || session === undefined ? undefined : session.access_token) !== null && _a !== undefined ? _a : undefined,
            body: {
              provider,
              id_token: token,
              access_token,
              nonce,
              link_identity: true,
              gotrue_meta_security: { captcha_token: options === null || options === undefined ? undefined : options.captchaToken }
            },
            xform: fetch_1._sessionResponse
          });
          const { data, error } = res;
          if (error) {
            return this._returnResult({ data: { user: null, session: null }, error });
          } else if (!data || !data.session || !data.user) {
            return this._returnResult({
              data: { user: null, session: null },
              error: new errors_1.AuthInvalidTokenResponseError
            });
          }
          if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("USER_UPDATED", data.session);
          }
          return this._returnResult({ data, error });
        } catch (error) {
          await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: { user: null, session: null }, error });
          }
          throw error;
        }
      });
    }
    async unlinkIdentity(identity) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data, error } = result;
          if (error) {
            throw error;
          }
          return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
            headers: this.headers,
            jwt: (_b = (_a = data.session) === null || _a === undefined ? undefined : _a.access_token) !== null && _b !== undefined ? _b : undefined
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _refreshAccessToken(refreshToken) {
      const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        const startedAt = Date.now();
        return await (0, helpers_1.retryable)(async (attempt) => {
          if (attempt > 0) {
            await (0, helpers_1.sleep)(200 * Math.pow(2, attempt - 1));
          }
          this._debug(debugName, "refreshing attempt", attempt);
          return await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
            body: { refresh_token: refreshToken },
            headers: this.headers,
            xform: fetch_1._sessionResponse
          });
        }, (attempt, error) => {
          const nextBackOffInterval = 200 * Math.pow(2, attempt);
          return error && (0, errors_1.isAuthRetryableFetchError)(error) && Date.now() + nextBackOffInterval - startedAt < constants_1.AUTO_REFRESH_TICK_DURATION_MS;
        });
      } catch (error) {
        this._debug(debugName, "error", error);
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: { session: null, user: null }, error });
        }
        throw error;
      } finally {
        this._debug(debugName, "end");
      }
    }
    _isValidSession(maybeSession) {
      const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
      return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
      const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
        redirectTo: options.redirectTo,
        scopes: options.scopes,
        queryParams: options.queryParams
      });
      this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
      if ((0, helpers_1.isBrowser)() && !options.skipBrowserRedirect) {
        window.location.assign(url);
      }
      return { data: { provider, url }, error: null };
    }
    async _recoverAndRefresh() {
      var _a, _b;
      const debugName = "#_recoverAndRefresh()";
      this._debug(debugName, "begin");
      try {
        const currentSession = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
        if (currentSession && this.userStorage) {
          let maybeUser = await (0, helpers_1.getItemAsync)(this.userStorage, this.storageKey + "-user");
          if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !maybeUser) {
            maybeUser = { user: currentSession.user };
            await (0, helpers_1.setItemAsync)(this.userStorage, this.storageKey + "-user", maybeUser);
          }
          currentSession.user = (_a = maybeUser === null || maybeUser === undefined ? undefined : maybeUser.user) !== null && _a !== undefined ? _a : (0, helpers_1.userNotAvailableProxy)();
        } else if (currentSession && !currentSession.user) {
          if (!currentSession.user) {
            const separateUser = await (0, helpers_1.getItemAsync)(this.storage, this.storageKey + "-user");
            if (separateUser && (separateUser === null || separateUser === undefined ? undefined : separateUser.user)) {
              currentSession.user = separateUser.user;
              await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-user");
              await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, currentSession);
            } else {
              currentSession.user = (0, helpers_1.userNotAvailableProxy)();
            }
          }
        }
        this._debug(debugName, "session from storage", currentSession);
        if (!this._isValidSession(currentSession)) {
          this._debug(debugName, "session is not valid");
          if (currentSession !== null) {
            await this._removeSession();
          }
          return;
        }
        const expiresWithMargin = ((_b = currentSession.expires_at) !== null && _b !== undefined ? _b : Infinity) * 1000 - Date.now() < constants_1.EXPIRY_MARGIN_MS;
        this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${constants_1.EXPIRY_MARGIN_MS}s`);
        if (expiresWithMargin) {
          if (this.autoRefreshToken && currentSession.refresh_token) {
            const { error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) {
              console.error(error);
              if (!(0, errors_1.isAuthRetryableFetchError)(error)) {
                this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                await this._removeSession();
              }
            }
          }
        } else if (currentSession.user && currentSession.user.__isUserNotAvailableProxy === true) {
          try {
            const { data, error: userError } = await this._getUser(currentSession.access_token);
            if (!userError && (data === null || data === undefined ? undefined : data.user)) {
              currentSession.user = data.user;
              await this._saveSession(currentSession);
              await this._notifyAllSubscribers("SIGNED_IN", currentSession);
            } else {
              this._debug(debugName, "could not get user data, skipping SIGNED_IN notification");
            }
          } catch (getUserError) {
            console.error("Error getting user data:", getUserError);
            this._debug(debugName, "error getting user data, skipping SIGNED_IN notification", getUserError);
          }
        } else {
          await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        }
      } catch (err) {
        this._debug(debugName, "error", err);
        console.error(err);
        return;
      } finally {
        this._debug(debugName, "end");
      }
    }
    async _callRefreshToken(refreshToken) {
      var _a, _b;
      if (!refreshToken) {
        throw new errors_1.AuthSessionMissingError;
      }
      if (this.refreshingDeferred) {
        return this.refreshingDeferred.promise;
      }
      const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
      this._debug(debugName, "begin");
      try {
        this.refreshingDeferred = new helpers_1.Deferred;
        const { data, error } = await this._refreshAccessToken(refreshToken);
        if (error)
          throw error;
        if (!data.session)
          throw new errors_1.AuthSessionMissingError;
        await this._saveSession(data.session);
        await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
        const result = { data: data.session, error: null };
        this.refreshingDeferred.resolve(result);
        return result;
      } catch (error) {
        this._debug(debugName, "error", error);
        if ((0, errors_1.isAuthError)(error)) {
          const result = { data: null, error };
          if (!(0, errors_1.isAuthRetryableFetchError)(error)) {
            await this._removeSession();
          }
          (_a = this.refreshingDeferred) === null || _a === undefined || _a.resolve(result);
          return result;
        }
        (_b = this.refreshingDeferred) === null || _b === undefined || _b.reject(error);
        throw error;
      } finally {
        this.refreshingDeferred = null;
        this._debug(debugName, "end");
      }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
      const debugName = `#_notifyAllSubscribers(${event})`;
      this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
      try {
        if (this.broadcastChannel && broadcast) {
          this.broadcastChannel.postMessage({ event, session });
        }
        const errors = [];
        const promises = Array.from(this.stateChangeEmitters.values()).map(async (x) => {
          try {
            await x.callback(event, session);
          } catch (e) {
            errors.push(e);
          }
        });
        await Promise.all(promises);
        if (errors.length > 0) {
          for (let i = 0;i < errors.length; i += 1) {
            console.error(errors[i]);
          }
          throw errors[0];
        }
      } finally {
        this._debug(debugName, "end");
      }
    }
    async _saveSession(session) {
      this._debug("#_saveSession()", session);
      this.suppressGetSessionWarning = true;
      await (0, helpers_1.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
      const sessionToProcess = Object.assign({}, session);
      const userIsProxy = sessionToProcess.user && sessionToProcess.user.__isUserNotAvailableProxy === true;
      if (this.userStorage) {
        if (!userIsProxy && sessionToProcess.user) {
          await (0, helpers_1.setItemAsync)(this.userStorage, this.storageKey + "-user", {
            user: sessionToProcess.user
          });
        } else if (userIsProxy) {}
        const mainSessionData = Object.assign({}, sessionToProcess);
        delete mainSessionData.user;
        const clonedMainSessionData = (0, helpers_1.deepClone)(mainSessionData);
        await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, clonedMainSessionData);
      } else {
        const clonedSession = (0, helpers_1.deepClone)(sessionToProcess);
        await (0, helpers_1.setItemAsync)(this.storage, this.storageKey, clonedSession);
      }
    }
    async _removeSession() {
      this._debug("#_removeSession()");
      this.suppressGetSessionWarning = false;
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey);
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-code-verifier");
      await (0, helpers_1.removeItemAsync)(this.storage, this.storageKey + "-user");
      if (this.userStorage) {
        await (0, helpers_1.removeItemAsync)(this.userStorage, this.storageKey + "-user");
      }
      await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const callback = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        if (callback && (0, helpers_1.isBrowser)() && (window === null || window === undefined ? undefined : window.removeEventListener)) {
          window.removeEventListener("visibilitychange", callback);
        }
      } catch (e) {
        console.error("removing visibilitychange callback failed", e);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh();
      this._debug("#_startAutoRefresh()");
      const ticker = setInterval(() => this._autoRefreshTokenTick(), constants_1.AUTO_REFRESH_TICK_DURATION_MS);
      this.autoRefreshTicker = ticker;
      if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") {
        ticker.unref();
      } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
        Deno.unrefTimer(ticker);
      }
      setTimeout(async () => {
        await this.initializePromise;
        await this._autoRefreshTokenTick();
      }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const ticker = this.autoRefreshTicker;
      this.autoRefreshTicker = null;
      if (ticker) {
        clearInterval(ticker);
      }
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback();
      await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const now = Date.now();
            try {
              return await this._useSession(async (result) => {
                const { data: { session } } = result;
                if (!session || !session.refresh_token || !session.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / constants_1.AUTO_REFRESH_TICK_DURATION_MS);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${constants_1.AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${constants_1.AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                if (expiresInTicks <= constants_1.AUTO_REFRESH_TICK_THRESHOLD) {
                  await this._callRefreshToken(session.refresh_token);
                }
              });
            } catch (e) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof locks_1.LockAcquireTimeoutError) {
          this._debug("auto refresh token tick lock not available");
        } else {
          throw e;
        }
      }
    }
    async _handleVisibilityChange() {
      this._debug("#_handleVisibilityChange()");
      if (!(0, helpers_1.isBrowser)() || !(window === null || window === undefined ? undefined : window.addEventListener)) {
        if (this.autoRefreshToken) {
          this.startAutoRefresh();
        }
        return false;
      }
      try {
        this.visibilityChangedCallback = async () => await this._onVisibilityChanged(false);
        window === null || window === undefined || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
        await this._onVisibilityChanged(true);
      } catch (error) {
        console.error("_handleVisibilityChange", error);
      }
    }
    async _onVisibilityChanged(calledFromInitialize) {
      const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
      this._debug(methodName, "visibilityState", document.visibilityState);
      if (document.visibilityState === "visible") {
        if (this.autoRefreshToken) {
          this._startAutoRefresh();
        }
        if (!calledFromInitialize) {
          await this.initializePromise;
          await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
              return;
            }
            await this._recoverAndRefresh();
          });
        }
      } else if (document.visibilityState === "hidden") {
        if (this.autoRefreshToken) {
          this._stopAutoRefresh();
        }
      }
    }
    async _getUrlForProvider(url, provider, options) {
      const urlParams = [`provider=${encodeURIComponent(provider)}`];
      if (options === null || options === undefined ? undefined : options.redirectTo) {
        urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
      }
      if (options === null || options === undefined ? undefined : options.scopes) {
        urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
      }
      if (this.flowType === "pkce") {
        const [codeChallenge, codeChallengeMethod] = await (0, helpers_1.getCodeChallengeAndMethod)(this.storage, this.storageKey);
        const flowParams = new URLSearchParams({
          code_challenge: `${encodeURIComponent(codeChallenge)}`,
          code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
        });
        urlParams.push(flowParams.toString());
      }
      if (options === null || options === undefined ? undefined : options.queryParams) {
        const query = new URLSearchParams(options.queryParams);
        urlParams.push(query.toString());
      }
      if (options === null || options === undefined ? undefined : options.skipBrowserRedirect) {
        urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
      }
      return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          return await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _enroll(params) {
      try {
        return await this._useSession(async (result) => {
          var _a, _b;
          const { data: sessionData, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          const body = Object.assign({ friendly_name: params.friendlyName, factor_type: params.factorType }, params.factorType === "phone" ? { phone: params.phone } : params.factorType === "totp" ? { issuer: params.issuer } : {});
          const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors`, {
            body,
            headers: this.headers,
            jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
          });
          if (error) {
            return this._returnResult({ data: null, error });
          }
          if (params.factorType === "totp" && data.type === "totp" && ((_b = data === null || data === undefined ? undefined : data.totp) === null || _b === undefined ? undefined : _b.qr_code)) {
            data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
          }
          return this._returnResult({ data, error: null });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _verify(params) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const body = Object.assign({ challenge_id: params.challengeId }, "webauthn" in params ? {
              webauthn: Object.assign(Object.assign({}, params.webauthn), { credential_response: params.webauthn.type === "create" ? (0, webauthn_1.serializeCredentialCreationResponse)(params.webauthn.credential_response) : (0, webauthn_1.serializeCredentialRequestResponse)(params.webauthn.credential_response) })
            } : { code: params.code });
            const { data, error } = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
              body,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
            });
            if (error) {
              return this._returnResult({ data: null, error });
            }
            await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1000) + data.expires_in }, data));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
            return this._returnResult({ data, error });
          });
        } catch (error) {
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    async _challenge(params) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (result) => {
            var _a;
            const { data: sessionData, error: sessionError } = result;
            if (sessionError) {
              return this._returnResult({ data: null, error: sessionError });
            }
            const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
              body: params,
              headers: this.headers,
              jwt: (_a = sessionData === null || sessionData === undefined ? undefined : sessionData.session) === null || _a === undefined ? undefined : _a.access_token
            });
            if (response.error) {
              return response;
            }
            const { data } = response;
            if (data.type !== "webauthn") {
              return { data, error: null };
            }
            switch (data.webauthn.type) {
              case "create":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: (0, webauthn_1.deserializeCredentialCreationOptions)(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
              case "request":
                return {
                  data: Object.assign(Object.assign({}, data), { webauthn: Object.assign(Object.assign({}, data.webauthn), { credential_options: Object.assign(Object.assign({}, data.webauthn.credential_options), { publicKey: (0, webauthn_1.deserializeCredentialRequestOptions)(data.webauthn.credential_options.publicKey) }) }) }),
                  error: null
                };
            }
          });
        } catch (error) {
          if ((0, errors_1.isAuthError)(error)) {
            return this._returnResult({ data: null, error });
          }
          throw error;
        }
      });
    }
    async _challengeAndVerify(params) {
      const { data: challengeData, error: challengeError } = await this._challenge({
        factorId: params.factorId
      });
      if (challengeError) {
        return this._returnResult({ data: null, error: challengeError });
      }
      return await this._verify({
        factorId: params.factorId,
        challengeId: challengeData.id,
        code: params.code
      });
    }
    async _listFactors() {
      var _a;
      const { data: { user }, error: userError } = await this.getUser();
      if (userError) {
        return { data: null, error: userError };
      }
      const data = {
        all: [],
        phone: [],
        totp: [],
        webauthn: []
      };
      for (const factor of (_a = user === null || user === undefined ? undefined : user.factors) !== null && _a !== undefined ? _a : []) {
        data.all.push(factor);
        if (factor.status === "verified") {
          data[factor.factor_type].push(factor);
        }
      }
      return {
        data,
        error: null
      };
    }
    async _getAuthenticatorAssuranceLevel() {
      var _a, _b;
      const { data: { session }, error: sessionError } = await this.getSession();
      if (sessionError) {
        return this._returnResult({ data: null, error: sessionError });
      }
      if (!session) {
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      }
      const { payload } = (0, helpers_1.decodeJWT)(session.access_token);
      let currentLevel = null;
      if (payload.aal) {
        currentLevel = payload.aal;
      }
      let nextLevel = currentLevel;
      const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === undefined ? undefined : _a.filter((factor) => factor.status === "verified")) !== null && _b !== undefined ? _b : [];
      if (verifiedFactors.length > 0) {
        nextLevel = "aal2";
      }
      const currentAuthenticationMethods = payload.amr || [];
      return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
    }
    async _getAuthorizationDetails(authorizationId) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/oauth/authorizations/${authorizationId}`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _approveAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "approve" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if ((0, helpers_1.isBrowser)() && !(options === null || options === undefined ? undefined : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _denyAuthorization(authorizationId, options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          const response = await (0, fetch_1._request)(this.fetch, "POST", `${this.url}/oauth/authorizations/${authorizationId}/consent`, {
            headers: this.headers,
            jwt: session.access_token,
            body: { action: "deny" },
            xform: (data) => ({ data, error: null })
          });
          if (response.data && response.data.redirect_url) {
            if ((0, helpers_1.isBrowser)() && !(options === null || options === undefined ? undefined : options.skipBrowserRedirect)) {
              window.location.assign(response.data.redirect_url);
            }
          }
          return response;
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _listOAuthGrants() {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          return await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (data) => ({ data, error: null })
          });
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async _revokeOAuthGrant(options) {
      try {
        return await this._useSession(async (result) => {
          const { data: { session }, error: sessionError } = result;
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError });
          }
          if (!session) {
            return this._returnResult({ data: null, error: new errors_1.AuthSessionMissingError });
          }
          await (0, fetch_1._request)(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            query: { client_id: options.clientId },
            noResolveJson: true
          });
          return { data: {}, error: null };
        });
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
    async fetchJwk(kid, jwks = { keys: [] }) {
      let jwk = jwks.keys.find((key) => key.kid === kid);
      if (jwk) {
        return jwk;
      }
      const now = Date.now();
      jwk = this.jwks.keys.find((key) => key.kid === kid);
      if (jwk && this.jwks_cached_at + constants_1.JWKS_TTL > now) {
        return jwk;
      }
      const { data, error } = await (0, fetch_1._request)(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
        headers: this.headers
      });
      if (error) {
        throw error;
      }
      if (!data.keys || data.keys.length === 0) {
        return null;
      }
      this.jwks = data;
      this.jwks_cached_at = now;
      jwk = data.keys.find((key) => key.kid === kid);
      if (!jwk) {
        return null;
      }
      return jwk;
    }
    async getClaims(jwt, options = {}) {
      try {
        let token = jwt;
        if (!token) {
          const { data, error } = await this.getSession();
          if (error || !data.session) {
            return this._returnResult({ data: null, error });
          }
          token = data.session.access_token;
        }
        const { header, payload, signature, raw: { header: rawHeader, payload: rawPayload } } = (0, helpers_1.decodeJWT)(token);
        if (!(options === null || options === undefined ? undefined : options.allowExpired)) {
          (0, helpers_1.validateExp)(payload.exp);
        }
        const signingKey = !header.alg || header.alg.startsWith("HS") || !header.kid || !(("crypto" in globalThis) && ("subtle" in globalThis.crypto)) ? null : await this.fetchJwk(header.kid, (options === null || options === undefined ? undefined : options.keys) ? { keys: options.keys } : options === null || options === undefined ? undefined : options.jwks);
        if (!signingKey) {
          const { error } = await this.getUser(token);
          if (error) {
            throw error;
          }
          return {
            data: {
              claims: payload,
              header,
              signature
            },
            error: null
          };
        }
        const algorithm = (0, helpers_1.getAlgorithm)(header.alg);
        const publicKey = await crypto.subtle.importKey("jwk", signingKey, algorithm, true, [
          "verify"
        ]);
        const isValid = await crypto.subtle.verify(algorithm, publicKey, signature, (0, base64url_1.stringToUint8Array)(`${rawHeader}.${rawPayload}`));
        if (!isValid) {
          throw new errors_1.AuthInvalidJwtError("Invalid JWT signature");
        }
        return {
          data: {
            claims: payload,
            header,
            signature
          },
          error: null
        };
      } catch (error) {
        if ((0, errors_1.isAuthError)(error)) {
          return this._returnResult({ data: null, error });
        }
        throw error;
      }
    }
  }
  GoTrueClient.nextInstanceID = {};
  exports.default = GoTrueClient;
});

// ../../node_modules/@supabase/auth-js/dist/main/AuthAdminApi.js
var require_AuthAdminApi = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib3();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  var AuthAdminApi = GoTrueAdminApi_1.default;
  exports.default = AuthAdminApi;
});

// ../../node_modules/@supabase/auth-js/dist/main/AuthClient.js
var require_AuthClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib3();
  var GoTrueClient_1 = tslib_1.__importDefault(require_GoTrueClient());
  var AuthClient = GoTrueClient_1.default;
  exports.default = AuthClient;
});

// ../../node_modules/@supabase/auth-js/dist/main/index.js
var require_main3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.processLock = exports.lockInternals = exports.NavigatorLockAcquireTimeoutError = exports.navigatorLock = exports.AuthClient = exports.AuthAdminApi = exports.GoTrueClient = exports.GoTrueAdminApi = undefined;
  var tslib_1 = require_tslib3();
  var GoTrueAdminApi_1 = tslib_1.__importDefault(require_GoTrueAdminApi());
  exports.GoTrueAdminApi = GoTrueAdminApi_1.default;
  var GoTrueClient_1 = tslib_1.__importDefault(require_GoTrueClient());
  exports.GoTrueClient = GoTrueClient_1.default;
  var AuthAdminApi_1 = tslib_1.__importDefault(require_AuthAdminApi());
  exports.AuthAdminApi = AuthAdminApi_1.default;
  var AuthClient_1 = tslib_1.__importDefault(require_AuthClient());
  exports.AuthClient = AuthClient_1.default;
  tslib_1.__exportStar(require_types2(), exports);
  tslib_1.__exportStar(require_errors(), exports);
  var locks_1 = require_locks();
  Object.defineProperty(exports, "navigatorLock", { enumerable: true, get: function() {
    return locks_1.navigatorLock;
  } });
  Object.defineProperty(exports, "NavigatorLockAcquireTimeoutError", { enumerable: true, get: function() {
    return locks_1.NavigatorLockAcquireTimeoutError;
  } });
  Object.defineProperty(exports, "lockInternals", { enumerable: true, get: function() {
    return locks_1.internals;
  } });
  Object.defineProperty(exports, "processLock", { enumerable: true, get: function() {
    return locks_1.processLock;
  } });
});

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/log-rotation.ts
import { readdir, unlink } from "node:fs/promises";
import { join as join2 } from "node:path";

// src/config/constants.ts
import { homedir } from "node:os";
import { join } from "node:path";
var CLAUDE_INSTALL_DIR = process.env.CLAUDE_INSTALL_PATH || join(homedir(), ".claude");
var CLAUDE_PROJECTS_DIR = join(CLAUDE_INSTALL_DIR, "projects");
var CLAUDE_SETTINGS_FILE = join(CLAUDE_INSTALL_DIR, "settings.json");
var CLAUDE_ZEST_DIR = join(CLAUDE_INSTALL_DIR, "..", ".claude-zest");
var QUEUE_DIR = join(CLAUDE_ZEST_DIR, "queue");
var LOGS_DIR = join(CLAUDE_ZEST_DIR, "logs");
var STATE_DIR = join(CLAUDE_ZEST_DIR, "state");
var DELETION_CACHE_DIR = join(CLAUDE_ZEST_DIR, "cache", "deletions");
var SESSION_FILE = join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
var STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var PLATFORM = "terminal";
var SOURCE = "claude-code";
var LOCK_RETRY_MS = 50;
var LOCK_MAX_RETRIES = 300;
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var MIN_MESSAGES_PER_SESSION = 3;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var SUPABASE_URL = "https://fnnlebrtmlxxjwdvngck.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubmxlYnJ0bWx4eGp3ZHZuZ2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzA3MjYsImV4cCI6MjA3MjMwNjcyNn0.0IE3HCY_DiyyALdewbRn1vkedwzDW27NQMQ28V6j4Dk";
var ZEST_SESSION_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;

// src/utils/log-rotation.ts
var CLEANUP_THROTTLE_MS = 60 * 60 * 1000;
var lastCleanupTime = {};
function getDateString() {
  return new Date().toISOString().split("T")[0];
}
function getDatedLogPath(logPrefix) {
  const dateStr = getDateString();
  return join2(LOGS_DIR, `${logPrefix}-${dateStr}.log`);
}
function parseDateFromFilename(filename, logPrefix) {
  const pattern = new RegExp(`^${logPrefix}-(\\d{4}-\\d{2}-\\d{2})\\.log$`);
  const match = filename.match(pattern);
  if (!match) {
    return null;
  }
  const date = new Date(match[1] + "T00:00:00Z");
  return Number.isNaN(date.getTime()) ? null : date;
}
async function cleanupStaleLogs(logPrefix) {
  const now = Date.now();
  const lastCleanup = lastCleanupTime[logPrefix] || 0;
  if (now - lastCleanup < CLEANUP_THROTTLE_MS) {
    return;
  }
  lastCleanupTime[logPrefix] = now;
  try {
    await ensureDirectory(LOGS_DIR);
    const files = await readdir(LOGS_DIR);
    const cutoffDate = new Date(now - LOG_RETENTION_DAYS * 24 * 60 * 60 * 1000);
    for (const file of files) {
      const fileDate = parseDateFromFilename(file, logPrefix);
      if (fileDate && fileDate < cutoffDate) {
        const filePath = join2(LOGS_DIR, file);
        try {
          await unlink(filePath);
        } catch (error) {
          logger.error(`Failed to delete old log file ${file}`, error);
        }
      }
    }
  } catch (error) {
    logger.error("Failed to cleanup old logs", error);
  }
}

// src/utils/logger.ts
class Logger {
  minLevel = "info";
  logPrefix;
  levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  constructor(logPrefix = "plugin") {
    this.logPrefix = logPrefix;
  }
  setLevel(level) {
    this.minLevel = level;
  }
  async writeToFile(message) {
    try {
      const logFilePath = getDatedLogPath(this.logPrefix);
      await ensureDirectory(dirname(logFilePath));
      const timestamp = new Date().toISOString();
      await appendFile(logFilePath, `[${timestamp}] ${message}
`, "utf-8");
      cleanupStaleLogs(this.logPrefix);
    } catch (error) {
      console.error("Failed to write to log file:", error);
    }
  }
  shouldLog(level) {
    return this.levels[level] >= this.levels[this.minLevel];
  }
  debug(message, ...args) {
    if (this.shouldLog("debug")) {
      this.writeToFile(`DEBUG: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  info(message, ...args) {
    if (this.shouldLog("info")) {
      this.writeToFile(`INFO: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  warn(message, ...args) {
    if (this.shouldLog("warn")) {
      console.warn(`[Zest:Warn] ${message}`, ...args);
      this.writeToFile(`WARN: ${message} ${args.length > 0 ? JSON.stringify(args) : ""}`);
    }
  }
  error(message, error) {
    if (this.shouldLog("error")) {
      console.error(`[Zest:Error] ${message}`, error);
      this.writeToFile(`ERROR: ${message} ${error instanceof Error ? error.stack : JSON.stringify(error)}`);
    }
  }
}
var logger = new Logger;

// src/utils/queue-manager.ts
import { appendFile as appendFile2, readFile as readFile2, unlink as unlink3, writeFile as writeFile2 } from "node:fs/promises";
import { dirname as dirname4 } from "node:path";

// src/utils/file-lock.ts
import { readdir as readdir2, readFile, unlink as unlink2, writeFile } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";

// src/utils/daemon-manager.ts
import { dirname as dirname2, join as join3 } from "node:path";
import { fileURLToPath } from "node:url";
var DAEMON_RESTART_LOCK = join3(CLAUDE_ZEST_DIR, "daemon-restart.lock");
var __filename2 = fileURLToPath(import.meta.url);
var __dirname2 = dirname2(__filename2);
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

// src/utils/file-lock.ts
var activeLockFiles = new Set;
function isLockStale(lockInfo) {
  return !isProcessRunning(lockInfo.pid);
}
async function acquireFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  const lockInfo = {
    pid: process.pid,
    timestamp: Date.now()
  };
  try {
    await ensureDirectory(dirname3(lockFile));
    await writeFile(lockFile, JSON.stringify(lockInfo), { flag: "wx" });
    activeLockFiles.add(lockFile);
    return true;
  } catch (error) {
    if (error.code !== "EEXIST") {
      const errCode = error.code;
      if (errCode === "ENOENT" || errCode === "EACCES") {
        logger.error(`Failed to create lock file ${lockFile}:`, error);
      }
      throw error;
    }
    try {
      const content = await readFile(lockFile, "utf8");
      const existingLock = JSON.parse(content);
      if (isLockStale(existingLock)) {
        logger.debug(`Removing stale lock for ${filePath} (PID ${existingLock.pid} is dead)`);
        await unlink2(lockFile).catch(() => {});
        return acquireFileLock(filePath);
      }
    } catch {
      logger.debug(`Lock file for ${filePath} is corrupted or unreadable, removing`);
      await unlink2(lockFile).catch(() => {});
      return acquireFileLock(filePath);
    }
    return false;
  }
}
async function releaseFileLock(filePath) {
  const lockFile = `${filePath}.lock`;
  activeLockFiles.delete(lockFile);
  await unlink2(lockFile).catch(() => {});
}
async function withFileLock(filePath, fn) {
  let retries = 0;
  while (!await acquireFileLock(filePath)) {
    if (++retries >= LOCK_MAX_RETRIES) {
      throw new Error(`Failed to acquire lock for ${filePath} after ${retries} retries`);
    }
    await new Promise((resolve) => setTimeout(resolve, LOCK_RETRY_MS));
  }
  try {
    return await fn();
  } finally {
    await releaseFileLock(filePath);
  }
}

// src/utils/queue-manager.ts
async function readJsonl(filePath) {
  try {
    const content = await readFile2(filePath, "utf8");
    const lines = content.trim().split(`
`).filter(Boolean);
    const results = [];
    for (let i = 0;i < lines.length; i++) {
      try {
        results.push(JSON.parse(lines[i]));
      } catch (error) {
        logger.warn(`Failed to parse line ${i + 1} in ${filePath}:`, error);
      }
    }
    return results;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}
async function countLines(filePath) {
  try {
    const content = await readFile2(filePath, "utf8");
    const lines = content.trim().split(`
`).filter(Boolean);
    return lines.length;
  } catch (error) {
    if (error.code === "ENOENT") {
      return 0;
    }
    throw error;
  }
}
async function readQueue(queueFile) {
  try {
    return await readJsonl(queueFile);
  } catch (error) {
    logger.error(`Failed to read queue file ${queueFile}:`, error);
    throw error;
  }
}
async function atomicUpdateQueue(queueFile, transform) {
  try {
    await withFileLock(queueFile, async () => {
      const currentItems = await readJsonl(queueFile);
      const newItems = transform(currentItems);
      await ensureDirectory(dirname4(queueFile));
      const content = newItems.map((item) => JSON.stringify(item)).join(`
`) + (newItems.length > 0 ? `
` : "");
      await writeFile2(queueFile, content, "utf8");
      logger.debug(`Atomically updated queue file: ${queueFile} (${currentItems.length} → ${newItems.length} items)`);
    });
  } catch (error) {
    logger.error(`Failed to atomically update queue file ${queueFile}:`, error);
    throw error;
  }
}
async function getQueueStats() {
  try {
    await ensureDirectory(QUEUE_DIR);
    const [events, sessions, messages] = await Promise.all([
      countLines(EVENTS_QUEUE_FILE),
      countLines(SESSIONS_QUEUE_FILE),
      countLines(MESSAGES_QUEUE_FILE)
    ]);
    return { events, sessions, messages };
  } catch (error) {
    logger.error("Failed to get queue stats:", error);
    return { events: 0, sessions: 0, messages: 0 };
  }
}

// src/utils/status-cache-manager.ts
import { readFileSync, writeFileSync } from "node:fs";
var DEFAULT_VERSION_CHECK = {
  updateAvailable: false,
  currentVersion: "unknown",
  latestVersion: "unknown",
  checkedAt: 0
};
var DEFAULT_SYNC_STATUS = {
  hasError: false,
  errorType: null,
  errorMessage: null,
  lastErrorAt: null,
  lastSuccessAt: null
};
var DEFAULT_STATUS_CACHE = {
  versionCheck: DEFAULT_VERSION_CHECK,
  syncStatus: DEFAULT_SYNC_STATUS
};
function readStatusCache() {
  try {
    const data = readFileSync(STATUS_CACHE_FILE, "utf-8");
    const parsed = JSON.parse(data);
    if (parsed.updateAvailable !== undefined && !parsed.versionCheck) {
      logger.info("Migrating old update-check.json format to new status-cache.json format");
      const migrated = {
        versionCheck: {
          updateAvailable: parsed.updateAvailable ?? false,
          currentVersion: parsed.currentVersion ?? "unknown",
          latestVersion: parsed.latestVersion ?? "unknown",
          checkedAt: parsed.checkedAt ?? 0
        },
        syncStatus: DEFAULT_SYNC_STATUS
      };
      return migrated;
    }
    return {
      versionCheck: {
        ...DEFAULT_VERSION_CHECK,
        ...parsed.versionCheck
      },
      syncStatus: {
        ...DEFAULT_SYNC_STATUS,
        ...parsed.syncStatus
      }
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      logger.debug("Status cache file does not exist, using defaults");
    } else {
      logger.warn("Failed to read status cache file, using defaults", error);
    }
    return DEFAULT_STATUS_CACHE;
  }
}
async function writeSyncStatus(status) {
  try {
    await withFileLock(STATUS_CACHE_FILE, async () => {
      const currentCache = readStatusCache();
      const updatedCache = {
        ...currentCache,
        syncStatus: status
      };
      writeFileSync(STATUS_CACHE_FILE, JSON.stringify(updatedCache, null, 2), "utf-8");
      logger.debug("Wrote sync status to status cache", {
        hasError: status.hasError,
        errorType: status.errorType
      });
    });
  } catch (error) {
    logger.error("Failed to write sync status to status cache", error);
  }
}
async function clearSyncError() {
  try {
    await withFileLock(STATUS_CACHE_FILE, async () => {
      const currentCache = readStatusCache();
      const clearedStatus = {
        hasError: false,
        errorType: null,
        errorMessage: null,
        lastErrorAt: currentCache.syncStatus.lastErrorAt,
        lastSuccessAt: Date.now()
      };
      const updatedCache = {
        ...currentCache,
        syncStatus: clearedStatus
      };
      writeFileSync(STATUS_CACHE_FILE, JSON.stringify(updatedCache, null, 2), "utf-8");
      logger.debug("Cleared sync error in status cache");
    });
  } catch (error) {
    logger.error("Failed to clear sync error in status cache", error);
  }
}

// src/auth/session-manager.ts
import { readFile as readFile3, unlink as unlink4, writeFile as writeFile3 } from "node:fs/promises";
import { dirname as dirname5 } from "node:path";

// ../../node_modules/@supabase/supabase-js/dist/index.mjs
var exports_dist3 = {};
__export(exports_dist3, {
  createClient: () => createClient,
  SupabaseClient: () => SupabaseClient,
  PostgrestError: () => PostgrestError,
  FunctionsRelayError: () => import_functions_js.FunctionsRelayError,
  FunctionsHttpError: () => import_functions_js.FunctionsHttpError,
  FunctionsFetchError: () => import_functions_js.FunctionsFetchError,
  FunctionsError: () => import_functions_js.FunctionsError,
  FunctionRegion: () => import_functions_js.FunctionRegion
});
var import_functions_js = __toESM(require_main(), 1);

// ../../node_modules/@supabase/postgrest-js/dist/index.mjs
var exports_dist = {};
__export(exports_dist, {
  default: () => src_default,
  PostgrestTransformBuilder: () => PostgrestTransformBuilder,
  PostgrestQueryBuilder: () => PostgrestQueryBuilder,
  PostgrestFilterBuilder: () => PostgrestFilterBuilder,
  PostgrestError: () => PostgrestError,
  PostgrestClient: () => PostgrestClient,
  PostgrestBuilder: () => PostgrestBuilder
});
var PostgrestError = class extends Error {
  constructor(context) {
    super(context.message);
    this.name = "PostgrestError";
    this.details = context.details;
    this.hint = context.hint;
    this.code = context.code;
  }
};
var PostgrestBuilder = class {
  constructor(builder) {
    var _builder$shouldThrowO, _builder$isMaybeSingl;
    this.shouldThrowOnError = false;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = new Headers(builder.headers);
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== undefined ? _builder$shouldThrowO : false;
    this.signal = builder.signal;
    this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== undefined ? _builder$isMaybeSingl : false;
    if (builder.fetch)
      this.fetch = builder.fetch;
    else
      this.fetch = fetch;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(name, value) {
    this.headers = new Headers(this.headers);
    this.headers.set(name, value);
    return this;
  }
  then(onfulfilled, onrejected) {
    var _this = this;
    if (this.schema === undefined) {} else if (["GET", "HEAD"].includes(this.method))
      this.headers.set("Accept-Profile", this.schema);
    else
      this.headers.set("Content-Profile", this.schema);
    if (this.method !== "GET" && this.method !== "HEAD")
      this.headers.set("Content-Type", "application/json");
    const _fetch = this.fetch;
    let res = _fetch(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (res$1) => {
      let error = null;
      let data = null;
      let count = null;
      let status = res$1.status;
      let statusText = res$1.statusText;
      if (res$1.ok) {
        var _this$headers$get2, _res$headers$get;
        if (_this.method !== "HEAD") {
          var _this$headers$get;
          const body = await res$1.text();
          if (body === "") {} else if (_this.headers.get("Accept") === "text/csv")
            data = body;
          else if (_this.headers.get("Accept") && ((_this$headers$get = _this.headers.get("Accept")) === null || _this$headers$get === undefined ? undefined : _this$headers$get.includes("application/vnd.pgrst.plan+text")))
            data = body;
          else
            data = JSON.parse(body);
        }
        const countHeader = (_this$headers$get2 = _this.headers.get("Prefer")) === null || _this$headers$get2 === undefined ? undefined : _this$headers$get2.match(/count=(exact|planned|estimated)/);
        const contentRange = (_res$headers$get = res$1.headers.get("content-range")) === null || _res$headers$get === undefined ? undefined : _res$headers$get.split("/");
        if (countHeader && contentRange && contentRange.length > 1)
          count = parseInt(contentRange[1]);
        if (_this.isMaybeSingle && _this.method === "GET" && Array.isArray(data))
          if (data.length > 1) {
            error = {
              code: "PGRST116",
              details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            data = null;
            count = null;
            status = 406;
            statusText = "Not Acceptable";
          } else if (data.length === 1)
            data = data[0];
          else
            data = null;
      } else {
        var _error$details;
        const body = await res$1.text();
        try {
          error = JSON.parse(body);
          if (Array.isArray(error) && res$1.status === 404) {
            data = [];
            error = null;
            status = 200;
            statusText = "OK";
          }
        } catch (_unused) {
          if (res$1.status === 404 && body === "") {
            status = 204;
            statusText = "No Content";
          } else
            error = { message: body };
        }
        if (error && _this.isMaybeSingle && (error === null || error === undefined || (_error$details = error.details) === null || _error$details === undefined ? undefined : _error$details.includes("0 rows"))) {
          error = null;
          status = 200;
          statusText = "OK";
        }
        if (error && _this.shouldThrowOnError)
          throw new PostgrestError(error);
      }
      return {
        error,
        data,
        count,
        status,
        statusText
      };
    });
    if (!this.shouldThrowOnError)
      res = res.catch((fetchError) => {
        var _fetchError$name2;
        let errorDetails = "";
        const cause = fetchError === null || fetchError === undefined ? undefined : fetchError.cause;
        if (cause) {
          var _cause$message, _cause$code, _fetchError$name, _cause$name;
          const causeMessage = (_cause$message = cause === null || cause === undefined ? undefined : cause.message) !== null && _cause$message !== undefined ? _cause$message : "";
          const causeCode = (_cause$code = cause === null || cause === undefined ? undefined : cause.code) !== null && _cause$code !== undefined ? _cause$code : "";
          errorDetails = `${(_fetchError$name = fetchError === null || fetchError === undefined ? undefined : fetchError.name) !== null && _fetchError$name !== undefined ? _fetchError$name : "FetchError"}: ${fetchError === null || fetchError === undefined ? undefined : fetchError.message}`;
          errorDetails += `

Caused by: ${(_cause$name = cause === null || cause === undefined ? undefined : cause.name) !== null && _cause$name !== undefined ? _cause$name : "Error"}: ${causeMessage}`;
          if (causeCode)
            errorDetails += ` (${causeCode})`;
          if (cause === null || cause === undefined ? undefined : cause.stack)
            errorDetails += `
${cause.stack}`;
        } else {
          var _fetchError$stack;
          errorDetails = (_fetchError$stack = fetchError === null || fetchError === undefined ? undefined : fetchError.stack) !== null && _fetchError$stack !== undefined ? _fetchError$stack : "";
        }
        return {
          error: {
            message: `${(_fetchError$name2 = fetchError === null || fetchError === undefined ? undefined : fetchError.name) !== null && _fetchError$name2 !== undefined ? _fetchError$name2 : "FetchError"}: ${fetchError === null || fetchError === undefined ? undefined : fetchError.message}`,
            details: errorDetails,
            hint: "",
            code: ""
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    return res.then(onfulfilled, onrejected);
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var PostgrestTransformBuilder = class extends PostgrestBuilder {
  select(columns) {
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== undefined ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted)
        return "";
      if (c === '"')
        quoted = !quoted;
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.order` : "order";
    const existingOrder = this.url.searchParams.get(key);
    this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === undefined ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(key, `${count}`);
    return this;
  }
  range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
    const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
    const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
    this.url.searchParams.set(keyOffset, `${from}`);
    this.url.searchParams.set(keyLimit, `${to - from + 1}`);
    return this;
  }
  abortSignal(signal) {
    this.signal = signal;
    return this;
  }
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  maybeSingle() {
    if (this.method === "GET")
      this.headers.set("Accept", "application/json");
    else
      this.headers.set("Accept", "application/vnd.pgrst.object+json");
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
    var _this$headers$get;
    const options = [
      analyze ? "analyze" : null,
      verbose ? "verbose" : null,
      settings ? "settings" : null,
      buffers ? "buffers" : null,
      wal ? "wal" : null
    ].filter(Boolean).join("|");
    const forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== undefined ? _this$headers$get : "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
    if (format === "json")
      return this;
    else
      return this;
  }
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(value) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${value}`);
    return this;
  }
};
var PostgrestReservedCharsRegexp = /* @__PURE__ */ new RegExp("[,()]");
var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
  eq(column, value) {
    this.url.searchParams.append(column, `eq.${value}`);
    return this;
  }
  neq(column, value) {
    this.url.searchParams.append(column, `neq.${value}`);
    return this;
  }
  gt(column, value) {
    this.url.searchParams.append(column, `gt.${value}`);
    return this;
  }
  gte(column, value) {
    this.url.searchParams.append(column, `gte.${value}`);
    return this;
  }
  lt(column, value) {
    this.url.searchParams.append(column, `lt.${value}`);
    return this;
  }
  lte(column, value) {
    this.url.searchParams.append(column, `lte.${value}`);
    return this;
  }
  like(column, pattern) {
    this.url.searchParams.append(column, `like.${pattern}`);
    return this;
  }
  likeAllOf(column, patterns) {
    this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
    return this;
  }
  likeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
    return this;
  }
  ilike(column, pattern) {
    this.url.searchParams.append(column, `ilike.${pattern}`);
    return this;
  }
  ilikeAllOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
    return this;
  }
  ilikeAnyOf(column, patterns) {
    this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
    return this;
  }
  regexMatch(column, pattern) {
    this.url.searchParams.append(column, `match.${pattern}`);
    return this;
  }
  regexIMatch(column, pattern) {
    this.url.searchParams.append(column, `imatch.${pattern}`);
    return this;
  }
  is(column, value) {
    this.url.searchParams.append(column, `is.${value}`);
    return this;
  }
  isDistinct(column, value) {
    this.url.searchParams.append(column, `isdistinct.${value}`);
    return this;
  }
  in(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `in.(${cleanedValues})`);
    return this;
  }
  notIn(column, values) {
    const cleanedValues = Array.from(new Set(values)).map((s) => {
      if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s))
        return `"${s}"`;
      else
        return `${s}`;
    }).join(",");
    this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
    return this;
  }
  contains(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `cs.${value}`);
    else if (Array.isArray(value))
      this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
    else
      this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
    return this;
  }
  containedBy(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `cd.${value}`);
    else if (Array.isArray(value))
      this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
    else
      this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
    return this;
  }
  rangeGt(column, range) {
    this.url.searchParams.append(column, `sr.${range}`);
    return this;
  }
  rangeGte(column, range) {
    this.url.searchParams.append(column, `nxl.${range}`);
    return this;
  }
  rangeLt(column, range) {
    this.url.searchParams.append(column, `sl.${range}`);
    return this;
  }
  rangeLte(column, range) {
    this.url.searchParams.append(column, `nxr.${range}`);
    return this;
  }
  rangeAdjacent(column, range) {
    this.url.searchParams.append(column, `adj.${range}`);
    return this;
  }
  overlaps(column, value) {
    if (typeof value === "string")
      this.url.searchParams.append(column, `ov.${value}`);
    else
      this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
    return this;
  }
  textSearch(column, query, { config, type } = {}) {
    let typePart = "";
    if (type === "plain")
      typePart = "pl";
    else if (type === "phrase")
      typePart = "ph";
    else if (type === "websearch")
      typePart = "w";
    const configPart = config === undefined ? "" : `(${config})`;
    this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
    return this;
  }
  match(query) {
    Object.entries(query).forEach(([column, value]) => {
      this.url.searchParams.append(column, `eq.${value}`);
    });
    return this;
  }
  not(column, operator, value) {
    this.url.searchParams.append(column, `not.${operator}.${value}`);
    return this;
  }
  or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
    const key = referencedTable ? `${referencedTable}.or` : "or";
    this.url.searchParams.append(key, `(${filters})`);
    return this;
  }
  filter(column, operator, value) {
    this.url.searchParams.append(column, `${operator}.${value}`);
    return this;
  }
};
var PostgrestQueryBuilder = class {
  constructor(url, { headers = {}, schema, fetch: fetch$1 }) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch$1;
  }
  select(columns, options) {
    const { head = false, count } = options !== null && options !== undefined ? options : {};
    const method = head ? "HEAD" : "GET";
    let quoted = false;
    const cleanedColumns = (columns !== null && columns !== undefined ? columns : "*").split("").map((c) => {
      if (/\s/.test(c) && !quoted)
        return "";
      if (c === '"')
        quoted = !quoted;
      return c;
    }).join("");
    this.url.searchParams.set("select", cleanedColumns);
    if (count)
      this.headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch
    });
  }
  insert(values, { count, defaultToNull = true } = {}) {
    var _this$fetch;
    const method = "POST";
    if (count)
      this.headers.append("Prefer", `count=${count}`);
    if (!defaultToNull)
      this.headers.append("Prefer", `missing=default`);
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== undefined ? _this$fetch : fetch
    });
  }
  upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
    var _this$fetch2;
    const method = "POST";
    this.headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
    if (onConflict !== undefined)
      this.url.searchParams.set("on_conflict", onConflict);
    if (count)
      this.headers.append("Prefer", `count=${count}`);
    if (!defaultToNull)
      this.headers.append("Prefer", "missing=default");
    if (Array.isArray(values)) {
      const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
      if (columns.length > 0) {
        const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
        this.url.searchParams.set("columns", uniqueColumns.join(","));
      }
    }
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== undefined ? _this$fetch2 : fetch
    });
  }
  update(values, { count } = {}) {
    var _this$fetch3;
    const method = "PATCH";
    if (count)
      this.headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: values,
      fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== undefined ? _this$fetch3 : fetch
    });
  }
  delete({ count } = {}) {
    var _this$fetch4;
    const method = "DELETE";
    if (count)
      this.headers.append("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== undefined ? _this$fetch4 : fetch
    });
  }
};
var PostgrestClient = class PostgrestClient2 {
  constructor(url, { headers = {}, schema, fetch: fetch$1 } = {}) {
    this.url = url;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.fetch = fetch$1;
  }
  from(relation) {
    if (!relation || typeof relation !== "string" || relation.trim() === "")
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new PostgrestQueryBuilder(new URL(`${this.url}/${relation}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  schema(schema) {
    return new PostgrestClient2(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch
    });
  }
  rpc(fn, args = {}, { head = false, get = false, count } = {}) {
    var _this$fetch;
    let method;
    const url = new URL(`${this.url}/rpc/${fn}`);
    let body;
    if (head || get) {
      method = head ? "HEAD" : "GET";
      Object.entries(args).filter(([_, value]) => value !== undefined).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else {
      method = "POST";
      body = args;
    }
    const headers = new Headers(this.headers);
    if (count)
      headers.set("Prefer", `count=${count}`);
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== undefined ? _this$fetch : fetch
    });
  }
};
var src_default = {
  PostgrestClient,
  PostgrestQueryBuilder,
  PostgrestFilterBuilder,
  PostgrestTransformBuilder,
  PostgrestBuilder,
  PostgrestError
};

// ../../node_modules/@supabase/supabase-js/dist/index.mjs
var import_realtime_js = __toESM(require_main2(), 1);

// ../../node_modules/@supabase/storage-js/dist/index.mjs
var exports_dist2 = {};
__export(exports_dist2, {
  validateVectorDimension: () => validateVectorDimension,
  resolveResponse: () => resolveResponse,
  resolveFetch: () => resolveFetch,
  normalizeToFloat32: () => normalizeToFloat32,
  isStorageVectorsError: () => isStorageVectorsError,
  isStorageError: () => isStorageError,
  isPlainObject: () => isPlainObject,
  VectorIndexScope: () => VectorIndexScope,
  VectorIndexApi: () => VectorIndexApi,
  VectorDataApi: () => VectorDataApi,
  VectorBucketScope: () => VectorBucketScope,
  VectorBucketApi: () => VectorBucketApi,
  StorageVectorsUnknownError: () => StorageVectorsUnknownError,
  StorageVectorsErrorCode: () => StorageVectorsErrorCode,
  StorageVectorsError: () => StorageVectorsError,
  StorageVectorsClient: () => StorageVectorsClient,
  StorageVectorsApiError: () => StorageVectorsApiError,
  StorageUnknownError: () => StorageUnknownError,
  StorageError: () => StorageError,
  StorageClient: () => StorageClient,
  StorageApiError: () => StorageApiError,
  StorageAnalyticsClient: () => StorageAnalyticsClient
});

// ../../node_modules/iceberg-js/dist/index.mjs
var IcebergError = class extends Error {
  constructor(message, opts) {
    super(message);
    this.name = "IcebergError";
    this.status = opts.status;
    this.icebergType = opts.icebergType;
    this.icebergCode = opts.icebergCode;
    this.details = opts.details;
    this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function buildUrl(baseUrl, path, query) {
  const url = new URL(path, baseUrl);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        url.searchParams.set(key, value);
      }
    }
  }
  return url.toString();
}
async function buildAuthHeaders(auth) {
  if (!auth || auth.type === "none") {
    return {};
  }
  if (auth.type === "bearer") {
    return { Authorization: `Bearer ${auth.token}` };
  }
  if (auth.type === "header") {
    return { [auth.name]: auth.value };
  }
  if (auth.type === "custom") {
    return await auth.getHeaders();
  }
  return {};
}
function createFetchClient(options) {
  const fetchFn = options.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method,
      path,
      query,
      body,
      headers
    }) {
      const url = buildUrl(options.baseUrl, path, query);
      const authHeaders = await buildAuthHeaders(options.auth);
      const res = await fetchFn(url, {
        method,
        headers: {
          ...body ? { "Content-Type": "application/json" } : {},
          ...authHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      });
      const text = await res.text();
      const isJson = (res.headers.get("content-type") || "").includes("application/json");
      const data = isJson && text ? JSON.parse(text) : text;
      if (!res.ok) {
        const errBody = isJson ? data : undefined;
        const errorDetail = errBody?.error;
        throw new IcebergError(errorDetail?.message ?? `Request failed with status ${res.status}`, {
          status: res.status,
          icebergType: errorDetail?.type,
          icebergCode: errorDetail?.code,
          details: errBody
        });
      }
      return { status: res.status, headers: res.headers, data };
    }
  };
}
function namespaceToPath(namespace) {
  return namespace.join("\x1F");
}
var NamespaceOperations = class {
  constructor(client, prefix = "") {
    this.client = client;
    this.prefix = prefix;
  }
  async listNamespaces(parent) {
    const query = parent ? { parent: namespaceToPath(parent.namespace) } : undefined;
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query
    });
    return response.data.namespaces.map((ns) => ({ namespace: ns }));
  }
  async createNamespace(id, metadata) {
    const request = {
      namespace: id.namespace,
      properties: metadata?.properties
    };
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: request
    });
    return response.data;
  }
  async dropNamespace(id) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
    });
  }
  async loadNamespaceMetadata(id) {
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
    });
    return {
      properties: response.data.properties
    };
  }
  async namespaceExists(id) {
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
      });
      return true;
    } catch (error) {
      if (error instanceof IcebergError && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createNamespaceIfNotExists(id, metadata) {
    try {
      return await this.createNamespace(id, metadata);
    } catch (error) {
      if (error instanceof IcebergError && error.status === 409) {
        return;
      }
      throw error;
    }
  }
};
function namespaceToPath2(namespace) {
  return namespace.join("\x1F");
}
var TableOperations = class {
  constructor(client, prefix = "", accessDelegation) {
    this.client = client;
    this.prefix = prefix;
    this.accessDelegation = accessDelegation;
  }
  async listTables(namespace) {
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
    });
    return response.data.identifiers;
  }
  async createTable(namespace, request) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
      body: request,
      headers
    });
    return response.data.metadata;
  }
  async updateTable(id, request) {
    const response = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      body: request
    });
    return {
      "metadata-location": response.data["metadata-location"],
      metadata: response.data.metadata
    };
  }
  async dropTable(id, options) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      query: { purgeRequested: String(options?.purge ?? false) }
    });
  }
  async loadTable(id) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    const response = await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
      headers
    });
    return response.data.metadata;
  }
  async tableExists(id) {
    const headers = {};
    if (this.accessDelegation) {
      headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
        headers
      });
      return true;
    } catch (error) {
      if (error instanceof IcebergError && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createTableIfNotExists(namespace, request) {
    try {
      return await this.createTable(namespace, request);
    } catch (error) {
      if (error instanceof IcebergError && error.status === 409) {
        return await this.loadTable({ namespace: namespace.namespace, name: request.name });
      }
      throw error;
    }
  }
};
var IcebergRestCatalog = class {
  constructor(options) {
    let prefix = "v1";
    if (options.catalogName) {
      prefix += `/${options.catalogName}`;
    }
    const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
    this.client = createFetchClient({
      baseUrl,
      auth: options.auth,
      fetchImpl: options.fetch
    });
    this.accessDelegation = options.accessDelegation?.join(",");
    this.namespaceOps = new NamespaceOperations(this.client, prefix);
    this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
  }
  async listNamespaces(parent) {
    return this.namespaceOps.listNamespaces(parent);
  }
  async createNamespace(id, metadata) {
    return this.namespaceOps.createNamespace(id, metadata);
  }
  async dropNamespace(id) {
    await this.namespaceOps.dropNamespace(id);
  }
  async loadNamespaceMetadata(id) {
    return this.namespaceOps.loadNamespaceMetadata(id);
  }
  async listTables(namespace) {
    return this.tableOps.listTables(namespace);
  }
  async createTable(namespace, request) {
    return this.tableOps.createTable(namespace, request);
  }
  async updateTable(id, request) {
    return this.tableOps.updateTable(id, request);
  }
  async dropTable(id, options) {
    await this.tableOps.dropTable(id, options);
  }
  async loadTable(id) {
    return this.tableOps.loadTable(id);
  }
  async namespaceExists(id) {
    return this.namespaceOps.namespaceExists(id);
  }
  async tableExists(id) {
    return this.tableOps.tableExists(id);
  }
  async createNamespaceIfNotExists(id, metadata) {
    return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
  }
  async createTableIfNotExists(namespace, request) {
    return this.tableOps.createTableIfNotExists(namespace, request);
  }
};

// ../../node_modules/@supabase/storage-js/dist/index.mjs
var StorageError = class extends Error {
  constructor(message) {
    super(message);
    this.__isStorageError = true;
    this.name = "StorageError";
  }
};
function isStorageError(error) {
  return typeof error === "object" && error !== null && "__isStorageError" in error;
}
var StorageApiError = class extends StorageError {
  constructor(message, status, statusCode) {
    super(message);
    this.name = "StorageApiError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
var StorageUnknownError = class extends StorageError {
  constructor(message, originalError) {
    super(message);
    this.name = "StorageUnknownError";
    this.originalError = originalError;
  }
};
var resolveFetch$1 = (customFetch) => {
  if (customFetch)
    return (...args) => customFetch(...args);
  return (...args) => fetch(...args);
};
var resolveResponse$1 = () => {
  return Response;
};
var recursiveToCamel = (item) => {
  if (Array.isArray(item))
    return item.map((el) => recursiveToCamel(el));
  else if (typeof item === "function" || item !== Object(item))
    return item;
  const result = {};
  Object.entries(item).forEach(([key, value]) => {
    const newKey = key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, ""));
    result[newKey] = recursiveToCamel(value);
  });
  return result;
};
var isPlainObject$1 = (value) => {
  if (typeof value !== "object" || value === null)
    return false;
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
var isValidBucketName = (bucketName) => {
  if (!bucketName || typeof bucketName !== "string")
    return false;
  if (bucketName.length === 0 || bucketName.length > 100)
    return false;
  if (bucketName.trim() !== bucketName)
    return false;
  if (bucketName.includes("/") || bucketName.includes("\\"))
    return false;
  return /^[\w!.\*'() &$@=;:+,?-]+$/.test(bucketName);
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
    return typeof o$1;
  } : function(o$1) {
    return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if (_typeof(t) != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (_typeof(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return _typeof(i) == "symbol" ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
      _defineProperty(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var _getErrorMessage$1 = (err) => {
  var _err$error;
  return err.msg || err.message || err.error_description || (typeof err.error === "string" ? err.error : (_err$error = err.error) === null || _err$error === undefined ? undefined : _err$error.message) || JSON.stringify(err);
};
var handleError$1 = async (error, reject, options) => {
  if (error instanceof await resolveResponse$1() && !(options === null || options === undefined ? undefined : options.noResolveJson))
    error.json().then((err) => {
      const status = error.status || 500;
      const statusCode = (err === null || err === undefined ? undefined : err.statusCode) || status + "";
      reject(new StorageApiError(_getErrorMessage$1(err), status, statusCode));
    }).catch((err) => {
      reject(new StorageUnknownError(_getErrorMessage$1(err), err));
    });
  else
    reject(new StorageUnknownError(_getErrorMessage$1(error), error));
};
var _getRequestParams$1 = (method, options, parameters, body) => {
  const params = {
    method,
    headers: (options === null || options === undefined ? undefined : options.headers) || {}
  };
  if (method === "GET" || !body)
    return params;
  if (isPlainObject$1(body)) {
    params.headers = _objectSpread2({ "Content-Type": "application/json" }, options === null || options === undefined ? undefined : options.headers);
    params.body = JSON.stringify(body);
  } else
    params.body = body;
  if (options === null || options === undefined ? undefined : options.duplex)
    params.duplex = options.duplex;
  return _objectSpread2(_objectSpread2({}, params), parameters);
};
async function _handleRequest$1(fetcher, method, url, options, parameters, body) {
  return new Promise((resolve, reject) => {
    fetcher(url, _getRequestParams$1(method, options, parameters, body)).then((result) => {
      if (!result.ok)
        throw result;
      if (options === null || options === undefined ? undefined : options.noResolveJson)
        return result;
      return result.json();
    }).then((data) => resolve(data)).catch((error) => handleError$1(error, reject, options));
  });
}
async function get(fetcher, url, options, parameters) {
  return _handleRequest$1(fetcher, "GET", url, options, parameters);
}
async function post$1(fetcher, url, body, options, parameters) {
  return _handleRequest$1(fetcher, "POST", url, options, parameters, body);
}
async function put(fetcher, url, body, options, parameters) {
  return _handleRequest$1(fetcher, "PUT", url, options, parameters, body);
}
async function head(fetcher, url, options, parameters) {
  return _handleRequest$1(fetcher, "HEAD", url, _objectSpread2(_objectSpread2({}, options), {}, { noResolveJson: true }), parameters);
}
async function remove(fetcher, url, body, options, parameters) {
  return _handleRequest$1(fetcher, "DELETE", url, options, parameters, body);
}
var StreamDownloadBuilder = class {
  constructor(downloadFn, shouldThrowOnError) {
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
  }
  then(onfulfilled, onrejected) {
    return this.execute().then(onfulfilled, onrejected);
  }
  async execute() {
    var _this = this;
    try {
      return {
        data: (await _this.downloadFn()).body,
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var _Symbol$toStringTag;
_Symbol$toStringTag = Symbol.toStringTag;
var BlobDownloadBuilder = class {
  constructor(downloadFn, shouldThrowOnError) {
    this.downloadFn = downloadFn;
    this.shouldThrowOnError = shouldThrowOnError;
    this[_Symbol$toStringTag] = "BlobDownloadBuilder";
    this.promise = null;
  }
  asStream() {
    return new StreamDownloadBuilder(this.downloadFn, this.shouldThrowOnError);
  }
  then(onfulfilled, onrejected) {
    return this.getPromise().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.getPromise().catch(onrejected);
  }
  finally(onfinally) {
    return this.getPromise().finally(onfinally);
  }
  getPromise() {
    if (!this.promise)
      this.promise = this.execute();
    return this.promise;
  }
  async execute() {
    var _this = this;
    try {
      return {
        data: await (await _this.downloadFn()).blob(),
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var StorageFileApi = class {
  constructor(url, headers = {}, bucketId, fetch$1) {
    this.shouldThrowOnError = false;
    this.url = url;
    this.headers = headers;
    this.bucketId = bucketId;
    this.fetch = resolveFetch$1(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async uploadOrUpdate(method, path, fileBody, fileOptions) {
    var _this = this;
    try {
      let body;
      const options = _objectSpread2(_objectSpread2({}, DEFAULT_FILE_OPTIONS), fileOptions);
      let headers = _objectSpread2(_objectSpread2({}, _this.headers), method === "POST" && { "x-upsert": String(options.upsert) });
      const metadata = options.metadata;
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData;
        body.append("cacheControl", options.cacheControl);
        if (metadata)
          body.append("metadata", _this.encodeMetadata(metadata));
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        if (!body.has("cacheControl"))
          body.append("cacheControl", options.cacheControl);
        if (metadata && !body.has("metadata"))
          body.append("metadata", _this.encodeMetadata(metadata));
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
        if (metadata)
          headers["x-metadata"] = _this.toBase64(_this.encodeMetadata(metadata));
        if ((typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && ("pipe" in body) && typeof body.pipe === "function") && !options.duplex)
          options.duplex = "half";
      }
      if (fileOptions === null || fileOptions === undefined ? undefined : fileOptions.headers)
        headers = _objectSpread2(_objectSpread2({}, headers), fileOptions.headers);
      const cleanPath = _this._removeEmptyFolders(path);
      const _path = _this._getFinalPath(cleanPath);
      const data = await (method == "PUT" ? put : post$1)(_this.fetch, `${_this.url}/object/${_path}`, body, _objectSpread2({ headers }, (options === null || options === undefined ? undefined : options.duplex) ? { duplex: options.duplex } : {}));
      return {
        data: {
          path: cleanPath,
          id: data.Id,
          fullPath: data.Key
        },
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async upload(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
  }
  async uploadToSignedUrl(path, token, fileBody, fileOptions) {
    var _this3 = this;
    const cleanPath = _this3._removeEmptyFolders(path);
    const _path = _this3._getFinalPath(cleanPath);
    const url = new URL(_this3.url + `/object/upload/sign/${_path}`);
    url.searchParams.set("token", token);
    try {
      let body;
      const options = _objectSpread2({ upsert: DEFAULT_FILE_OPTIONS.upsert }, fileOptions);
      const headers = _objectSpread2(_objectSpread2({}, _this3.headers), { "x-upsert": String(options.upsert) });
      if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
        body = new FormData;
        body.append("cacheControl", options.cacheControl);
        body.append("", fileBody);
      } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
        body = fileBody;
        body.append("cacheControl", options.cacheControl);
      } else {
        body = fileBody;
        headers["cache-control"] = `max-age=${options.cacheControl}`;
        headers["content-type"] = options.contentType;
      }
      return {
        data: {
          path: cleanPath,
          fullPath: (await put(_this3.fetch, url.toString(), body, { headers })).Key
        },
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async createSignedUploadUrl(path, options) {
    var _this4 = this;
    try {
      let _path = _this4._getFinalPath(path);
      const headers = _objectSpread2({}, _this4.headers);
      if (options === null || options === undefined ? undefined : options.upsert)
        headers["x-upsert"] = "true";
      const data = await post$1(_this4.fetch, `${_this4.url}/object/upload/sign/${_path}`, {}, { headers });
      const url = new URL(_this4.url + data.url);
      const token = url.searchParams.get("token");
      if (!token)
        throw new StorageError("No token returned by API");
      return {
        data: {
          signedUrl: url.toString(),
          path,
          token
        },
        error: null
      };
    } catch (error) {
      if (_this4.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async update(path, fileBody, fileOptions) {
    return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
  }
  async move(fromPath, toPath, options) {
    var _this6 = this;
    try {
      return {
        data: await post$1(_this6.fetch, `${_this6.url}/object/move`, {
          bucketId: _this6.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === undefined ? undefined : options.destinationBucket
        }, { headers: _this6.headers }),
        error: null
      };
    } catch (error) {
      if (_this6.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async copy(fromPath, toPath, options) {
    var _this7 = this;
    try {
      return {
        data: { path: (await post$1(_this7.fetch, `${_this7.url}/object/copy`, {
          bucketId: _this7.bucketId,
          sourceKey: fromPath,
          destinationKey: toPath,
          destinationBucket: options === null || options === undefined ? undefined : options.destinationBucket
        }, { headers: _this7.headers })).Key },
        error: null
      };
    } catch (error) {
      if (_this7.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async createSignedUrl(path, expiresIn, options) {
    var _this8 = this;
    try {
      let _path = _this8._getFinalPath(path);
      let data = await post$1(_this8.fetch, `${_this8.url}/object/sign/${_path}`, _objectSpread2({ expiresIn }, (options === null || options === undefined ? undefined : options.transform) ? { transform: options.transform } : {}), { headers: _this8.headers });
      const downloadQueryParam = (options === null || options === undefined ? undefined : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
      data = { signedUrl: encodeURI(`${_this8.url}${data.signedURL}${downloadQueryParam}`) };
      return {
        data,
        error: null
      };
    } catch (error) {
      if (_this8.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async createSignedUrls(paths, expiresIn, options) {
    var _this9 = this;
    try {
      const data = await post$1(_this9.fetch, `${_this9.url}/object/sign/${_this9.bucketId}`, {
        expiresIn,
        paths
      }, { headers: _this9.headers });
      const downloadQueryParam = (options === null || options === undefined ? undefined : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
      return {
        data: data.map((datum) => _objectSpread2(_objectSpread2({}, datum), {}, { signedUrl: datum.signedURL ? encodeURI(`${_this9.url}${datum.signedURL}${downloadQueryParam}`) : null })),
        error: null
      };
    } catch (error) {
      if (_this9.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  download(path, options) {
    const renderPath = typeof (options === null || options === undefined ? undefined : options.transform) !== "undefined" ? "render/image/authenticated" : "object";
    const transformationQuery = this.transformOptsToQueryString((options === null || options === undefined ? undefined : options.transform) || {});
    const queryString = transformationQuery ? `?${transformationQuery}` : "";
    const _path = this._getFinalPath(path);
    const downloadFn = () => get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
      headers: this.headers,
      noResolveJson: true
    });
    return new BlobDownloadBuilder(downloadFn, this.shouldThrowOnError);
  }
  async info(path) {
    var _this10 = this;
    const _path = _this10._getFinalPath(path);
    try {
      return {
        data: recursiveToCamel(await get(_this10.fetch, `${_this10.url}/object/info/${_path}`, { headers: _this10.headers })),
        error: null
      };
    } catch (error) {
      if (_this10.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async exists(path) {
    var _this11 = this;
    const _path = _this11._getFinalPath(path);
    try {
      await head(_this11.fetch, `${_this11.url}/object/${_path}`, { headers: _this11.headers });
      return {
        data: true,
        error: null
      };
    } catch (error) {
      if (_this11.shouldThrowOnError)
        throw error;
      if (isStorageError(error) && error instanceof StorageUnknownError) {
        const originalError = error.originalError;
        if ([400, 404].includes(originalError === null || originalError === undefined ? undefined : originalError.status))
          return {
            data: false,
            error
          };
      }
      throw error;
    }
  }
  getPublicUrl(path, options) {
    const _path = this._getFinalPath(path);
    const _queryString = [];
    const downloadQueryParam = (options === null || options === undefined ? undefined : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
    if (downloadQueryParam !== "")
      _queryString.push(downloadQueryParam);
    const renderPath = typeof (options === null || options === undefined ? undefined : options.transform) !== "undefined" ? "render/image" : "object";
    const transformationQuery = this.transformOptsToQueryString((options === null || options === undefined ? undefined : options.transform) || {});
    if (transformationQuery !== "")
      _queryString.push(transformationQuery);
    let queryString = _queryString.join("&");
    if (queryString !== "")
      queryString = `?${queryString}`;
    return { data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`) } };
  }
  async remove(paths) {
    var _this12 = this;
    try {
      return {
        data: await remove(_this12.fetch, `${_this12.url}/object/${_this12.bucketId}`, { prefixes: paths }, { headers: _this12.headers }),
        error: null
      };
    } catch (error) {
      if (_this12.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async list(path, options, parameters) {
    var _this13 = this;
    try {
      const body = _objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_SEARCH_OPTIONS), options), {}, { prefix: path || "" });
      return {
        data: await post$1(_this13.fetch, `${_this13.url}/object/list/${_this13.bucketId}`, body, { headers: _this13.headers }, parameters),
        error: null
      };
    } catch (error) {
      if (_this13.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async listV2(options, parameters) {
    var _this14 = this;
    try {
      const body = _objectSpread2({}, options);
      return {
        data: await post$1(_this14.fetch, `${_this14.url}/object/list-v2/${_this14.bucketId}`, body, { headers: _this14.headers }, parameters),
        error: null
      };
    } catch (error) {
      if (_this14.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  encodeMetadata(metadata) {
    return JSON.stringify(metadata);
  }
  toBase64(data) {
    if (typeof Buffer !== "undefined")
      return Buffer.from(data).toString("base64");
    return btoa(data);
  }
  _getFinalPath(path) {
    return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(path) {
    return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(transform) {
    const params = [];
    if (transform.width)
      params.push(`width=${transform.width}`);
    if (transform.height)
      params.push(`height=${transform.height}`);
    if (transform.resize)
      params.push(`resize=${transform.resize}`);
    if (transform.format)
      params.push(`format=${transform.format}`);
    if (transform.quality)
      params.push(`quality=${transform.quality}`);
    return params.join("&");
  }
};
var version = "2.89.0";
var DEFAULT_HEADERS$1 = { "X-Client-Info": `storage-js/${version}` };
var StorageBucketApi = class {
  constructor(url, headers = {}, fetch$1, opts) {
    this.shouldThrowOnError = false;
    const baseUrl = new URL(url);
    if (opts === null || opts === undefined ? undefined : opts.useNewHostname) {
      if (/supabase\.(co|in|red)$/.test(baseUrl.hostname) && !baseUrl.hostname.includes("storage.supabase."))
        baseUrl.hostname = baseUrl.hostname.replace("supabase.", "storage.supabase.");
    }
    this.url = baseUrl.href.replace(/\/$/, "");
    this.headers = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS$1), headers);
    this.fetch = resolveFetch$1(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async listBuckets(options) {
    var _this = this;
    try {
      const queryString = _this.listBucketOptionsToQueryString(options);
      return {
        data: await get(_this.fetch, `${_this.url}/bucket${queryString}`, { headers: _this.headers }),
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async getBucket(id) {
    var _this2 = this;
    try {
      return {
        data: await get(_this2.fetch, `${_this2.url}/bucket/${id}`, { headers: _this2.headers }),
        error: null
      };
    } catch (error) {
      if (_this2.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async createBucket(id, options = { public: false }) {
    var _this3 = this;
    try {
      return {
        data: await post$1(_this3.fetch, `${_this3.url}/bucket`, {
          id,
          name: id,
          type: options.type,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: _this3.headers }),
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async updateBucket(id, options) {
    var _this4 = this;
    try {
      return {
        data: await put(_this4.fetch, `${_this4.url}/bucket/${id}`, {
          id,
          name: id,
          public: options.public,
          file_size_limit: options.fileSizeLimit,
          allowed_mime_types: options.allowedMimeTypes
        }, { headers: _this4.headers }),
        error: null
      };
    } catch (error) {
      if (_this4.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async emptyBucket(id) {
    var _this5 = this;
    try {
      return {
        data: await post$1(_this5.fetch, `${_this5.url}/bucket/${id}/empty`, {}, { headers: _this5.headers }),
        error: null
      };
    } catch (error) {
      if (_this5.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async deleteBucket(id) {
    var _this6 = this;
    try {
      return {
        data: await remove(_this6.fetch, `${_this6.url}/bucket/${id}`, {}, { headers: _this6.headers }),
        error: null
      };
    } catch (error) {
      if (_this6.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  listBucketOptionsToQueryString(options) {
    const params = {};
    if (options) {
      if ("limit" in options)
        params.limit = String(options.limit);
      if ("offset" in options)
        params.offset = String(options.offset);
      if (options.search)
        params.search = options.search;
      if (options.sortColumn)
        params.sortColumn = options.sortColumn;
      if (options.sortOrder)
        params.sortOrder = options.sortOrder;
    }
    return Object.keys(params).length > 0 ? "?" + new URLSearchParams(params).toString() : "";
  }
};
var StorageAnalyticsClient = class {
  constructor(url, headers = {}, fetch$1) {
    this.shouldThrowOnError = false;
    this.url = url.replace(/\/$/, "");
    this.headers = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS$1), headers);
    this.fetch = resolveFetch$1(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async createBucket(name) {
    var _this = this;
    try {
      return {
        data: await post$1(_this.fetch, `${_this.url}/bucket`, { name }, { headers: _this.headers }),
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async listBuckets(options) {
    var _this2 = this;
    try {
      const queryParams = new URLSearchParams;
      if ((options === null || options === undefined ? undefined : options.limit) !== undefined)
        queryParams.set("limit", options.limit.toString());
      if ((options === null || options === undefined ? undefined : options.offset) !== undefined)
        queryParams.set("offset", options.offset.toString());
      if (options === null || options === undefined ? undefined : options.sortColumn)
        queryParams.set("sortColumn", options.sortColumn);
      if (options === null || options === undefined ? undefined : options.sortOrder)
        queryParams.set("sortOrder", options.sortOrder);
      if (options === null || options === undefined ? undefined : options.search)
        queryParams.set("search", options.search);
      const queryString = queryParams.toString();
      const url = queryString ? `${_this2.url}/bucket?${queryString}` : `${_this2.url}/bucket`;
      return {
        data: await get(_this2.fetch, url, { headers: _this2.headers }),
        error: null
      };
    } catch (error) {
      if (_this2.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async deleteBucket(bucketName) {
    var _this3 = this;
    try {
      return {
        data: await remove(_this3.fetch, `${_this3.url}/bucket/${bucketName}`, {}, { headers: _this3.headers }),
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  from(bucketName) {
    var _this4 = this;
    if (!isValidBucketName(bucketName))
      throw new StorageError("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const catalog = new IcebergRestCatalog({
      baseUrl: this.url,
      catalogName: bucketName,
      auth: {
        type: "custom",
        getHeaders: async () => _this4.headers
      },
      fetch: this.fetch
    });
    const shouldThrowOnError = this.shouldThrowOnError;
    return new Proxy(catalog, { get(target, prop) {
      const value = target[prop];
      if (typeof value !== "function")
        return value;
      return async (...args) => {
        try {
          return {
            data: await value.apply(target, args),
            error: null
          };
        } catch (error) {
          if (shouldThrowOnError)
            throw error;
          return {
            data: null,
            error
          };
        }
      };
    } });
  }
};
var DEFAULT_HEADERS = {
  "X-Client-Info": `storage-js/${version}`,
  "Content-Type": "application/json"
};
var StorageVectorsError = class extends Error {
  constructor(message) {
    super(message);
    this.__isStorageVectorsError = true;
    this.name = "StorageVectorsError";
  }
};
function isStorageVectorsError(error) {
  return typeof error === "object" && error !== null && "__isStorageVectorsError" in error;
}
var StorageVectorsApiError = class extends StorageVectorsError {
  constructor(message, status, statusCode) {
    super(message);
    this.name = "StorageVectorsApiError";
    this.status = status;
    this.statusCode = statusCode;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
var StorageVectorsUnknownError = class extends StorageVectorsError {
  constructor(message, originalError) {
    super(message);
    this.name = "StorageVectorsUnknownError";
    this.originalError = originalError;
  }
};
var StorageVectorsErrorCode = /* @__PURE__ */ function(StorageVectorsErrorCode$1) {
  StorageVectorsErrorCode$1["InternalError"] = "InternalError";
  StorageVectorsErrorCode$1["S3VectorConflictException"] = "S3VectorConflictException";
  StorageVectorsErrorCode$1["S3VectorNotFoundException"] = "S3VectorNotFoundException";
  StorageVectorsErrorCode$1["S3VectorBucketNotEmpty"] = "S3VectorBucketNotEmpty";
  StorageVectorsErrorCode$1["S3VectorMaxBucketsExceeded"] = "S3VectorMaxBucketsExceeded";
  StorageVectorsErrorCode$1["S3VectorMaxIndexesExceeded"] = "S3VectorMaxIndexesExceeded";
  return StorageVectorsErrorCode$1;
}({});
var resolveFetch = (customFetch) => {
  if (customFetch)
    return (...args) => customFetch(...args);
  return (...args) => fetch(...args);
};
var resolveResponse = () => {
  return Response;
};
var isPlainObject = (value) => {
  if (typeof value !== "object" || value === null)
    return false;
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
var normalizeToFloat32 = (values) => {
  return Array.from(new Float32Array(values));
};
var validateVectorDimension = (vector, expectedDimension) => {
  if (expectedDimension !== undefined && vector.float32.length !== expectedDimension)
    throw new Error(`Vector dimension mismatch: expected ${expectedDimension}, got ${vector.float32.length}`);
};
var _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
var handleError = async (error, reject, options) => {
  if (error && typeof error === "object" && "status" in error && "ok" in error && typeof error.status === "number" && !(options === null || options === undefined ? undefined : options.noResolveJson)) {
    const status = error.status || 500;
    const responseError = error;
    if (typeof responseError.json === "function")
      responseError.json().then((err) => {
        const statusCode = (err === null || err === undefined ? undefined : err.statusCode) || (err === null || err === undefined ? undefined : err.code) || status + "";
        reject(new StorageVectorsApiError(_getErrorMessage(err), status, statusCode));
      }).catch(() => {
        const statusCode = status + "";
        reject(new StorageVectorsApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode));
      });
    else {
      const statusCode = status + "";
      reject(new StorageVectorsApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode));
    }
  } else
    reject(new StorageVectorsUnknownError(_getErrorMessage(error), error));
};
var _getRequestParams = (method, options, parameters, body) => {
  const params = {
    method,
    headers: (options === null || options === undefined ? undefined : options.headers) || {}
  };
  if (method === "GET" || !body)
    return params;
  if (isPlainObject(body)) {
    params.headers = _objectSpread2({ "Content-Type": "application/json" }, options === null || options === undefined ? undefined : options.headers);
    params.body = JSON.stringify(body);
  } else
    params.body = body;
  return _objectSpread2(_objectSpread2({}, params), parameters);
};
async function _handleRequest(fetcher, method, url, options, parameters, body) {
  return new Promise((resolve, reject) => {
    fetcher(url, _getRequestParams(method, options, parameters, body)).then((result) => {
      if (!result.ok)
        throw result;
      if (options === null || options === undefined ? undefined : options.noResolveJson)
        return result;
      const contentType = result.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json"))
        return {};
      return result.json();
    }).then((data) => resolve(data)).catch((error) => handleError(error, reject, options));
  });
}
async function post(fetcher, url, body, options, parameters) {
  return _handleRequest(fetcher, "POST", url, options, parameters, body);
}
var VectorIndexApi = class {
  constructor(url, headers = {}, fetch$1) {
    this.shouldThrowOnError = false;
    this.url = url.replace(/\/$/, "");
    this.headers = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), headers);
    this.fetch = resolveFetch(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async createIndex(options) {
    var _this = this;
    try {
      return {
        data: await post(_this.fetch, `${_this.url}/CreateIndex`, options, { headers: _this.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async getIndex(vectorBucketName, indexName) {
    var _this2 = this;
    try {
      return {
        data: await post(_this2.fetch, `${_this2.url}/GetIndex`, {
          vectorBucketName,
          indexName
        }, { headers: _this2.headers }),
        error: null
      };
    } catch (error) {
      if (_this2.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async listIndexes(options) {
    var _this3 = this;
    try {
      return {
        data: await post(_this3.fetch, `${_this3.url}/ListIndexes`, options, { headers: _this3.headers }),
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async deleteIndex(vectorBucketName, indexName) {
    var _this4 = this;
    try {
      return {
        data: await post(_this4.fetch, `${_this4.url}/DeleteIndex`, {
          vectorBucketName,
          indexName
        }, { headers: _this4.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this4.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var VectorDataApi = class {
  constructor(url, headers = {}, fetch$1) {
    this.shouldThrowOnError = false;
    this.url = url.replace(/\/$/, "");
    this.headers = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), headers);
    this.fetch = resolveFetch(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async putVectors(options) {
    var _this = this;
    try {
      if (options.vectors.length < 1 || options.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return {
        data: await post(_this.fetch, `${_this.url}/PutVectors`, options, { headers: _this.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async getVectors(options) {
    var _this2 = this;
    try {
      return {
        data: await post(_this2.fetch, `${_this2.url}/GetVectors`, options, { headers: _this2.headers }),
        error: null
      };
    } catch (error) {
      if (_this2.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async listVectors(options) {
    var _this3 = this;
    try {
      if (options.segmentCount !== undefined) {
        if (options.segmentCount < 1 || options.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (options.segmentIndex !== undefined) {
          if (options.segmentIndex < 0 || options.segmentIndex >= options.segmentCount)
            throw new Error(`segmentIndex must be between 0 and ${options.segmentCount - 1}`);
        }
      }
      return {
        data: await post(_this3.fetch, `${_this3.url}/ListVectors`, options, { headers: _this3.headers }),
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async queryVectors(options) {
    var _this4 = this;
    try {
      return {
        data: await post(_this4.fetch, `${_this4.url}/QueryVectors`, options, { headers: _this4.headers }),
        error: null
      };
    } catch (error) {
      if (_this4.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async deleteVectors(options) {
    var _this5 = this;
    try {
      if (options.keys.length < 1 || options.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return {
        data: await post(_this5.fetch, `${_this5.url}/DeleteVectors`, options, { headers: _this5.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this5.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var VectorBucketApi = class {
  constructor(url, headers = {}, fetch$1) {
    this.shouldThrowOnError = false;
    this.url = url.replace(/\/$/, "");
    this.headers = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), headers);
    this.fetch = resolveFetch(fetch$1);
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  async createBucket(vectorBucketName) {
    var _this = this;
    try {
      return {
        data: await post(_this.fetch, `${_this.url}/CreateVectorBucket`, { vectorBucketName }, { headers: _this.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async getBucket(vectorBucketName) {
    var _this2 = this;
    try {
      return {
        data: await post(_this2.fetch, `${_this2.url}/GetVectorBucket`, { vectorBucketName }, { headers: _this2.headers }),
        error: null
      };
    } catch (error) {
      if (_this2.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async listBuckets(options = {}) {
    var _this3 = this;
    try {
      return {
        data: await post(_this3.fetch, `${_this3.url}/ListVectorBuckets`, options, { headers: _this3.headers }),
        error: null
      };
    } catch (error) {
      if (_this3.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
  async deleteBucket(vectorBucketName) {
    var _this4 = this;
    try {
      return {
        data: await post(_this4.fetch, `${_this4.url}/DeleteVectorBucket`, { vectorBucketName }, { headers: _this4.headers }) || {},
        error: null
      };
    } catch (error) {
      if (_this4.shouldThrowOnError)
        throw error;
      if (isStorageVectorsError(error))
        return {
          data: null,
          error
        };
      throw error;
    }
  }
};
var StorageVectorsClient = class extends VectorBucketApi {
  constructor(url, options = {}) {
    super(url, options.headers || {}, options.fetch);
  }
  from(vectorBucketName) {
    return new VectorBucketScope(this.url, this.headers, vectorBucketName, this.fetch);
  }
  async createBucket(vectorBucketName) {
    var _superprop_getCreateBucket = () => super.createBucket, _this = this;
    return _superprop_getCreateBucket().call(_this, vectorBucketName);
  }
  async getBucket(vectorBucketName) {
    var _superprop_getGetBucket = () => super.getBucket, _this2 = this;
    return _superprop_getGetBucket().call(_this2, vectorBucketName);
  }
  async listBuckets(options = {}) {
    var _superprop_getListBuckets = () => super.listBuckets, _this3 = this;
    return _superprop_getListBuckets().call(_this3, options);
  }
  async deleteBucket(vectorBucketName) {
    var _superprop_getDeleteBucket = () => super.deleteBucket, _this4 = this;
    return _superprop_getDeleteBucket().call(_this4, vectorBucketName);
  }
};
var VectorBucketScope = class extends VectorIndexApi {
  constructor(url, headers, vectorBucketName, fetch$1) {
    super(url, headers, fetch$1);
    this.vectorBucketName = vectorBucketName;
  }
  async createIndex(options) {
    var _superprop_getCreateIndex = () => super.createIndex, _this5 = this;
    return _superprop_getCreateIndex().call(_this5, _objectSpread2(_objectSpread2({}, options), {}, { vectorBucketName: _this5.vectorBucketName }));
  }
  async listIndexes(options = {}) {
    var _superprop_getListIndexes = () => super.listIndexes, _this6 = this;
    return _superprop_getListIndexes().call(_this6, _objectSpread2(_objectSpread2({}, options), {}, { vectorBucketName: _this6.vectorBucketName }));
  }
  async getIndex(indexName) {
    var _superprop_getGetIndex = () => super.getIndex, _this7 = this;
    return _superprop_getGetIndex().call(_this7, _this7.vectorBucketName, indexName);
  }
  async deleteIndex(indexName) {
    var _superprop_getDeleteIndex = () => super.deleteIndex, _this8 = this;
    return _superprop_getDeleteIndex().call(_this8, _this8.vectorBucketName, indexName);
  }
  index(indexName) {
    return new VectorIndexScope(this.url, this.headers, this.vectorBucketName, indexName, this.fetch);
  }
};
var VectorIndexScope = class extends VectorDataApi {
  constructor(url, headers, vectorBucketName, indexName, fetch$1) {
    super(url, headers, fetch$1);
    this.vectorBucketName = vectorBucketName;
    this.indexName = indexName;
  }
  async putVectors(options) {
    var _superprop_getPutVectors = () => super.putVectors, _this9 = this;
    return _superprop_getPutVectors().call(_this9, _objectSpread2(_objectSpread2({}, options), {}, {
      vectorBucketName: _this9.vectorBucketName,
      indexName: _this9.indexName
    }));
  }
  async getVectors(options) {
    var _superprop_getGetVectors = () => super.getVectors, _this10 = this;
    return _superprop_getGetVectors().call(_this10, _objectSpread2(_objectSpread2({}, options), {}, {
      vectorBucketName: _this10.vectorBucketName,
      indexName: _this10.indexName
    }));
  }
  async listVectors(options = {}) {
    var _superprop_getListVectors = () => super.listVectors, _this11 = this;
    return _superprop_getListVectors().call(_this11, _objectSpread2(_objectSpread2({}, options), {}, {
      vectorBucketName: _this11.vectorBucketName,
      indexName: _this11.indexName
    }));
  }
  async queryVectors(options) {
    var _superprop_getQueryVectors = () => super.queryVectors, _this12 = this;
    return _superprop_getQueryVectors().call(_this12, _objectSpread2(_objectSpread2({}, options), {}, {
      vectorBucketName: _this12.vectorBucketName,
      indexName: _this12.indexName
    }));
  }
  async deleteVectors(options) {
    var _superprop_getDeleteVectors = () => super.deleteVectors, _this13 = this;
    return _superprop_getDeleteVectors().call(_this13, _objectSpread2(_objectSpread2({}, options), {}, {
      vectorBucketName: _this13.vectorBucketName,
      indexName: _this13.indexName
    }));
  }
};
var StorageClient = class extends StorageBucketApi {
  constructor(url, headers = {}, fetch$1, opts) {
    super(url, headers, fetch$1, opts);
  }
  from(id) {
    return new StorageFileApi(this.url, this.headers, id, this.fetch);
  }
  get vectors() {
    return new StorageVectorsClient(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new StorageAnalyticsClient(this.url + "/iceberg", this.headers, this.fetch);
  }
};

// ../../node_modules/@supabase/supabase-js/dist/index.mjs
var import_auth_js = __toESM(require_main3(), 1);
__reExport(exports_dist3, __toESM(require_main2(), 1));
__reExport(exports_dist3, __toESM(require_main3(), 1));
var version2 = "2.89.0";
var JS_ENV = "";
if (typeof Deno !== "undefined")
  JS_ENV = "deno";
else if (typeof document !== "undefined")
  JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative")
  JS_ENV = "react-native";
else
  JS_ENV = "node";
var DEFAULT_HEADERS2 = { "X-Client-Info": `supabase-js-${JS_ENV}/${version2}` };
var DEFAULT_GLOBAL_OPTIONS = { headers: DEFAULT_HEADERS2 };
var DEFAULT_DB_OPTIONS = { schema: "public" };
var DEFAULT_AUTH_OPTIONS = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
var DEFAULT_REALTIME_OPTIONS = {};
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
    return typeof o$1;
  } : function(o$1) {
    return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof2(o);
}
function toPrimitive2(t, r) {
  if (_typeof2(t) != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (_typeof2(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function toPropertyKey2(t) {
  var i = toPrimitive2(t, "string");
  return _typeof2(i) == "symbol" ? i : i + "";
}
function _defineProperty2(e, r, t) {
  return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread22(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r$1) {
      _defineProperty2(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var resolveFetch2 = (customFetch) => {
  if (customFetch)
    return (...args) => customFetch(...args);
  return (...args) => fetch(...args);
};
var resolveHeadersConstructor = () => {
  return Headers;
};
var fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
  const fetch$1 = resolveFetch2(customFetch);
  const HeadersConstructor = resolveHeadersConstructor();
  return async (input, init) => {
    var _await$getAccessToken;
    const accessToken = (_await$getAccessToken = await getAccessToken()) !== null && _await$getAccessToken !== undefined ? _await$getAccessToken : supabaseKey;
    let headers = new HeadersConstructor(init === null || init === undefined ? undefined : init.headers);
    if (!headers.has("apikey"))
      headers.set("apikey", supabaseKey);
    if (!headers.has("Authorization"))
      headers.set("Authorization", `Bearer ${accessToken}`);
    return fetch$1(input, _objectSpread22(_objectSpread22({}, init), {}, { headers }));
  };
};
function ensureTrailingSlash(url) {
  return url.endsWith("/") ? url : url + "/";
}
function applySettingDefaults(options, defaults) {
  var _DEFAULT_GLOBAL_OPTIO, _globalOptions$header;
  const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
  const { db: DEFAULT_DB_OPTIONS$1, auth: DEFAULT_AUTH_OPTIONS$1, realtime: DEFAULT_REALTIME_OPTIONS$1, global: DEFAULT_GLOBAL_OPTIONS$1 } = defaults;
  const result = {
    db: _objectSpread22(_objectSpread22({}, DEFAULT_DB_OPTIONS$1), dbOptions),
    auth: _objectSpread22(_objectSpread22({}, DEFAULT_AUTH_OPTIONS$1), authOptions),
    realtime: _objectSpread22(_objectSpread22({}, DEFAULT_REALTIME_OPTIONS$1), realtimeOptions),
    storage: {},
    global: _objectSpread22(_objectSpread22(_objectSpread22({}, DEFAULT_GLOBAL_OPTIONS$1), globalOptions), {}, { headers: _objectSpread22(_objectSpread22({}, (_DEFAULT_GLOBAL_OPTIO = DEFAULT_GLOBAL_OPTIONS$1 === null || DEFAULT_GLOBAL_OPTIONS$1 === undefined ? undefined : DEFAULT_GLOBAL_OPTIONS$1.headers) !== null && _DEFAULT_GLOBAL_OPTIO !== undefined ? _DEFAULT_GLOBAL_OPTIO : {}), (_globalOptions$header = globalOptions === null || globalOptions === undefined ? undefined : globalOptions.headers) !== null && _globalOptions$header !== undefined ? _globalOptions$header : {}) }),
    accessToken: async () => ""
  };
  if (options.accessToken)
    result.accessToken = options.accessToken;
  else
    delete result.accessToken;
  return result;
}
function validateSupabaseUrl(supabaseUrl) {
  const trimmedUrl = supabaseUrl === null || supabaseUrl === undefined ? undefined : supabaseUrl.trim();
  if (!trimmedUrl)
    throw new Error("supabaseUrl is required.");
  if (!trimmedUrl.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(ensureTrailingSlash(trimmedUrl));
  } catch (_unused) {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var SupabaseAuthClient = class extends import_auth_js.AuthClient {
  constructor(options) {
    super(options);
  }
};
var SupabaseClient = class {
  constructor(supabaseUrl, supabaseKey, options) {
    var _settings$auth$storag, _settings$global$head;
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    const baseUrl = validateSupabaseUrl(supabaseUrl);
    if (!supabaseKey)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", baseUrl);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", baseUrl);
    this.storageUrl = new URL("storage/v1", baseUrl);
    this.functionsUrl = new URL("functions/v1", baseUrl);
    const defaultStorageKey = `sb-${baseUrl.hostname.split(".")[0]}-auth-token`;
    const DEFAULTS = {
      db: DEFAULT_DB_OPTIONS,
      realtime: DEFAULT_REALTIME_OPTIONS,
      auth: _objectSpread22(_objectSpread22({}, DEFAULT_AUTH_OPTIONS), {}, { storageKey: defaultStorageKey }),
      global: DEFAULT_GLOBAL_OPTIONS
    };
    const settings = applySettingDefaults(options !== null && options !== undefined ? options : {}, DEFAULTS);
    this.storageKey = (_settings$auth$storag = settings.auth.storageKey) !== null && _settings$auth$storag !== undefined ? _settings$auth$storag : "";
    this.headers = (_settings$global$head = settings.global.headers) !== null && _settings$global$head !== undefined ? _settings$global$head : {};
    if (!settings.accessToken) {
      var _settings$auth;
      this.auth = this._initSupabaseAuthClient((_settings$auth = settings.auth) !== null && _settings$auth !== undefined ? _settings$auth : {}, this.headers, settings.global.fetch);
    } else {
      this.accessToken = settings.accessToken;
      this.auth = new Proxy({}, { get: (_, prop) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
      } });
    }
    this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
    this.realtime = this._initRealtimeClient(_objectSpread22({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, settings.realtime));
    if (this.accessToken)
      this.accessToken().then((token) => this.realtime.setAuth(token)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e));
    this.rest = new PostgrestClient(new URL("rest/v1", baseUrl).href, {
      headers: this.headers,
      schema: settings.db.schema,
      fetch: this.fetch
    });
    this.storage = new StorageClient(this.storageUrl.href, this.headers, this.fetch, options === null || options === undefined ? undefined : options.storage);
    if (!settings.accessToken)
      this._listenForAuthEvents();
  }
  get functions() {
    return new import_functions_js.FunctionsClient(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  from(relation) {
    return this.rest.from(relation);
  }
  schema(schema) {
    return this.rest.schema(schema);
  }
  rpc(fn, args = {}, options = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(fn, args, options);
  }
  channel(name, opts = { config: {} }) {
    return this.realtime.channel(name, opts);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(channel) {
    return this.realtime.removeChannel(channel);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var _this = this;
    var _data$session$access_, _data$session;
    if (_this.accessToken)
      return await _this.accessToken();
    const { data } = await _this.auth.getSession();
    return (_data$session$access_ = (_data$session = data.session) === null || _data$session === undefined ? undefined : _data$session.access_token) !== null && _data$session$access_ !== undefined ? _data$session$access_ : _this.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch$1) {
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new SupabaseAuthClient({
      url: this.authUrl.href,
      headers: _objectSpread22(_objectSpread22({}, authHeaders), headers),
      storageKey,
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      storage,
      userStorage,
      flowType,
      lock,
      debug,
      throwOnError,
      fetch: fetch$1,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((key) => key.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(options) {
    return new import_realtime_js.RealtimeClient(this.realtimeUrl.href, _objectSpread22(_objectSpread22({}, options), {}, { params: _objectSpread22(_objectSpread22({}, { apikey: this.supabaseKey }), options === null || options === undefined ? undefined : options.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((event, session) => {
      this._handleTokenChanged(event, "CLIENT", session === null || session === undefined ? undefined : session.access_token);
    });
  }
  _handleTokenChanged(event, source, token) {
    if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
      this.changedAccessToken = token;
      this.realtime.setAuth(token);
    } else if (event === "SIGNED_OUT") {
      this.realtime.setAuth();
      if (source == "STORAGE")
        this.auth.signOut();
      this.changedAccessToken = undefined;
    }
  }
};
var createClient = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
function shouldShowDeprecationWarning() {
  if (typeof window !== "undefined")
    return false;
  if (typeof process === "undefined")
    return false;
  const processVersion = process["version"];
  if (processVersion === undefined || processVersion === null)
    return false;
  const versionMatch = processVersion.match(/^v(\d+)\./);
  if (!versionMatch)
    return false;
  return parseInt(versionMatch[1], 10) <= 18;
}
if (shouldShowDeprecationWarning())
  console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");

// src/auth/session-manager.ts
async function loadSession() {
  try {
    const content = await readFile3(SESSION_FILE, "utf-8");
    const session = JSON.parse(content);
    if (!session.accessToken || !session.refreshToken || !session.expiresAt || !session.userId || !session.email) {
      logger.warn("Invalid session structure, clearing session");
      await clearSession();
      return null;
    }
    const now = Date.now();
    if (session.refreshTokenExpiresAt && session.refreshTokenExpiresAt < now) {
      logger.warn("Refresh token expired, user must re-authenticate");
      await clearSession();
      return null;
    }
    if (session.expiresAt < now) {
      logger.debug("Access token expired, attempting refresh");
      try {
        return await refreshSession(session);
      } catch (error) {
        logger.warn("Failed to refresh session", error);
        await clearSession();
        return null;
      }
    }
    return session;
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    logger.error("Failed to load session", error);
    return null;
  }
}
async function saveSession(session) {
  try {
    await ensureDirectory(dirname5(SESSION_FILE));
    await writeFile3(SESSION_FILE, JSON.stringify(session, null, 2), {
      encoding: "utf-8",
      mode: 384
    });
    logger.info("Session saved successfully");
  } catch (error) {
    logger.error("Failed to save session", error);
    throw error;
  }
}
async function clearSession() {
  try {
    await unlink4(SESSION_FILE);
    logger.info("Session cleared successfully");
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    logger.error("Failed to clear session", error);
    throw error;
  }
}
async function refreshSession(session) {
  try {
    const now = Date.now();
    const timeUntilExpiration = session.expiresAt - now;
    logger.debug("=== Starting Token Refresh ===");
    logger.debug(`Current access token expires at: ${new Date(session.expiresAt).toISOString()}`);
    logger.debug(`Time until expiration: ${Math.round(timeUntilExpiration / 1000)}s`);
    logger.debug(`Token is ${timeUntilExpiration < 0 ? "EXPIRED" : "still valid"}`);
    if (session.refreshTokenExpiresAt) {
      const timeUntilRefreshExpiration = session.refreshTokenExpiresAt - now;
      logger.debug(`Refresh token expires at: ${new Date(session.refreshTokenExpiresAt).toISOString()}`);
      logger.debug(`Refresh token time remaining: ${Math.round(timeUntilRefreshExpiration / 1000)}s`);
    } else {
      logger.debug("Refresh token: Never expires");
    }
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error("Supabase configuration missing (URL or anon key)");
    }
    logger.debug("Using Supabase JS client to refresh session");
    logger.debug(`Supabase URL: ${SUPABASE_URL}`);
    logger.debug(`Refresh token length: ${session.refreshToken.length} characters`);
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: session.refreshToken
    });
    if (error) {
      logger.error(`Supabase refresh error: ${error.message}`, error);
      throw new Error(`Token refresh failed: ${error.message}`);
    }
    if (!data.session) {
      throw new Error("Token refresh failed: No session returned from Supabase");
    }
    logger.debug("Refresh response received successfully from Supabase");
    logger.debug(`New access token length: ${data.session.access_token.length} characters`);
    logger.debug(`New refresh token length: ${data.session.refresh_token.length} characters`);
    logger.debug(`Access token expires in: ${data.session.expires_in || "unknown"} seconds`);
    let expiresAt;
    if (data.session.expires_at) {
      expiresAt = data.session.expires_at * 1000;
    } else if (data.session.expires_in) {
      expiresAt = now + data.session.expires_in * 1000;
    } else {
      expiresAt = now + 3600 * 1000;
      logger.warn("No expiration info from Supabase, assuming 1 hour");
    }
    const refreshTokenExpiresAt = session.refreshTokenExpiresAt;
    const accessTokenChanged = session.accessToken !== data.session.access_token;
    const refreshTokenChanged = session.refreshToken !== data.session.refresh_token;
    logger.debug(`Access token changed: ${accessTokenChanged}`);
    logger.debug(`Refresh token changed: ${refreshTokenChanged}`);
    if (!accessTokenChanged) {
      logger.warn("⚠️  Access token did not change after refresh - this might indicate an issue");
    }
    if (!refreshTokenChanged) {
      logger.debug("Refresh token did not change (this is normal for Supabase)");
    }
    const newSession = {
      ...session,
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
      expiresAt,
      refreshTokenExpiresAt,
      userId: data.session.user.id,
      email: data.session.user.email || session.email
    };
    logger.debug(`New access token will expire at: ${new Date(expiresAt).toISOString()}`);
    logger.debug(`New expiration is ${Math.round((expiresAt - session.expiresAt) / 1000)}s from old expiration`);
    if (refreshTokenExpiresAt) {
      logger.debug(`Refresh token will expire at: ${new Date(refreshTokenExpiresAt).toISOString()}`);
    } else {
      logger.debug("Refresh token does not expire");
    }
    logger.debug("Saving new session to file...");
    await saveSession(newSession);
    logger.info("✅ Session refreshed and saved successfully");
    logger.debug("=== Token Refresh Complete ===");
    return newSession;
  } catch (error) {
    logger.error("❌ Failed to refresh session", error);
    if (error instanceof Error) {
      logger.debug(`Error type: ${error.constructor.name}`);
      logger.debug(`Error message: ${error.message}`);
      if (error.stack) {
        logger.debug(`Error stack: ${error.stack}`);
      }
    }
    throw error;
  }
}
async function getValidSession() {
  const session = await loadSession();
  if (!session) {
    logger.debug("getValidSession: No session found");
    return null;
  }
  if (session.expiresAt < Date.now() + PROACTIVE_REFRESH_THRESHOLD_MS) {
    try {
      const refreshedSession = await refreshSession(session);
      return refreshedSession;
    } catch (error) {
      logger.warn("getValidSession: Failed to refresh session", error);
      return null;
    }
  }
  return session;
}

// ../../node_modules/uuid/dist-node/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

// ../../node_modules/uuid/dist-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// ../../node_modules/uuid/dist-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  return Uint8Array.of((v = parseInt(uuid.slice(0, 8), 16)) >>> 24, v >>> 16 & 255, v >>> 8 & 255, v & 255, (v = parseInt(uuid.slice(9, 13), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(14, 18), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(19, 23), 16)) >>> 8, v & 255, (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255, v / 4294967296 & 255, v >>> 24 & 255, v >>> 16 & 255, v >>> 8 & 255, v & 255);
}
var parse_default = parse;

// ../../node_modules/uuid/dist-node/stringify.js
var byteToHex = [];
for (let i = 0;i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// ../../node_modules/uuid/dist-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = new Uint8Array(str.length);
  for (let i = 0;i < str.length; ++i) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(version3, hash, value, namespace, buf, offset) {
  const valueBytes = typeof value === "string" ? stringToBytes(value) : value;
  const namespaceBytes = typeof namespace === "string" ? parse_default(namespace) : namespace;
  if (typeof namespace === "string") {
    namespace = parse_default(namespace);
  }
  if (namespace?.length !== 16) {
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  }
  let bytes = new Uint8Array(16 + valueBytes.length);
  bytes.set(namespaceBytes);
  bytes.set(valueBytes, namespaceBytes.length);
  bytes = hash(bytes);
  bytes[6] = bytes[6] & 15 | version3;
  bytes[8] = bytes[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0;i < 16; ++i) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return unsafeStringify(bytes);
}

// ../../node_modules/uuid/dist-node/sha1.js
import { createHash } from "node:crypto";
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return createHash("sha1").update(bytes).digest();
}
var sha1_default = sha1;

// ../../node_modules/uuid/dist-node/v5.js
function v5(value, namespace, buf, offset) {
  return v35(80, sha1_default, value, namespace, buf, offset);
}
v5.DNS = DNS;
v5.URL = URL2;
var v5_default = v5;
// src/utils/session-id-normalizer.ts
function normalizeSessionId(sessionId) {
  if (validate_default(sessionId)) {
    return sessionId;
  }
  return v5_default(sessionId, ZEST_SESSION_NAMESPACE);
}

// src/supabase/chat-uploader.ts
function countMessagesPerSession(messages) {
  const counts = new Map;
  for (const message of messages) {
    if (!message.session_id)
      continue;
    const count = counts.get(message.session_id) || 0;
    counts.set(message.session_id, count + 1);
  }
  return counts;
}
function categorizeSessions(sessions, messageCountBySession) {
  const now = Date.now();
  const staleThreshold = now - STALE_SESSION_AGE_MS;
  const valid = [];
  const stale = [];
  const pending = [];
  for (const session of sessions) {
    if (!session.id)
      continue;
    const messageCount = messageCountBySession.get(session.id) || 0;
    const sessionAge = session.created_at ? new Date(session.created_at).getTime() : now;
    if (messageCount >= MIN_MESSAGES_PER_SESSION) {
      valid.push(session);
    } else if (sessionAge < staleThreshold) {
      stale.push(session);
    } else {
      pending.push(session);
    }
  }
  return {
    valid,
    stale,
    pending,
    validIds: new Set(valid.map((s) => s.id).filter((id) => !!id)),
    staleIds: new Set(stale.map((s) => s.id).filter((id) => !!id)),
    pendingIds: new Set(pending.map((s) => s.id).filter((id) => !!id))
  };
}
function partitionMessagesBySessionCategory(messages, categories) {
  const allSessionIds = new Set([
    ...categories.validIds,
    ...categories.staleIds,
    ...categories.pendingIds
  ]);
  const orphaned = [];
  const valid = [];
  const stale = [];
  const pending = [];
  for (const message of messages) {
    if (!message.session_id)
      continue;
    if (categories.validIds.has(message.session_id)) {
      valid.push(message);
    } else if (categories.staleIds.has(message.session_id)) {
      stale.push(message);
    } else if (categories.pendingIds.has(message.session_id)) {
      pending.push(message);
    } else {
      orphaned.push(message);
    }
  }
  return { valid, stale, pending, orphaned };
}
function logSessionCategorization(categories, messagePartition) {
  if (categories.stale.length > 0) {
    logger.info(`Removing ${categories.stale.length} stale sessions (< ${MIN_MESSAGES_PER_SESSION} messages, > 7 days old) with ${messagePartition.stale.length} messages`);
  }
  if (categories.pending.length > 0) {
    logger.info(`Keeping ${categories.pending.length} pending sessions (< ${MIN_MESSAGES_PER_SESSION} messages, within 7 days) with ${messagePartition.pending.length} messages`);
  }
}
async function removeStaleSessionsFromQueue(staleSessionIds) {
  await atomicUpdateQueue(SESSIONS_QUEUE_FILE, (currentSessions) => {
    return currentSessions.filter((s) => s.id && !staleSessionIds.has(s.id));
  });
  await atomicUpdateQueue(MESSAGES_QUEUE_FILE, (currentMessages) => {
    return currentMessages.filter((m) => m.session_id && !staleSessionIds.has(m.session_id));
  });
}
function deduplicateSessions(sessions) {
  const sessionMap = new Map;
  for (const session of sessions) {
    if (!session.id)
      continue;
    const existing = sessionMap.get(session.id);
    if (!existing) {
      sessionMap.set(session.id, session);
      continue;
    }
    const existingTime = existing.created_at ? new Date(existing.created_at).getTime() : 0;
    const currentTime = session.created_at ? new Date(session.created_at).getTime() : 0;
    if (currentTime >= existingTime) {
      sessionMap.set(session.id, session);
    }
  }
  return Array.from(sessionMap.values());
}
function deduplicateMessages(messages) {
  const messageMap = new Map;
  for (const message of messages) {
    if (!message.session_id)
      continue;
    const key = `${message.session_id}:${message.message_index}`;
    const existing = messageMap.get(key);
    if (!existing) {
      messageMap.set(key, message);
      continue;
    }
    const existingTime = existing.created_at ? new Date(existing.created_at).getTime() : 0;
    const currentTime = message.created_at ? new Date(message.created_at).getTime() : 0;
    if (currentTime >= existingTime) {
      messageMap.set(key, message);
    }
  }
  return Array.from(messageMap.values());
}
function enrichSessionsForUpload(sessions, userId, workspaceId) {
  const filteredSessions = sessions.filter((s) => s.id);
  if (filteredSessions.length < sessions.length) {
    logger.warn(`Filtered out ${sessions.length - filteredSessions.length} sessions without IDs`);
  }
  return filteredSessions.map((s) => {
    return {
      ...s,
      id: normalizeSessionId(s.id),
      user_id: userId,
      platform: PLATFORM,
      source: SOURCE,
      analysis_status: "pending",
      workspace_id: workspaceId,
      metadata: null
    };
  });
}
function enrichMessagesForUpload(messages, userId) {
  const filteredMessages = messages.filter((m) => m.session_id);
  if (filteredMessages.length < messages.length) {
    logger.warn(`Filtered out ${messages.length - filteredMessages.length} messages without session IDs`);
  }
  return filteredMessages.map((m) => ({
    ...m,
    session_id: normalizeSessionId(m.session_id),
    user_id: userId,
    code_diffs: null,
    metadata: null
  }));
}
async function uploadSessionsToSupabase(supabase, sessions) {
  if (sessions.length === 0) {
    return true;
  }
  const { error } = await supabase.from("chat_sessions").upsert(sessions, { onConflict: "id" });
  if (error) {
    logger.error("Failed to upload chat sessions", error);
    return false;
  }
  logger.info(`✓ Uploaded ${sessions.length} chat sessions`);
  return true;
}
async function uploadMessagesToSupabase(supabase, messages) {
  if (messages.length === 0) {
    return true;
  }
  const { error } = await supabase.from("chat_messages").upsert(messages, { onConflict: "session_id,message_index" });
  if (error) {
    logger.error("Failed to upload chat messages", error);
    return false;
  }
  logger.info(`✓ Uploaded ${messages.length} chat messages`);
  return true;
}
async function removeProcessedSessionsFromQueue(sessionsToRemove) {
  await atomicUpdateQueue(SESSIONS_QUEUE_FILE, (currentSessions) => {
    return currentSessions.filter((s) => s.id && !sessionsToRemove.has(s.id));
  });
  await atomicUpdateQueue(MESSAGES_QUEUE_FILE, (currentMessages) => {
    return currentMessages.filter((m) => m.session_id && !sessionsToRemove.has(m.session_id));
  });
}
async function removeMessagesFromQueue(messageIdsToRemove) {
  await atomicUpdateQueue(MESSAGES_QUEUE_FILE, (currentMessages) => {
    return currentMessages.filter((m) => m.id && !messageIdsToRemove.has(m.id));
  });
}
async function uploadChatData(supabase) {
  try {
    const session = await getValidSession();
    if (!session) {
      logger.debug("Not authenticated, skipping chat upload");
      return { success: false, uploaded: { sessions: 0, messages: 0 } };
    }
    const queuedSessions = await readQueue(SESSIONS_QUEUE_FILE);
    const queuedMessages = await readQueue(MESSAGES_QUEUE_FILE);
    if (queuedSessions.length === 0 && queuedMessages.length === 0) {
      logger.debug("No chat data to upload");
      return { success: true, uploaded: { sessions: 0, messages: 0 } };
    }
    const messageCountBySession = countMessagesPerSession(queuedMessages);
    const categories = categorizeSessions(queuedSessions, messageCountBySession);
    const messagePartition = partitionMessagesBySessionCategory(queuedMessages, categories);
    logSessionCategorization(categories, messagePartition);
    if (messagePartition.orphaned.length > 0) {
      const orphanedSessionIds2 = [
        ...new Set(messagePartition.orphaned.map((m) => m.session_id).filter((id) => !!id).map((id) => normalizeSessionId(id)))
      ];
      const { data: existingSessions, error: queryError } = await supabase.from("chat_sessions").select("id").in("id", orphanedSessionIds2);
      if (queryError) {
        const orphanedMessageIds = new Set(messagePartition.orphaned.map((m) => m.id).filter((id) => !!id));
        await removeMessagesFromQueue(orphanedMessageIds);
        messagePartition.orphaned = [];
      } else {
        const existingSessionIds = new Set(existingSessions?.map((s) => s.id) || []);
        const validOrphaned = [];
        const invalidOrphaned = [];
        for (const message of messagePartition.orphaned) {
          if (!message.session_id) {
            invalidOrphaned.push(message);
            continue;
          }
          const normalizedSessionId = normalizeSessionId(message.session_id);
          if (existingSessionIds.has(normalizedSessionId)) {
            validOrphaned.push(message);
          } else {
            invalidOrphaned.push(message);
          }
        }
        if (invalidOrphaned.length > 0) {
          const invalidMessageIds = new Set(invalidOrphaned.map((m) => m.id).filter((id) => !!id));
          await removeMessagesFromQueue(invalidMessageIds);
        }
        messagePartition.orphaned = validOrphaned;
      }
    }
    if (categories.stale.length > 0) {
      await removeStaleSessionsFromQueue(categories.staleIds);
    }
    if (categories.valid.length === 0 && messagePartition.orphaned.length === 0) {
      return { success: true, uploaded: { sessions: 0, messages: 0 } };
    }
    const uniqueSessions = deduplicateSessions(categories.valid);
    const allMessagesToUpload = [...messagePartition.valid, ...messagePartition.orphaned];
    const uniqueMessages = deduplicateMessages(allMessagesToUpload);
    const sessionsToUpload = enrichSessionsForUpload(uniqueSessions, session.userId, session.workspaceId || null);
    const uploadedSessionIds = new Set(sessionsToUpload.map((s) => s.id));
    const orphanedSessionIds = new Set(messagePartition.orphaned.map((m) => normalizeSessionId(m.session_id)).filter((id) => !!id));
    const allValidSessionIds = new Set([...uploadedSessionIds, ...orphanedSessionIds]);
    const messagesToUpload = enrichMessagesForUpload(uniqueMessages, session.userId).filter((m) => allValidSessionIds.has(m.session_id));
    const messageSessionIds = new Set(messagesToUpload.map((m) => m.session_id));
    const missingSessionIds = [...messageSessionIds].filter((id) => !allValidSessionIds.has(id));
    if (missingSessionIds.length > 0) {
      return { success: false, uploaded: { sessions: 0, messages: 0 } };
    }
    const sessionsUploaded = await uploadSessionsToSupabase(supabase, sessionsToUpload);
    if (!sessionsUploaded) {
      return { success: false, uploaded: { sessions: 0, messages: 0 } };
    }
    const messagesUploaded = await uploadMessagesToSupabase(supabase, messagesToUpload);
    if (!messagesUploaded) {
      return {
        success: false,
        uploaded: { sessions: sessionsToUpload.length, messages: 0 }
      };
    }
    const sessionsToRemove = new Set([...categories.validIds, ...categories.staleIds]);
    await removeProcessedSessionsFromQueue(sessionsToRemove);
    if (messagePartition.orphaned.length > 0) {
      const orphanedMessageIds = new Set(messagePartition.orphaned.map((m) => m.id).filter((id) => !!id));
      await removeMessagesFromQueue(orphanedMessageIds);
    }
    return {
      success: true,
      uploaded: {
        sessions: sessionsToUpload.length,
        messages: messagesToUpload.length
      }
    };
  } catch (error) {
    logger.error("Failed to upload chat data", error);
    return { success: false, uploaded: { sessions: 0, messages: 0 } };
  }
}
async function uploadChatDataWithRetry(supabase, maxRetries = 3, backoffMs = 5000) {
  let lastError = null;
  for (let attempt = 1;attempt <= maxRetries; attempt++) {
    try {
      const result = await uploadChatData(supabase);
      if (result.success) {
        return result;
      }
      return result;
    } catch (error) {
      lastError = error;
      logger.warn(`Chat upload attempt ${attempt}/${maxRetries} failed: ${lastError.message}`);
      if (attempt < maxRetries) {
        const delay = backoffMs * attempt;
        logger.debug(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  logger.error(`Chat upload failed after ${maxRetries} attempts`, lastError);
  return { success: false, uploaded: { sessions: 0, messages: 0 } };
}

// src/supabase/client.ts
async function getSupabaseClient() {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      logger.warn("Supabase configuration missing (URL or anon key)");
      return null;
    }
    const session = await getValidSession();
    if (!session) {
      logger.debug("No valid session available, skipping Supabase client creation");
      return null;
    }
    const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false
      },
      global: {
        headers: {
          Authorization: `Bearer ${session.accessToken}`
        }
      }
    });
    logger.debug("Supabase client created successfully");
    return client;
  } catch (error) {
    logger.error("Failed to create Supabase client", error);
    return null;
  }
}

// src/supabase/events-uploader.ts
function transformEventForUpload(event, userId) {
  let normalizedPayload = event.payload;
  if (event.payload && typeof event.payload === "object" && !Array.isArray(event.payload) && "session_id" in event.payload && typeof event.payload.session_id === "string") {
    normalizedPayload = {
      ...event.payload,
      session_id: normalizeSessionId(event.payload.session_id)
    };
  }
  return {
    ...event,
    session_id: event.session_id ? normalizeSessionId(event.session_id) : event.session_id,
    event_type: "file.changed",
    user_id: userId,
    platform: PLATFORM,
    source: SOURCE,
    payload: normalizedPayload
  };
}
function deduplicateEvents(events) {
  const eventMap = new Map;
  for (const event of events) {
    if (!event.id)
      continue;
    const existing = eventMap.get(event.id);
    if (!existing) {
      eventMap.set(event.id, event);
      continue;
    }
    const existingTime = existing.timestamp ? new Date(existing.timestamp).getTime() : 0;
    const currentTime = event.timestamp ? new Date(event.timestamp).getTime() : 0;
    if (currentTime >= existingTime) {
      eventMap.set(event.id, event);
    }
  }
  return Array.from(eventMap.values());
}
async function uploadEvents(supabase) {
  try {
    const session = await getValidSession();
    if (!session) {
      logger.debug("Not authenticated, skipping events upload");
      return { success: false, uploaded: 0 };
    }
    const queuedEvents = await readQueue(EVENTS_QUEUE_FILE);
    if (queuedEvents.length === 0) {
      logger.debug("No events to upload");
      return { success: true, uploaded: 0 };
    }
    const uniqueEvents = deduplicateEvents(queuedEvents);
    if (uniqueEvents.length < queuedEvents.length) {
      logger.info(`Deduplicated events: ${queuedEvents.length} → ${uniqueEvents.length} (removed ${queuedEvents.length - uniqueEvents.length} duplicates)`);
    }
    logger.info(`Uploading ${uniqueEvents.length} code digest events`);
    const eventsToUpload = uniqueEvents.map((e) => transformEventForUpload(e, session.userId));
    const batchSize = 100;
    let uploadedCount = 0;
    const successfullyUploadedIds = new Set;
    for (let i = 0;i < eventsToUpload.length; i += batchSize) {
      const batch = eventsToUpload.slice(i, i + batchSize);
      const batchIds = batch.map((e) => e.id).filter((id) => !!id);
      const { error } = await supabase.from("code_digest_events").upsert(batch, { onConflict: "id" });
      if (error) {
        logger.error(`Failed to upload events batch ${i / batchSize + 1}`, error);
        if (successfullyUploadedIds.size > 0) {
          await atomicUpdateQueue(EVENTS_QUEUE_FILE, (currentEvents) => currentEvents.filter((e) => !e.id || !successfullyUploadedIds.has(e.id)));
          logger.info(`Removed ${successfullyUploadedIds.size} successfully uploaded events from queue`);
        }
        return { success: false, uploaded: uploadedCount };
      }
      for (const id of batchIds) {
        successfullyUploadedIds.add(id);
      }
      uploadedCount += batch.length;
      logger.debug(`✓ Uploaded batch ${i / batchSize + 1} (${batch.length} events)`);
    }
    await atomicUpdateQueue(EVENTS_QUEUE_FILE, (currentEvents) => currentEvents.filter((e) => !e.id || !successfullyUploadedIds.has(e.id)));
    logger.info(`✓ Events upload completed: ${uploadedCount} events`);
    return { success: true, uploaded: uploadedCount };
  } catch (error) {
    logger.error("Failed to upload events", error);
    return { success: false, uploaded: 0 };
  }
}
async function uploadEventsWithRetry(supabase, maxRetries = 3, backoffMs = 5000) {
  let lastError = null;
  for (let attempt = 1;attempt <= maxRetries; attempt++) {
    try {
      const result = await uploadEvents(supabase);
      if (result.success) {
        return result;
      }
      return result;
    } catch (error) {
      lastError = error;
      logger.warn(`Events upload attempt ${attempt}/${maxRetries} failed: ${lastError.message}`);
      if (attempt < maxRetries) {
        const delay = backoffMs * attempt;
        logger.debug(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  logger.error(`Events upload failed after ${maxRetries} attempts`, lastError);
  return { success: false, uploaded: 0 };
}

// src/supabase/sync.ts
async function syncAllData() {
  try {
    const stats = await getQueueStats();
    const hasData = stats.events > 0 || stats.sessions > 0 || stats.messages > 0;
    if (!hasData) {
      logger.debug("No data to sync");
      return {
        success: true,
        uploaded: { events: 0, sessions: 0, messages: 0 }
      };
    }
    logger.info(`Starting sync: ${stats.events} events, ${stats.sessions} sessions, ${stats.messages} messages`);
    const supabase = await getSupabaseClient();
    if (!supabase) {
      logger.debug("Cannot sync: not authenticated or Supabase not configured");
      return {
        success: false,
        uploaded: { events: 0, sessions: 0, messages: 0 },
        error: "Not authenticated",
        errorType: "not_authenticated"
      };
    }
    const eventsResult = await uploadEventsWithRetry(supabase);
    if (!eventsResult.success) {
      return {
        success: false,
        uploaded: { events: eventsResult.uploaded, sessions: 0, messages: 0 },
        error: "Failed to upload events",
        errorType: "upload_failed"
      };
    }
    const chatResult = await uploadChatDataWithRetry(supabase);
    if (!chatResult.success) {
      return {
        success: false,
        uploaded: {
          events: eventsResult.uploaded,
          sessions: chatResult.uploaded.sessions,
          messages: chatResult.uploaded.messages
        },
        error: "Failed to upload chat data",
        errorType: "upload_failed"
      };
    }
    logger.info("✓ Sync completed successfully");
    return {
      success: true,
      uploaded: {
        events: eventsResult.uploaded,
        sessions: chatResult.uploaded.sessions,
        messages: chatResult.uploaded.messages
      }
    };
  } catch (error) {
    logger.error("Sync failed with exception", error);
    let errorType = "upload_failed";
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorMessageLower = errorMessage.toLowerCase();
    const isNetworkError = errorMessageLower.includes("network") || errorMessageLower.includes("timeout") || errorMessageLower.includes("fetch") || ["ENOTFOUND", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENETUNREACH"].includes(error?.code || "") || error instanceof TypeError && errorMessageLower.includes("fetch");
    if (isNetworkError) {
      errorType = "network_error";
    }
    return {
      success: false,
      uploaded: { events: 0, sessions: 0, messages: 0 },
      error: errorMessage,
      errorType
    };
  }
}
async function syncWithMessage() {
  const result = await syncAllData();
  if (result.success) {
    await clearSyncError().catch((error) => {
      logger.error("Failed to clear sync error in status cache", error);
    });
    const { events, sessions, messages } = result.uploaded;
    const total = events + sessions + messages;
    if (total === 0) {
      return { success: true, message: "No data to sync" };
    }
    const parts = [];
    if (events > 0)
      parts.push(`${events} events`);
    if (sessions > 0)
      parts.push(`${sessions} sessions`);
    if (messages > 0)
      parts.push(`${messages} messages`);
    return { success: true, message: `Synced ${parts.join(", ")}` };
  }
  const errorType = result.errorType || "upload_failed";
  let errorMessage;
  if (errorType === "not_authenticated") {
    errorMessage = "Auth required - run /zest:login.";
  } else if (errorType === "network_error") {
    errorMessage = "Network error.";
  } else {
    errorMessage = "Upload failed.";
  }
  await writeSyncStatus({
    hasError: true,
    errorType,
    errorMessage,
    lastErrorAt: Date.now(),
    lastSuccessAt: null
  }).catch((error) => {
    logger.error("Failed to write sync error to status cache", error);
  });
  return {
    success: false,
    message: `Sync failed: ${result.error || "Unknown error"}`
  };
}
export {
  syncWithMessage,
  syncAllData
};
