// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  json,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `audiophile_${name}`);

export const products = createTable(
  "product",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    isNewProduct: boolean("isNewProduct").default(false),
    description: text("description").notNull(),
    price: integer("price").notNull(),
    category: text("category").notNull(),
    features: text("features").notNull(),
    slug: text("slug").notNull().default(""),
    images: json("images").notNull(),
    relatedImages: json("relatedImages"),
    categoryImages: json("categoryImages").notNull(),
    shortName: text("shortName").notNull().default(""),
    stripe_price_id: text("stripe_price_id"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (product) => ({
    productIndex: index("product_idx").on(product.name),
  }),
);

export const accessories = createTable("accessory", {
  id: serial("id").primaryKey(),
  item: varchar("name", { length: 256 }),
  quantity: integer("quantity").notNull(),
  productID: integer("productID").references(() => products.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export const supportedCountries = createTable("supportedCountries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const supportedCities = createTable("supportedCities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  countryID: integer("countryID").references(() => supportedCountries.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export const supportedCountriesRelations = relations(
  supportedCountries,
  ({ many }) => ({
    cities: many(supportedCities),
  }),
);

export const supportedCitiesRelations = relations(
  supportedCities,
  ({ one }) => ({
    country: one(supportedCountries, {
      fields: [supportedCities.countryID],
      references: [supportedCountries.id],
    }),
  }),
);

export const recommendations = createTable("recommendation", {
  id: serial("id").primaryKey(),
  productID: integer("productID").references(() => products.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  secondaryProductID: serial("secondaryProductID").notNull(),
});

export const orders = createTable("orders", {
  id: serial("id").primaryKey(),
  user_id: text("user_id").notNull().unique(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  totalAmount: integer("totalAmount").notNull(),
  paymentStatus: text("paymentStatus").notNull(),
});

export const ordersProducts = createTable("ordersProducts", {
  id: serial("id").primaryKey(),
  orderID: integer("orderID").references(() => orders.id, {
    onDelete: "no action",
    onUpdate: "no action",
  }),
  productID: integer("productID").references(() => products.id, {
    onDelete: "no action",
    onUpdate: "no action",
  }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const ordersProductsRelations = relations(ordersProducts, ({ one }) => ({
  product: one(products, {
    fields: [ordersProducts.productID],
    references: [products.id],
  }),
  order:one(orders, {
    fields:[ordersProducts.orderID],
    references:[orders.id]
  })
}));

export const productRelations = relations(products, ({ many }) => ({
  accessories: many(accessories),
  seeMoreLinks: many(recommendations),
  ordersProducts: many(ordersProducts),
}));

export const ordersRelations = relations(orders, ({ many }) => ({
  ordersProducts:many(ordersProducts)
}));

export const accessoriesRelations = relations(accessories, ({ one }) => ({
  product: one(products, {
    fields: [accessories.productID],
    references: [products.id],
  }),
}));

export const recommendationsRelations = relations(
  recommendations,
  ({ one }) => ({
    product: one(products, {
      fields: [recommendations.productID],
      references: [products.id],
    }),
  }),
);
