import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextField } from './text-field';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// Default story
export const Default: Story = {
  args: {
    label: 'Title',
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

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-8">
      {/* Text field states */}
      <div>
        <h3 className="heading-s mb-4">TextField States</h3>
        <div className="flex flex-col gap-6">
          <TextField label="Idle" placeholder="e.g. Take coffee break" />
          <TextField label="With Value" defaultValue="Take coffee break" />
          <TextField label="Disabled" placeholder="Disabled field" disabled />
          <TextField label="With Error" placeholder="Enter title" error="Can't be empty" />
        </div>
      </div>

      {/* Without label */}
      <div>
        <h3 className="heading-s mb-4">Without Label</h3>
        <div className="flex flex-col gap-4">
          <TextField placeholder="e.g. Take coffee break" />
          <TextField placeholder="Enter title" error="Can't be empty" />
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
        <div className="w-[400px] rounded-lg bg-white p-6">
          <div className="flex flex-col gap-6">
            <TextField label="Text Field (Idle)" placeholder="Enter task name" />
            <TextField label="Text Field (Active)" defaultValue="Building a slideshow" />
            <TextField
              label="Text Field (Error)"
              placeholder="Enter task name"
              error="Can't be empty"
            />
          </div>
        </div>
      </div>

      {/* Dark version */}
      <div className="bg-very-dark-grey dark flex-1 p-8">
        <h2 className="heading-l mb-6 text-white">Dark Version</h2>
        <div className="bg-dark-grey w-[400px] rounded-lg p-6">
          <div className="flex flex-col gap-6">
            <TextField label="Text Field (Idle)" placeholder="Enter task name" />
            <TextField label="Text Field (Active)" defaultValue="Building a slideshow" />
            <TextField
              label="Text Field (Error)"
              placeholder="Enter task name"
              error="Can't be empty"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual stories
export const WithLabel: Story = {
  args: {
    label: 'Title',
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

export const WithoutLabel: Story = {
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
    label: 'Title',
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

export const WithError: Story = {
  args: {
    label: 'Title',
    placeholder: 'Enter title',
    error: "Can't be empty",
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
    label: 'Title',
    placeholder: 'Disabled field',
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

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | undefined>();

    const handleBlur = () => {
      if (!value.trim()) {
        setError("Can't be empty");
      } else {
        setError(undefined);
      }
    };

    return (
      <div className="w-[400px]">
        <TextField
          label="Title"
          placeholder="e.g. Take coffee break"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={handleBlur}
          error={error}
        />
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <TextField label="Title" placeholder="e.g. Take coffee break" />
      <TextField
        label="Description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
      />
    </div>
  ),
};
