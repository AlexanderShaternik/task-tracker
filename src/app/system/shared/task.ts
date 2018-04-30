export class Task {
  id?: number;
  title: string;
  description: string;
  date: string;
  priority: string;
  done: boolean;
    constructor( title: string, description: string, date: string, priority: string ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.done = false;
  }
}

// export class Task {
//   constructor(
//     public title: string,
//     public description: string,
//     public date: string,
//     public priority: string,
//     public done: false,
//     public id?: number
//   ) {}
// }
