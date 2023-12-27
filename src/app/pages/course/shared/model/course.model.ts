export class Course {
  id: number;
  title: string;
  instructor: Instructor;
  description: string;
  duration: string;
  level: string;
  num_students: number;
  price: number;
  rating: number;
  tags: tagDetail[];

  constructor(object?: any) {
    this.id = object?.id;
    this.title = object?.title;
    this.instructor = object?.instructor || new Instructor();
    this.description = object?.description;
    this.duration = object?.duration;
    this.level = object?.level;
    this.num_students = object?.num_students;
    this.price = object?.price;
    this.rating = object?.rating;
    this.tags = object?.tags || [];
  }
}

class Instructor {
  name: string;
  email: string;

  constructor(object?: any) {
    this.name = object?.name;
    this.email = object?.email;
  }
}

interface tagDetail {
  name: string,
  description: string
}
