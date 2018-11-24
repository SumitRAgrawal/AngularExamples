export class Todo {

  constructor(data: Todo) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.completed = data.completed;
  }
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
