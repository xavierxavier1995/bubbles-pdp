const fs = require('fs');
const path = require('path');

function findCsvFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
        findCsvFiles(fullPath);
      }
    } else if (file.endsWith('.csv')) {
      console.log(fullPath);
    }
  }
}

findCsvFiles('/');
