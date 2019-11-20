const glob = require('glob')
const path = require('path')


    const db = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => {
        return {
            schema: require(filename),
            name: path
                .basename(filename)
                .replace(path.extname(filename), ''),
        }
    })
    //.map(({name, schema}) => mongoose.model(name, schema))
    .reduce((db, {name,schema}) => {
        return {
            ...db,
            [name]: schema,
        }
    }, {})
module.exports = db;