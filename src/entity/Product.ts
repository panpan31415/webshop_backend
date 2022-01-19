import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Product {
  @PrimaryGeneratedColumn("increment")
  productId: string;

  @Column("varchar", { length: 100, nullable: false })
  name: string;

  @Column("varchar", { length: 100, nullable: false })
  price: string;

  @Column("varchar", { length: 50, nullable: false })
  type: string;

  @Column("varchar", { length: 500, nullable: true })
  img_url: string;
}

export { Product };
