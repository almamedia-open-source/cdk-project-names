# AWS CDK Resource Name

![CDK Version](https://img.shields.io/badge/CDK-v2-informational "CDK v2")
![Stability](https://img.shields.io/badge/Stability-Experimental-yellow "Stability: Experimental")

**Opinionated AWS CDK utility for explicitly naming resources.**

[AWS CDK resource naming best practises](https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html#best-practices-apps-names) state that you should not explicitly name resources, but instead let CDK generate resource names to avoid naming collisions and enable replacement operations during deployments.

**But**, having explicit resource naming _with sensible conventions_ can:
1. also prevent naming collisions
2. prevent accidental/unwanted replacement operations
3. make debugging and finding correct resources via CloudWatch or X-Ray easier

There are many valid arguments why you should aim for totally immutable infrastructure and use generated resource names. But for example, how often you want to [change DynamoDB partition key on the fly](https://bobbyhadz.com/blog/dont-assign-names-cdk-resources) for production database with existing data? You might also have a lot of resources that others (even in different AWS accounts) rely on and hence the name (or ARN) of those resources must not change suddenly! **In the end, how you name (or don't name) your resources is up to you to decide; If you decide to explicitly name (all or some) resources, this utility might be for you!**

<br/>

## Important

**🚧 This tool is work-in-progress and experimental!**

All `@almamedia-open-source/cdk-` prefixed constructs/utilities are based on existing CDK constructs/utilities we've developed & used (in production) internally at [Alma Media](https://www.almamedia.fi/en/) since 2019.

_Breaking changes may occur at any given time without prior warning before first `v1` major is released_, as we rewrite them for CDK v2 and use this opportunity to also redesign & refactor.

[Feedback](https://github.com/almamedia-open-source/cdk-resource-name/issues) is most welcome, but do note that we intend to implement these new constructs/utilities and their APIs in such manner that our existing CDK v1 production workloads can easily migrate into these new `@almamedia-open-source/cdk-` constructs/utilities.

<br/>

## Installation

1. Ensure you meet following requirements:
    - [NodeJS](https://nodejs.org/en/) `v14.17.6` or newer
    - [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) `v2.0.0` or newer

2. Install peer dependency [`@almamedia-open-source/cdk-project-context`](https://github.com/almamedia-open-source/cdk-project-context):
    ```shell
    npm i -D @almamedia-open-source/cdk-project-context
    ```

3. Install this tool:
    ```shell
    npm i -D @almamedia-open-source/cdk-resource-name
    ```

<br/>

## Usage

1. Initialize your CDK App with `Project` construct as documented in [`@almamedia-open-source/cdk-project-context`](https://github.com/almamedia-open-source/cdk-project-context):
    ```ts
    import { Project } from '@almamedia-open-source/cdk-project-context';

    // new Project instead of new App
    const project = new Project({
      name: 'my-cool-project',
      author: {
        organization: 'Acme Corp',
        name: 'Mad Scientists',
        email: 'mad.scientists@acme.example.com',
      },
      defaultRegion: 'eu-west-1', // defaults to one of: $CDK_DEFAULT_REGION, $AWS_REGION or us-east-1
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
    })
    ```

2. Define your resource names:
    ```ts
    new dynamodb.Table(this, "Table", {
      queueName: Name.it(this, "MyTable"),// "FeatureFooBarMyTable"
    });

    new events.EventBus(this, "EventBus", {
      topicName: Name.withProject(this, "MyEventBus"),// "MyCoolProjectFeatureFooBarMyEventBus"
    });

    new s3.Bucket(this, "Bucket", {
      bucketName: UrlName.globally(this, "MyBucket"), // "acme-corp-my-cool-project-feature-foo-bar-my-bucket"
    });
    ```

3. Run CDK commands with (optional) `environment-type` (or shorthand: `environment` or `env`) CLI context flag, for example:
    ```shell
    npx cdk deploy --context environment=feature/foo-bar
    ```

4. The resources will be named as following:
    | Resource | Resource Name |
    | :------- | :------------ |
    | Table    | `FeatureFooBarMyTable` |
    | EventBus | `MyCoolProjectFeatureFooBarMyEventBus` |
    | Bucket   | `acme-corp-my-cool-project-feature-foo-bar-my-bucket` |

<br/>

## High-level Naming Conventions


### Case Styles

| Class name |    Style     |                     Purpose                      | Example output |
| :--------- | :----------- | :----------------------------------------------- | :------------- |
| `Name`     | `PascalCase` | Default style for naming resources               | `MyResource`   |
| `UrlName`  | `param-case` | URL/DNS compatible values (e.g. S3 `bucketName`) | `my-resource`  |


### Specificity Levels

There are three different “specificity levels” of naming you may choose via available methods:
|  Method name  |          Purpose          |   Example with application `environment` info    |
| :------------ | :------------------------ | :------------------ |
| `it`          | Default naming convention | `StagingMyResource` |
| `withProject` | Prefix with project name | `MyCoolProjectStagingMyResource` |
| `globally`    | Prefix with organization & project name | `AcmeCorpMyCoolProjectStagingMyResource` |

### Prefixes

Depending on the configuration, CDK context and method that is being used, this utility will prefix the names with some or all following values:

| Order |          Value          |              Controlled by               |
| :---: | :---------------------- | :--------------------------------------- |
|   1   | Organization            | Used method: `globally` only             |
|   2   | Project Name            | Used method: `globally` or `withProject` |
|   3   | Application Environment | If provided via `--context environment`  |
|   4   | Base Name               | Required string value given by user      |


### Name Structure

| Style | Default | Application `environment` info present |
| :--: | :--: | :--: |
 `PascalCase` default  | `[Organization][ProjectName]Basename` | `[Organization][ProjectName]EnvironmentBasename` |
 `param-case` URL/DNS compatible | `[organization-][project-name-]basename` |  `[organization-][project-name-]environment-basename` |

Values in square brackets (`[]`) are optional and they are printed depending on which [specificity level is used](#specificity-levels).
