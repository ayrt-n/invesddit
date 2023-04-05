import formatCount from '../formatCount';

describe('formatCount', () => {
  describe('if number less than 1_000', () => {
    it('returns the number as is', () => {
      expect(formatCount('999')).toBe('999');
    })
  });

  describe('if number between 1_000-100_000', () => {
    it('returns the number in thousands to one decimal place', () => {
      expect(formatCount('53499')).toBe('53.5k');
    });
  });

  describe('if number greater than 100_000', () => {
    it('returns the number rounded in thousands', () => {
      expect(formatCount(320344)).toBe('320k')
    });
  });
});
