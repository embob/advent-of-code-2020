const data = require('./input');

function stringToObject(s) {
  const createChildObject = child => {

    const [count, color1, color2] = child.split(' ');
    return { count: Number(count), color: `${color1} ${color2}` }
  };

  const [left, right] = s.split(' bags contain ');
  const children = right.split(', ').map(createChildObject);
 return { color: left, children: children.filter(c => c.color !== 'other bags.') };
}

const bags = data.split(/\n/).map(stringToObject);

const getChildren = color => bags.find(o => o.color === color);


let count = 0;
let bagMultiplier = 1;

function countBags(bag, depth = 0) {
  const { children } = getChildren(bag.color);
  console.log(children);
  if (children.length > 0) {
    const sum = depth > 0
    ? bag.count + (bag.count * children.reduce((prev, curr) => prev + curr.count, 0))
    : children.reduce((prev, curr) => prev + curr.count, 0);
    console.log('sum', sum);
    console.log('bag count', bag.count);
    count += sum;
    depth += 1;
    console.log('count', count);
    children.map(child => {
      countBags(child, depth);
       console.log(child);
    });
  }
}

countBags(stringToObject('shiny gold bags contain 2 dark red bags'));

console.log(count);

// light black bags contain 1 posh coral bag, 4 dotted black bags, 4 posh lime bags, 4 bright blue bags.


// const o = { a: 'bcd', b: 'def', e: 'emma' };
// const ob = { ...o, b: 'fred' };
