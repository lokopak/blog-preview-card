export interface Post {
  image: string;
  publishDate: string | Date;
  title: string;
  conent: string;
  tags: string[];
  creator: {
    avatar: string;
    name: string;
  };
}
