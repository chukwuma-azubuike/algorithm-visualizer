export default function delay(i, time) {
    var promise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(i)
        }, time);
    })
    return promise;
}