const isSDKAvailable = () => {
  if (typeof window === 'undefined') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('GA SDK not available');
    }
    return false;
  }

  if (!window.gtag) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('GA SDK not available');
    }
    return false;
  }

  if (process.env.NODE_ENV !== 'production') {
    return false;
  }

  return true;
};

const pageView = (path: string) => {
  if (!isSDKAvailable()) {
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
