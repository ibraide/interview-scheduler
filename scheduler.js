export const toMinutes = (t) => parseInt(t.split(':')[0]) * 60 + parseInt(t.split(':')[1]);

export function isSlotInRange(slotTime, rangeStart, rangeEnd) {
  const slotMinutes = toMinutes(slotTime);
  return slotMinutes >= toMinutes(rangeStart) && slotMinutes < toMinutes(rangeEnd);
}
