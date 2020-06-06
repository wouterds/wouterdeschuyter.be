const isSDKAvailable = () => {
  if (typeof window === 'undefined') {
    if (process.env.NEXT_PUBLIC_ENV !== 'production') {
      console.warn('GA SDK not available');
    }
    return false;
  }

  if (!window.gtag) {
    if (process.env.NEXT_PUBLIC_ENV !== 'production') {
      console.warn('GA SDK not available');
    }
    return false;
  }

  return true;
};

const pageView = (path: string) => {
  if (!isSDKAvailable()) {
    return;
  }

  if (process.env.NEXT_PUBLIC_ENV !== 'production') {
    return;
  }

  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: path,
  });
};

const GoogleAnalytics = {
  pageView,
};

export default GoogleAnalytics;
