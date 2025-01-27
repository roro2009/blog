export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Yamagata Developers Society',
  description: 'A community of professionals sharing knowledge',
  coverImage: 'img/common/yds-social-bg.jpg',
  logo: 'img/common/yds-logo.png',
  siteUrl: 'https://yamagata-developers-society.github.io/blog/',
  facebook: 'https://www.facebook.com/pg/as.works.2015/events/',
  twitter: 'https://twitter.com/yamagataDevSoc',
  github: 'https://github.com/yamagata-developers-society',
  showSubscribe: false,
  mailchimpAction: '#mailchimpAction',
  mailchimpName: '#mailchimpName',
};

export default config;
