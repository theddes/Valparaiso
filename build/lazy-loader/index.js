var Jimp = require('jimp')

module.exports = function (source) {
    this.cacheable( true )
    var cb = this.async()

    Jimp.read(source)
    .catch(cb)
    .then(function (image) {
        console.log(image)
    })
}
