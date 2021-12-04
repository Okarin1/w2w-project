const alphabet = [
    ['𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘', '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟', '𝓠', '𝓡', '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩',
        '𝓪', '𝓫', '𝓬', '𝓭', '𝓮', '𝓯', '𝓰', '𝓱', '𝓲', '𝓳', '𝓴', '𝓵', '𝓶', '𝓷', '𝓸', '𝓹', '𝓺', '𝓻', '𝓼', '𝓽', '𝓾', '𝓿', '𝔀', '𝔁', '𝔂', '𝔃'
        ],
    ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ғ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'ϙ', 'ʀ', 'ᴇ', 's', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ',
        'ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ⁱ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ᵠ', 'ʳ', 'ᵉ', 'ˢ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ']
]

function Words(words,indexAlphabet){
    let strArray = []
    for (let s of words){
        if(/[A-Z]/.test(s)){
            strArray.push(alphabet[indexAlphabet][s.charCodeAt(0)-65])
        }else if(/[a-z]/.test(s)){
            strArray.push(alphabet[indexAlphabet][s.charCodeAt(0)-71])
        }else{
            strArray.push(s)
        }
    }
    const finalWords = strArray.join('')
    return finalWords
}

// console.log(Words('Hello',0))

