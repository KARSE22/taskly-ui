import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Grid showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Large buttons */}
      <div>
        <h3 className="heading-s mb-4">Large (lg)</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="lg">
            Primary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="destructive" size="lg">
            Destructive
          </Button>
        </div>
      </div>

      {/* Small buttons */}
      <div>
        <h3 className="heading-s mb-4">Small (sm)</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="destructive" size="sm">
            Destructive
          </Button>
        </div>
      </div>

      {/* Disabled states */}
      <div>
        <h3 className="heading-s mb-4">Disabled</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="destructive" disabled>
            Destructive
          </Button>
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
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg">
              Button Primary (L)
            </Button>
            <Button variant="primary" size="sm">
              Button Primary (S)
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg">
              Button Secondary
            </Button>
            <Button variant="destructive" size="lg">
              Button Destructive
            </Button>
          </div>
        </div>
      </div>

      {/* Dark version */}
      <div className="bg-very-dark-grey dark flex-1 p-8">
        <h2 className="heading-l mb-6 text-white">Dark Version</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg">
              Button Primary (L)
            </Button>
            <Button variant="primary" size="sm">
              Button Primary (S)
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg">
              Button Secondary
            </Button>
            <Button variant="destructive" size="lg">
              Button Destructive
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Primary Small',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Secondary Small',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const DestructiveSmall: Story = {
  args: {
    variant: 'destructive',
    size: 'sm',
    children: 'Destructive Small',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
