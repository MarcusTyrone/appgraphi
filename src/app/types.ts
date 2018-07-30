export interface Course {
  id: string;
  title: string;
  author: string;
  descritpion: string;
  topic: string;
  url: string;
  voteCount: number;
}

export interface Query {
  allCourses: Course[];
}
