import { Project, ProjectProps } from '@almamedia-open-source/cdk-project-context';
import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
//import { Construct } from 'constructs';
import { name } from '../src';
import { MAX_LENGTH_DEFAULT } from '../src/max-length';
import { Name } from '../src/name';

const projectProps: ProjectProps = {
  name: 'test-project',
  author: {
    organization: 'Acme',
    name: 'Test Author',
    email: 'test@example.com',
  },
  accounts: {},
};

describe('Name resources', () => {

  test('Produce valid environmental output with "it"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'TestFooBar';
    expect(Name.it(stack, 'fooBar')).toBe(expected);
    expect(Name.it(stack, 'foo-bar')).toBe(expected);
    expect(Name.it(stack, 'foo bar')).toBe(expected);
    expect(Name.it(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid non-environmental output with "withProject"', () => {
    const project = new Project({ ...projectProps });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'TestProjectFooBar';
    expect(Name.withProject(stack, 'fooBar')).toBe(expected);
    expect(Name.withProject(stack, 'foo-bar')).toBe(expected);
    expect(Name.withProject(stack, 'foo bar')).toBe(expected);
    expect(Name.withProject(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid environmental output with "withProject"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'TestProjectTestFooBar';
    expect(Name.withProject(stack, 'fooBar')).toBe(expected);
    expect(Name.withProject(stack, 'foo-bar')).toBe(expected);
    expect(Name.withProject(stack, 'foo bar')).toBe(expected);
    expect(Name.withProject(stack, 'foo.bar')).toBe(expected);
  });

  test('Produce valid environmental output with "globally"', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const expected = 'AcmeTestProjectTestFooBar';
    expect(Name.globally(stack, 'fooBar')).toBe(expected);
    expect(Name.globally(stack, 'foo-bar')).toBe(expected);
    expect(Name.globally(stack, 'foo bar')).toBe(expected);
    expect(Name.globally(stack, 'foo.bar')).toBe(expected);
  });

  test('shorthand method', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const stack = new cdk.Stack(project, 'testing-stack');

    const input = 'fooBar';
    const expected = 'TestProjectTestFooBar';
    const explicit = Name.withProject(stack, input);
    expect(explicit).toBe(expected);
    expect(name(stack, input)).toBe(expected);
  });

  /**
   * Test too long names
   */
  test('too long names should add annotation to node metadata', () => {
    const project = new Project({
      ...projectProps,
      context: {
        environment: 'test',
      },
    });

    const tooLongStackName= 'a'.repeat(MAX_LENGTH_DEFAULT + 1);

    const stack = new cdk.Stack(project, tooLongStackName);
    const tooLongName = Name.withProject(stack, tooLongStackName);
    new sqs.Queue(stack, 'Queue', {
      queueName: tooLongName,
    });

    assertions.Annotations.fromStack(stack).hasError('*', `Name value "${tooLongName}" is longer than the allowed limit of ${MAX_LENGTH_DEFAULT} characters.`);
  });
});
