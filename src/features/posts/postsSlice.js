import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: nanoid(),
    title: "Beautiful Islands",
    content: "Want to visit one of the most beautiful Islands on earth?",
    date: sub(new Date(), { minutes: 1 }).toISOString(),
    userId: "0",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      sad: 0,
      heart: 0,
      trophy: 0,
    },
  },
  {
    id: nanoid(),
    title: "Lake Te Anau",
    content:
      "In the deep south of the South Island of New Zealand is exotic Lake Te Anau.",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    userId: "6",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      sad: 0,
      heart: 0,
      trophy: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              sad: 0,
              heart: 0,
              trophy: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
