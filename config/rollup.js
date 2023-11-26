var pkg = require("../package.json")
var version = pkg.version
var banner = `/*!
 * ${pkg.name} v${version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} License.
 */`
exports.banner = banner