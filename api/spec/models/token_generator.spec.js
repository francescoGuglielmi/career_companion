const TokenGenerator = require("../../models/token_generator");
const JWT = require("jsonwebtoken")

describe("TokenGenerator", () => {
  describe("jsonwebtoken", () => {
    it("returns a token containing user_id that is valid for 10 minutes", () => {
      const user_id = 1;
      const token = TokenGenerator.jsonwebtoken(user_id);
      const payload = JWT.decode(token, 1234);
      expect(payload.user_id).toEqual(user_id);
      expect(payload.exp - payload.iat).toEqual(3600);
    })
  })
})