"use client"
import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import { Dashboard, ProgressBar } from '@uppy/react';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';
import DragDrop from '@uppy/drag-drop';

const uppy = new Uppy()

export default function UppyDashboard(props) {
    useEffect(() => {
        uppy.setOptions({ restrictions: props.restrictions });
    }, [props.restrictions]);

    return <div className='p-2 bg-gradient-to-t from-pink-600 to-orange-500 w-8/12 h-8/12 rounded-xl'>
        <Dashboard uppy={uppy} plugins={['Webcam']} />
        </div>;
}