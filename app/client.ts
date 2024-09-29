// import {createClient} from "honox/client";
//
// createClient({
//   hydrate: async (elem, root) => {
//     const { hydrateRoot } = await import('react-dom/client')
//     // type Node の elem を ReactNode に変換する
//     const { createElement } = await import('react');
//     const reactElem = createElement('div', { dangerouslySetInnerHTML: { __html: elem.innerHTML } });
//     hydrateRoot(root, reactElem);
//   },
//   createElement: async (type: any, props: any) => {
//     const { createElement } = await import('react')
//     return createElement(type, props)
//   },
// })

// app/client.ts
import { createClient } from 'honox/client'

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import('react-dom/client')
    hydrateRoot(root, elem)
  },
  createElement: async (type: any, props: any) => {
    const { createElement } = await import('react')
    return createElement(type, props)
  },
})
