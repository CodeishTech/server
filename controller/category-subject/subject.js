const Subject = require('../../models/category-subject/subject');

const subjectController={

  AddSubject(req, res){
    const subject= req.body.subject;
    const category= req.body.category;
    const image= req.body.image;
    var newSubject = new Subject({category, subject, image})
    newSubject.save()
    .then(subject => {
      var message={
        success:"successfully Added!"
      };
      res.json(message);
    })
    .catch(err => {
      var message = {
        error:"Something went wrong!",
        err:err,
      };
      res.json(message);
    })
  },

  RetrieveAllSubjects(req, res){
    Subject.find({}, function(err, subjects){
      if(err){
        console.log(err);
      }
      else {
        res.json(subjects);
      }
    });
  },

  RetrieveSubjectByCategory(req, res){
    Subject.find({'category':req.params.category}, function(err, subjects){
      if(err){
        console.log(err);
      }
      else {
        res.json(subjects);
      }
    });
  },

  DeleteSubjectById(req, res){
    Subject.findOneAndRemove({'_id':req.params.id})
    .then((subject) => {
      if(subject){
        var message = { success: "subject sucessfully deleted" };
        res.json(message);
      }else{
        var message = { error: "subject not found" };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = { success: false, err: err };
      res.json(message);
    })
  },

  UpdateSubjectById(req, res){
    var subject_update = {
      category: req.body.category,
      subject: req.body.subject,
      image: req.body.image,
    }
    Subject.findOneAndUpdate({'_id':req.params.id}, subject_update)
    .then((subject) => {
      if(subject){
        var message = { success: "subject sucessfully updated" };
        res.json(message);
      }else{
        var message = { error: "subject not found" };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = {error:"Something went wrong!", success: false, err: err };
      res.json(message);
    })
  },

}

module.exports = subjectController;