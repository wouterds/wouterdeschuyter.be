import UniversalCookie from 'universal-cookie';

class Cookie {
  private client = new UniversalCookie();

  public init(header: string | null = null) {
    if (this.client && typeof window !== 'undefined') {
      return this.client;
    }

    this.client = new UniversalCookie(header);

    return this.client;
  }

  public getClient() {
    return this.client;
  }
}

export default new Cookie();
