/**
 * Generates a pseudo-unique id. The probability of collision is extremely low and thus not a problem for the sole purpose of showing optimistic updates.
 * @returns {string} A pseudo-unique id.
 */
export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
};
