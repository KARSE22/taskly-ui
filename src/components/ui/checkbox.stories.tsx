import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox, SubtaskCheckbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default story
export const Default: Story = {
  args: {},
};

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Checkbox states */}
      <div>
        <h3 className="heading-s mb-4">Checkbox States</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Checkbox />
            <span className="text-muted-foreground text-xs">Unchecked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox defaultChecked />
            <span className="text-muted-foreground text-xs">Checked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox disabled />
            <span className="text-muted-foreground text-xs">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox disabled defaultChecked />
            <span className="text-muted-foreground text-xs">Disabled Checked</span>
          </div>
        </div>
      </div>

      {/* SubtaskCheckbox states */}
      <div>
        <h3 className="heading-s mb-4">Subtask Checkbox States</h3>
        <div className="flex w-[400px] flex-col gap-2">
          <SubtaskCheckbox label="Research competitor pricing and business models" />
          <SubtaskCheckbox label="Outline a business model" checked />
          <SubtaskCheckbox label="Talk to potential customers" disabled />
        </div>
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
        <div className="flex flex-col gap-6">
          <h3 className="heading-s">Subtask Checkbox</h3>
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6">
            <SubtaskCheckbox label="Research competitor pricing and business models" />
            <SubtaskCheckbox label="Outline a business model that works for our solution" checked />
            <SubtaskCheckbox
              label="Talk to potential customers about our proposed solution"
              checked
            />
          </div>
        </div>
      </div>

      {/* Dark version */}
      <div className="bg-very-dark-grey dark flex-1 p-8">
        <h2 className="heading-l mb-6 text-white">Dark Version</h2>
        <div className="flex flex-col gap-6">
          <h3 className="heading-s">Subtask Checkbox</h3>
          <div className="bg-dark-grey flex flex-col gap-2 rounded-lg p-6">
            <SubtaskCheckbox label="Research competitor pricing and business models" />
            <SubtaskCheckbox label="Outline a business model that works for our solution" checked />
            <SubtaskCheckbox
              label="Talk to potential customers about our proposed solution"
              checked
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual stories
export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

// SubtaskCheckbox stories
export const SubtaskDefault: StoryObj<typeof SubtaskCheckbox> = {
  render: () => (
    <div className="bg-card w-[400px] rounded-lg p-4">
      <SubtaskCheckbox label="Research competitor pricing and business models" />
    </div>
  ),
};

export const SubtaskChecked: StoryObj<typeof SubtaskCheckbox> = {
  render: () => (
    <div className="bg-card w-[400px] rounded-lg p-4">
      <SubtaskCheckbox label="Outline a business model" checked />
    </div>
  ),
};

export const SubtaskDisabled: StoryObj<typeof SubtaskCheckbox> = {
  render: () => (
    <div className="bg-card w-[400px] rounded-lg p-4">
      <SubtaskCheckbox label="Talk to potential customers" disabled />
    </div>
  ),
};

export const SubtaskInteractive: StoryObj<typeof SubtaskCheckbox> = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <div className="bg-card w-[400px] rounded-lg p-4">
        <SubtaskCheckbox
          label="Research competitor pricing and business models"
          checked={checked}
          onCheckedChange={setChecked}
        />
      </div>
    );
  },
};
