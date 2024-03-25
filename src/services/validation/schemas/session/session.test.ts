import { createMinutesAndSecondsSchema } from "./helpers";

describe("createMinutesAndSecondsSchema", () => {
  const schema = createMinutesAndSecondsSchema();

  it("should be valid for a string convertible to an integer, and in range", () => {
    const inputValue = "30"
    const expectedReturnValue = 30

    expect(schema.parse(inputValue)).toBe(expectedReturnValue)
  });

  it("should throw for a string convertible to an integer, below min range", () => {
    const inputValue = "-2"

    expect(() => schema.parse(inputValue)).toThrow()
  });

  it("should throw for a string convertible to an integer, above max range", () => {
    const inputValue = "60"

    expect(() => schema.parse(inputValue)).toThrow()
  });

  it("should throw for a string that is not convertible to number", () => {
    const inputValue = "invalid"

    expect(() => schema.parse(inputValue)).toThrow()
  })

  it("should throw for a convertible string who has decimals", () => {
    const inputValue = "20.4"

    expect(() => schema.parse(inputValue)).toThrow()
  })

  it("should throw for an empty string", () => {
    const inputValue = ""

    expect(() => schema.parse(inputValue)).toThrow()
  })
})
