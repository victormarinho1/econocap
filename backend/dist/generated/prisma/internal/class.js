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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.0.0",
    "engineVersion": "0c19ccc313cf9911a90d99d2ac2eb0280c76c513",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel categories {\n  id         Int          @id @default(autoincrement())\n  name       String       @unique\n  promotions promotions[]\n}\n\nmodel clicks {\n  id            String      @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  promotions_id String?     @db.Uuid\n  ip            String?     @db.Inet\n  user_agent    String?\n  referrer      String?\n  landing_url   String?\n  created_at    DateTime    @default(now()) @db.Timestamptz(6)\n  promotions    promotions? @relation(fields: [promotions_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n}\n\nmodel products {\n  id             String           @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name           String\n  description    String?\n  created_at     DateTime         @default(now()) @db.Timestamptz(6)\n  product_images product_images[]\n  promotions     promotions[]\n}\n\nmodel promotions {\n  id                String      @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  categories_id     Int?\n  stores_id         String?     @db.Uuid\n  product_id        String?     @db.Uuid\n  title             String\n  summary           String?\n  price             Decimal     @db.Decimal(12, 2)\n  old_price         Decimal?    @db.Decimal(12, 2)\n  discount_price    Decimal?    @db.Decimal(12, 2)\n  currency          String?     @default(\"BRL\") @db.VarChar(6)\n  affiliate_url     String\n  affiliate_network String?\n  affiliate_tag     String?\n  coupon_code       String?\n  starts_at         DateTime?   @db.Timestamptz(6)\n  ends_at           DateTime?   @db.Timestamptz(6)\n  status            String      @default(\"active\")\n  created_at        DateTime    @default(now()) @db.Timestamptz(6)\n  updated_at        DateTime    @default(now()) @db.Timestamptz(6)\n  clicks            clicks[]\n  categories        categories? @relation(fields: [categories_id], references: [id], onUpdate: NoAction)\n  products          products?   @relation(fields: [product_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  stores            stores?     @relation(fields: [stores_id], references: [id], onUpdate: NoAction)\n}\n\nmodel stores {\n  id            String       @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name          String\n  website       String?\n  contact_email String?\n  created_at    DateTime     @default(now()) @db.Timestamptz(6)\n  promotions    promotions[]\n}\n\nmodel users {\n  id            String   @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  name          String\n  email         String   @unique\n  password_hash String\n  role          String   @default(\"customer\")\n  created_at    DateTime @default(now()) @db.Timestamptz(6)\n  updated_at    DateTime @default(now()) @db.Timestamptz(6)\n}\n\nmodel product_images {\n  id         String    @id @default(dbgenerated(\"uuid_generate_v4()\")) @db.Uuid\n  product_id String?   @db.Uuid\n  url        String\n  alt_text   String?\n  position   Int?      @default(0)\n  created_at DateTime  @default(now()) @db.Timestamptz(6)\n  products   products? @relation(fields: [product_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"categories\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"promotions\",\"kind\":\"object\",\"type\":\"promotions\",\"relationName\":\"categoriesTopromotions\"}],\"dbName\":null},\"clicks\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"promotions_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ip\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_agent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"referrer\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"landing_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"promotions\",\"kind\":\"object\",\"type\":\"promotions\",\"relationName\":\"clicksTopromotions\"}],\"dbName\":null},\"products\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"product_images\",\"kind\":\"object\",\"type\":\"product_images\",\"relationName\":\"product_imagesToproducts\"},{\"name\":\"promotions\",\"kind\":\"object\",\"type\":\"promotions\",\"relationName\":\"productsTopromotions\"}],\"dbName\":null},\"promotions\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"categories_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"stores_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"product_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"summary\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"old_price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"discount_price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"affiliate_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"affiliate_network\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"affiliate_tag\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"coupon_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"starts_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"ends_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"clicks\",\"kind\":\"object\",\"type\":\"clicks\",\"relationName\":\"clicksTopromotions\"},{\"name\":\"categories\",\"kind\":\"object\",\"type\":\"categories\",\"relationName\":\"categoriesTopromotions\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"products\",\"relationName\":\"productsTopromotions\"},{\"name\":\"stores\",\"kind\":\"object\",\"type\":\"stores\",\"relationName\":\"promotionsTostores\"}],\"dbName\":null},\"stores\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contact_email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"promotions\",\"kind\":\"object\",\"type\":\"promotions\",\"relationName\":\"promotionsTostores\"}],\"dbName\":null},\"users\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password_hash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"product_images\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"product_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"alt_text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"position\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"products\",\"relationName\":\"product_imagesToproducts\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map