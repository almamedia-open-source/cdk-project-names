//import { App, AppProps, Annotations } from 'aws-cdk-lib';
//import { Construct } from 'constructs';


const config = {
  name: 'foo',
  author: {
    organization: 'Acme Corp',
    name: 'Mad Scientists',
    email: 'mad.scientists@acme.example.com',
  },
  accounts: {
    dev: {
      id: '111111111111',
      config: {
        baseDomain: 'example.net',
      },
    },
    prod: {
      id: '222222222222',
      config: {
        baseDomain: 'example.com',
      },
    },
  },
};

describe('Project initialization', () => {


  test('without region', () => {
    expect({}).toMatchObject({ ...config, defaultRegion: 'us-east-1' });
  });


});

