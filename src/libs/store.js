const store = {}
const actions = {}

export default {
    emit (emit, key, value) {
        store[key] = value
        actions[emit].map(fn => {
            fn(store[key])
        })
    },
    set (key, value) {
        store[key] = value
    },
    get (key) {
        return store[key] || {}
    },
    subscribe (key, fn) {
        actions[key] ? actions[key].push(fn) : (actions[key] = [fn])
    },
}
