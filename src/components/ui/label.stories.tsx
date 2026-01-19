import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

// Default story
export const Default: Story = {
  args: {
    children: 'Label',
  },
};

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-8">
      {/* Standalone labels */}
      <div>
        <h3 className="heading-s mb-4">Standalone Labels</h3>
        <div className="flex flex-col gap-4">
          <Label>Title</Label>
          <Label>Description</Label>
          <Label>Status</Label>
        </div>
      </div>

      {/* Labels with inputs */}
      <div>
        <h3 className="heading-s mb-4">Labels with Inputs</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="e.g. Take coffee break" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="e.g. It's always good to take a break" />
          </div>
        </div>
      </div>

      {/* Labels with checkbox */}
      <div>
        <h3 className="heading-s mb-4">Labels with Checkbox</h3>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    </div>
  ),
};

// Individual stories
export const ForInput: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-2">
      <Label htmlFor="task-title">Title</Label>
      <Input id="task-title" placeholder="e.g. Take coffee break" />
    </div>
  ),
};

export const ForCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="accept-terms" />
      <Label htmlFor="accept-terms">Accept terms and conditions</Label>
    </div>
  ),
};
