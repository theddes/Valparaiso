import 'intersection-observer'

/**
* Async await wrapper for easier error handling
*/
export function $_until (promise) {
    return promise.then(data => {
        return data
    }).catch(err => err.response)
}
