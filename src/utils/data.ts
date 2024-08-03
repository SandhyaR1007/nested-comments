import { Comment } from "./interface";
export const data: Comment[] = [
  {
    id: "c1",
    text: "Comment 1",
    timestamp: "",
    likes: 0,
    replies: [
      {
        id: "r1",
        parent: "c1",
        text: "reply 1",
        timestamp: "",
        likes: 0,
        replies: [],
      },
      {
        id: "r2",
        parent: "c1",
        text: "reply 2",
        timestamp: "",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    id: "c2",
    text: "Comment 2",
    timestamp: "",
    likes: 0,
    replies: [],
  },
  {
    id: "c3",
    text: "Comment 3",
    timestamp: "",
    likes: 0,
    replies: [
      {
        id: "r3",
        parent: "c3",
        text: "reply 3",
        timestamp: "",
        likes: 0,
        replies: [
          {
            id: "rr1",
            parent: "c3",
            text: "inner reply 1",
            timestamp: "",
            likes: 0,
            replies: [],
          },
        ],
      },
    ],
  },
];
