'use client';

// pages/index.js
import React, { Suspense } from 'react';
import Greeting from '../../components/greeting-client';

function HomePage() {
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Greeting name="React" />
            </Suspense>
        </div>
    );
}

export default HomePage;
