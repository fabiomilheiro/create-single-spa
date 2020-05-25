export function navbar(location) {
  // The navbar is always active
  return true;
}

export function products(location) {
  return location.pathname.startsWith("/products");
}
