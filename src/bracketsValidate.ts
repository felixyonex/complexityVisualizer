import { Stack } from './stack';

export class BracketValidate {
/*   private inputStr: string;

  constructor(inputStr: string) {
    this.inputStr = inputStr;
  } */

  public isValid(inputStr: string): boolean {
    const stack = new Stack();
    for (const element of inputStr) {
      if ('([{'.includes(element)) {
        stack.push(element);
      } else {
        let top;
        switch (element) {
          case ')':
            top = stack.pop();
            if (top !== '(') {
              return false;
            }
            break;
          case ']':
            top = stack.pop();
            if (top !== '[') {
              return false;
            }
            break;
          case '}':
            top = stack.pop();
            if (top !== '{') {
              return false;
            }
            break;
          default:
        }
      }
    }
    return stack.count() === 0;
  }
}
