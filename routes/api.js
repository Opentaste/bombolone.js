/* Serve JSON to our AngularJS client
 * ================================== */

exports.content = function (req, res) {
  res.json({
  	name: 'Content'
  });
};