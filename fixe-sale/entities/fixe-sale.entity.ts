import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FixeSale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: string;

  @Column()
  sellerSite: string;

  @Column()
  phoneNumber: string;

  @Column()
  logqc: string;

  @Column()
  sellerName: string;

  @Column()
  campainCard: string;

  @Column()
  otiginFile: string;

  @Column()
  isOutFile: string;

  @Column()
  offerType: string;

  @Column()
  secondarycampain: string;

  @Column()
  finalcampain: string;

  @Column()
  idcontrat: string;

  @Column()
  paid_as: string;


}
