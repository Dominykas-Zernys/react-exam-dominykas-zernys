import Header from '../../components/Header/Header';
import LoadingElement from '../../UI/LoadingElement/LoadingElement';
import css from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div>
      <Header />
      <LoadingElement loadingText='404: Not found' />
    </div>
  );
}

export default ErrorPage;
