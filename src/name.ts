import { ProjectContext } from '@almamedia-open-source/cdk-project-context';
import { pascalCase } from 'change-case';
import { Construct } from 'constructs';

interface ContextualNamingInformation {
  readonly environment?: string;
  readonly projectName?: string;
  readonly organizationName?: string;
}

/*
interface NameProps {
  maxLength?: number;
  trim?: boolean;
}
*/

export class Name {

  public static it(scope: Construct, baseName: string): string {
    const info = this.getContextualInformation(scope);
    return this.nameIt(baseName, {
      environment: info.environment,
    });
  }

  public static withProject(scope: Construct, baseName: string): string {
    const info = this.getContextualInformation(scope);
    return this.nameIt(baseName, {
      environment: info.environment,
      projectName: info.projectName,
    });
  }

  public static globally(scope: Construct, baseName: string): string {
    const info = this.getContextualInformation(scope);
    return this.nameIt(baseName, {
      environment: info.environment,
      projectName: info.projectName,
      organizationName: info.organizationName,
    });
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
