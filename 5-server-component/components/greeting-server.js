// components/greeting-server.js
import { Suspense } from 'react';

function fetchGreeting() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ greeting: "Hello from the server after delay!" });
        }, 3000); // 3초 지연
    });
}

function Greeting({ name }) {
    const data = fetchGreeting();
    return <h1>{data.greeting}, {name}</h1>;
}

function GreetingWithSuspense({ name }) {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Greeting name={name} />
        </Suspense>
    );
}

export default GreetingWithSuspense;
