const Category = require('../../models/category-subject/category');

const categoryController={

  AddCategory(req, res){
    const category= req.body.category;
    var newCategory = new Category({category})
    newCategory.save()
    .then(category => {
      var message={
        success:"successfully Added!"
      };
      res.json(message);
    })
    .catch(err => {
      var message = {
        error:"Something went wrong!"
      };  
      res.json(message);
    })
  }, 

  RetrieveAllCategories(req, res){
    Category.find({}, function(err, categories){
      if(err){
        console.log(err);
      }
      else {
        res.json(categories);
      }
    });
  },

  DeleteCategoryById(req, res){
    Category.findOneAndRemove({'_id':req.params.id})
    .then((category) => {
      if(category){
        var message = { success: "Category sucessfully deleted" };
        res.json(message);
      }else{
        var message = { error: "Category not found" };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = { success: false, err: err };
      res.json(message);
    })
  },

  UpdateCategoryById(req, res){
    var category_update = {
      category: req.body.category,
    }
    Category.findOneAndUpdate({'_id':req.params.id}, category_update)
    .then((category) => {
      if(category){
        var message = { success: "Category sucessfully updated" };
        res.json(message);
      }else{
        var message = { error: "Category not found" };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = {error:"Something went wrong!", success: false, err: err };
      res.json(message);
    })
  },

}

module.exports = categoryController;