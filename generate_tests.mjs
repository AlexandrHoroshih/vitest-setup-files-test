import path from "node:path";
import fs from "fs-extra";

const testContent = `
describe("suite", () => {
    test("some test", async () => {
      expect(2 * 2).toEqual(4);
    });
  }); 
`;

for (let i = 0; i < 100; i++) {
  const testFileName = `simple-${i}.test.js`;
  const testFilePath = path.join(process.cwd(), "__tests__", testFileName);
  await fs.writeFile(testFilePath, testContent);
}
