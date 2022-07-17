import { Column, Entity } from "typeorm";

@Entity()
export class Sample {
  @Column()
  name: string;
}