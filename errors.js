try {
    //console.log(ha)
    throw new ReferenceError("warning the error")   // create a custom errors
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

// this is not work because try-catch works syncrounously.
//try {
//    setTimeout(()=>{
//        console.log(ha)
//    },2000)
//} catch (error) {
//    console.log(error)
//}