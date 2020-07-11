const fs = require('fs');
fs.writeFileSync('test.txt','Name: ');
fs.appendFileSync('test.txt','Jeerawuth');
fs.appendFileSync('test.txt',' 5555555555');