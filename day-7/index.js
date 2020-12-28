const { checkServerIdentity } = require('tls');
const data = require('./input');

function stringToObject(s) {
  const [container, bags] = s.split(' bags contain ');
  const x = { [container]: bags.replace(/\d\s/g, '').replace(/\sbag(?:s)?(?:\.)?/g, '').split(', ') };
  if (x[container].includes('no other')) {
    return { [container]: [] }
  }
  return x;
}

const bags = data.split(/\n/).map(stringToObject);


const findChildren = color => bags.find(o => o[color])[color];

let colors = new Map();

function findGold(color, depth = 0, parent) {
  if (depth === 0) parent = color;
  const children = findChildren(color);
  if (children.length > 0) {
    depth += 1;
    children.forEach(child => {
      if (child === 'shiny gold') {
        colors.set(parent);
      }
      findGold(child, depth, parent);
    });
  }
}

bags.map(b => findGold(Object.keys(b)[0]));

console.log(colors.size);
