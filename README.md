```js
Post.addBehavior('slug', {
  fieldName: 'title',
  slugFieldName: 'slug',
  canUpdate: true,
  unique: true,
  separator: '-'
});

var post = new Post();
post.title = 'To jest test polskich znaków ąśźćłóńż';
post.save();

console.log(post.slug); // Prints out "to-jest-test-polskich-znakow-aszclonz"
```
