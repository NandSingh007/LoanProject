// routes/middleware.js
function setActiveClass(req, res, next) {
  const urlPath = req.path;

  // Initialize res.locals.navigationItems as an array if not defined
  res.locals.navigationItems = res.locals.navigationItems || [];

  res.locals.navigationItems = res.locals.navigationItems.map(item => {
    if (urlPath === item.route) {
      item.class = 'active';
    } else {
      item.class = '';
    }
    return item;
  });

  next();
}

module.exports = { setActiveClass };
