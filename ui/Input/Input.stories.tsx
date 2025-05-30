import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input component",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "text",
    type: "text",
    placeholder: "Your first name",
  },
};

export const Filled: Story = {
  args: {
    id: "text",
    type: "text",
    placeholder: "Your first name",
    value: "Dan",
  },
};

export const Error: Story = {
  args: {
    id: "text",
    type: "text",
    placeholder: "Your first name",
    error: { message: "First name is required" },
  },
};

export const Email: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "email@example.com",
    value: "email@example.com",
  },
};

export const Password: Story = {
  args: {
    id: "password",
    type: "password",
    placeholder: "Your password",
    value: "password",
  },
};
