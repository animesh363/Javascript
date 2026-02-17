function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p1 success");
        }, 5000);
    });
}

function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 success");
        }, 2000);
    });
}

function p3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("p3 success");
            reject("p3 fail");
        }, 1000);
    });
}

async function main() {
    try {
        // const result = await Promise.all([p1(), p2(), p3()]);//all sucess
        // const result = await Promise.any([p1(), p2(), p3()]);//any sucess
        // const result = await Promise.race([p1(), p2(), p3()]);
        const result = await Promise.allSettled([p1(), p2(), p3()]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();
