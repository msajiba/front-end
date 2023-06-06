import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.user.currentUser);

    if (!isAuthenticated) {
        const currentPath = router.asPath;
        const loginPath = `/account/login?redirect=${encodeURIComponent(currentPath)}`;
      router.push(loginPath);
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
