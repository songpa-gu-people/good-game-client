import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import LoginTemplate from "../../domain/login/components/templates/LoginTemplate";

describe("로그인 페이지에 접근하면", () => {
  it("GoodGame 텍스트가 렌더링된다.", () => {
    const loginTemplate = render(<LoginTemplate />);

    expect(loginTemplate.getByText("🏸 GoodGame")).toBeTruthy();
  });
});
