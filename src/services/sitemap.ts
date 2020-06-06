import gql from 'graphql-tag';
import NetworkService from 'services/network';
import { createSitemap, EnumChangefreq } from 'sitemap';

const FETCH_POSTS = gql`
  query fetchData {
    posts {
      slug
      publishedAt
    }
  }
`;

class Sitemap {
  private sitemap = createSitemap({ hostname: process.env.NEXT_PUBLIC_URL });

  private buildStatic = () => {
    this.sitemap.add({
      url: '/',
      changefreq: EnumChangefreq.DAILY,
      priority: 1,
    });
    this.sitemap.add({
      url: '/about',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.7,
    });
    this.sitemap.add({
      url: '/blog',
      changefreq: EnumChangefreq.DAILY,
      priority: 0.7,
    });
    this.sitemap.add({
      url: '/contact',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.7,
    });
    this.sitemap.add({
      url: '/experiments',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.7,
    });
  };

  private buildDynamic = async () => {
    const { posts } = (
      await NetworkService.apollo.query({ query: FETCH_POSTS })
    ).data;

    for (const post of posts) {
      this.sitemap.add({
        url: `/blog/${post.slug}`,
        changefreq: EnumChangefreq.WEEKLY,
        priority: 0.5,
        lastmodISO: new Date(parseInt(post.publishedAt)).toISOString(),
      });
    }
  };

  public build = async () => {
    this.buildStatic();
    await this.buildDynamic();

    return this;
  };

  public getXml = () => {
    return this.sitemap.toXML();
  };

  public getCompressedXml = () => {
    return this.sitemap.toGzip();
  };
}

export default new Sitemap();
