// src/App.js (React)
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 클라이언트에서 데이터를 fetch하고 불러옵니다.
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>CSR 예제</h1>
      {data ? (
        <div>
          <h2>서버에서 가져온 데이터</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>데이터를 로딩 중...</p>
      )}
    </div>
  );
}

export default App;
