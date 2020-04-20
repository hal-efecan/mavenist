module.exports = {
    upperCase: function (thing) {
        return thing.toUpperCase()
    },
    formatPrice: function (price) {
        return (price/100).toFixed()
    }
}