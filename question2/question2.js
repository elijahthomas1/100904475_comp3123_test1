function resolvedPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('message: delayed success!');
        }, 500);
    })
}

function rejectedPromise() {
    return new Promise(reject => {
        setTimeout(() => {
            reject('error: delayed exception!');
        }, 500);
    })
}

//console.log(resolvedPromise());
//rejectedPromise();

async function asyncTest() {
    const resolve1 = await resolvedPromise();
    console.log(resolve1);
    const reject1 = await rejectedPromise();
    console.log(reject1);
}

asyncTest();

