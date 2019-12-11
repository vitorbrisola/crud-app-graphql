var fs = require('fs')

const dataFile = './mockData.json'

const callback = (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString)
}

exports.getQuestions = () => {
    fs.readFileSync(dataFile,(err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
    })
    //return JSON.parse(rawData)
}

exports.getQuestion = (id) => {
    const data = this.getQuestions()
    return data.questions.find(question => question.id === id);
}

exports.addQuestion = (description) => {
    var data = this.getQuestions();
    const id = data.questions[-1].id + 1;
    let newData = {id,description,answers:[]};
    data.questions.push(newData);
    fs.writeFileSync(dataFile, JSON.stringify(data));
    return id
}


exports.deleteQuestion = (id) => {
    var data = this.getQuestions();
    const index = data.questions.findIndex(question => question.id === id)
    data.questions.splice(index,1);
    fs.writeFileSync(dataFile, JSON.stringify(data));
}