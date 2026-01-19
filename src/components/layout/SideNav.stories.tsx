import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SideNav } from './SideNav';

const mockBoards = [
  { id: '1', name: 'Platform Launch' },
  { id: '2', name: 'Marketing Plan' },
  { id: '3', name: 'Roadmap' },
];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof SideNav> = {
  title: 'Layout/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SideNav>;

// Default story
export const Default: Story = {
  render: function Render() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeBoardId, setActiveBoardId] = useState('1');

    return (
      <div className="flex h-screen">
        <SideNav
          isCollapsed={isCollapsed}
          onToggle={() => {
            setIsCollapsed(!isCollapsed);
          }}
          boards={mockBoards}
          activeBoardId={activeBoardId}
          onBoardSelect={(id) => {
            setActiveBoardId(id);
          }}
          onCreateBoard={() => {
            alert('Create new board');
          }}
        />
        <main className="bg-light-grey dark:bg-very-dark-grey flex-1 p-8">
          <p className="text-muted-foreground">Main content area</p>
        </main>
      </div>
    );
  },
};

// Collapsed state
export const Collapsed: Story = {
  render: function Render() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeBoardId, setActiveBoardId] = useState('1');

    return (
      <div className="flex h-screen">
        <SideNav
          isCollapsed={isCollapsed}
          onToggle={() => {
            setIsCollapsed(!isCollapsed);
          }}
          boards={mockBoards}
          activeBoardId={activeBoardId}
          onBoardSelect={(id) => {
            setActiveBoardId(id);
          }}
          onCreateBoard={() => {
            alert('Create new board');
          }}
        />
        <main className="bg-light-grey dark:bg-very-dark-grey flex-1 p-8">
          <p className="text-muted-foreground">Main content area - sidebar is collapsed</p>
        </main>
      </div>
    );
  },
};

// Empty boards
export const EmptyBoards: Story = {
  render: function Render() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
      <div className="flex h-screen">
        <SideNav
          isCollapsed={isCollapsed}
          onToggle={() => {
            setIsCollapsed(!isCollapsed);
          }}
          boards={[]}
          onCreateBoard={() => {
            alert('Create new board');
          }}
        />
        <main className="bg-light-grey dark:bg-very-dark-grey flex-1 p-8">
          <p className="text-muted-foreground">No boards yet</p>
        </main>
      </div>
    );
  },
};

// Light & Dark comparison
export const LightAndDark: Story = {
  render: () => (
    <div className="flex min-h-screen">
      {/* Light version */}
      <div className="flex flex-1">
        <SideNav
          isCollapsed={false}
          onToggle={noop}
          boards={mockBoards}
          activeBoardId="1"
          onBoardSelect={noop}
          onCreateBoard={noop}
        />
        <main className="bg-light-grey flex-1 p-8">
          <h2 className="heading-l mb-4 text-black">Light Version</h2>
          <p className="text-medium-grey">Main content area</p>
        </main>
      </div>

      {/* Dark version */}
      <div className="dark flex flex-1">
        <SideNav
          isCollapsed={false}
          onToggle={noop}
          boards={mockBoards}
          activeBoardId="1"
          onBoardSelect={noop}
          onCreateBoard={noop}
        />
        <main className="bg-very-dark-grey flex-1 p-8">
          <h2 className="heading-l mb-4 text-white">Dark Version</h2>
          <p className="text-medium-grey">Main content area</p>
        </main>
      </div>
    </div>
  ),
};
