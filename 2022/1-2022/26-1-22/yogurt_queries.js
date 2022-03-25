// const logs = require('/Users/nick.smith/jot/2022/yoga_practice_journal_2022.json');
const logs = require('/Users/nick.smith/jot/yogurt/yoga_practice_journal_2022.json');

// console.log(logs);

// unique bam classes
const bams = logs.filter(entry => {
  return entry.detail.includes('http') && entry.bam === true
});
// console.log(bams);
// console.log('there are', bams.length, 'bam classes');

// get bam classes with a tag
const getBamClassesByTag = tag => {
  const payload = logs.filter(entry => {
    return entry.bam && entry.notes.includes(tag);
  });
  console.log(payload);
  console.log(payload.length, 'bam classes tagged', tag);
};
// getBamClassesByTag('flow');
// getBamClassesByTag('yin');

// get bam classes excluding a tag
const getBamClassesExcludingTag = tag => {
  const payload = logs.filter(entry => {
    return entry.bam && !entry.notes.includes(tag);
  });
  // console.log(payload);
  // console.log(payload.length, 'bam classes not tagged', tag);
  return payload;
};
// getBamClassesExcludingTag('yin');

const displayformattedResults = raw => {
  const payload = raw.map(entry => {
    return `${entry.mins} min -- ${entry.notes}
${entry.detail}`
  });
  payload.sort().forEach(thing => {
    console.log(thing);
    console.log();
  });
};

// console.log(format(getBamClassesExcludingTag('yin')));
displayformattedResults(getBamClassesExcludingTag('yin'));