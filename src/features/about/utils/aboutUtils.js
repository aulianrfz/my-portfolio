// utils/aboutUtils.js
// Fungsi-fungsi helper murni (pure functions) untuk fitur About Me.
// "Pure function" = tidak ada side effect, output hanya bergantung pada input.
// Keuntungan: mudah di-test dan di-reuse di mana saja.

/**
 * Mengubah URL sosial media menjadi format yang lebih rapi untuk ditampilkan.
 * @param {string} url - contoh: "github.com/johndoe"
 * @returns {string} - contoh: "johndoe"
 */
export function formatSocialHandle(url) {
  const parts = url.split('/')
  return '@' + parts[parts.length - 1]
}

/**
 * Memotong teks bio jika terlalu panjang.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateBio(text, maxLength = 200) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Membuat inisial dari nama lengkap (untuk avatar placeholder).
 * @param {string} name - contoh: "John Doe"
 * @returns {string} - contoh: "JD"
 */
export function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}
