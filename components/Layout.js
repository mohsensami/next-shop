import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function Layout({ title, children }) {
    const { status, data: session } = useSession();

    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);

    const logoutClickHandler = () => {
        Cookies.remove('cart');
        dispatch({ type: 'CART_RESET' });
        signOut({ callbackUrl: '/login' });
    };
    const [query, setQuery] = useState('');

    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };
    return (
        <>
            <Head>
                <title>{title ? title + ' - Next Shop' : 'Next Shop'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link legacyBehavior rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer position="bottom-center" limit={1} />

            <div className="flex min-h-screen flex-col justify-between text-black">
                <header>
                    <nav className="flex h-20 items-center px-4 shadow-md bg-gray-100">
                        <div className="flex items-center gap-2 flex-1">
                            <ShoppingBagIcon className="h-8 w-8 text-blue-300"></ShoppingBagIcon>
                            <Link legacyBehavior href="/">
                                <a className="text-lg font-bold">Next Shop</a>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <form onSubmit={submitHandler} className="mx-auto  hidden w-full justify-center md:flex">
                                <input
                                    onChange={(e) => setQuery(e.target.value)}
                                    type="text"
                                    className="rounded-tr-none rounded-br-none p-1 text-sm focus:ring-0"
                                    placeholder="Search products"
                                />
                                <button
                                    className="rounded rounded-tl-none rounded-bl-none bg-blue-300 p-1 text-sm dark:text-black"
                                    type="submit"
                                    id="button-addon2"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
                                </button>
                            </form>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row-reverse items-center">
                                {status === 'loading' ? (
                                    'Loading'
                                ) : session?.user ? (
                                    <Menu as="div" className="relative inline-block z-50">
                                        <Menu.Button className="text-blue-600">{session.user.name}</Menu.Button>
                                        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/profile">
                                                    Profile
                                                </DropdownLink>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/order-history">
                                                    Order History
                                                </DropdownLink>
                                            </Menu.Item>
                                            {session.user.isAdmin && (
                                                <Menu.Item>
                                                    <DropdownLink className="dropdown-link" href="/admin/dashboard">
                                                        Admin Dashboard
                                                    </DropdownLink>
                                                </Menu.Item>
                                            )}
                                            <Menu.Item>
                                                <a className="dropdown-link" href="#" onClick={logoutClickHandler}>
                                                    Logout
                                                </a>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>
                                ) : (
                                    <Link legacyBehavior href="/login">
                                        <a className="p-2">Login</a>
                                    </Link>
                                )}

                                <Link legacyBehavior href="/cart">
                                    <a className="p-2 relative">
                                        <ShoppingCartIcon className="h-7 w-7" />
                                        {cartItemsCount > 0 && (
                                            <span className="absolute left-0 top-0 rounded-full bg-blue-300 px-2 py-1 text-xs font-bold text-white">
                                                {cartItemsCount}
                                            </span>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-20 mt-16 justify-center items-center shadow-inner bg-gray-300">
                    <p>Copyright © 2023 by mohsen sami</p>
                </footer>
            </div>
        </>
    );
}
