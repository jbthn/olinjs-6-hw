
/*
 * GET home page.
 */

exports.index = function(req, res){
	req.facebook.api('/me/photos?fields=source,id&limit=20', function(err, pics) {
    var id_array = [];
    var src_array = [];
    pics.data.forEach(function(photo) {
      id_array.push(photo.id);
      src_array.push(photo.source);
    });
    res.render('index', { title: 'Comment on pictures of yourself', ids: id_array, srcs: src_array });
  });
};

exports.comment = function(req, res){
  req.facebook.api('/' + req.params.picID + '/comments', 'POST', {"message" : req.body.cap}, function(err, ans){
    res.send(err);
  })
}