export function toWords(words) {
    let strArray = []
    for (let s of words){ 
        switch (s){
            case 'a':
                strArray.push('𝓪');
                break;
            case 'b':
                strArray.push('𝓫');
                break;
            case 'c':
                strArray.push('𝓬');
                break;
            case 'd':
                strArray.push('𝓭');
                break;
            case 'e':
                strArray.push('𝓮');
                break;
            case 'f':
                strArray.push('𝓯');
                break;
            case 'g':
                strArray.push('𝓰');
                break;
            case 'h':
                strArray.push('𝓱');
                break;
            case 'i':
                strArray.push('𝓲');
                break;
            case 'j':
                strArray.push('𝓳');
                break;
            case 'k':
                strArray.push('𝓴');
                break;
            case 'l':
                strArray.push('𝓵');
                break;
            case 'm':
                strArray.push('𝓶');
                break;
            case 'n':
                strArray.push('𝓷');
                break;
            case 'o':
                strArray.push('𝓸');
                break;
            case 'p':
                strArray.push('𝓹');
                break;
            case 'q':
                strArray.push('𝓺');
                break;
            case 'r':
                strArray.push('𝓻');
                break;
            case 's':
                strArray.push('𝓼');
                break;
            case 't':
                strArray.push('𝓽');
                break;
            case 'u':
                strArray.push('𝓾');
                break;
            case 'v':
                strArray.push('𝓿');
                break;
            case 'w':
                strArray.push('𝔀');
                break;
            case 'x':
                strArray.push('𝔁');
                break;
            case 'y':
                strArray.push('𝔂');
                break;
            case 'z':
                strArray.push('𝔃');
                break;
            case 'A':
                strArray.push('𝓐');
                break;
            case 'B':
                strArray.push('𝓑');
                break;
            case 'C':
                strArray.push('𝓒');
                break;
            case 'D':
                strArray.push('𝓓');
                break;
            case 'E':
                strArray.push('𝓔');
                break;
            case 'F':
                strArray.push('𝓕');
                break;
            case 'G':
                strArray.push('𝓖');
                break;
            case 'H':
                strArray.push('𝓗');
                break;
            case 'I':
                strArray.push('𝓘');
                break;
            case 'J':
                strArray.push('𝓙');
                break;
            case 'K':
                strArray.push('𝓚');
                break;
            case 'L':
                strArray.push('𝓛');
                break;
            case 'M':
                strArray.push('𝓜');
                break;
            case 'N':
                strArray.push('𝓝');
                break;
            case 'O':
                strArray.push('𝓞');
                break;
            case 'P':
                strArray.push('𝓟');
                break;
            case 'Q':
                strArray.push('𝓠');
                break;
            case 'R':
                strArray.push('𝓡');
                break;
            case 'S':
                strArray.push('𝓢');
                break;
            case 'T':
                strArray.push('𝓣');
                break;
            case 'U':
                strArray.push('𝓤');
                break;
            case 'V':
                strArray.push('𝓥');
                break;
            case 'W':
                strArray.push('𝓦');
                break;
            case 'X':
                strArray.push('𝓧');
                break;
            case 'Y':
                strArray.push('𝓨');
                break;
            case 'Z':
                strArray.push('𝓩');
                break;
            default:
                strArray.push(s)
        }
    }
    return strArray.join('')
}