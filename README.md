# NodeCSVSearch
CSV File Search using NodeJS


## CSVClass using fs and csv-parse library 
```
const fs = require('fs');
const parse = require('csv-parse');

class CSV {

    find(fileName, col, key) {
        let results = [];
        if (col == 3) key += ';';
        const csv = fs.createReadStream(fileName);
        csv.on('error', (err) => {
            console.log('Error : ', err.message);
        });
        csv.pipe(parse.parse({ delimiter: ',' }))
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                var found = -1;
                results.forEach(element => {
                    if (element[col] == key) {
                        found = element[0];
                    }
                });
                if (found > 0)
                    console.log('Found with id ', found);
                else
                    console.log('Not Found');
            });
    }
}

module.exports = CSV;
```

### dependencies : csv-parse v5.3.1
