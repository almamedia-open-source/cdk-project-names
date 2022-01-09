import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { Name } from './name';

export abstract class UrlName extends Name {
  public static it(scope: Construct, baseName: string): string {
    return paramCase(super.it(scope, baseName));
  }
  public static withProject(scope: Construct, baseName: string): string {
    return paramCase(super.withProject(scope, baseName));
  }
  public static globally(scope: Construct, baseName: string): string {
    return paramCase(super.globally(scope, baseName));
  }
}
