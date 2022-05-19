const {
    somme,
    triangleArea,
    rectanglePerimetre,
    squareNumber,
    rest,
    hourToSecond,
    convertToSecond,
    greeting,
    lengthOfString,
    stringToNumber,
    numberToString,
    sumOfNumbers,
    isEqual,
    ifOneIsProduct,
    isEmpty,
    isEqualZero,
    isDevisible,
    isEqualStr,
    isDevideBy,
    moodToday,
    isEvenOrOdd,
    match,
    getCase,
    inversionString,
    swappName,
    alphabetSoup,
    onlyCase,
    checkEnding,
    incrementOrDecrement,
    transformToString
} = require('./script')

describe('Function somme', () => {
    test('test somme', () => {
        expect(somme(3,2)).toBe(5)
    })
})

describe('Function triangleArea', () => {
    test('test triangleArea', () => {
        expect(triangleArea(11,12)).toBe(66)
    })
})

describe('Function rectanglePerimetre', () => {
    test('test rectanglePerimetre', () => {
        expect(rectanglePerimetre(6,5)).toBe(22)
    })
})

describe('Function squareNumber', () => {
    test('test squareNumber', () => {
        expect(squareNumber(5)).toBe(25)
    })
})

describe('Function rest', () => {
    test('test rest', () => {
        expect(rest(26,5)).toBe(1)
    })
})

describe('Function hourToSecond', () => {
    test('test hourToSecond', () => {
        expect(hourToSecond(26)).toBe(93600)
    })
})

describe('Function convertToSecond', () => {
    test('test convertToSecond', () => {
        expect(convertToSecond(26,10)).toBe(94200)
    })
})

describe('Function greeting', () => {
    test('test greeting', () => {
        expect(greeting("Philippe")).toBe("Bonjour Philippe !")
    })
})

describe('Function lengthOfString', () => {
    test('test lengthOfString', () => {
        expect(lengthOfString('Bonjour je suis un formateur')).toBe(28)
    })
})

describe('Function stringToNumber', () => {
    test('test sstringToNumber', () => {
        expect(stringToNumber("300")).toBe(300)
    })
})

describe('Function numberToString', () => {
    test('test numberToString', () => {
        expect(numberToString(300)).toBe("300")
    })
})

describe('Function sumOfNumbers', () => {
    test('test sumOfNumbers 1', () => {
        expect(sumOfNumbers(11,20)).toBe(true)
    })
    test('test sumOfNumbers 2', () => {
        expect(sumOfNumbers(60,60)).toBe(false)
    })
})

describe('Function isEqual', () => {
    test('test isEqual 1', () => {
        expect(isEqual(11,11)).toBe(true)
    })
    test('test isEqual 2', () => {
        expect(isEqual(60,61)).toBe(false)
    })
})

describe('Function ifOneIsProduct', () => {
    test('test ifOneIsProduct 1', () => {
        expect(ifOneIsProduct(2,2,3)).toBe(true)
    })
    test('test ifOneIsProduct 2', () => {
        expect(ifOneIsProduct(1,2,3)).toBe(false)
    })
})

describe('Function isEmpty', () => {
    test('test isEmpty 1', () => {
        expect(isEmpty("José")).toBe(false)
    })
    test('test isEmpty 2', () => {
        expect(isEmpty(" ")).toBe(true)
    })
})

describe('Function isEqualZero', () => {
    test('test isEqualZero 1', () => {
        expect(isEqualZero(-30)).toBe(true)
    })
    test('test isEqualZero 2', () => {
        expect(isEqualZero(6)).toBe(false)
    })
})

describe('Function isDevisible', () => {
    test('test isDevisible 1', () => {
        expect(isDevisible(300)).toBe(true)
    })
    test('test isDevisible 2', () => {
        expect(isDevisible(6)).toBe(false)
    })
})

describe('Function isEqualStr', () => {
    test('test isEqualStr 1', () => {
        expect(isEqualStr("EE", "IU")).toBe(true)
    })
    test('test isEqualStr 2', () => {
        expect(isEqualStr("heh", "ed")).toBe(false)
    })
})

describe('Function isDevideBy', () => {
    test('test isDevideBy 1', () => {
        expect(isDevideBy(6, 2)).toBe(true)
    })
    test('test isDevideBy 2', () => {
        expect(isDevideBy(6,4)).toBe(false)
    })
})

describe('Function moodToday', () => {
    test('test moodToday 1', () => {
        expect(moodToday("joyful")).toBe("Today, I am feeling joyful")
    })
    test('test moodToday 2', () => {
        expect(moodToday()).toBe("Today, I am feeling neuter")
    })
})

describe('Function isEvenOrOdd', () => {
    test('test isEvenOrOdd 1', () => {
        expect(isEvenOrOdd(7)).toBe("odd")
    })
    test('test isEvenOrOdd 2', () => {
        expect(isEvenOrOdd(12)).toBe("even")
    })
})

describe('Function match', () => {
    test('test match 1', () => {
        expect(match("COUCOU", "coucou")).toBe(true)
    })
    test('test match 2', () => {
        expect(match("COUCOU", "Hibou")).toBe(false)
    })
})

describe('Function getCase', () => {
    test('test getCase 1', () => {
        expect(getCase("coucou")).toBe('lower')
    })
    test('test getCase 2', () => {
        expect(getCase("COUCOU")).toBe("upper")
    })
    test('test getCase 3', () => {
        expect(getCase("CouCOU")).toBe("mixed")
    })
})

describe('Function inversionString', () => {
    test('test inversionString 1', () => {
        expect(inversionString("coucou")).toBe('uocuoc')
    })
    test('test inversionString 2', () => {
        expect(inversionString("bateau")).toBe("uaetab")
    })
    test('test inversionString 3', () => {
        expect(inversionString("toto")).toBe("otot")
    })
})


describe('Function swappName', () => {
    test('test swappName', () => {
        expect(swappName("coucou hibou")).toBe('hibou coucou')
    })
})

describe('Function alphabetSoup', () => {
    test('test aalphabetSoup', () => {
        expect(alphabetSoup("philippe")).toBe("ehiilppp")
    })
})

describe('Function onlyCase', () => {
    test('test onlyCase 1', () => {
        expect(onlyCase("PHILIPPE")).toBe(true)
    })
    test('test onlyCase 2', () => {
        expect(onlyCase("PHiLiPpe")).toBe(false)
    })
})

describe('Function checkEnding', () => {
    test('test checkEnding 1', () => {
        expect(checkEnding("apprenant", "ant")).toBe(true)
    })
    test('test checkEnding 2', () => {
        expect(checkEnding("chanson", "ette")).toBe(false)
    })
})

describe('Function incrementOrDecrement', () => {
    test('test incrementOrDecrement 1', () => {
        expect(incrementOrDecrement(7)).toBe(6)
    })
    test('test incrementOrDecrement 2', () => {
        expect(incrementOrDecrement(8)).toBe(9)
    })
})


describe('Function transformToString', () => {
    test('test transformToString 1', () => {
        expect(transformToString("23", "105")).toBe("23")
    })
    test('test transformToString 2', () => {
        expect(transformToString("3200", "83")).toBe("83")
    })
})