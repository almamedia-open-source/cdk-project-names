import { Project, ProjectProps } from '@almamedia-open-source/cdk-project-context';
import * as cdk from 'aws-cdk-lib';
//import { Construct } from 'constructs';
import { UrlName } from '../src/name-url';

const projectProps: ProjectProps = {
  name: 'test-project',
  author: {
    organization: 'Acme',
    name: 'Test Author',
    email: 'test@example.com',
  },
  accounts: {},
};

describe('UrlName resources', () => {

  test('Produce valid environmental output with "it"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'test-foo-bar';
    expect(UrlName.it(stack, 'fooBar')).toBe(expected);
    expect(UrlName.it(stack, 'foo-bar')).toBe(expected);
    expect(UrlName.it(stack, 'foo bar')).toBe(expected);
    expect(UrlName.it(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid non-environmental output with "withProject"', () => {
    const project = new Project({
      ...projectProps,
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'test-project-foo-bar';
    expect(UrlName.withProject(stack, 'fooBar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo-bar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo bar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid environmental output with "withProject"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'test-project-test-foo-bar';
    expect(UrlName.withProject(stack, 'fooBar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo-bar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo bar')).toBe(expected);
    expect(UrlName.withProject(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid environmental output with "globally"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'acme-test-project-test-foo-bar';
    expect(UrlName.globally(stack, 'fooBar')).toBe(expected);
    expect(UrlName.globally(stack, 'foo-bar')).toBe(expected);
    expect(UrlName.globally(stack, 'foo bar')).toBe(expected);
    expect(UrlName.globally(stack, 'foo.bar')).toBe(expected);
  });

});