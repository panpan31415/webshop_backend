import { Connection, createConnection, Repository } from "typeorm";
import { config } from "dotenv";
import { Product } from "../../entity/Product";
import products from "./products";

config({ path: "./db.env" });

async function connect(): Promise<Connection | undefined> {
  try {
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ["./src/entity/*.ts"],
      synchronize: true,
    });
    console.log("database connected");
    return connection;
  } catch (e) {
    console.log(e, "connection to database failed");
    return undefined;
  }
}

async function fillDataToDB(connection: Connection | undefined) {
  let productRepo: Repository<Product>;
  if (connection) {
    productRepo = connection.getRepository(Product);
    products.forEach(async (p) => await productRepo.save(p));
  } else {
    Error("db connection is not ready");
  }
}

export { fillDataToDB };
export { connect };
