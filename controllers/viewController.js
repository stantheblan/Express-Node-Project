const RESOURCE_PATH = '/products'
const viewController = {
  index(req, res, next){
    res.render('Index', res.locals.data)
  },
  show(req, res, next){
    res.render('Show', res.locals.data)
  },
  new(req, res, next){
    res.render('New')
  },
  edit(req, res, next){
    res.render('Edit', res.locals.data)
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController