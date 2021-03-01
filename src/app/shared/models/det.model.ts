export class MyDet{
  id: number;
  name: string;
  status: boolean;

  constructor(id:number, name:string){
    this.id = id;
    this.name = name;
    this.status = Boolean(Math.floor(Math.random() * Math.floor(2)));
  }
}
