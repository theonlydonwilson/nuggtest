import React from 'react'
import { renderToString } from 'react-dom/server'
import { App } from './app'

import { ServerRouter, createServerRenderContext } from 'react-router'
const context = createServerRenderContext()

let markup = renderToString(
    <ServerRouter
      location={'/'}
      context={context}>
      <App/>
    </ServerRouter>
  )

console.log(markup)
