import { Construct } from 'constructs';
import { NameProps } from './interfaces';
import { validateMaxLength } from './max-length';
import { UrlName } from './name-url';

export abstract class PathName extends UrlName {
  public static it(scope: Construct, baseName: string, props?: NameProps): string {
    const result = `/${super.it(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
  public static withProject(scope: Construct, baseName: string, props?: NameProps): string {
    const result = `/${super.withProject(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
  public static globally(scope: Construct, baseName: string, props?: NameProps): string {
    const result = `/${super.globally(scope, '').replace(/-/g, '/')}/${baseName.replace(/[\.\s]/g, '')}`;
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
}
