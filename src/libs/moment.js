class Moment {
    constructor (timestamp) {
        this._d = new Date(timestamp)
        this._s = timestamp
    }
    format (formatString) {
        if (formatString === 1) {
            formatString = 'YYYY年MM月DD日'
        }
        const partern = /YYYY([^(MM)].*)MM([^(DD)].*)DD(.*)/
        const [ _, p1, p2, p3 ] = partern.exec(formatString)
        const year = this._d.getFullYear()
        const month = this._d.getMonth() + 1
        const day = this._d.getDay()

        return year + p1 + month + p2 + day + p3
    }
}
export default timestamp => {
    return new Moment(timestamp)
}
