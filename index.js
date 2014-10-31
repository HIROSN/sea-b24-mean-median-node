var mmm = require('./lib/mean_median_mode');
var argv = process.argv;
var mean = mmm.mean(argv);
var median = mmm.median(argv);
var mode = mmm.mode(argv);

console.log('numbers:', mmm.createNumberArray(argv), '\n');
console.log('mean:', mean);
console.log('median:', median);
console.log('mode:', mode);
