function createResult(error,data){
    var result = {}

    if(error){
        result['error'] = error
        result['status'] = 'error'
    }else{
        result['status'] = 'succes'
        result['data'] = data
    }

    return result
}

module.exports = {
    createResult: createResult,}