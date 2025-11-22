import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly categories: "categories";
    readonly clicks: "clicks";
    readonly products: "products";
    readonly promotions: "promotions";
    readonly stores: "stores";
    readonly users: "users";
    readonly product_images: "product_images";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const ClicksScalarFieldEnum: {
    readonly id: "id";
    readonly promotions_id: "promotions_id";
    readonly ip: "ip";
    readonly user_agent: "user_agent";
    readonly referrer: "referrer";
    readonly landing_url: "landing_url";
    readonly created_at: "created_at";
};
export type ClicksScalarFieldEnum = (typeof ClicksScalarFieldEnum)[keyof typeof ClicksScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly id: "id";
    readonly category_id: "category_id";
    readonly name: "name";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const PromotionsScalarFieldEnum: {
    readonly id: "id";
    readonly product_id: "product_id";
    readonly store_id: "store_id";
    readonly title: "title";
    readonly summary: "summary";
    readonly price: "price";
    readonly old_price: "old_price";
    readonly currency: "currency";
    readonly affiliate_url: "affiliate_url";
    readonly coupon_code: "coupon_code";
    readonly starts_at: "starts_at";
    readonly ends_at: "ends_at";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum];
export declare const StoresScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly website: "website";
    readonly contact_email: "contact_email";
    readonly created_at: "created_at";
};
export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly role: "role";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Product_imagesScalarFieldEnum: {
    readonly id: "id";
    readonly product_id: "product_id";
    readonly url: "url";
    readonly alt_text: "alt_text";
    readonly position: "position";
    readonly created_at: "created_at";
};
export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
