/**
 * Filename: complex_app.js
 * 
 * Description: This JavaScript code demonstrates a complex application that manages a blog platform.
 * The code implements multiple features including user authentication, blog post creation, editing, and deletion,
 * comment functionality, and search functionality.
 */

// Data structure to store users
const users = [];

// Data structure to store blog posts and comments
const blogPosts = [];

// Class representing a User
class User {
  constructor(username, email, password) {
    this.id = generateId();
    this.username = username;
    this.email = email;
    this.password = password;
  }

  authenticate(password) {
    return this.password === password;
  }
}

// Class representing a BlogPost
class BlogPost {
  constructor(title, content, author) {
    this.id = generateId();
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Class representing a Comment
class Comment {
  constructor(content, author) {
    this.id = generateId();
    this.content = content;
    this.author = author;
  }
}

// Helper function to generate unique IDs
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// User authentication functionality
function login(username, password) {
  const user = users.find(user => user.username === username);
  if (user && user.authenticate(password)) {
    console.log('Logged in successfully');
  } else {
    console.log('Invalid username or password');
  }
}

function register(username, email, password) {
  if (users.some(user => user.username === username)) {
    console.log('Username already exists. Please choose a different username');
  } else {
    const newUser = new User(username, email, password);
    users.push(newUser);
    console.log('User registered successfully');
  }
}

// Blog post management functionality
function createBlogPost(title, content, username) {
  const author = users.find(user => user.username === username);
  if (author) {
    const newPost = new BlogPost(title, content, author);
    blogPosts.push(newPost);
    console.log('Blog post created successfully');
  } else {
    console.log('Invalid username');
  }
}

function editBlogPost(postId, newTitle, newContent, username) {
  const post = blogPosts.find(post => post.id === postId);
  if (post && post.author.username === username) {
    post.title = newTitle;
    post.content = newContent;
    console.log('Blog post edited successfully');
  } else {
    console.log('Invalid post ID or unauthorized user');
  }
}

function deleteBlogPost(postId, username) {
  const index = blogPosts.findIndex(post => post.id === postId && post.author.username === username);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    console.log('Blog post deleted successfully');
  } else {
    console.log('Invalid post ID or unauthorized user');
  }
}

// Comment functionality
function addComment(postId, content, username) {
  const post = blogPosts.find(post => post.id === postId);
  const author = users.find(user => user.username === username);
  if (post && author) {
    const comment = new Comment(content, author);
    post.addComment(comment);
    console.log('Comment added successfully');
  } else {
    console.log('Invalid post ID or username');
  }
}

// Search functionality
function searchPosts(keyword) {
  const results = blogPosts.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase()) ||
    post.content.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(`Search results for "${keyword}":`);
  results.forEach((post, index) => {
    console.log(`#${index + 1}: ${post.title}`);
  });
}

// Usage Example:
register('johndoe', 'johndoe@example.com', 'mypassword');
register('janedoe', 'janedoe@example.com', 'anotherpassword');
login('johndoe', 'mypassword');
createBlogPost('Hello World', 'Welcome to my blog!', 'johndoe');
createBlogPost('JavaScript Tips', 'Here are some JavaScript tips and tricks', 'janedoe');
editBlogPost(blogPosts[1].id, 'JavaScript Tricks', 'Here are some advanced JavaScript tricks', 'janedoe');
addComment(blogPosts[0].id, 'Great first post!', 'janedoe');
searchPosts('JavaScript');
deleteBlogPost(blogPosts[1].id, 'janedoe');

// ... continue with more application logic and features

// End of complex_app.js