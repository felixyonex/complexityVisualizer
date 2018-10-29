export class BracketStrings {

/*     public bracketRepetition: number;

    constructor(bracketNumber: number) {
        this.bracketRepetition = bracketNumber;
    }
 */
    public validBrackets(bracketRepetition: number): string {
        let bracketString: string = '{}()[]';
        bracketString = bracketString.repeat(bracketRepetition);
        return bracketString;
    }
}
