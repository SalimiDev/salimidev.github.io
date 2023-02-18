import { useState, useEffect, useMemo, use, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AppSidebar from '@/components/AppSidebar';
import Topbar from '@/components/Topbar';

const Layout = ({ children }) => {
    const [pageTitle, setPageTitle] = useState('Mehdi Salimi');
    const { route } = useRouter();

    const getPageTitle = useMemo(() => {
        const pageTitles = {
            '/': 'Home Page',
            '/about': 'About Page',
            '/skills': 'Skills Page',
            '/projects': 'Projects Page',
            '/contact': 'Contact Page',
        };

        return route => pageTitles[route] || 'Mehdi Salimi';
    }, []);

    const setPageTitleCallback = useCallback(() => {
        setPageTitle(getPageTitle(route));
    }, [getPageTitle, route]);

    useEffect(() => {
        setPageTitleCallback();
    }, [setPageTitleCallback]);

    return (
        <div className='flex'>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <aside>
                <AppSidebar />
            </aside>

            <main>
                <Topbar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
