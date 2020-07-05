declare module 'human-format' {
  const humanFormat = (
    value: number,
    options?: { unit?: string; prefix?: string },
  ) => string;

  export default humanFormat;
}
