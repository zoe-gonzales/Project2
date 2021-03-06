var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname + '../public/index.html'));
  });

  // Load example page and pass in an example by id
  app.get("/images/:id", function(req, res) {
    db.Image.findOne({ where: { id: req.params.id } }).then(function(dbImages) {
      // need to change handlebars reference
      res.send(dbImages);
    });
  });

  app.get("/quotes/user", function(req, res) {
    db.Quote.findAll({}).then(function(dbData) {
      // need to change handlebars reference
      // add func. to pass results through iquotes package
      // https://www.npmjs.com/package/iquotes
      res.send(dbData);
    });
  });

  app.get("/quotes/", function(req, res) {
    //readme for iquotes: https://github.com/banminkyoz/iquotes
    const iquotes = require('iquotes');

    iquotes.random();

    //Get random quote for a category
    //Categories: life, love, dev (development), and all
    iquotes.random('life');

    console.log(iquotes.random());
      // need to change handlebars reference
      // add func. to pass results through iquotes package
      // https://www.npmjs.com/package/iquotes
    res.send(iquotes.random());
  });

  app.get("/sounds", function(req, res) {
    console.log("HERE I AM");
    db.Sounds.findAll({}).then(function(dbData) {
      // need to change handlebars reference
      // add functionality to pass results through spotify
      console.log(dbData);
      res.send(dbData);
    });
  });

  app.get("/add", function(req, res) {
    res.render("add");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
