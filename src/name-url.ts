import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { NameProps } from './interfaces';
import { validateMaxLength } from './max-length';
import { Name } from './name';

export abstract class UrlName extends Name {
  public static it(scope: Construct, baseName: string, props?: NameProps): string {
    const result = paramCase(super.it(scope, baseName));
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
  public static withProject(scope: Construct, baseName: string, props?: NameProps): string {
    const result = paramCase(super.withProject(scope, baseName));
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
  public static globally(scope: Construct, baseName: string, props?: NameProps): string {
    const result = paramCase(super.globally(scope, baseName));
    validateMaxLength(scope, result, props?.maxLength);
    return result;
  }
}
