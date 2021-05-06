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
  Article.find({}, function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log("---- Consulta general 1 ----");
    console.log(docs);
    Article.update(
      {
        _id: "60933ce784755588d85287d3",
      },
      {
        $set: {
          author: "Miguel Arciniega",
        },
      },
      function (error, docs) {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log("---- Actualización ----");
        console.log(docs);
        Article.find({}, function (error, docs) {
          if (error) {
            console.log(error);
            process.exit(1);
          }
          console.log("---- Consulta general 2 ----");
          console.log(docs);
          Article.findByIdAndRemove(
            { _id: "60933b6054749c524c43c00b" },
            function (error, docs) {
              if (error) {
                console.log(error);
                process.exit(1);
              }
              console.log("---- Eliminación ----");
              console.log(docs);
              Article.find({}, function (error, docs) {
                if (error) {
                  console.log(error);
                  process.exit(1);
                }
                console.log("---- Consulta general 3 ----");
                console.log(docs);
                process.exit(0);
              });
            }
          );
        });
      }
    );
  });
});
