const unsupportedBrowser = (req, res, next) => {
  if (req.path && req.path.indexOf('/static') === -1) {
    if (req.headers['user-agent'] && (req.headers['user-agent'].indexOf('MSIE') >= 0 || req.headers['user-agent'].indexOf('Trident') >= 0)) {
      return res.sendFile(`${__dirname}/static/unsupported-browser.html`);
    }
  }

  return next();
};

module.exports = unsupportedBrowser;
