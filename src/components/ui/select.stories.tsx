import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './select';
import { Label } from './label';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Default story
export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-8">
      {/* Basic select */}
      <div>
        <h3 className="heading-s mb-4">Basic Select</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">Todo</SelectItem>
            <SelectItem value="doing">Doing</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Select with label */}
      <div>
        <h3 className="heading-s mb-4">With Label</h3>
        <div className="flex flex-col gap-2">
          <Label>Current Status</Label>
          <Select defaultValue="doing">
            <SelectTrigger>
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="doing">Doing</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Disabled select */}
      <div>
        <h3 className="heading-s mb-4">Disabled</h3>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">Todo</SelectItem>
            <SelectItem value="doing">Doing</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Light & Dark comparison
export const LightAndDark: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="flex min-h-screen">
      {/* Light version */}
      <div className="bg-light-grey flex-1 p-8">
        <h2 className="heading-l mb-6 text-black">Light Version</h2>
        <div className="w-[400px] rounded-lg bg-white p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Dropdown (Idle)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Doing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="doing">Doing</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Dropdown (Active)</Label>
              <Select defaultValue="doing">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="doing">Doing</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Dark version */}
      <div className="bg-very-dark-grey dark flex-1 p-8">
        <h2 className="heading-l mb-6 text-white">Dark Version</h2>
        <div className="bg-dark-grey w-[400px] rounded-lg p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Dropdown (Idle)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Doing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="doing">Doing</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Dropdown (Active)</Label>
              <Select defaultValue="doing">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="doing">Doing</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual stories
export const WithPlaceholder: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select defaultValue="doing">
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-2">
      <Label>Current Status</Label>
      <Select defaultValue="doing">
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a board" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Active</SelectLabel>
            <SelectItem value="platform-launch">Platform Launch</SelectItem>
            <SelectItem value="marketing-plan">Marketing Plan</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Archived</SelectLabel>
            <SelectItem value="roadmap">Roadmap</SelectItem>
            <SelectItem value="old-marketing">Old Marketing</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState('todo');
    return (
      <div className="flex w-[400px] flex-col gap-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">Todo</SelectItem>
            <SelectItem value="doing">Doing</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-muted-foreground text-sm">
          Selected: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};
