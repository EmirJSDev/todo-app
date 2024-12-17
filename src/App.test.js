import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
test("добавление новой задачи", () => {
    render(_jsx(App, {}));
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Тестовая задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(screen.getByText("Тестовая задача")).toBeInTheDocument();
});
