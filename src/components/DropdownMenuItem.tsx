import * as React from 'react';
import { Menu } from '@headlessui/react'

interface IDropDownMenuItemProps {
    href: string;
    children: React.ReactNode;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const DropDownMenuItem: React.FunctionComponent<IDropDownMenuItemProps> = ({ href, children }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <a href={href} className={classNames(active ? 'bg-purple-300 dark:bg-zinc-700' : '', 'block px-4 py-2 text-sm')}>
                    {children}
                </a>
            )}
        </Menu.Item>
    );
};

export default DropDownMenuItem;
