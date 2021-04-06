module.exports = {
  schema: "./schema.js", // this one won't work
  // schema: "./schema.graphql", // this one works
  documents: ["./src/queries/**.js"],
}