import { isSlotInRange } from './scheduler';

describe('Slot range matching', () => {
  it('returns true when time is within candidate range', () => {
    expect(isSlotInRange('14:30', '14:00', '17:00')).toBe(true);
  });

  it('returns false when time is before range', () => {
    expect(isSlotInRange('13:00', '14:00', '17:00')).toBe(false);
  });

  it('returns false when time is after range', () => {
    expect(isSlotInRange('17:30', '14:00', '17:00')).toBe(false);
  });

  it('returns false when time equals end boundary', () => {
    expect(isSlotInRange('17:00', '14:00', '17:00')).toBe(false);
  });
});
