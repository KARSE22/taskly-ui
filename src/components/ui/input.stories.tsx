import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-8">
      {/* Input states */}
      <div>
        <h3 className="heading-s mb-4">Input States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Default</span>
            <Input placeholder="e.g. Take coffee break" />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">With Value</span>
            <Input defaultValue="Take coffee break" />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Disabled</span>
            <Input placeholder="Disabled input" disabled />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Invalid</span>
            <Input placeholder="Invalid input" aria-invalid="true" />
          </div>
        </div>
      </div>

      {/* Input types */}
      <div>
        <h3 className="heading-s mb-4">Input Types</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Text</span>
            <Input type="text" placeholder="Text input" />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Email</span>
            <Input type="email" placeholder="email@example.com" />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Password</span>
            <Input type="password" placeholder="Enter password" />
          </div>
          <div>
            <span className="text-muted-foreground mb-1 block text-xs">Number</span>
            <Input type="number" placeholder="0" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual stories
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'e.g. Take coffee break',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Take coffee break',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    'aria-invalid': true,
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};
