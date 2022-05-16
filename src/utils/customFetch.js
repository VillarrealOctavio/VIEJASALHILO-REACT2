const there_is_stock = true;

const customFetch = (timer, task) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(there_is_stock){
                resolve(task);
            }else{
                reject('Something went wrong')
            }
        },timer)
    })
}

export default customFetch;