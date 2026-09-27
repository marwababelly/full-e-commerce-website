/**
 * Formats a number as a price string.
 * @param {number} price - The price value.
 * @param {string} currency - Currency symbol (default "$").
 * @returns {string} Formatted price like "$120".
 */
export const formatPrice = (price, currency = "$") => {
  if (price === null || price === undefined || isNaN(price)) {
    return `${currency}0`;
  }
  return `${currency}${Number(price).toFixed(0)}`;
};