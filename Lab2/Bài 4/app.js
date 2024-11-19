const theList = ['Laurem', 'Kevin', true, 35, null, undefined, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift('FIRST');
theList.slice(3,0, "Hello world");
theList.slice(2,0,"middle");
theList.push('LAST');
document.write(theList);