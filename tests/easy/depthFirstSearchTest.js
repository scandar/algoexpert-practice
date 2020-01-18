const assert = require('assert');
const depthFirstSearch = require('../../src/easy/depthFirstSearch');

const graph = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'E',
          children: [],
        },
        {
          value: 'F',
          children: [
            {
              value: 'I',
              children: [],
            },
            {
              value: 'J',
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: 'C',
      children: [],
    },
    {
      value: 'D',
      children: [
        {
          value: 'G',
          children: [
            {
              value: 'K',
              children: [],
            },
          ],
        },
        {
          value: 'H',
          children: [],
        },
      ],
    },
  ],
};

describe('depth-first search', () => {
  it('return graph elements in depth order', () => {
    assert.deepStrictEqual(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H'], depthFirstSearch(graph));
  });
});
