import './bootstrap';
import '../css/app.css';
import React from 'react';
import Layout from '@/Layouts/Layout';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import type { ComponentType, ReactNode } from 'react';

type PageComponent = ComponentType<any> & {
    layout?: (page: ReactNode) => ReactNode
}

type PageModule = {
    default: PageComponent
}

createInertiaApp({
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    //     let page = pages[`./Pages/${name}.tsx`]
    //     page.default.layout = page.default.layout || (page => <Layout children={page} />)
    //     return page
    // },
    resolve: (name) => {
        const pages = import.meta.glob<PageModule>('./Pages/**/*.tsx', { eager: true })
    
        const page = pages[`./Pages/${name}.tsx`]
        if (!page) {
          throw new Error(`Inertia page not found: ./Pages/${name}.tsx`)
        }
    
        page.default.layout =
          page.default.layout ?? ((p: ReactNode) => <Layout>{p}</Layout>)
    
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: false,
})
