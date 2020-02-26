export const futureDate = (numOfDay) =>{
    const future = new Date();
    future.setDate(future.getDate() + Number(numOfDay));
    return future.getDate()+'/'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'/'+future.getFullYear();
}
