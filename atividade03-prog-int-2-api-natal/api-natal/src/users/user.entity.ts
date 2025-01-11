import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({name: 'email', nullable: false, unique: true})
  email: string;

  @Column({name: 'password', nullable: false})
  password: string // Não queremos expor isso! Atentar no UserDTO 

  constructor(nome:string, email:string, password:string ) {
    this.nome=nome;
    this.email=email;
    this.password=password;
  }
}
