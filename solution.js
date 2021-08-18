function flatten(arr) {
  return arr.reduce(
    (total, curr) =>
      Array.isArray(curr) ? [...total, ...flatten(curr)] : [...total, curr],
    []
  );
}
