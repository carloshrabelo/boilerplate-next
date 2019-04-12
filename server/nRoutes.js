const nextRoutes = require('next-routes');
const nRoutes = (module.exports = nextRoutes());

nRoutes.add('user', '/user/:id/:slug');
nRoutes.add('about', '/about-us/:foo(bar|baz)');

export default nRoutes;
