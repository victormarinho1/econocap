"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.Product_imagesScalarFieldEnum = exports.UsersScalarFieldEnum = exports.StoresScalarFieldEnum = exports.PromotionsScalarFieldEnum = exports.ProductsScalarFieldEnum = exports.ClicksScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.0.0",
    engine: "0c19ccc313cf9911a90d99d2ac2eb0280c76c513"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    categories: 'categories',
    clicks: 'clicks',
    products: 'products',
    promotions: 'promotions',
    stores: 'stores',
    users: 'users',
    product_images: 'product_images'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CategoriesScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.ClicksScalarFieldEnum = {
    id: 'id',
    promotions_id: 'promotions_id',
    ip: 'ip',
    user_agent: 'user_agent',
    referrer: 'referrer',
    landing_url: 'landing_url',
    created_at: 'created_at'
};
exports.ProductsScalarFieldEnum = {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
};
exports.PromotionsScalarFieldEnum = {
    id: 'id',
    product_id: 'product_id',
    store_id: 'store_id',
    title: 'title',
    summary: 'summary',
    price: 'price',
    old_price: 'old_price',
    currency: 'currency',
    affiliate_url: 'affiliate_url',
    coupon_code: 'coupon_code',
    starts_at: 'starts_at',
    ends_at: 'ends_at',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.StoresScalarFieldEnum = {
    id: 'id',
    name: 'name',
    website: 'website',
    contact_email: 'contact_email',
    created_at: 'created_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Product_imagesScalarFieldEnum = {
    id: 'id',
    product_id: 'product_id',
    url: 'url',
    alt_text: 'alt_text',
    position: 'position',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map