import Rss from 'rss';
import NetworkService from 'services/network';
import gql from 'graphql-tag';

const FETCH_POSTS = gql`
  query fetchData {
    posts {
      title
      excerpt
      slug
      publishedAt
      user {
        firstName
        lastName
      }
      mediaAsset {
        fileName
        size
        mediaType
      }
    }
  }
`;

const createFeed = () =>
  new Rss({
    title: 'Wouter De Schuyter',
    description:
      'This is my primary place on the internet where I collect things I made for myself, others or clients. I also write sometimes about things I like, things I experienced, guides, tutorials and more.',
    // eslint-disable-next-line @typescript-eslint/camelcase
    feed_url: `${process.env.URL}/feed.xml`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    site_url: `${process.env.URL}`,
    // eslint-disable-next-line @typescript-eslint/camelcase
    image_url: `${process.env.URL}/static/wouterds.jpg`,
    ttl: 6 * 60,
    categories: [
      'blog',
      'tech',
      'personal',
      'varia',
      'webdev',
      'mobile',
      'development',
    ],
  });

class Feed {
  private feed = createFeed();

  public build = async () => {
    const { posts } = (
      await NetworkService.apollo.query({ query: FETCH_POSTS })
    ).data;

    for (const post of posts) {
      const parts = post.mediaAsset.fileName.split('.');
      const image = `/static/media/${parts[0]}.embed.${parts[1]}`;

      this.feed.item({
        title: post.title,
        description: post.excerpt,
        url: `${process.env.URL}/blog/${post.slug}`,
        author: `${post.user.firstName} ${post.user.lastName}`,
        date: new Date(parseInt(post.publishedAt)).toISOString(),
        enclosure: {
          url: `${process.env.URL}${image}`,
          size: post.mediaAsset.size,
          type: post.mediaAsset.mediaType,
        },
      });
    }

    return this;
  };

  public getXml = () => {
    const xml = this.feed.xml();

    this.feed = createFeed();

    return xml;
  };
}

export default new Feed();
