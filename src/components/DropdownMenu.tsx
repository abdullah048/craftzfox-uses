import * as React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { IoMenu } from 'react-icons/io5/index';
import DropDownMenuItem from './DropdownMenuItem';

interface IDropDownMenuProps {
}

const DropDownMenu: React.FunctionComponent<IDropDownMenuProps> = (props) => {
    return (
        <Menu as='div' className='relative inline-block text-left mr-1'>
            <div>
                <Menu.Button aria-label='menu' className='flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 p-2 shadow-sm text-sm font-medium hover:bg-purple-300 dark:hover:bg-zinc-800 focus:outline transition-all'>
                    <IoMenu className='h-5 w-5' />
                </Menu.Button>
            </div>
            <Transition as={React.Fragment} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
                <Menu.Items className='absolute right-0 z-10 mt-2 w-56 rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700'>
                     <div className='py-1'>
                        <div className='px-3 py-2 font-bold uppercase text-xs'>
                             Categories
                        </div>
                        <DropDownMenuItem href='/categories/computing'>Computing</DropDownMenuItem>
                        <DropDownMenuItem href='/categories/tech'>Tech</DropDownMenuItem>
                     </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropDownMenu;
