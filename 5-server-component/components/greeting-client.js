'use client';

// components/Greeting.client.js
import React, { useState, useEffect } from 'react';

function Greeting({ name }) {
    const [greeting, setGreeting] = useState('Loading...');

    useEffect(() => {
        fetch('https://api.example.com/greet')
            .then(res => res.json())
            .then(data => setGreeting(data.greeting))
            .catch(err => setGreeting('Failed to load greeting'));
    }, []);

    return <h1>{greeting}, {name}!</h1>;
}

export default Greeting;
