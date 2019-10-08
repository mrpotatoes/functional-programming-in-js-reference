import functionalProgrammingInJsReference from '.';

test('output', () => {
  expect(functionalProgrammingInJsReference('🐰')).toBe('🐰');
  expect(functionalProgrammingInJsReference()).toBe('No args passed!');
});
