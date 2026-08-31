import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => (
  <div className="pt-20">
    <section className="section min-h-[60vh] bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container flex min-h-[50vh] items-center justify-center text-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">404</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">This page is not available.</h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
            The link may be outdated, or the page may have moved. Return home to continue exploring the portfolio.
          </p>
          <div className="mt-8">
            <Button to="/" variant="primary" icon={<Home className="w-5 h-5" />}>
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NotFound;
