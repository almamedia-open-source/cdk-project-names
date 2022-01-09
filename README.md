# AWS CDK Resource Name

![CDK Version](https://img.shields.io/badge/CDK-v2-informational "CDK v2")
![Stability](https://img.shields.io/badge/Stability-Experimental-yellow "Stability: Experimental")

**Opinionated AWS CDK utility for explicitly naming resources.**

[AWS CDK resource naming best practises](https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html#best-practices-apps-names) state that you should not explicitly name resources, but instead let CDK generate resource names to avoid naming collisions and enable replacement operations during deployments.

**But**, having explicit resource naming _with sensible conventions_ can:
1. also prevent naming collisions
2. prevent accidental/unwanted replacement operations
3. make debugging and finding correct resources via CloudWatch or X-Ray easier

There are many valid arguments why you should aim for totally immutable infrastructure and use generated resource names. But for example, how often you want to [change DynamoDB partition key on the fly](https://bobbyhadz.com/blog/dont-assign-names-cdk-resources) for production database with existing data? You might also have a lot of resources that others (even in different AWS accounts) rely on and hence the name (or ARN) of those resources must not change suddenly! **In the end, how you name (or don't name) your resources is up to you to decide; If you decide to explicitly name (_all or some_) resources, this utility might be for you!**

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
    import { Name, UrlName } from '@almamedia-open-source/cdk-resource-name';

    // somewhere inside your CDK stack:

    new dynamodb.Table(this, 'Table', {
      queueName: Name.it(this, 'MyTable'),
    });

    new events.EventBus(this, 'EventBus', {
      topicName: Name.withProject(this, 'MyEventBus'),
    });

    new s3.Bucket(this, 'Bucket', {
      bucketName: UrlName.globally(this, 'MyBucket'),
    });

    new ssm.StringParameter(this, 'Parameter', {
      parameterName: PathName.withProject(this, 'MyNamespace/MyParameter'),
      stringValue: 'Foo',
      tier: ssm.ParameterTier.ADVANCED,
    });
    ```

3. Run CDK commands with (optional) `environment-type` (or shorthand: `environment` or `env`) CLI context flag, for example:
    ```shell
    npx cdk deploy --context environment=feature/foo-bar
    ```

4. The resources will be named as following:
    | Resource  |                     Resource Name                     |
    | :-------- | :---------------------------------------------------- |
    | Table     | `FeatureFooBarMyTable`                                |
    | EventBus  | `MyCoolProjectFeatureFooBarMyEventBus`                |
    | Bucket    | `acme-corp-my-cool-project-feature-foo-bar-my-bucket` |
    | Parameter | `MyCoolProject/FeatureFooBar/MyNamespace/MyParameter` |

<br/>

## High-level Naming Conventions


### Case Styles

| Class name |                Style                |                              Purpose                               |      Example output       |
| :--------- | :---------------------------------- | :----------------------------------------------------------------- | :------------------------ |
| `Name`     | `PascalCase`                        | Default style for naming resources                                 | `MyResource`              |
| `UrlName`  | `param-case`                        | URL/DNS compatible values<br/>(e.g. S3 `bucketName`)                   | `my-resource`             |
| `PathName` | `PascalCase`<br/>separated by `/` | Slash separated values<br/>(e.g. SSM `parameterName` with hierarchies) | `MyNamespace/MyParameter` |

### Specificity Levels

There are three different “specificity levels” of naming you may choose via available methods:
|  Method name  |          Purpose          |   Example with application `environment` info    |
| :------------ | :------------------------ | :------------------ |
| `it`          | Only base name with environment type if that is available | `StagingMyResource` |
| `withProject` | Same as above, but prefix with project name (recommended default) | `MyCoolProjectStagingMyResource` |
| `globally`    | Same as above, but prefix with your organization name as well | `AcmeCorpMyCoolProjectStagingMyResource` |

#### Shorthand syntax

Since `withProject` is often the most sensible default, this tool exposes the following shorthand functions for brevity:
- `name` – same as `Name.withProject`
- `urlName` – same as `UrlName.withProject`
- `pathName` – same as `PathName.withProject`

Note the lowercase first letter.

```ts
import { name, urlName, pathName } from '@almamedia-open-source/cdk-resource-name';
```

### Prefixes

Depending on the configuration, CDK context and method that is being used, this utility will prefix the names with some or all following values:

| Order |          Value          |              Controlled by               |
| :---: | :---------------------- | :--------------------------------------- |
|   1   | Organization            | Used method: `globally` only             |
|   2   | Project Name            | Used method: `globally` or `withProject` |
|   3   | Application Environment | If provided via `--context environment`  |
|   4   | Base Name               | Required string value given by user      |


#### Name Structure

| Style | Default | Application `environment` info present |
| :--: | :--: | :--: |
 `PascalCase` default  | `[Organization][ProjectName]Basename` | `[Organization][ProjectName]EnvironmentBasename` |
 `param-case` URL/DNS compatible | `[organization-][project-name-]basename` |  `[organization-][project-name-]environment-basename` |

Values in square brackets `[]` are optional and they are printed depending on which [specificity level is used](#specificity-levels).

<br/>

## Resource Name Limitations

### Allowed Characters

This tool does not validate for allowed characters, as they vary from service to service. Mostly you should stick to basic alphanumeric characters (`a-z` and `0-9`), with the exception of `PathName` class and it's methods where you may use slash `/` character to describe SSM Parameter name hierarchies.

### Length

**Most AWS resources have resource name length limiation of around 63 characters** but as always, there are exceptions such as:
- AWS Lambda supports [up to 140 characters for `functionName`](https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#API_CreateFunction_RequestSyntax)
- ElastiCache supports [only 50 characters for `clusterName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html#cfn-elasticache-cachecluster-clustername)
- Elastic Load Balancing supports [only 32 characters for `targetGroupName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html)

The various limitations can be found via service specific API docs or somewhat nicely [aggregated for most popular services in this StackOverflow answer](https://stackoverflow.com/a/46290196/11266464).

If you have lenghty values in organization name, project name, environment type and/or base name you may run into problems. Due to that reason **by default this utility will create an error if your resource name exceeds 63 characters.**

#### PathName exception

The exception is `PathName` as it is mostly used with AWS Systems Manager Parameter Store Paremeters, which have the [ARN length limit of `1011`](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html#systemsmanager-PutParameter-request-Name): Therefore with `PathName` we have decided to set the default character limit to `900`. You can always configure that with `maxLength: number` property.

#### Strategies

1. If the resource accepts longer resource names (like AWS Lambda accepts 140 characters for `functionName`), you may specify a custom max length as a prop:
    ```ts
    Name.globally(this, 'MyFunction', { maxLength: 140 });
    ```
2. Select the naming method carefully:

    - If your AWS account only has single project in it, you should default to using `it` which results into shortest possible resource name, for example `StagingMyResource`. But also consider future-proofing: Will there be other projects in that AWS account in the future?

    - If your AWS account has multiple projects (e.g. microservices) in it, you should default to using `withProject`, which results into values such as `MyCoolProjectStagingMyResource`.

    - Only use `globally` method which prints the longest form (for example `AcmeCorpMyCoolProjectStagingMyResource`) for things such as S3 bucket names.

      You shouldn't really have the need to separate different organizations internally within a single AWS account. Having multiple organizations (business units or development teams etc) deploying workloads into the same AWS account suggests your AWS account organization setup is not necessarily following best practises.

3. **If the name is not important to you: Don't specify the name at all and let CDK handle it!**

4. Consider shorter base name.

5. You should consider of course if you can somehow logically abbreviate/shorten your organization name for example. Be careful with this, as it will affect resources (i.e. perform replacement) that are already deployed!

6. Consider [trimming](#trimming).

7. Roll your own naming for that specific resource. You may want to utilize some of the methods provided by [`@almamedia-open-source/cdk-project-context`](https://github.com/almamedia-open-source/cdk-project-context).

#### Trimming

Set the maximum length and enable trimming:
```ts
Name.withProject(this, 'MyApplicationTargetGroup', {
  maxLength: 32,
  trim: true,
});
```

If the output value of `Name.withProject` is within the `maxLength` (32) character limit, then it returns immediately. If not (as in the above example), the following happens:

1. It creates a hash value from the basename:
    `E43A285509B095FCE0E474A4E9DF0A1D1D41F09D91F70D6F4873688BC07E6C2B`
2. Picks first 3 characters from the hash:
    `E43`
3. Cuts the output value of `Name.withProject` to first 29 characters:
    `MyCoolProjectStagingMyApplica`
4. Adds the first 3 characters from the hash as suffix
    `MyCoolProjectStagingMyApplicaE43`

Note that trimming happens for the whole output value of `Name.withProject`, which means your organization, project name and environment type prefixes might be affected as well (depending on their length).






