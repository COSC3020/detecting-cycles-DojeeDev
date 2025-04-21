const fs = require('fs');
  
eval(fs.readFileSync('code.js')+'');

var tests = [
  [
    [
      [1,5],
      [2],
      [3,4,8],
      [6],
      [],
      [6],
      [7],
      [],
      []
    ], false
  ],
  [
    [
      [1,5],
      [0, 2],
      [3,4,8],
      [],
      [],
      [6],
      [7],
      [],
      []
    ], true
  ],
  [
    [
      []
    ], false
  ],
  [
    [
      [1],
      [2],
      [3, 0],
      []
    ], true
  ],
  [
    [
      [0]
    ], true
  ]
]

function test(g, o) { // o = expected output
  if (JSON.stringify(hasCycle(g)) == JSON.stringify(o)) { return true; }
  return false;
}

for (var i = 0; i < tests.length; i++) {
  var t = tests[i];
  if (!(test(t[0], t[1]))) {
    console.error("counterexample, tests index: " + i);
  }
}
 

