import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello fahmi", function () {
    expect(sayHello("Fahmi")).toBe("Hello Fahmi");
  });
});
