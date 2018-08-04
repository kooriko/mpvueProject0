let dishes = []

export default {
    length () {
        console.log(dishes)
        return dishes.length
    },
    push (object) {
        if (object instanceof Array) {
            dishes.push(...object)
        } else {
            if (this.find(object.id)) return false
            dishes.push(object)
        }
    },
    find (dishId) {
        const result = dishes.find(dish => dish.id === +dishId)
        if (!result) {
            /** !NOTE: 当没有时请求 */
            // const newDish = wx.reqeust({ id: dishId })
            // dishes.push(newDish)
            // return newDish
        } else {
            return result
        }
    }
}
