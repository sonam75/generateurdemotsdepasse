// L’alphabet contient 64 caractères. Un octet (0 à 255) donne
// exactement quatre possibilités par caractère avec le reste modulo 64.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function tirerCaractere() {
  const octet = new Uint8Array(1);
  crypto.getRandomValues(octet);
  return alphabet[octet[0] % alphabet.length];
}
