import authReducer from "./auth";
import { loadSucess } from "../actions/auth";
import { User } from "../actions/auth/types";

const INITIAL_STATE = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  refreshToken: null,
  user: null,
};

describe("Testando Auth Reducer", () => {
  it("should load a user", () => {
    const id = "HASH_ID_TEXT";
    const username = "TestUser";
    const email = "test@test.com";

    const user: User = {
      id,
      username,
      email,
    };

    expect(authReducer(INITIAL_STATE, loadSucess(user))).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      isAuthenticated: true,
      user,
    });
  });
});
