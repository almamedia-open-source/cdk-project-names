import { ProjectContext } from '@almamedia-open-source/cdk-project-context';
import { pascalCase } from 'change-case';
import { Construct } from 'constructs';
import { NameProps } from './interfaces';
import { validateMaxLength } from './max-length';

interface ContextualNamingInformation {
  readonly environment?: string;
  readonly projectName?: string;
  readonly organizationName?: string;
}

export class Name {

  public static it(scope: Construct, baseName: string, props?: NameProps): string {
    const info = this.getContextualInformation(scope);
    const result = this.nameIt(baseName, {
      environment: info.environment,
    });
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }

  public static withProject(scope: Construct, baseName: string, props?: NameProps): string {
    const info = this.getContextualInformation(scope);
    const result = this.nameIt(baseName, {
      environment: info.environment,
      projectName: info.projectName,
    });
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }

  public static globally(scope: Construct, baseName: string, props?: NameProps): string {
    const info = this.getContextualInformation(scope);
    const result = this.nameIt(baseName, {
      environment: info.environment,
      projectName: info.projectName,
      organizationName: info.organizationName,
    });
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }

  private static nameIt(baseName: string, info: ContextualNamingInformation): string {
    return `${info.organizationName || ''}${info.projectName || ''}${info.environment || ''}${pascalCase(baseName)}`;
  }

  private static getContextualInformation(scope: Construct): ContextualNamingInformation {
    return {
      environment: pascalCase(ProjectContext.tryGetEnvironment(scope) || ''),
      projectName: pascalCase(ProjectContext.getName(scope)),
      organizationName: pascalCase(ProjectContext.getAuthorOrganization(scope) || ''),
    };
  }
}
