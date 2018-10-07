import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("cards")
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: true })
  type: string;

  @Column({ type: "text", nullable: true })
  url: string;

  @Column({ type: "integer", nullable: true })
  server_id: number;

  @Column({ type: "text", nullable: true })
  css: string;

  // @Column("")
  // category_tag: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "integer", nullable: true })
  followers_count: number;

  @Column({ type: "boolean", nullable: true })
  is_contest: boolean;

  @Column({ type: "boolean", nullable: true })
  is_starred: boolean;

  @Column({ type: "integer", nullable: true })
  popularity_score: number;

  @Column({ type: "boolean", nullable: true })
  is_promoted: boolean;

  @Column({ type: "boolean", nullable: true })
  is_featured: boolean;

  @Column({ type: "boolean", nullable: true })
  hidden: boolean;

  @Column({ type: "text", nullable: true })
  feed_image_url: string;

  @Column({ type: "integer", nullable: true })
  feed_image_width: number;

  @Column({ type: "integer", nullable: true })
  feed_image_height: number;

  @Column({ type: "text", nullable: true })
  image_url: string;

  @Column({ type: "integer", nullable: true })
  image_width: number;

  @Column({ type: "integer", nullable: true })
  image_height: number;

  @Column({ type: "text", nullable: true })
  name: string;

  @Column({ type: "integer", nullable: true })
  gems_count: number;

  @Column({ type: "integer", nullable: true })
  finds_count: number;

  @Column({ type: "boolean", nullable: true })
  moderated: boolean;

  // @Column()
  // user: "DzJq2f",
}
