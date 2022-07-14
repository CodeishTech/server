const Bookmark = require('../../models/bookmark/bookmark');

const bookmarkController={

  AddBookmark(req, res){
    const userId= req.body.userId;
    const subject= req.body.subject;
    var newBookmark = new Bookmark({userId,subject})
    newBookmark.save()
    .then(bookmark => {
      var message={
        success:"successfully Bookmarked!"
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

  RetrieveBookmarkByUserid(req, res){
    Bookmark.find({'userId':req.params.userid}, function(err, bookmark){
      if(err){
        console.log(err);
      }
      else {
        res.json(bookmark);
      }
    });
  },

  DeleteBookmarkByUseridAndSubject(req, res){
    Bookmark.findOneAndRemove({'userId':req.params.userId, 'subject':req.params.subject})
    .then((bookmark) => {
      if(bookmark){
        var message = { success: "Bookmark sucessfully removed" };
        res.json(message);
      }else{
        var message = { error: "bookmark not found" };
        res.json(message);
      }
    }).catch(err => {
      console.log(err);
      var message = { success: false, err: err };
      res.json(message);
    })
  },

}

module.exports = bookmarkController;