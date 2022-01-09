import { Construct } from 'constructs';
import { UrlName } from './name-url';

export abstract class PathName extends UrlName {
  public static it(scope: Construct, baseName: string): string {
    return `/${super.it(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
  }
  public static withProject(scope: Construct, baseName: string): string {
    return `/${super.withProject(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
  }
  public static globally(scope: Construct, baseName: string): string {
    return `/${super.globally(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
  }
}
