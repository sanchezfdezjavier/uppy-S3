'use client'
// TODO: Setup allowed files
// TODO: Type stuff
import React, { useEffect } from 'react'
import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/webcam/dist/style.min.css'

const uppy = new Uppy()

export default function UppyDashboard(props) {
  useEffect(() => {
    uppy.setOptions({ restrictions: props.restrictions })
  }, [props.restrictions])

  return (
    <div className="h-8/12 w-8/12 rounded-xl bg-gradient-to-tr from-pink-600 to-orange-500 p-2 shadow-2xl">
      <Dashboard uppy={uppy} plugins={['Webcam']} />
    </div>
  )
}
