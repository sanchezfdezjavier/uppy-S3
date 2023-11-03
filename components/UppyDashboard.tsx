"use client"
// TODO: Setup allowed files
// TODO: Type stuff
import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import { Dashboard, ProgressBar, StatusBar } from '@uppy/react';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';

const uppy = new Uppy()

export default function UppyDashboard(props) {
    useEffect(() => {
        uppy.setOptions({ restrictions: props.restrictions });
    }, [props.restrictions]);

    return <div className='p-2 bg-gradient-to-tr from-pink-600 to-orange-500 w-8/12 h-8/12 rounded-xl shadow-2xl'>
                <Dashboard uppy={uppy} plugins={['Webcam']} />
            </div>;
}