import json from "../src/index";

describe("json", () => {
  it("deeply copy {a: 0}", () => {
    expect(json.deepCopy({a: 0})).toEqual({a: 0});
  });
  it("should deepCopy({a: 0})返回的对象内存地址不同", () => {
    expect(json.deepCopy({a: 0})).not.toBe({a: 0});
  });
  it("should getKeyPath(testJson)返回的对应的路径列表", () => {
    const testJson: any = {
      a: {
        b: {
          c: "1",
        },
      },
      d: "2",
      2: 3
    }
    expect(json.getKeyPath({
      json: testJson
    })).toEqual(["a", "a-b", "a-b-c", "d", "2"].sort());
  });
});
