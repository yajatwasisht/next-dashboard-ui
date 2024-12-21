import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/menu">
        <button>Go to Menu</button>
      </Link>
    </div>
  );
};

export default Homepage;
