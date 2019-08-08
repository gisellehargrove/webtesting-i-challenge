const enhancer = require('./enhancer.js');
// test away!

describe('Repair Function', () => {
  const item = {
    name: 'Test Item',
    durability: 50,
    enhancement: 0
  };

  it('should restore durability to 100', () => {
    expect(enhancer.repair(item).durability).toBe(100);
  });
});

describe('Succeed Function', () => {
  const item = {
    name: 'Test Item',
    durability: 50,
    enhancement: 0
  };

  it('should increase enhancement by 1', () => {
    const enhancement = item.enhancement;
    enhancer.succeed(item)
    expect(item.enhancement).toBe(enhancement + 1);
  });

  it('should have a max enhancement of 20', () => {
    item.enhancement = 20;
    enhancer.succeed(item);
    expect(item.enhancement).toBe(20);
  });

  it('should not change the durability', () => {
    enhancer.succeed(item);
    expect(item.durability).toBe(50);
  });
});

describe('Fail Function', () => {
  const item = {
    name: 'Test Item',
    durability: 50,
    enhancement: 0
  };

  it('should decrease durability by 5 if enhancement is less than 15', () => {
    expect(enhancer.fail(item).durability).toBe(45);
  });

  it('should decrease durability by 10 if enhancement is more than 15', () => {
    item.enhancement = 18;
    expect(enhancer.fail(item).durability).toBe(35);
  });

  it('should decrease enhancement level by 1 if enhancement level is greater than 16', () => {
    expect(item.enhancement).toBe(17);
  });
});
