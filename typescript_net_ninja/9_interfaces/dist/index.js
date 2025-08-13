"use strict";
// interfaces
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne,
};
// as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
console.log(posts[0]);
//# sourceMappingURL=index.js.map