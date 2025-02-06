import React from 'react';

function HomePage({ data }) {
  return (
    <div>
      <h1>SSR 예제</h1>
      <h2>서버에서 가져온 데이터</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// getServerSideProps는 Next.js에서 사용하는 데이터 가져오기 함수 중 하나로, 페이지가 요청될 때마다 서버에서 데이터를 가져와 페이지를 생성
// 서버 측에서만 실행되며 클라이언트 측에서 실행되지 않습니다
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data }, // 페이지에서 사용할 데이터를 반환
  };
}

export default HomePage;
