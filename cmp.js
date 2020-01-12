function _comparePeople(people1, people2, callback){
    let rst = people1.localeCompare(people2)
    callback(null, rst)
}

module.exports = {
    comparePeople: _comparePeople
}
