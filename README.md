# Slug behavior for Meteor Astronomy

The `slug` behavior adds a slug field for storing URL friendly value of a choosen field. The slug field can be used in the routing `http://localhost:3000/post/to-jest-test-polskich-znakow-aszclonz`.

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
