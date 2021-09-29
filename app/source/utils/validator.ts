class Validator {
  private errs: string[] = [];

  private pushing(message: string) {
    this.errs.push(message);
  }

  /**
   * Verify whether given field is empty, null or undefined
   * @param field Field to be validated
   * @param message Message if field is empty
   */
  isRequired(field: string, message: string) {
    if (!field) {
      this.pushing(message);
    }
  }

  /**
   * Validate the type of the given field
   * @param field Field to be validated
   * @param typeofString Type of field
   * @param message Message if the type of field is different from the given one
   */
  isTypeOf(field: string, typeofString: string, message: string) {
    if (typeof field !== typeofString) {
      this.pushing(message);
    }
  }

  /**
   * Return if the validation is valid
   */
  get isValid(): boolean {
    return this.errs.length === 0;
  }

  /**
   * Return all errors pushed by validator
   */
  get errors(): string[] {
    return this.errs;
  }
}

export default Validator;
