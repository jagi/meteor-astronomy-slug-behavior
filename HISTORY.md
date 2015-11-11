# 1.2.1 (2015-11-11)

- execute `generateSlug` method inside the `afterInit` event listener for instances created without calling `doc.set`

# 1.2.0 (2015-10-30)

- Introduced behavior methods thanks to which you can run behavior at any moment (`Class.getBehavior('slug').generateSlug(doc)`)

# 1.1.0 (2015-10-02)

- The `doc.generateSlug()` method
