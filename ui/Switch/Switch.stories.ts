import type { Meta } from "@storybook/react";
import { Switch } from ".";
import { testSwitchClick } from "./Switch.test";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "Switch component",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    label: "Dark Mode",
    hideLabel: true,
  },
};

export const Checked = {
  args: {
    label: "Dark Mode",
    checked: true,
    hideLabel: true,
  },
};

export const Label = {
  args: {
    label: "Dark Mode",
  },
  play: testSwitchClick,
};

export const Detail = {
  args: {
    label: "Dark Mode",
    detail: "Toggle the lights",
  },
};

export const Small = {
  args: {
    label: "Dark Mode",
    hideLabel: true,
    size: "sm",
  },
};

export const Medium = {
  args: {
    label: "Dark Mode",
    hideLabel: true,
    size: "md",
  },
};

export const Large = {
  args: {
    label: "Dark Mode",
    hideLabel: true,
    size: "lg",
  },
};
