import { Menu } from '@headlessui/react';

export default function Dropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a style={active ? { color: 'cyan' } : {}} href="#">
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a style={active ? { color: 'cyan' } : {}} href="#">
              Students
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a style={active ? { color: 'cyan' } : {}} href="#">
              Group
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a style={active ? { color: 'cyan' } : {}} href="#">
              Class Year
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
