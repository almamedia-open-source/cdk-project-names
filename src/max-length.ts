import { Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export const MAX_LENGTH_DEFAULT = 63;
export const MAX_LENGTH_PATH = 900;

function isPathValue(value: string): boolean {
  return value.indexOf('/') === 0;
}

function decideMaxLength(value: string, maxLengthProp?: number): number {
  if (typeof maxLengthProp === 'number') return maxLengthProp;
  if (isPathValue(value)) return MAX_LENGTH_PATH;
  return MAX_LENGTH_DEFAULT;
}

export function validateMaxLength(scope: Construct, value: string, maxLength?: number): void {
  const max = decideMaxLength(value, maxLength);
  if (value.length > max) {
    Annotations.of(scope).addError(`Name value "${value}" is longer than the allowed limit of ${maxLength}`);
  }
}
