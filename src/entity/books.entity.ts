import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Books {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Index()
    @Column()
    title: string;

    @Index({
        spatial: false,
    })
    @Column("text", {array: true})
    authors: string[];

    @Column()
    description: string;

    @Column()
    year: number;

    @Column()
    pages: number;

    @Column()
    quantity: number;

    @Column()
    publisher: string;

    @Column({
        type: 'jsonb',
    })
    bookAdditionalInfo: Record<string, string>;

    @Column({
        type: 'jsonb',
    })
    location: Record<string, string>;
}
