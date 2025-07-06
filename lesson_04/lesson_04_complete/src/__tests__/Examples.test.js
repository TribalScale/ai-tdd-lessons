
// Test Suite ->  A set of tests for a unit (nUnit calls this a testFixture)
// Spec (or test) -> a single test within a suite.  (it or test)
// Matchers -> methods that let you test objects in various ways.  (.toBe(4) is the matcher)
// Assertions -> a spec is made up of assertions, that produce true or false values using matchers.

describe('Slide examples', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });
})