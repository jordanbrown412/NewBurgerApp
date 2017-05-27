var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

    db.burgers.findAll({}).then(function(data){
      var hbs = {
        burgers: data
      };
    res.render("index", hbs);
  });
  });
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(data) {
//     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  
  db.burgers.create({
            burger_name: req.body.burger_name,
            devoured: false
  }).then(function(data) {
            res.redirect("/");

  });
  });
  // // takes the request object using it as input for buger.addBurger
  // burger.create(req.body.burger_name, function(result) {
  //   // wrapper for orm.js that using MySQL insert callback will return a log to console,
  //   // render back to index with handle
  //   console.log(result);
  //   res.redirect("/");
  


// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.burgers.update({
            devoured: true
  },
    {
      where: {
        id: req.params.id
      }
    }).then(function(){
        res.redirect('/')
    });
  });
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

module.exports = router;
