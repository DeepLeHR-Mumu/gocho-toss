import type { Meta, StoryObj } from "@storybook/react";
import { FiSearch } from "react-icons/fi";
import SearchBar from ".";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: "SearchBar",
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const GrayLine: Story = { args: { border: "grayLine" } };

export const WithPreffix: Story = { args: { prefix: <FiSearch /> } };

export const WithSuffix: Story = { args: { suffix: <FiSearch /> } };

export const WithPreffixAndSuffix: Story = { args: { prefix: <FiSearch />, suffix: <FiSearch /> } };
