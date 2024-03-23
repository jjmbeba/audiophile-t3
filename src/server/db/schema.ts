// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
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
    category:text('category').notNull(),
    features: text("features").notNull(),
    imageUrl: text("imageUrl").notNull(),
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
  name: varchar("name", { length: 256 }),
  quantity: integer("quantity").notNull(),
  productID: integer("productID").references(() => products.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export const productRelations = relations(products, ({ many }) => ({
  accessories: many(accessories),
}));

export const accessoriesRelations = relations(accessories, ({ one }) => ({
  product: one(products, {
    fields: [accessories.productID],
    references: [products.id],
  }),
}));
