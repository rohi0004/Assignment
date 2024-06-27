import { useRouter } from 'next/router';

const PageComponent = () => {
  const router = useRouter();

  const goToNextPage = () => {
    router.push('/profile');
  };

  return (
    <div className="page-container">
      <button className="skip-button" onClick={goToNextPage}>
        Skip
      </button>
      <div className="content">
        <div className="image-section">
          <img src="/images/Anywhere.png" alt="Illustration" />
        </div>
        <div className="text-section">
          <h1>Anywhere you are</h1>
          <p>Sell houses easily with the help of Listenonyx and to make this line big, I am writing more.</p>
        </div>
      </div>
      <button className="next-button" onClick={goToNextPage}>
        <img src="/images/arrow.png" alt="Next" />
      </button>
    </div>
  );
};

export default PageComponent;
