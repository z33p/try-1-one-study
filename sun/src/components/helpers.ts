function varNameToString(obj: object) {
  /** Returns the name of the variable
   *  example: let foo = "bar"
   *  varNameToString(foo) => "foo"
   */
  return Object.keys(obj)[0];
}
export { varNameToString };
