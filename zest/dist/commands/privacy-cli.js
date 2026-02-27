#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// src/config/settings.ts
import { readFile, writeFile } from "node:fs/promises";
import { dirname as dirname2 } from "node:path";

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/external.js
var exports_external = {};
__export(exports_external, {
  void: () => voidType,
  util: () => util,
  unknown: () => unknownType,
  union: () => unionType,
  undefined: () => undefinedType,
  tuple: () => tupleType,
  transformer: () => effectsType,
  symbol: () => symbolType,
  string: () => stringType,
  strictObject: () => strictObjectType,
  setErrorMap: () => setErrorMap,
  set: () => setType,
  record: () => recordType,
  quotelessJson: () => quotelessJson,
  promise: () => promiseType,
  preprocess: () => preprocessType,
  pipeline: () => pipelineType,
  ostring: () => ostring,
  optional: () => optionalType,
  onumber: () => onumber,
  oboolean: () => oboolean,
  objectUtil: () => objectUtil,
  object: () => objectType,
  number: () => numberType,
  nullable: () => nullableType,
  null: () => nullType,
  never: () => neverType,
  nativeEnum: () => nativeEnumType,
  nan: () => nanType,
  map: () => mapType,
  makeIssue: () => makeIssue,
  literal: () => literalType,
  lazy: () => lazyType,
  late: () => late,
  isValid: () => isValid,
  isDirty: () => isDirty,
  isAsync: () => isAsync,
  isAborted: () => isAborted,
  intersection: () => intersectionType,
  instanceof: () => instanceOfType,
  getParsedType: () => getParsedType,
  getErrorMap: () => getErrorMap,
  function: () => functionType,
  enum: () => enumType,
  effect: () => effectsType,
  discriminatedUnion: () => discriminatedUnionType,
  defaultErrorMap: () => en_default,
  datetimeRegex: () => datetimeRegex,
  date: () => dateType,
  custom: () => custom,
  coerce: () => coerce,
  boolean: () => booleanType,
  bigint: () => bigIntType,
  array: () => arrayType,
  any: () => anyType,
  addIssueToContext: () => addIssueToContext,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransformer: () => ZodEffects,
  ZodSymbol: () => ZodSymbol,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodSchema: () => ZodType,
  ZodRecord: () => ZodRecord,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPipeline: () => ZodPipeline,
  ZodParsedType: () => ZodParsedType,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNever: () => ZodNever,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodIssueCode: () => ZodIssueCode,
  ZodIntersection: () => ZodIntersection,
  ZodFunction: () => ZodFunction,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodError: () => ZodError,
  ZodEnum: () => ZodEnum,
  ZodEffects: () => ZodEffects,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCatch: () => ZodCatch,
  ZodBranded: () => ZodBranded,
  ZodBoolean: () => ZodBoolean,
  ZodBigInt: () => ZodBigInt,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny,
  Schema: () => ZodType,
  ParseStatus: () => ParseStatus,
  OK: () => OK,
  NEVER: () => NEVER,
  INVALID: () => INVALID,
  EMPTY_PATH: () => EMPTY_PATH,
  DIRTY: () => DIRTY,
  BRAND: () => BRAND
});

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {};
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === en_default ? undefined : en_default
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.bun/zod@3.25.76/node_modules/zod/v3/types.js
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {} else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
// src/utils/fs-utils.ts
import { mkdir, stat } from "node:fs/promises";
async function ensureDirectory(dirPath) {
  try {
    await stat(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true, mode: 448 });
  }
}

// src/utils/logger.ts
import { appendFile } from "node:fs/promises";
import { dirname } from "node:path";

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
var SESSION_FILE = process.env.ZEST_SESSION_FILE ?? join(CLAUDE_ZEST_DIR, "session.json");
var SETTINGS_FILE = join(CLAUDE_ZEST_DIR, "settings.json");
var DAEMON_PID_FILE = join(CLAUDE_ZEST_DIR, "daemon.pid");
var CLAUDE_INSTANCES_FILE = join(CLAUDE_ZEST_DIR, "claude-instances.json");
var STATUSLINE_SCRIPT_PATH = join(CLAUDE_ZEST_DIR, "statusline.mjs");
var STATUS_CACHE_FILE = join(CLAUDE_ZEST_DIR, "status-cache.json");
var SYNC_METRICS_FILE = join(CLAUDE_ZEST_DIR, "sync-metrics.jsonl");
var EVENTS_QUEUE_FILE = join(QUEUE_DIR, "events.jsonl");
var SESSIONS_QUEUE_FILE = join(QUEUE_DIR, "chat-sessions.jsonl");
var MESSAGES_QUEUE_FILE = join(QUEUE_DIR, "chat-messages.jsonl");
var DEBOUNCE_DIR = join(CLAUDE_ZEST_DIR, "debounce");
var DELETION_CACHE_TTL_MS = 5 * 60 * 1000;
var LOG_RETENTION_DAYS = 7;
var PROACTIVE_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;
var MAX_DIFF_SIZE_BYTES = 10 * 1024 * 1024;
var STALE_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000;
var UPDATE_CHECK_CACHE_TTL_MS = 60 * 60 * 1000;
var DAEMON_INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
var NOTIFICATION_DURATION_MS = 2 * 60 * 1000;
var STANDUP_NOTIFICATION_THROTTLE_MS = 2 * 60 * 60 * 1000;
var SYNC_METRICS_RETENTION_MS = 60 * 60 * 1000;

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

// src/config/settings.ts
var PrivacySettingsSchema = exports_external.object({
  approach: exports_external.enum(["detection", "encryption", "hybrid"]).default("detection"),
  aggressiveMode: exports_external.boolean().default(false),
  enableGitignore: exports_external.boolean().default(true),
  enableZestRules: exports_external.boolean().default(true),
  customExclusionPatterns: exports_external.array(exports_external.string()).default([])
});
var UserSettingsSchema = exports_external.object({
  enableRemotePersistence: exports_external.boolean(),
  excludePatterns: exports_external.array(exports_external.string()),
  respectGitignore: exports_external.boolean(),
  logLevel: exports_external.enum(["debug", "info", "warn", "error"]),
  excludedFolders: exports_external.array(exports_external.string()).default([]),
  privacy: PrivacySettingsSchema.optional()
});
var DEFAULT_PRIVACY_SETTINGS = {
  approach: "detection",
  aggressiveMode: false,
  enableGitignore: true,
  enableZestRules: true,
  customExclusionPatterns: []
};
var DEFAULT_SETTINGS = {
  enableRemotePersistence: true,
  excludePatterns: [],
  respectGitignore: true,
  logLevel: "info",
  excludedFolders: [],
  privacy: DEFAULT_PRIVACY_SETTINGS
};
async function loadSettings() {
  try {
    const content = await readFile(SETTINGS_FILE, "utf-8");
    const rawSettings = JSON.parse(content);
    const validated = UserSettingsSchema.parse(rawSettings);
    return { ...DEFAULT_SETTINGS, ...validated };
  } catch (error) {
    if (error instanceof exports_external.ZodError) {
      logger.warn("Invalid settings format, using defaults:", error.issues);
    } else if (error.code !== "ENOENT") {
      logger.warn("Failed to load settings, using defaults:", error);
    }
    return DEFAULT_SETTINGS;
  }
}
async function saveSettings(settings) {
  const result = UserSettingsSchema.safeParse(settings);
  if (!result.success) {
    throw new Error(`Invalid settings data (this should not happen): ${JSON.stringify(result.error.issues)}`);
  }
  await ensureDirectory(dirname2(SETTINGS_FILE));
  await writeFile(SETTINGS_FILE, JSON.stringify(result.data, null, 2), "utf-8");
}

// ../../packages/privacy-redaction/src/config/defaults.ts
var DEFAULT_MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
var DEFAULT_PRIVACY_CONFIG = {
  approach: "detection",
  aggressiveMode: false,
  enabledPatterns: [],
  enableGitignore: true,
  enableZestRules: true,
  customExclusionPatterns: [],
  maxFileSizeBytes: DEFAULT_MAX_FILE_SIZE_BYTES
};
function createPrivacyConfig(partial) {
  if (!partial) {
    return { ...DEFAULT_PRIVACY_CONFIG };
  }
  return {
    ...DEFAULT_PRIVACY_CONFIG,
    ...partial,
    enabledPatterns: partial.enabledPatterns ?? DEFAULT_PRIVACY_CONFIG.enabledPatterns,
    customExclusionPatterns: partial.customExclusionPatterns ?? DEFAULT_PRIVACY_CONFIG.customExclusionPatterns
  };
}
// ../../packages/privacy-redaction/src/detection/cache.ts
class DetectionCache {
  cache = new Map;
  maxEntries;
  ttlMs;
  constructor(options = {}) {
    this.maxEntries = options.maxEntries ?? 1000;
    this.ttlMs = options.ttlMs ?? 5 * 60 * 1000;
  }
  get(key) {
    const entry = this.cache.get(key);
    if (!entry) {
      return;
    }
    if (Date.now() - entry.timestamp > this.ttlMs) {
      this.cache.delete(key);
      return;
    }
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
  set(key, value) {
    if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  has(key) {
    return this.get(key) !== undefined;
  }
  delete(key) {
    return this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  prune() {
    const now = Date.now();
    let pruned = 0;
    const keysToDelete = [];
    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp > this.ttlMs) {
        keysToDelete.push(key);
      }
    });
    for (const key of keysToDelete) {
      this.cache.delete(key);
      pruned++;
    }
    return pruned;
  }
}
function computeContentHash(content) {
  let hash = 0;
  for (let i = 0;i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}
function generateCacheKey(content, context) {
  const contentHash = computeContentHash(content);
  if (context) {
    const contextHash = computeContentHash(context);
    return `${contentHash}:${contextHash}`;
  }
  return contentHash;
}
// ../../packages/privacy-redaction/src/patterns/sensitive-patterns.ts
function createPattern(name, description, regex, category, options = {}) {
  return {
    name,
    description,
    regex,
    category,
    redactionStrategy: options.redactionStrategy ?? "full",
    aggressiveOnly: options.aggressiveOnly ?? false,
    highlySensitive: options.highlySensitive ?? false,
    priority: options.priority ?? 50
  };
}
var SENSITIVE_DATA_PATTERNS = [
  createPattern("api_key", "API keys and access keys (quoted)", /(?:api[_-]?key|apikey|access[_-]?key|secret[_-]?key)["\s]*[:=]["\s]*["']([^"']{16,})["']/gi, "api_keys", { redactionStrategy: "partial", priority: 60 }),
  createPattern("api_key_unquoted", "API keys and access keys (unquoted)", /(?:api[_-]?key|apikey|access[_-]?key|secret[_-]?key)["\s]*(?:[:=]|is)["\s]*([a-zA-Z0-9_\-=+/]{16,})(?=\s|$|[^\w\-=+/])/gi, "api_keys", { redactionStrategy: "partial", priority: 55 }),
  createPattern("jwt_token", "JWT tokens", /eyJ[a-zA-Z0-9_\-]*\.eyJ[a-zA-Z0-9_\-]*\.[a-zA-Z0-9_\-]*/g, "api_keys", { redactionStrategy: "partial", priority: 70 }),
  createPattern("generic_secret", "Generic secrets and passwords", /(?:password|passwd|pwd|secret|token|key)["\s]*[:=]["\s]*["']([^"'\s]{8,})["']/gi, "generic", { redactionStrategy: "full", highlySensitive: true, priority: 40 }),
  createPattern("generic_secret_unquoted", "Generic secrets and passwords (unquoted)", /(?:password|passwd|pwd)["\s]*[:=]["\s]*([^\s"']{6,})/gi, "generic", { redactionStrategy: "full", highlySensitive: true, priority: 45 }),
  createPattern("aws_access_key", "AWS access keys", /AKIA[0-9A-Z]{16}/g, "cloud_services", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("aws_secret_key", "AWS secret access keys", /(?:aws[_-]?secret[_-]?access[_-]?key)["\s]*[:=]["\s]*([a-zA-Z0-9/+=]{40})/gi, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("github_token", "GitHub personal access tokens", /gh[pousr]_[A-Za-z0-9_]{36,255}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("github_app_token", "GitHub App installation access tokens", /ghs_[A-Za-z0-9_]{36}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("github_oauth_token", "GitHub OAuth access tokens", /gho_[A-Za-z0-9_]{36}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("gitlab_token", "GitLab personal access tokens", /glpat-[A-Za-z0-9_\-]{20}/g, "api_keys", { redactionStrategy: "partial", highlySensitive: true, priority: 85 }),
  createPattern("bitbucket_token", "Bitbucket app passwords", /ATB[A-Za-z0-9]{95}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("atlassian_token", "Atlassian API tokens", /ATATT[A-Za-z0-9\-_]{60}/g, "api_keys", {
    redactionStrategy: "full",
    priority: 80
  }),
  createPattern("slack_token", "Slack API tokens", /xox[baprs]-[A-Za-z0-9\-]+/g, "communication", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 80
  }),
  createPattern("discord_token", "Discord bot tokens", /[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g, "communication", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("stripe_key", "Stripe live secret keys", /sk_live_[A-Za-z0-9]{24}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 95
  }),
  createPattern("stripe_publishable_key", "Stripe live publishable keys", /pk_live_[A-Za-z0-9]{24}/g, "payment", { redactionStrategy: "partial", priority: 70 }),
  createPattern("paypal_client_id", "PayPal client IDs", /A[A-Za-z0-9\-_]{79}/g, "payment", {
    redactionStrategy: "partial",
    highlySensitive: true,
    priority: 75,
    aggressiveOnly: true
  }),
  createPattern("square_token", "Square access tokens", /sq0atp-[A-Za-z0-9\-_]{22}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("shopify_token", "Shopify access tokens", /shpat_[a-fA-F0-9]{32}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("shopify_secret", "Shopify shared secrets", /shpss_[a-fA-F0-9]{32}/g, "payment", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 85
  }),
  createPattern("twilio_token", "Twilio auth tokens", /SK[a-f0-9]{32}/g, "communication", {
    redactionStrategy: "full",
    priority: 75,
    aggressiveOnly: true
  }),
  createPattern("sendgrid_key", "SendGrid API keys", /SG\.[A-Za-z0-9\-_]{22}\.[A-Za-z0-9\-_]{43}/g, "communication", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("mailgun_key", "Mailgun API keys", /key-[a-f0-9]{32}/g, "communication", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 80
  }),
  createPattern("firebase_key", "Firebase API keys", /AIza[A-Za-z0-9\-_]{35}/g, "cloud_services", {
    redactionStrategy: "partial",
    priority: 75
  }),
  createPattern("google_api_key", "Google Cloud API keys", /AIza[A-Za-z0-9\-_]{35}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 80 }),
  createPattern("azure_storage_key", "Azure Storage account keys", /[A-Za-z0-9+/]{88}==/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 70, aggressiveOnly: true }),
  createPattern("heroku_key", "Heroku API keys", /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 50, aggressiveOnly: true }),
  createPattern("digitalocean_token", "DigitalOcean personal access tokens", /dop_v1_[a-f0-9]{64}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("cloudflare_token", "Cloudflare API tokens (generic pattern)", /[A-Za-z0-9\-_]{40}/g, "cloud_services", { redactionStrategy: "partial", highlySensitive: true, priority: 30, aggressiveOnly: true }),
  createPattern("npm_token", "npm authentication tokens", /npm_[A-Za-z0-9]{36}/g, "api_keys", {
    redactionStrategy: "full",
    priority: 80
  }),
  createPattern("docker_token", "Docker Hub personal access tokens", /dckr_pat_[A-Za-z0-9\-_]{36}/g, "api_keys", { redactionStrategy: "full", priority: 80 }),
  createPattern("vercel_token", "Vercel access tokens", /vercel_[A-Za-z0-9]{24}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("netlify_token", "Netlify access tokens", /netlify_[A-Za-z0-9\-_]{64}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("railway_token", "Railway API tokens", /railway_[A-Za-z0-9]{40}/g, "cloud_services", { redactionStrategy: "full", highlySensitive: true, priority: 80 }),
  createPattern("openai_key", "OpenAI API keys", /sk-[A-Za-z0-9]{48}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("openai_project_key", "OpenAI project API keys", /sk-proj-[A-Za-z0-9\-_]{40,}/g, "api_keys", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("anthropic_key", "Anthropic API keys", /sk-ant-[A-Za-z0-9\-_]{80,}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 90
  }),
  createPattern("auth0_secret", "Auth0 client secrets (generic pattern)", /[A-Za-z0-9\-_]{64}/g, "api_keys", { redactionStrategy: "full", highlySensitive: true, priority: 25, aggressiveOnly: true }),
  createPattern("okta_token", "Okta API tokens", /00[A-Za-z0-9]{38}/g, "api_keys", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 70,
    aggressiveOnly: true
  }),
  createPattern("planetscale_password", "PlanetScale database passwords", /pscale_pw_[A-Za-z0-9\-_]{32}/g, "database", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("mongodb_atlas", "MongoDB Atlas connection strings", /mongodb\+srv:\/\/[^:\s]+:[^@\s]+@[^\/\s]+\.mongodb\.net\/[^\s]*/gi, "database", { redactionStrategy: "full", highlySensitive: true, priority: 90 }),
  createPattern("mongodb_connection", "MongoDB connection strings with credentials", /mongodb(?:\+srv)?:\/\/[^:\s]+:[^@\s]+@[^\s"']+/gi, "database", { redactionStrategy: "full", highlySensitive: true, priority: 85 }),
  createPattern("supabase_key", "Supabase service role keys (JWT format)", /eyJ[A-Za-z0-9\-_]*\.eyJ[A-Za-z0-9\-_]*\.[A-Za-z0-9\-_]*/g, "database", { redactionStrategy: "full", highlySensitive: true, priority: 65 }),
  createPattern("db_connection", "Database connection strings", /(?:mongodb|mysql|postgresql|postgres|redis|sqlite):\/\/[^\s\n"']+/gi, "database", { redactionStrategy: "partial", highlySensitive: true, priority: 80 }),
  createPattern("private_key", "Private keys in PEM format", /-----BEGIN\s+(?:RSA\s+|EC\s+|OPENSSH\s+|DSA\s+)?PRIVATE\s+KEY-----[\s\S]*?-----END\s+(?:RSA\s+|EC\s+|OPENSSH\s+|DSA\s+)?PRIVATE\s+KEY-----/gi, "cryptographic", { redactionStrategy: "full", highlySensitive: true, priority: 100 }),
  createPattern("email_in_config", "Email addresses in configuration", /(?:email|user|username|admin)["\s]*[:=]["\s]*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi, "pii", { redactionStrategy: "partial", priority: 60, aggressiveOnly: true }),
  createPattern("credit_card", "Credit card numbers (continuous digits)", /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3[0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})/g, "pii", { redactionStrategy: "full", highlySensitive: true, priority: 95 }),
  createPattern("credit_card_formatted", "Credit card numbers (with dashes or spaces)", /(?:4[0-9]{3}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|5[1-5][0-9]{2}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|3[47][0-9]{2}[-\s]?[0-9]{6}[-\s]?[0-9]{5})/g, "pii", { redactionStrategy: "full", highlySensitive: true, priority: 95 }),
  createPattern("ssn", "Social Security Numbers", /\b\d{3}-\d{2}-\d{4}\b/g, "pii", {
    redactionStrategy: "full",
    highlySensitive: true,
    priority: 95
  }),
  createPattern("private_ip", "Private IP addresses", /\b(?:10\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|172\.(?:1[6-9]|2[0-9]|3[01])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|192\.168\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\b/g, "network", { redactionStrategy: "partial", priority: 50, aggressiveOnly: true })
];
var HIGHLY_SENSITIVE_PATTERN_NAMES = [
  "private_key",
  "aws_access_key",
  "aws_secret_key",
  "azure_storage_key",
  "google_api_key",
  "credit_card",
  "credit_card_formatted",
  "stripe_key",
  "paypal_client_id",
  "square_token",
  "ssn",
  "mongodb_atlas",
  "mongodb_connection",
  "planetscale_password",
  "supabase_key",
  "db_connection",
  "openai_key",
  "openai_project_key",
  "anthropic_key",
  "auth0_secret",
  "okta_token",
  "generic_secret",
  "generic_secret_unquoted",
  "slack_token",
  "discord_token",
  "github_token",
  "github_app_token",
  "github_oauth_token",
  "gitlab_token",
  "bitbucket_token",
  "shopify_token",
  "shopify_secret",
  "sendgrid_key",
  "mailgun_key",
  "heroku_key",
  "digitalocean_token",
  "cloudflare_token",
  "vercel_token",
  "netlify_token",
  "railway_token"
];

// ../../packages/privacy-redaction/src/patterns/categories.ts
function getAllPatterns() {
  return SENSITIVE_DATA_PATTERNS;
}
function getPatternsByNames(names) {
  const nameSet = new Set(names);
  return SENSITIVE_DATA_PATTERNS.filter((pattern) => nameSet.has(pattern.name));
}
function getNonAggressivePatterns() {
  return SENSITIVE_DATA_PATTERNS.filter((pattern) => !pattern.aggressiveOnly);
}
function isHighlySensitivePattern(patternName) {
  return HIGHLY_SENSITIVE_PATTERN_NAMES.includes(patternName);
}
function selectPatterns(aggressiveMode, enabledPatterns) {
  if (enabledPatterns.length > 0) {
    return getPatternsByNames(enabledPatterns);
  }
  if (aggressiveMode) {
    return getAllPatterns();
  }
  return getNonAggressivePatterns();
}
// ../../packages/privacy-redaction/src/detection/detector.ts
class SensitiveDataDetector {
  patterns;
  config;
  cache;
  stats;
  constructor(options) {
    this.config = options.config;
    this.patterns = selectPatterns(options.config.aggressiveMode, options.config.enabledPatterns);
    if (options.enableCache !== false) {
      this.cache = new DetectionCache({
        maxEntries: options.maxCacheEntries ?? 1000,
        ttlMs: options.cacheTtlMs ?? 5 * 60 * 1000
      });
    } else {
      this.cache = null;
    }
    this.stats = this.createEmptyStats();
  }
  createEmptyStats() {
    return {
      totalDetections: 0,
      byPattern: {},
      byCategory: {},
      contentScanned: 0,
      cacheHits: 0
    };
  }
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.patterns = selectPatterns(this.config.aggressiveMode, this.config.enabledPatterns);
    this.cache?.clear();
  }
  getConfig() {
    return { ...this.config };
  }
  scanContent(content, context) {
    if (this.cache) {
      const cacheKey = generateCacheKey(content, context);
      const cached = this.cache.get(cacheKey);
      if (cached) {
        this.stats.cacheHits++;
        return { ...cached, fromCache: true };
      }
    }
    const detections = this.performScan(content);
    const deduplicatedDetections = this.deduplicateDetections(detections);
    this.stats.contentScanned++;
    this.stats.totalDetections += deduplicatedDetections.length;
    for (const detection of deduplicatedDetections) {
      this.stats.byPattern[detection.pattern] = (this.stats.byPattern[detection.pattern] || 0) + 1;
      this.stats.byCategory[detection.category] = (this.stats.byCategory[detection.category] || 0) + 1;
    }
    const result = {
      hasSensitiveData: deduplicatedDetections.length > 0,
      detections: deduplicatedDetections,
      fromCache: false
    };
    if (this.cache) {
      const cacheKey = generateCacheKey(content, context);
      this.cache.set(cacheKey, result);
    }
    return result;
  }
  performScan(content) {
    const detections = [];
    for (const pattern of this.patterns) {
      pattern.regex.lastIndex = 0;
      const matches = Array.from(content.matchAll(pattern.regex));
      for (const match of matches) {
        if (match.index === undefined)
          continue;
        let start = match.index;
        let end = match.index + match[0].length;
        let matchedText = match[0];
        if (match[1] !== undefined) {
          const sensitiveValue = match[1];
          const sensitiveStartInMatch = match[0].indexOf(sensitiveValue);
          if (sensitiveStartInMatch !== -1) {
            start = match.index + sensitiveStartInMatch;
            end = start + sensitiveValue.length;
            matchedText = sensitiveValue;
          }
        }
        detections.push({
          pattern: pattern.name,
          description: pattern.description,
          position: { start, end },
          matchedText,
          redactionStrategy: pattern.redactionStrategy,
          category: pattern.category,
          highlySensitive: pattern.highlySensitive
        });
      }
    }
    return detections;
  }
  deduplicateDetections(detections) {
    if (detections.length <= 1) {
      return detections;
    }
    const sorted = [...detections].sort((a, b) => {
      if (a.position.start !== b.position.start) {
        return a.position.start - b.position.start;
      }
      return this.getPatternPriority(b.pattern) - this.getPatternPriority(a.pattern);
    });
    const deduplicated = [];
    for (const detection of sorted) {
      const overlappingIndex = deduplicated.findIndex((existing) => detection.position.start < existing.position.end && detection.position.end > existing.position.start);
      if (overlappingIndex === -1) {
        deduplicated.push(detection);
      } else {
        const existing = deduplicated[overlappingIndex];
        const existingPriority = this.getPatternPriority(existing.pattern);
        const newPriority = this.getPatternPriority(detection.pattern);
        if (newPriority > existingPriority) {
          deduplicated[overlappingIndex] = detection;
        }
      }
    }
    return deduplicated;
  }
  getPatternPriority(patternName) {
    const pattern = this.patterns.find((p) => p.name === patternName);
    return pattern?.priority ?? 50;
  }
  hasHighlySensitiveData(detections) {
    return detections.some((d) => d.highlySensitive || isHighlySensitivePattern(d.pattern));
  }
  getStats() {
    return { ...this.stats };
  }
  clearStats() {
    this.stats = this.createEmptyStats();
  }
  clearCache() {
    this.cache?.clear();
  }
  clearAll() {
    this.clearStats();
    this.clearCache();
  }
  getCacheSize() {
    return this.cache?.size ?? 0;
  }
  getActivePatterns() {
    return [...this.patterns];
  }
  getActivePatternCount() {
    return this.patterns.length;
  }
}
// ../../packages/privacy-redaction/src/exclusion/built-in-rules.ts
var SENSITIVE_FILE_RULES = [
  { pattern: "*.env*", category: "sensitive_files", description: "Environment files" },
  { pattern: "*.key", category: "sensitive_files", description: "Key files" },
  { pattern: "*.pem", category: "sensitive_files", description: "PEM certificate files" },
  { pattern: "*.p12", category: "sensitive_files", description: "PKCS#12 files" },
  { pattern: "*.pfx", category: "sensitive_files", description: "PFX certificate files" },
  { pattern: "*.jks", category: "sensitive_files", description: "Java keystore files" },
  { pattern: "*.keystore", category: "sensitive_files", description: "Keystore files" }
];
var SENSITIVE_DIRECTORY_RULES = [
  { pattern: "**/secrets/**", category: "sensitive_directories", description: "Secrets directory" },
  {
    pattern: "**/credentials/**",
    category: "sensitive_directories",
    description: "Credentials directory"
  },
  { pattern: "**/private/**", category: "sensitive_directories", description: "Private directory" },
  { pattern: "**/.ssh/**", category: "sensitive_directories", description: "SSH directory" },
  { pattern: "**/.aws/**", category: "sensitive_directories", description: "AWS credentials" },
  { pattern: "**/.gcp/**", category: "sensitive_directories", description: "GCP credentials" }
];
var BUILD_ARTIFACT_RULES = [
  { pattern: "**/node_modules/**", category: "build_artifacts", description: "Node.js modules" },
  { pattern: "**/.git/**", category: "build_artifacts", description: "Git directory" },
  { pattern: "**/dist/**", category: "build_artifacts", description: "Distribution folder" },
  { pattern: "**/build/**", category: "build_artifacts", description: "Build folder" },
  { pattern: "**/out/**", category: "build_artifacts", description: "Output folder" },
  { pattern: "**/*.min.js", category: "build_artifacts", description: "Minified JavaScript" },
  { pattern: "**/*.min.css", category: "build_artifacts", description: "Minified CSS" },
  { pattern: "**/coverage/**", category: "build_artifacts", description: "Coverage reports" },
  { pattern: "**/.nyc_output/**", category: "build_artifacts", description: "NYC coverage output" },
  { pattern: "**/logs/**", category: "build_artifacts", description: "Log directory" },
  { pattern: "**/*.log", category: "build_artifacts", description: "Log files" },
  { pattern: "**/tmp/**", category: "build_artifacts", description: "Temp directory" },
  { pattern: "**/temp/**", category: "build_artifacts", description: "Temp directory" },
  { pattern: "**/.cache/**", category: "build_artifacts", description: "Cache directory" },
  { pattern: "**/.DS_Store", category: "build_artifacts", description: "macOS metadata" },
  { pattern: "**/Thumbs.db", category: "build_artifacts", description: "Windows thumbnails" }
];
var LOCK_FILE_RULES = [
  { pattern: "**/package-lock.json", category: "lock_files", description: "npm lock file" },
  { pattern: "**/yarn.lock", category: "lock_files", description: "Yarn lock file" },
  { pattern: "**/pnpm-lock.yaml", category: "lock_files", description: "pnpm lock file" },
  { pattern: "**/bun.lockb", category: "lock_files", description: "Bun lock file (binary)" },
  { pattern: "**/bun.lock", category: "lock_files", description: "Bun lock file" },
  { pattern: "**/poetry.lock", category: "lock_files", description: "Poetry lock file" },
  { pattern: "**/Pipfile.lock", category: "lock_files", description: "Pipenv lock file" },
  { pattern: "**/requirements.lock", category: "lock_files", description: "Requirements lock" },
  { pattern: "**/Gemfile.lock", category: "lock_files", description: "Bundler lock file" },
  { pattern: "**/composer.lock", category: "lock_files", description: "Composer lock file" },
  { pattern: "**/Cargo.lock", category: "lock_files", description: "Cargo lock file" },
  { pattern: "**/go.sum", category: "lock_files", description: "Go checksum file" },
  { pattern: "**/packages.lock.json", category: "lock_files", description: ".NET lock file" },
  { pattern: "**/project.assets.json", category: "lock_files", description: ".NET assets" },
  { pattern: "**/pubspec.lock", category: "lock_files", description: "Pub lock file" },
  { pattern: "**/mix.lock", category: "lock_files", description: "Mix lock file" },
  { pattern: "**/Package.resolved", category: "lock_files", description: "Swift PM lock" },
  { pattern: "**/gradle.lockfile", category: "lock_files", description: "Gradle lock file" },
  { pattern: "**/gradle/dependencies.lock", category: "lock_files", description: "Gradle deps" },
  { pattern: "**/renv.lock", category: "lock_files", description: "renv lock file" },
  { pattern: "**/packrat/packrat.lock", category: "lock_files", description: "Packrat lock" },
  { pattern: "**/cabal.project.freeze", category: "lock_files", description: "Cabal freeze" },
  { pattern: "**/stack.yaml.lock", category: "lock_files", description: "Stack lock file" },
  { pattern: "**/Manifest.toml", category: "lock_files", description: "Julia manifest" },
  { pattern: "**/.terraform.lock.hcl", category: "lock_files", description: "Terraform lock" },
  { pattern: "**/flake.lock", category: "lock_files", description: "Nix flake lock" },
  { pattern: "**/npm-shrinkwrap.json", category: "lock_files", description: "npm shrinkwrap" }
];
var BINARY_MEDIA_RULES = [
  { pattern: "**/*.exe", category: "binary_media", description: "Windows executable" },
  { pattern: "**/*.dll", category: "binary_media", description: "Windows library" },
  { pattern: "**/*.so", category: "binary_media", description: "Shared object" },
  { pattern: "**/*.dylib", category: "binary_media", description: "macOS library" },
  { pattern: "**/*.bin", category: "binary_media", description: "Binary file" },
  { pattern: "**/*.obj", category: "binary_media", description: "Object file" },
  { pattern: "**/*.o", category: "binary_media", description: "Object file" },
  { pattern: "**/*.a", category: "binary_media", description: "Static library" },
  { pattern: "**/*.lib", category: "binary_media", description: "Library file" },
  { pattern: "**/*.jar", category: "binary_media", description: "Java archive" },
  { pattern: "**/*.war", category: "binary_media", description: "Web archive" },
  { pattern: "**/*.ear", category: "binary_media", description: "Enterprise archive" },
  { pattern: "**/*.class", category: "binary_media", description: "Java class" },
  { pattern: "**/*.pyc", category: "binary_media", description: "Python bytecode" },
  { pattern: "**/*.pyo", category: "binary_media", description: "Python optimized" },
  { pattern: "**/*.wasm", category: "binary_media", description: "WebAssembly" },
  { pattern: "**/*.vsix", category: "binary_media", description: "VS Code extension" },
  { pattern: "**/*.jpg", category: "binary_media", description: "JPEG image" },
  { pattern: "**/*.jpeg", category: "binary_media", description: "JPEG image" },
  { pattern: "**/*.png", category: "binary_media", description: "PNG image" },
  { pattern: "**/*.gif", category: "binary_media", description: "GIF image" },
  { pattern: "**/*.bmp", category: "binary_media", description: "Bitmap image" },
  { pattern: "**/*.ico", category: "binary_media", description: "Icon file" },
  { pattern: "**/*.webp", category: "binary_media", description: "WebP image" },
  { pattern: "**/*.tiff", category: "binary_media", description: "TIFF image" },
  { pattern: "**/*.psd", category: "binary_media", description: "Photoshop file" },
  { pattern: "**/*.mp4", category: "binary_media", description: "MP4 video" },
  { pattern: "**/*.avi", category: "binary_media", description: "AVI video" },
  { pattern: "**/*.mov", category: "binary_media", description: "QuickTime video" },
  { pattern: "**/*.wmv", category: "binary_media", description: "WMV video" },
  { pattern: "**/*.flv", category: "binary_media", description: "Flash video" },
  { pattern: "**/*.webm", category: "binary_media", description: "WebM video" },
  { pattern: "**/*.mkv", category: "binary_media", description: "Matroska video" },
  { pattern: "**/*.mp3", category: "binary_media", description: "MP3 audio" },
  { pattern: "**/*.wav", category: "binary_media", description: "WAV audio" },
  { pattern: "**/*.ogg", category: "binary_media", description: "Ogg audio" },
  { pattern: "**/*.flac", category: "binary_media", description: "FLAC audio" },
  { pattern: "**/*.aac", category: "binary_media", description: "AAC audio" },
  { pattern: "**/*.m4a", category: "binary_media", description: "M4A audio" },
  { pattern: "**/*.zip", category: "binary_media", description: "ZIP archive" },
  { pattern: "**/*.tar", category: "binary_media", description: "TAR archive" },
  { pattern: "**/*.gz", category: "binary_media", description: "Gzip archive" },
  { pattern: "**/*.bz2", category: "binary_media", description: "Bzip2 archive" },
  { pattern: "**/*.xz", category: "binary_media", description: "XZ archive" },
  { pattern: "**/*.rar", category: "binary_media", description: "RAR archive" },
  { pattern: "**/*.7z", category: "binary_media", description: "7-Zip archive" },
  { pattern: "**/*.tgz", category: "binary_media", description: "Tarball" },
  { pattern: "**/*.pdf", category: "binary_media", description: "PDF document" },
  { pattern: "**/*.doc", category: "binary_media", description: "Word document" },
  { pattern: "**/*.docx", category: "binary_media", description: "Word document" },
  { pattern: "**/*.xls", category: "binary_media", description: "Excel spreadsheet" },
  { pattern: "**/*.xlsx", category: "binary_media", description: "Excel spreadsheet" },
  { pattern: "**/*.ppt", category: "binary_media", description: "PowerPoint" },
  { pattern: "**/*.pptx", category: "binary_media", description: "PowerPoint" },
  { pattern: "**/*.woff", category: "binary_media", description: "WOFF font" },
  { pattern: "**/*.woff2", category: "binary_media", description: "WOFF2 font" },
  { pattern: "**/*.ttf", category: "binary_media", description: "TrueType font" },
  { pattern: "**/*.otf", category: "binary_media", description: "OpenType font" },
  { pattern: "**/*.eot", category: "binary_media", description: "EOT font" },
  { pattern: "**/*.db", category: "binary_media", description: "Database file" },
  { pattern: "**/*.sqlite", category: "binary_media", description: "SQLite database" },
  { pattern: "**/*.sqlite3", category: "binary_media", description: "SQLite database" }
];
var ALL_BUILT_IN_RULES = [
  ...SENSITIVE_FILE_RULES,
  ...SENSITIVE_DIRECTORY_RULES,
  ...BUILD_ARTIFACT_RULES,
  ...LOCK_FILE_RULES,
  ...BINARY_MEDIA_RULES
];
function getBuiltInPatterns() {
  return new Set(ALL_BUILT_IN_RULES.map((rule) => rule.pattern));
}
// ../../packages/privacy-redaction/src/exclusion/gitignore-parser.ts
function parseGitignoreLine(line) {
  let pattern = line.trim();
  if (!pattern || pattern.startsWith("#")) {
    return null;
  }
  pattern = pattern.replace(/\\(\s)$/, "$1");
  const negated = pattern.startsWith("!");
  if (negated) {
    pattern = pattern.substring(1);
  }
  const directoryOnly = pattern.endsWith("/");
  if (directoryOnly) {
    pattern = pattern.slice(0, -1);
  }
  const original = line.trim();
  let glob = pattern;
  if (glob.startsWith("/")) {
    glob = glob.substring(1);
  } else if (!glob.includes("/")) {
    glob = `**/${glob}`;
  }
  if (directoryOnly) {
    glob = `${glob}/**`;
  }
  return {
    original,
    glob,
    negated,
    directoryOnly
  };
}
function parseGitignoreContent(content) {
  const lines = content.split(`
`);
  const patterns = [];
  for (const line of lines) {
    const parsed = parseGitignoreLine(line);
    if (parsed) {
      patterns.push(parsed);
    }
  }
  return patterns;
}
function createGitignoreResult(filePath, content) {
  const directory = filePath.replace(/[/\\][^/\\]*$/, "");
  const patterns = parseGitignoreContent(content);
  const globs = patterns.filter((p) => !p.negated).map((p) => p.glob);
  return {
    filePath,
    directory,
    patterns,
    globs
  };
}
function mergeGitignorePatterns(results) {
  const patternMap = new Map;
  for (const result of results) {
    for (const glob of result.globs) {
      patternMap.set(glob, result.directory);
    }
  }
  return patternMap;
}

// ../../packages/privacy-redaction/src/exclusion/glob-matcher.ts
function normalizePath(filePath) {
  return filePath.replace(/\\/g, "/");
}
function globToRegex(pattern) {
  let normalized = normalizePath(pattern);
  let regexPattern = normalized.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "§DOUBLESTAR§").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]");
  regexPattern = regexPattern.replace(/§DOUBLESTAR§\//g, "(?:.*/)?").replace(/\/§DOUBLESTAR§/g, "(?:/.*)?").replace(/§DOUBLESTAR§/g, ".*");
  return new RegExp(`^${regexPattern}$`, "i");
}
function matchesGlob(filePath, pattern, workspaceRoot) {
  const normalizedPath = normalizePath(filePath);
  const regex = globToRegex(pattern);
  if (regex.test(normalizedPath)) {
    return true;
  }
  if (!pattern.includes("/")) {
    const fileName = normalizedPath.split("/").pop() || "";
    if (regex.test(fileName)) {
      return true;
    }
  }
  if (workspaceRoot) {
    const normalizedRoot = normalizePath(workspaceRoot);
    if (normalizedPath.startsWith(normalizedRoot)) {
      let relativePath = normalizedPath.substring(normalizedRoot.length);
      if (relativePath.startsWith("/")) {
        relativePath = relativePath.substring(1);
      }
      if (regex.test(relativePath)) {
        return true;
      }
    }
  }
  return false;
}
function matchesGlobRelative(filePath, pattern, baseDir) {
  const normalizedPath = normalizePath(filePath);
  const normalizedBase = normalizePath(baseDir);
  if (!normalizedPath.startsWith(normalizedBase)) {
    return false;
  }
  let relativePath = normalizedPath.substring(normalizedBase.length);
  if (relativePath.startsWith("/")) {
    relativePath = relativePath.substring(1);
  }
  return matchesGlob(relativePath, pattern);
}
function findMatchingPattern(filePath, patterns, workspaceRoot) {
  for (const pattern of patterns) {
    if (matchesGlob(filePath, pattern, workspaceRoot)) {
      return pattern;
    }
  }
  return null;
}
function findMatchingPatternWithBase(filePath, patternMap) {
  for (const [pattern, baseDir] of patternMap) {
    if (matchesGlobRelative(filePath, pattern, baseDir)) {
      return { pattern, baseDir };
    }
  }
  return null;
}

// ../../packages/privacy-redaction/src/exclusion/zest-rules-parser.ts
var ZEST_RULES_FILENAME = ".zest.rules";
function parseZestRulesContent(content) {
  return parseGitignoreContent(content);
}
function createZestRulesResult(filePath, content) {
  const directory = filePath.replace(/[/\\][^/\\]*$/, "");
  const patterns = parseZestRulesContent(content);
  const globs = patterns.filter((p) => !p.negated).map((p) => p.glob);
  return {
    filePath,
    directory,
    patterns,
    globs
  };
}
function mergeZestRulesPatterns(results) {
  const patterns = new Set;
  for (const result of results) {
    for (const glob of result.globs) {
      patterns.add(glob);
    }
  }
  return patterns;
}

// ../../packages/privacy-redaction/src/exclusion/exclusion-service.ts
class FileExclusionService {
  config;
  fs;
  builtInPatterns;
  gitignorePatterns;
  zestRulesPatterns;
  customPatterns;
  excludedFiles;
  initialized;
  constructor(options) {
    this.config = options.config;
    this.fs = options.fs;
    this.builtInPatterns = getBuiltInPatterns();
    this.gitignorePatterns = new Map;
    this.zestRulesPatterns = new Set;
    this.customPatterns = new Set(options.config.customExclusionPatterns);
    this.excludedFiles = new Map;
    this.initialized = false;
  }
  async initialize() {
    await this.refreshPatterns();
    this.initialized = true;
  }
  async refreshPatterns() {
    if (this.config.enableGitignore) {
      await this.loadGitignorePatterns();
    } else {
      this.gitignorePatterns.clear();
    }
    if (this.config.enableZestRules) {
      await this.loadZestRulesPatterns();
    } else {
      this.zestRulesPatterns.clear();
    }
    this.customPatterns = new Set(this.config.customExclusionPatterns);
    this.excludedFiles.clear();
  }
  async loadGitignorePatterns() {
    this.gitignorePatterns.clear();
    const workspaceRoot = this.fs.getWorkspaceRoot();
    if (!workspaceRoot)
      return;
    const results = [];
    const rootGitignore = `${workspaceRoot}/.gitignore`;
    try {
      if (await this.fs.fileExists(rootGitignore)) {
        const content = await this.fs.readFile(rootGitignore);
        results.push(createGitignoreResult(rootGitignore, content));
      }
    } catch {}
    this.gitignorePatterns = mergeGitignorePatterns(results);
  }
  async loadZestRulesPatterns() {
    this.zestRulesPatterns.clear();
    const workspaceRoot = this.fs.getWorkspaceRoot();
    if (!workspaceRoot)
      return;
    const results = [];
    const rootZestRules = `${workspaceRoot}/${ZEST_RULES_FILENAME}`;
    try {
      if (await this.fs.fileExists(rootZestRules)) {
        const content = await this.fs.readFile(rootZestRules);
        results.push(createZestRulesResult(rootZestRules, content));
      }
    } catch {}
    this.zestRulesPatterns = mergeZestRulesPatterns(results);
  }
  async updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    await this.refreshPatterns();
  }
  getConfig() {
    return { ...this.config };
  }
  shouldExcludeFile(filePath) {
    const workspaceRoot = this.fs.getWorkspaceRoot();
    const builtInMatch = findMatchingPattern(filePath, this.builtInPatterns, workspaceRoot);
    if (builtInMatch) {
      const result = {
        excluded: true,
        reason: "built_in_rule",
        matchedRule: builtInMatch
      };
      this.trackExclusion(filePath, result);
      return result;
    }
    if (this.config.enableGitignore && this.gitignorePatterns.size > 0) {
      const gitignoreMatch = findMatchingPatternWithBase(filePath, this.gitignorePatterns);
      if (gitignoreMatch) {
        const result = {
          excluded: true,
          reason: "gitignore",
          matchedRule: gitignoreMatch.pattern
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    if (this.config.enableZestRules && this.zestRulesPatterns.size > 0) {
      const zestMatch = findMatchingPattern(filePath, this.zestRulesPatterns, workspaceRoot);
      if (zestMatch) {
        const result = {
          excluded: true,
          reason: "zest_rules",
          matchedRule: zestMatch
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    if (this.customPatterns.size > 0) {
      const customMatch = findMatchingPattern(filePath, this.customPatterns, workspaceRoot);
      if (customMatch) {
        const result = {
          excluded: true,
          reason: "custom_pattern",
          matchedRule: customMatch
        };
        this.trackExclusion(filePath, result);
        return result;
      }
    }
    return { excluded: false };
  }
  isFileTooLarge(fileSizeBytes) {
    return fileSizeBytes > this.config.maxFileSizeBytes;
  }
  isBinaryFile(filePath) {
    const binaryExtensions = [
      ".exe",
      ".dll",
      ".so",
      ".dylib",
      ".bin",
      ".obj",
      ".o",
      ".a",
      ".lib",
      ".jar",
      ".war",
      ".class",
      ".pyc",
      ".wasm",
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".ico",
      ".webp",
      ".mp4",
      ".avi",
      ".mov",
      ".wmv",
      ".mkv",
      ".mp3",
      ".wav",
      ".zip",
      ".tar",
      ".gz",
      ".rar",
      ".7z",
      ".pdf",
      ".woff",
      ".woff2",
      ".ttf",
      ".otf",
      ".eot",
      ".db",
      ".sqlite",
      ".sqlite3"
    ];
    const lowerPath = filePath.toLowerCase();
    return binaryExtensions.some((ext) => lowerPath.endsWith(ext));
  }
  trackExclusion(filePath, result) {
    if (result.excluded && result.reason && result.matchedRule) {
      this.excludedFiles.set(filePath, {
        filePath,
        reason: result.reason,
        matchedRule: result.matchedRule
      });
    }
  }
  getExcludedFiles() {
    return Array.from(this.excludedFiles.values());
  }
  getStats() {
    const byReason = {
      built_in_rule: 0,
      gitignore: 0,
      zest_rules: 0,
      custom_pattern: 0,
      file_size: 0,
      binary_file: 0
    };
    for (const excluded of this.excludedFiles.values()) {
      byReason[excluded.reason]++;
    }
    return {
      totalExcluded: this.excludedFiles.size,
      byReason,
      gitignorePatternCount: this.gitignorePatterns.size,
      zestRulesPatternCount: this.zestRulesPatterns.size,
      builtInPatternCount: this.builtInPatterns.size
    };
  }
  clearExclusions() {
    this.excludedFiles.clear();
  }
  clearExclusionForFile(filePath) {
    this.excludedFiles.delete(filePath);
  }
  isInitialized() {
    return this.initialized;
  }
  getPatternCounts() {
    const counts = {
      builtIn: this.builtInPatterns.size,
      gitignore: this.gitignorePatterns.size,
      zestRules: this.zestRulesPatterns.size,
      custom: this.customPatterns.size,
      total: 0
    };
    counts.total = counts.builtIn + counts.gitignore + counts.zestRules + counts.custom;
    return counts;
  }
}
// ../../packages/privacy-redaction/src/redaction/strategies.ts
function simpleHash(text) {
  let hash = 0;
  for (let i = 0;i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0").substring(0, 8);
}
function fullRedact(_text) {
  return "[REDACTED]";
}
function partialRedact(text) {
  if (text.length <= 8) {
    return "[REDACTED]";
  }
  const visibleChars = Math.max(2, Math.floor(text.length * 0.2));
  const start = text.substring(0, visibleChars);
  const end = text.substring(text.length - visibleChars);
  const middleLength = text.length - 2 * visibleChars;
  return `${start}${"*".repeat(Math.min(middleLength, 8))}${end}`;
}
function hashRedact(text) {
  return `[HASH:${simpleHash(text)}]`;
}
function encryptRedact(text) {
  const contentHash = simpleHash(text);
  const encryptedHash = simpleHash(text + "salt");
  return `[ENCRYPTED:${encryptedHash}...${contentHash}]`;
}
function applyRedactionStrategy(text, strategy) {
  switch (strategy) {
    case "full":
      return fullRedact(text);
    case "partial":
      return partialRedact(text);
    case "hash":
      return hashRedact(text);
    case "encrypt":
      return encryptRedact(text);
    default:
      return fullRedact(text);
  }
}

// ../../packages/privacy-redaction/src/redaction/redactor.ts
function redactContent(content, detections, config, options = {}) {
  const approach = options.approach ?? config.approach;
  const encryptHighlySensitive = options.encryptHighlySensitive ?? true;
  if (detections.length === 0) {
    return {
      redactedContent: content,
      detections: [],
      stats: {
        totalDetections: 0,
        byPattern: {}
      },
      wasRedacted: false
    };
  }
  const sortedDetections = [...detections].sort((a, b) => b.position.start - a.position.start);
  let redactedContent = content;
  const patternCounts = {};
  for (const detection of sortedDetections) {
    const originalText = content.substring(detection.position.start, detection.position.end);
    const strategy = determineStrategy(detection, approach, encryptHighlySensitive);
    const redactedText = applyRedactionStrategy(originalText, strategy);
    redactedContent = redactedContent.substring(0, detection.position.start) + redactedText + redactedContent.substring(detection.position.end);
    patternCounts[detection.pattern] = (patternCounts[detection.pattern] || 0) + 1;
  }
  return {
    redactedContent,
    detections,
    stats: {
      totalDetections: detections.length,
      byPattern: patternCounts
    },
    wasRedacted: true
  };
}
function determineStrategy(detection, approach, encryptHighlySensitive) {
  switch (approach) {
    case "encryption":
      return "encrypt";
    case "hybrid":
      if (encryptHighlySensitive && isHighlySensitive(detection)) {
        return "encrypt";
      }
      return detection.redactionStrategy;
    case "detection":
    default:
      return detection.redactionStrategy;
  }
}
function isHighlySensitive(detection) {
  return detection.highlySensitive || isHighlySensitivePattern(detection.pattern);
}
// ../../packages/privacy-redaction/src/privacy-service.ts
class PrivacyService {
  config;
  detector;
  exclusionService;
  filesProcessed;
  constructor(options) {
    this.config = createPrivacyConfig(options.config);
    const detectorOptions = {
      config: this.config,
      enableCache: options.enableCache ?? true,
      maxCacheEntries: options.maxCacheEntries,
      cacheTtlMs: options.cacheTtlMs
    };
    this.detector = new SensitiveDataDetector(detectorOptions);
    const exclusionOptions = {
      config: this.config,
      fs: options.fs
    };
    this.exclusionService = new FileExclusionService(exclusionOptions);
    this.filesProcessed = 0;
  }
  async initialize() {
    await this.exclusionService.initialize();
  }
  isInitialized() {
    return this.exclusionService.isInitialized();
  }
  processContent(content, filePath, options) {
    const scanResult = this.detector.scanContent(content, filePath);
    if (!scanResult.hasSensitiveData) {
      this.filesProcessed++;
      return {
        content,
        detections: [],
        hasSensitiveData: false,
        wasRedacted: false
      };
    }
    const redactionResult = redactContent(content, scanResult.detections, this.config, options);
    this.filesProcessed++;
    return {
      content: redactionResult.redactedContent,
      detections: redactionResult.detections,
      hasSensitiveData: true,
      wasRedacted: redactionResult.wasRedacted
    };
  }
  processContentIfNotExcluded(content, filePath, options) {
    const exclusion = this.shouldExcludeFile(filePath);
    if (exclusion.excluded) {
      return null;
    }
    return this.processContent(content, filePath, options);
  }
  scanContent(content, context) {
    const result = this.detector.scanContent(content, context);
    return result.detections;
  }
  hasSensitiveData(content) {
    const result = this.detector.scanContent(content);
    return result.hasSensitiveData;
  }
  hasHighlySensitiveData(content) {
    const result = this.detector.scanContent(content);
    if (!result.hasSensitiveData)
      return false;
    return this.detector.hasHighlySensitiveData(result.detections);
  }
  shouldExcludeFile(filePath) {
    return this.exclusionService.shouldExcludeFile(filePath);
  }
  isFileTooLarge(fileSizeBytes) {
    return this.exclusionService.isFileTooLarge(fileSizeBytes);
  }
  isBinaryFile(filePath) {
    return this.exclusionService.isBinaryFile(filePath);
  }
  async updateConfig(partial) {
    this.config = { ...this.config, ...partial };
    this.detector.updateConfig(partial);
    await this.exclusionService.updateConfig(partial);
  }
  getConfig() {
    return { ...this.config };
  }
  getStats() {
    const detectionStats = this.detector.getStats();
    const exclusionStats = this.exclusionService.getStats();
    return {
      detection: detectionStats,
      filesExcluded: exclusionStats.totalExcluded,
      filesProcessed: this.filesProcessed
    };
  }
  getExcludedFiles() {
    return this.exclusionService.getExcludedFiles();
  }
  clearAll() {
    this.detector.clearAll();
    this.exclusionService.clearExclusions();
    this.filesProcessed = 0;
  }
  clearCache() {
    this.detector.clearCache();
  }
  clearStats() {
    this.detector.clearStats();
    this.filesProcessed = 0;
  }
  clearExclusions() {
    this.exclusionService.clearExclusions();
  }
  async refreshExclusionPatterns() {
    await this.exclusionService.refreshPatterns();
  }
  getActivePatternCount() {
    return this.detector.getActivePatternCount();
  }
  getExclusionPatternCounts() {
    return this.exclusionService.getPatternCounts();
  }
  getCacheSize() {
    return this.detector.getCacheSize();
  }
}
// src/privacy/node-fs-adapter.ts
import { readFile as readFile2, readdir as readdir2, stat as stat2 } from "node:fs/promises";
function createNodeFsAdapter(workspaceRoot) {
  return {
    async readFile(path) {
      return readFile2(path, "utf-8");
    },
    async fileExists(path) {
      try {
        await stat2(path);
        return true;
      } catch {
        return false;
      }
    },
    async readDir(path) {
      return readdir2(path);
    },
    getWorkspaceRoot() {
      return workspaceRoot;
    }
  };
}

// src/privacy/privacy-manager.ts
var privacyManagerInstance = null;

class PrivacyManager {
  service = null;
  initialized = false;
  projectDir;
  async initialize(projectDir, settings) {
    if (this.initialized && this.projectDir === projectDir) {
      logger.debug("Privacy manager already initialized for this project");
      return;
    }
    this.projectDir = projectDir;
    const config = this.settingsToConfig(settings);
    this.service = new PrivacyService({
      config,
      fs: createNodeFsAdapter(projectDir),
      enableCache: true
    });
    await this.service.initialize();
    this.initialized = true;
    logger.debug("Privacy manager initialized", {
      projectDir,
      patternCount: this.service.getActivePatternCount(),
      exclusionCounts: this.service.getExclusionPatternCounts()
    });
  }
  isInitialized() {
    return this.initialized && this.service !== null;
  }
  processContent(content, filePath) {
    if (!this.service || !this.initialized) {
      return {
        content,
        detections: [],
        hasSensitiveData: false,
        wasRedacted: false
      };
    }
    return this.service.processContent(content, filePath);
  }
  redactMessage(content) {
    if (!this.service || !this.initialized) {
      return content;
    }
    const result = this.service.processContent(content);
    if (result.wasRedacted) {
      logger.debug("Redacted sensitive data from message", {
        detections: result.detections.length,
        patterns: result.detections.map((d) => d.pattern)
      });
    }
    return result.content;
  }
  redactDiff(diff, filePath) {
    if (!this.service || !this.initialized) {
      return diff;
    }
    const result = this.service.processContent(diff, filePath);
    if (result.wasRedacted) {
      logger.debug("Redacted sensitive data from diff", {
        filePath,
        detections: result.detections.length
      });
    }
    return result.content;
  }
  shouldExcludeFile(filePath) {
    if (!this.service || !this.initialized) {
      return false;
    }
    const result = this.service.shouldExcludeFile(filePath);
    if (result.excluded) {
      logger.debug("File excluded from telemetry", {
        filePath,
        reason: result.reason,
        matchedRule: result.matchedRule
      });
    }
    return result.excluded;
  }
  async updateSettings(settings) {
    if (!this.service) {
      logger.warn("Cannot update settings: Privacy manager not initialized");
      return;
    }
    const config = this.settingsToConfig(settings);
    await this.service.updateConfig(config);
    logger.debug("Privacy settings updated", settings);
  }
  getStats() {
    if (!this.service || !this.initialized) {
      return null;
    }
    const stats = this.service.getStats();
    return {
      totalDetections: stats.detection.totalDetections,
      filesProcessed: stats.filesProcessed,
      filesExcluded: stats.filesExcluded
    };
  }
  reset() {
    if (this.service) {
      this.service.clearAll();
    }
    this.initialized = false;
    this.projectDir = undefined;
    logger.debug("Privacy manager reset");
  }
  settingsToConfig(settings) {
    if (!settings) {
      return {};
    }
    return {
      approach: settings.approach,
      aggressiveMode: settings.aggressiveMode,
      enableGitignore: settings.enableGitignore,
      enableZestRules: settings.enableZestRules,
      customExclusionPatterns: settings.customExclusionPatterns
    };
  }
}
function getPrivacyManager() {
  if (!privacyManagerInstance) {
    privacyManagerInstance = new PrivacyManager;
  }
  return privacyManagerInstance;
}

// src/commands/privacy-cli.ts
function parseArgs(args) {
  const result = {};
  for (const arg of args) {
    if (arg.startsWith("--approach=")) {
      const value = arg.slice("--approach=".length);
      if (["detection", "encryption", "hybrid"].includes(value)) {
        result.approach = value;
      }
    } else if (arg.startsWith("--aggressive=")) {
      result.aggressive = arg.slice("--aggressive=".length) === "true";
    } else if (arg.startsWith("--gitignore=")) {
      result.gitignore = arg.slice("--gitignore=".length) === "true";
    } else if (arg.startsWith("--zest-rules=")) {
      result.zestRules = arg.slice("--zest-rules=".length) === "true";
    } else if (arg.startsWith("--exclude=")) {
      result.exclude = arg.slice("--exclude=".length).replace(/^["']|["']$/g, "");
    } else if (arg.startsWith("--remove-exclude=")) {
      result.removeExclude = arg.slice("--remove-exclude=".length).replace(/^["']|["']$/g, "");
    }
  }
  return result;
}
function displaySettings(privacy) {
  console.log(`
\uD83D\uDD12 Privacy Settings
`);
  const approachIcons = {
    detection: "\uD83D\uDD0D",
    encryption: "\uD83D\uDD10",
    hybrid: "\uD83D\uDD04"
  };
  console.log(`${approachIcons[privacy.approach]} Approach: ${privacy.approach}`);
  console.log(`${privacy.aggressiveMode ? "⚡" : "\uD83C\uDF3F"} Aggressive mode: ${privacy.aggressiveMode ? "enabled" : "disabled"}`);
  console.log(`${privacy.enableGitignore ? "✅" : "❌"} Respect .gitignore: ${privacy.enableGitignore ? "yes" : "no"}`);
  console.log(`${privacy.enableZestRules ? "✅" : "❌"} Respect .zest.rules: ${privacy.enableZestRules ? "yes" : "no"}`);
  if (privacy.customExclusionPatterns.length > 0) {
    console.log(`
\uD83D\uDCC1 Custom exclusion patterns (${privacy.customExclusionPatterns.length}):`);
    for (const pattern of privacy.customExclusionPatterns) {
      console.log(`   • ${pattern}`);
    }
  } else {
    console.log(`
\uD83D\uDCC1 Custom exclusion patterns: none`);
  }
  const privacyManager = getPrivacyManager();
  const stats = privacyManager.getStats();
  if (stats) {
    console.log(`
\uD83D\uDCCA Session stats:`);
    console.log(`   • Detections: ${stats.totalDetections}`);
    console.log(`   • Files processed: ${stats.filesProcessed}`);
    console.log(`   • Files excluded: ${stats.filesExcluded}`);
  }
  console.log(`
\uD83D\uDCA1 Use --help to see available options
`);
}
function displayHelp() {
  console.log(`
\uD83D\uDD12 Privacy Settings Command

Usage: /zest:privacy [options]

Options:
  --approach=<value>       Set privacy approach
                           • detection  - Detect and redact sensitive data
                           • encryption - Encrypt sensitive data (AES-256)
                           • hybrid     - Encrypt highly sensitive, redact others

  --aggressive=<bool>      Enable/disable aggressive detection mode
                           • true  - More patterns, may have false positives
                           • false - Default patterns only (recommended)

  --gitignore=<bool>       Respect .gitignore for file exclusion
                           • true  - Skip files matching .gitignore patterns
                           • false - Process all files

  --zest-rules=<bool>      Respect .zest.rules for file exclusion
                           • true  - Use project .zest.rules file
                           • false - Ignore .zest.rules

  --exclude=<pattern>      Add a custom glob exclusion pattern
                           Example: --exclude="*.secret.js"

  --remove-exclude=<pat>   Remove a custom exclusion pattern
                           Example: --remove-exclude="*.log"

Examples:
  /zest:privacy                           # View current settings
  /zest:privacy --aggressive=true         # Enable aggressive detection
  /zest:privacy --exclude="secrets/**"    # Exclude secrets directory
  /zest:privacy --approach=hybrid         # Use hybrid approach
`);
}
async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) {
    displayHelp();
    return;
  }
  try {
    const settings = await loadSettings();
    const privacy = settings.privacy ?? { ...DEFAULT_PRIVACY_SETTINGS };
    const parsedArgs = parseArgs(args);
    if (Object.keys(parsedArgs).length === 0) {
      displaySettings(privacy);
      return;
    }
    const changes = [];
    if (parsedArgs.approach !== undefined) {
      privacy.approach = parsedArgs.approach;
      changes.push(`approach → ${parsedArgs.approach}`);
    }
    if (parsedArgs.aggressive !== undefined) {
      privacy.aggressiveMode = parsedArgs.aggressive;
      changes.push(`aggressive mode → ${parsedArgs.aggressive ? "enabled" : "disabled"}`);
    }
    if (parsedArgs.gitignore !== undefined) {
      privacy.enableGitignore = parsedArgs.gitignore;
      changes.push(`.gitignore respect → ${parsedArgs.gitignore ? "enabled" : "disabled"}`);
    }
    if (parsedArgs.zestRules !== undefined) {
      privacy.enableZestRules = parsedArgs.zestRules;
      changes.push(`.zest.rules respect → ${parsedArgs.zestRules ? "enabled" : "disabled"}`);
    }
    if (parsedArgs.exclude) {
      if (!privacy.customExclusionPatterns.includes(parsedArgs.exclude)) {
        privacy.customExclusionPatterns.push(parsedArgs.exclude);
        changes.push(`added exclusion: ${parsedArgs.exclude}`);
      } else {
        console.log(`ℹ️  Pattern already exists: ${parsedArgs.exclude}`);
      }
    }
    if (parsedArgs.removeExclude) {
      const index = privacy.customExclusionPatterns.indexOf(parsedArgs.removeExclude);
      if (index !== -1) {
        privacy.customExclusionPatterns.splice(index, 1);
        changes.push(`removed exclusion: ${parsedArgs.removeExclude}`);
      } else {
        console.log(`ℹ️  Pattern not found: ${parsedArgs.removeExclude}`);
      }
    }
    if (changes.length > 0) {
      settings.privacy = privacy;
      await saveSettings(settings);
      console.log(`✅ Privacy settings updated:
`);
      for (const change of changes) {
        console.log(`   • ${change}`);
      }
      const privacyManager = getPrivacyManager();
      if (privacyManager.isInitialized()) {
        await privacyManager.updateSettings(privacy);
        console.log(`
\uD83D\uDD04 Privacy manager reloaded with new settings`);
      }
      console.log(`
\uD83D\uDCA1 Changes take effect on the next extraction
`);
    }
  } catch (error) {
    logger.error("Failed to update privacy settings", error);
    console.error("❌ Failed to update privacy settings: " + (error instanceof Error ? error.message : "Unknown error"));
    process.exit(1);
  }
}
main();
