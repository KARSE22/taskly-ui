import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

// Default story
export const Default: Story = {
  render: () => <ThemeToggle />,
};

// Light & Dark comparison
export const LightAndDark: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="flex min-h-screen">
      {/* Light version */}
      <div className="bg-light-grey flex flex-1 items-center justify-center p-8">
        <div>
          <h2 className="heading-l mb-6 text-center text-black">Light Version</h2>
          <div className="w-[300px] rounded-lg bg-white p-6">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Dark version */}
      <div className="bg-very-dark-grey dark flex flex-1 items-center justify-center p-8">
        <div>
          <h2 className="heading-l mb-6 text-center text-white">Dark Version</h2>
          <div className="bg-dark-grey w-[300px] rounded-lg p-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  ),
};

// In sidebar context
export const InSidebarContext: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="flex min-h-screen">
      {/* Light sidebar */}
      <div className="bg-light-grey flex flex-1 items-end justify-center p-8">
        <div className="w-64 rounded-lg bg-white p-4">
          <h3 className="heading-s mb-4 text-black">Sidebar Footer</h3>
          <ThemeToggle />
        </div>
      </div>

      {/* Dark sidebar */}
      <div className="bg-very-dark-grey dark flex flex-1 items-end justify-center p-8">
        <div className="bg-dark-grey w-64 rounded-lg p-4">
          <h3 className="heading-s mb-4 text-white">Sidebar Footer</h3>
          <ThemeToggle />
        </div>
      </div>
    </div>
  ),
};
