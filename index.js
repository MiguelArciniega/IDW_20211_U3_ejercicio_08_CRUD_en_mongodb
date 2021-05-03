var mongoose = require("mongoose");
var schema = require("./squema");

mongoose.connect("mongodb://localhost:27017/eje05");

// Parametros: nombre del modelo, nombre de la colección
var Article = mongoose.model("Article", schema, "articles");

var article = new Article({
  title: "Nuevo Articulo",
  author: "Blanca Ramirez",
  body: "lorem lorem lorem lorem lorem lorem lorem lorem",
  comments: [
    {
      body: "Esto es un comentario",
      date: new Date(),
    },
  ],
  meta: [
    {
      votes: 34,
      favs: 56,
    },
  ],
});

article.save(function (error) {
  if (error) {
    console.log(console.error());
    process.exit(1);
  }
  console.log("Creación exitosa");
  process.exit(0);
});
