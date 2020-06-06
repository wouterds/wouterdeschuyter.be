class GoogleAnalytics {
  private get isSDKAvailable() {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!window.gtag) {
      return false;
    }

    return true;
  }

  public pageView = (path: string) => {
    if (!this.isSDKAvailable) {
      if (process.env.ENV !== 'production') {
        console.warn('GA SDK not available');
      }
      return;
    }

    window.gtag('config', process.env.GA_TRACKING_ID, { page_path: path });
  };
}

export default new GoogleAnalytics();
