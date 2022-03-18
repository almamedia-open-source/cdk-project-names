const { awscdk, TextFile, javascript } = require('projen');

const nodejsVersion = '14.17.6';

const project = new awscdk.AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@almamedia-open-source/cdk-project-names',
  description: 'Opinionated AWS CDK utility for explicitly naming resources.',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-names.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  npmAccess: javascript.NpmAccess.PUBLIC,

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.17.0',
  constructsVersion: '10.0.0',
  peerDeps: ['constructs', 'aws-cdk-lib', '@almamedia-open-source/cdk-project-context@v0.0.11'],
  devDeps: ['constructs', 'aws-cdk-lib', '@almamedia-open-source/cdk-project-context@v0.0.11'],
  bundledDeps: ['change-case'],

  // Gitignore
  gitignore: ['.DS_Store'],

});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
