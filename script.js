// Spanish MCQs based on the provided PDF content
const questions = [
    // Alphabet and Pronunciation (Questions 1-30)
    {
        question: "How many letters are there in the modern Spanish alphabet?",
        options: ["25", "27", "30", "32"],
        answer: 2,
        explanation: "The modern Spanish alphabet consists of 30 letters (5 vowels and 25 consonants)."
    },
    {
        question: "Which of the following letters was removed from the modern Spanish alphabet by Real Academia Española?",
        options: ["CH and LL", "Ñ and H", "K and W", "C and Z"],
        answer: 0,
        explanation: "CH and LL were removed from the modern Spanish alphabet by Real Academia Española."
    },
    {
        question: "How is the letter 'H' pronounced in Spanish?",
        options: ["Like 'ache' in 'Apache'", "Silently", "Like 'hotha' in 'Home'", "Like 'hay' in 'haystack'"],
        answer: 1,
        explanation: "The letter 'H' is silent in Spanish pronunciation."
    },
    {
        question: "In Spanish, when the last letter of a word ends with a vowel or consonant N/S, where is the stress placed?",
        options: ["On the last syllable", "On the first syllable", "On the penultimate syllable", "On the antepenultimate syllable"],
        answer: 2,
        explanation: "When the last letter of a word ends with a vowel or consonant N/S, the stress is placed on the penultimate (second last) syllable."
    },
    {
        question: "How is the letter 'C' pronounced before 'E' or 'I'?",
        options: ["Like 'k' in 'kite'", "Like 's' in 'sit'", "Like 'ch' in 'chat'", "Like 'c' in 'cat'"],
        answer: 1,
        explanation: "C is pronounced like 's' in 'sit' when it comes before E or I."
    },
    {
        question: "How is the letter 'G' pronounced before 'E' or 'I'?",
        options: ["Like 'g' in 'go'", "Like 'h' in 'hat'", "Like 'j' in 'jump'", "Like 'g' in 'gentle'"],
        answer: 2,
        explanation: "G is pronounced like 'j' in 'jump' when it comes before E or I."
    },
    {
        question: "What is the correct pronunciation of 'LL' in Spanish?",
        options: ["Like 'y' in 'yes'", "Like 'll' in 'call'", "Like 'j' in 'jump'", "All of the above"],
        answer: 3,
        explanation: "LL can be pronounced in various ways depending on the region: like 'y' in 'yes', 'll' in 'call', or 'j' in 'jump'."
    },
    {
        question: "How is the letter 'J' pronounced in Spanish?",
        options: ["Like 'j' in 'jump'", "Like 'h' in 'hat'", "Like 'ch' in 'chat'", "Like 'y' in 'yes'"],
        answer: 1,
        explanation: "J is pronounced like 'h' in 'hat' in Spanish."
    },
    {
        question: "What does 'La tilde' refer to in Spanish?",
        options: ["A type of hat", "An accent mark", "A musical note", "A punctuation mark"],
        answer: 1,
        explanation: "La tilde refers to the accent mark placed over vowels to indicate stress."
    },
    {
        question: "Which letter is unique to Spanish?",
        options: ["Ñ", "K", "W", "Y"],
        answer: 0,
        explanation: "Ñ is considered unique to the Spanish language."
    },
    {
        question: "How is the letter 'R' pronounced in Spanish?",
        options: ["Like 'r' in 'run'", "Like 'rr' in 'error'", "Like 'er' in 'her'", "Rolled R sound"],
        answer: 3,
        explanation: "R is pronounced with a rolled R sound in Spanish."
    },
    {
        question: "How is the letter 'RR' pronounced in Spanish?",
        options: ["Like 'r' in 'run'", "Like 'rr' in 'error'", "Strongly rolled R sound", "Silently"],
        answer: 2,
        explanation: "RR is pronounced with a strongly rolled R sound in Spanish."
    },
    {
        question: "What is the pronunciation of 'Z' in Spanish?",
        options: ["Like 'z' in 'zero'", "Like 's' in 'sit'", "Like 'th' in 'think' (in Spain)", "Both B and C"],
        answer: 3,
        explanation: "In Spain, Z is pronounced like 'th' in 'think', while in Latin America it's like 's' in 'sit'."
    },
    {
        question: "How is 'CH' pronounced in Spanish?",
        options: ["Like 'ch' in 'chat'", "Like 'k' in 'kit'", "Like 'sh' in 'ship'", "Like 'tch' in 'catch'"],
        answer: 0,
        explanation: "CH is pronounced like 'ch' in 'chat' in Spanish."
    },
    {
        question: "What happens when the last letter of a word is a consonant except N/S?",
        options: ["Stress on penultimate syllable", "Stress on last syllable", "Stress on first syllable", "No stress"],
        answer: 1,
        explanation: "When the last letter is a consonant except N/S, the stress is given on the last syllable itself."
    },
    {
        question: "What is the pronunciation of 'QU' in Spanish?",
        options: ["Like 'kw' in 'queen'", "Like 'k' in 'kit'", "Like 'qu' in 'quick'", "Silent"],
        answer: 1,
        explanation: "QU is pronounced like 'k' in 'kit' in Spanish."
    },
    {
        question: "How do you pronounce 'V' in Spanish?",
        options: ["Like 'v' in 'van'", "Like 'b' in 'bat'", "Like 'f' in 'fat'", "Silent"],
        answer: 1,
        explanation: "V is pronounced like 'b' in 'bat' in Spanish."
    },
    {
        question: "What is the pronunciation of 'X' in Spanish?",
        options: ["Like 'x' in 'box'", "Like 'ks' in 'oks'", "Like 's' in 'six'", "Like 'z' in 'zero'"],
        answer: 2,
        explanation: "X is pronounced like 's' in 'six' in Spanish (as in 'Xilófono')."
    },
    {
        question: "How is 'Y' pronounced at the end of a word in Spanish?",
        options: ["Like 'y' in 'yes'", "Like 'i' in 'bit'", "Like 'ee' in 'see'", "Silent"],
        answer: 1,
        explanation: "Y is pronounced like 'i' in 'bit' when it's at the end of a word."
    },
    {
        question: "What is the pronunciation of 'W' in Spanish?",
        options: ["Like 'w' in 'water'", "Like 'v' in 'van'", "Like 'doble uve'", "Like 'oo' in 'book'"],
        answer: 2,
        explanation: "W is pronounced as 'doble uve' in Spanish."
    },
    {
        question: "How is 'Ñ' pronounced in Spanish?",
        options: ["Like 'n' in 'net'", "Like 'ny' in 'canyon'", "Like 'ng' in 'sing'", "Like 'kn' in 'knight'"],
        answer: 1,
        explanation: "Ñ is pronounced like 'ny' in 'canyon' in Spanish."
    },
    {
        question: "What is the rule for accent marks in Spanish?",
        options: ["Always on the first syllable", "Always on the last syllable", "When normal stress rules don't apply", "Never used"],
        answer: 2,
        explanation: "Accent marks are used when the normal stress rules don't apply to indicate the correct syllable."
    },
    {
        question: "How is 'C' pronounced before 'A', 'O', or 'U'?",
        options: ["Like 's' in 'sit'", "Like 'k' in 'kit'", "Like 'ch' in 'chat'", "Like 'sh' in 'ship'"],
        answer: 1,
        explanation: "C is pronounced like 'k' in 'kit' before A, O, or U."
    },
    {
        question: "How is 'G' pronounced before 'A', 'O', or 'U'?",
        options: ["Like 'j' in 'jump'", "Like 'g' in 'go'", "Like 'h' in 'hat'", "Like 'gh' in 'ghost'"],
        answer: 1,
        explanation: "G is pronounced like 'g' in 'go' before A, O, or U."
    },
    {
        question: "What is a one-syllable word stress pattern in Spanish?",
        options: ["Stress on first syllable", "Stress on last syllable", "Stress on itself", "No stress"],
        answer: 2,
        explanation: "One-syllable words carry stress on themselves."
    },
    {
        question: "Which of these names would help practice Spanish pronunciation?",
        options: ["Antonio", "Michael", "David", "Robert"],
        answer: 0,
        explanation: "Antonio is a Hispanic name that helps practice Spanish pronunciation."
    },
    {
        question: "What does Spanish pronunciation avoid compared to English?",
        options: ["Vowel sounds", "Consonant clusters", "Confusions of pronunciation", "Stress patterns"],
        answer: 2,
        explanation: "Spanish avoids confusions of pronunciation that exist in English like 'Put' & 'But'."
    },
    {
        question: "How is 'B' pronounced in Spanish?",
        options: ["Like 'b' in 'bat'", "Like 'v' in 'van'", "Like 'p' in 'pat'", "Both A and B"],
        answer: 3,
        explanation: "B is pronounced like 'b' in 'bat' but softer between vowels, similar to 'v' in 'van'."
    },
    {
        question: "What is the pronunciation of 'D' in Spanish?",
        options: ["Like 'd' in 'dog'", "Like 'th' in 'this'", "Like 't' in 'top'", "Softer than English 'd'"],
        answer: 3,
        explanation: "D is pronounced softer than English 'd', especially between vowels."
    },
    {
        question: "How is 'F' pronounced in Spanish?",
        options: ["Like 'f' in 'fat'", "Like 'ph' in 'phone'", "Like 'v' in 'van'", "Silent"],
        answer: 0,
        explanation: "F is pronounced like 'f' in 'fat' in Spanish."
    },

    // Articles (Questions 31-50)
    {
        question: "What are the two types of articles in Spanish?",
        options: ["Definite and indefinite", "Masculine and feminine", "Singular and plural", "Personal and demonstrative"],
        answer: 0,
        explanation: "Spanish has two types of articles: definite and indefinite."
    },
    {
        question: "What is the definite article for singular masculine nouns?",
        options: ["La", "Un", "El", "Una"],
        answer: 2,
        explanation: "El is the definite article for singular masculine nouns."
    },
    {
        question: "What is the indefinite article for singular feminine nouns?",
        options: ["El", "Los", "Una", "Un"],
        answer: 2,
        explanation: "Una is the indefinite article for singular feminine nouns."
    },
    {
        question: "Which article is used with singular feminine nouns ending in a stressed 'a' sound?",
        options: ["La", "El", "Una", "Los"],
        answer: 1,
        explanation: "El is used with singular feminine nouns ending in a stressed 'a' sound to avoid cacophony."
    },
    {
        question: "What is the definite article for plural masculine nouns?",
        options: ["El", "La", "Los", "Las"],
        answer: 2,
        explanation: "Los is the definite article for plural masculine nouns."
    },
    {
        question: "Articles in Spanish must agree with nouns in what aspects?",
        options: ["Gender and number", "Case and tense", "Person and mood", "Voice and aspect"],
        answer: 0,
        explanation: "Articles in Spanish must agree with nouns in gender and number."
    },
    {
        question: "What is the indefinite article for plural masculine nouns?",
        options: ["Unos", "Un", "Una", "Unas"],
        answer: 0,
        explanation: "Unos is the indefinite article for plural masculine nouns."
    },
    {
        question: "Which of the following is an example of using 'El' with a feminine noun?",
        options: ["El casa", "El agua", "El perro", "El libro"],
        answer: 1,
        explanation: "El agua is an example where the masculine article is used with a feminine noun to avoid cacophony."
    },
    {
        question: "What is the definite article for singular feminine nouns?",
        options: ["El", "Los", "La", "Un"],
        answer: 2,
        explanation: "La is the definite article for singular feminine nouns."
    },
    {
        question: "When do we use 'Las' as a definite article?",
        options: ["Singular masculine nouns", "Plural masculine nouns", "Singular feminine nouns", "Plural feminine nouns"],
        answer: 3,
        explanation: "Las is used as the definite article for plural feminine nouns."
    },
    {
        question: "What is the indefinite article for singular masculine nouns?",
        options: ["La", "El", "Un", "Una"],
        answer: 2,
        explanation: "Un is the indefinite article for singular masculine nouns."
    },
    {
        question: "Which article would be used with 'libros' (books)?",
        options: ["El", "La", "Los", "Las"],
        answer: 2,
        explanation: "Los is used with plural masculine nouns like 'libros'."
    },
    {
        question: "What is the rule for feminine nouns ending in a stressed 'a' sound?",
        options: ["Use 'La'", "Use 'El'", "Use 'Una'", "Use 'Los'"],
        answer: 1,
        explanation: "Feminine nouns ending in a stressed 'a' sound use the masculine article 'El' to avoid cacophony."
    },
    {
        question: "Which of these is NOT an indefinite article?",
        options: ["Un", "Una", "El", "Unos"],
        answer: 2,
        explanation: "El is a definite article, not an indefinite article."
    },
    {
        question: "What is the plural form of 'Un'?",
        options: ["Una", "Unos", "Las", "Los"],
        answer: 1,
        explanation: "Unos is the plural form of 'Un'."
    },
    {
        question: "Which article is used with 'casa' (house)?",
        options: ["El", "La", "Los", "Las"],
        answer: 1,
        explanation: "La is used with 'casa' because it's a feminine noun."
    },
    {
        question: "What is the indefinite article for plural feminine nouns?",
        options: ["Un", "Una", "Unos", "Unas"],
        answer: 3,
        explanation: "Unas is the indefinite article for plural feminine nouns."
    },
    {
        question: "Which of the following sentences uses articles correctly?",
        options: ["El libros están en la mesa", "Los libros están en la mesa", "Las libros están en la mesa", "Un libros están en la mesa"],
        answer: 1,
        explanation: "Los libros está en la mesa uses the correct article 'Los' for plural masculine nouns."
    },
    {
        question: "What article would be used with 'amiga' (female friend)?",
        options: ["El", "La", "Los", "Las"],
        answer: 1,
        explanation: "La is used with 'amiga' because it's a singular feminine noun."
    },
    {
        question: "Which article would be used with 'niños' (children)?",
        options: ["El", "La", "Los", "Las"],
        answer: 2,
        explanation: "Los is used with 'niños' because it's a plural masculine noun."
    },

    // SER Verb (Questions 51-70)
    {
        question: "What are the two Spanish translations of the English verb 'to be'?",
        options: ["SER and IR", "SER and ESTAR", "SER and TENER", "SER and HACER"],
        answer: 1,
        explanation: "SER and ESTAR are the two Spanish translations of the English verb 'to be'."
    },
    {
        question: "What is the primary use of the verb SER?",
        options: ["Temporary conditions", "Permanent states", "Actions in progress", "Locations"],
        answer: 1,
        explanation: "SER is primarily used to describe permanent states, qualities, and characteristics."
    },
    {
        question: "What is the conjugation of SER for 'Yo'?",
        options: ["eres", "soy", "es", "somos"],
        answer: 1,
        explanation: "Yo soy is the conjugation of SER for the first person singular."
    },
    {
        question: "What is the conjugation of SER for 'Tú'?",
        options: ["soy", "es", "eres", "son"],
        answer: 2,
        explanation: "Tú eres is the conjugation of SER for the second person singular informal."
    },
    {
        question: "What is the conjugation of SER for 'Él/Ella/Usted'?",
        options: ["soy", "eres", "es", "somos"],
        answer: 2,
        explanation: "Él/Ella/Usted es is the conjugation of SER for the third person singular and formal 'you'."
    },
    {
        question: "What is the conjugation of SER for 'Nosotros/as'?",
        options: ["soy", "sois", "somos", "son"],
        answer: 2,
        explanation: "Nosotros/as somos is the conjugation of SER for the first person plural."
    },
    {
        question: "What is the conjugation of SER for 'Vosotros/as'?",
        options: ["soy", "sois", "somos", "son"],
        answer: 1,
        explanation: "Vosotros/as sois is the conjugation of SER for the second person plural informal."
    },
    {
        question: "What is the conjugation of SER for 'Ellos/Ellas/Ustedes'?",
        options: ["soy", "eres", "es", "son"],
        answer: 3,
        explanation: "Ellos/Ellas/Ustedes son is the conjugation of SER for the third person plural and formal plural 'you'."
    },
    {
        question: "Which of the following is NOT typically described using SER?",
        options: ["Occupations", "Nationalities", "Temporary emotions", "Characteristics"],
        answer: 2,
        explanation: "Temporary emotions are typically described using ESTAR, not SER."
    },
    {
        question: "What does the acronym DOCTOR represent in relation to SER?",
        options: ["Description, Occupation, Characteristic, Time, Origin, Relation", "Do, Observe, Characterize, Time, Origin, Relation", "Describe, Own, Character, Time, Origin, Relationship", "Direct, Occupational, Characteristic, Time, Origin, Relation"],
        answer: 0,
        explanation: "DOCTOR stands for Description, Occupation, Characteristic, Time, Origin, Relation - all uses of SER."
    },
    {
        question: "How would you say 'I am a teacher' in Spanish?",
        options: ["Yo estoy profesor", "Yo soy profesor", "Yo tengo profesor", "Yo hago profesor"],
        answer: 1,
        explanation: "Yo soy profesor uses SER to describe an occupation."
    },
    {
        question: "How would you say 'They are from Spain' in Spanish?",
        options: ["Ellos son de España", "Ellos están de España", "Ellos tienen de España", "Ellos hacen de España"],
        answer: 0,
        explanation: "Ellos son de España uses SER to describe origin."
    },
    {
        question: "How would you say 'It's 3 o'clock' in Spanish?",
        options: ["Es las tres", "Son las tres", "Es la tres", "Son la tres"],
        answer: 1,
        explanation: "Son las tres uses SER to tell time (plural form for times other than 1 o'clock)."
    },
    {
        question: "Which verb would you use to say 'She is my sister'?",
        options: ["ESTAR", "TENER", "SER", "IR"],
        answer: 2,
        explanation: "SER is used for family relationships: Ella es mi hermana."
    },
    {
        question: "What is the correct way to say 'We are Spanish'?",
        options: ["Nosotros somos españoles", "Nosotros estamos españoles", "Nosotros tenemos españoles", "Nosotros hacemos españoles"],
        answer: 0,
        explanation: "Nosotros somos españoles uses SER to describe nationality."
    },
    {
        question: "Which of these uses SER correctly?",
        options: ["Yo estoy ingeniero", "Yo soy ingeniero", "Yo tengo ingeniero", "Yo hago ingeniero"],
        answer: 1,
        explanation: "Yo soy ingeniero correctly uses SER to describe an occupation."
    },
    {
        question: "How would you say 'Today is Monday' in Spanish?",
        options: ["Hoy está lunes", "Hoy es lunes", "Hoy tiene lunes", "Hoy hace lunes"],
        answer: 1,
        explanation: "Hoy es lunes uses SER to describe time/day."
    },
    {
        question: "What is the correct conjugation for 'You (formal) are a doctor'?",
        options: ["Tú eres médico", "Usted es médico", "Él es médico", "Vosotros sois médico"],
        answer: 1,
        explanation: "Usted es médico uses the formal 'you' form with SER."
    },
    {
        question: "Which sentence correctly uses SER for religion?",
        options: ["Mi amigo está musulmán", "Mi amigo tiene musulmán", "Mi amigo es musulmán", "Mi amigo hace musulmán"],
        answer: 2,
        explanation: "Mi amigo es musulmán uses SER to describe religion."
    },
    {
        question: "How would you say 'The book is interesting' in Spanish?",
        options: ["El libro está interesante", "El libro tiene interesante", "El libro es interesante", "El libro hace interesante"],
        answer: 2,
        explanation: "El libro es interesante uses SER to describe a characteristic."
    },

    // Numbers (Questions 71-90)
    {
        question: "How do you say 'twenty-one' in Spanish?",
        options: ["Veintiuno", "Veinte y uno", "Both A and B", "Veintiún"],
        answer: 2,
        explanation: "Both 'Veintiuno' and 'Veinte y uno' are correct ways to say 'twenty-one' in Spanish."
    },
    {
        question: "What is the Spanish word for 'hundred'?",
        options: ["Cien", "Ciento", "Cientos", "Cieno"],
        answer: 0,
        explanation: "Cien is the Spanish word for 'hundred'."
    },
    {
        question: "How do you say 'thirty' in Spanish?",
        options: ["Treinta", "Trece", "Treinta y uno", "Treinti"],
        answer: 0,
        explanation: "Treinta is the Spanish word for 'thirty'."
    },
    {
        question: "What comes after 'diecinueve' (nineteen) in Spanish?",
        options: ["Veinte", "Diecinueve y uno", "Vente", "Diez y nueve"],
        answer: 0,
        explanation: "Veinte comes after 'diecinueve' (nineteen) in Spanish."
    },
    {
        question: "How do you say 'forty' in Spanish?",
        options: ["Cuarenta", "Catorce", "Cuatro", "Cuaresma"],
        answer: 0,
        explanation: "Cuarenta is the Spanish word for 'forty'."
    },
    {
        question: "What is the Spanish word for 'fifty'?",
        options: ["Cincuenta", "Cinco", "Cincuenti", "Cincuenta y uno"],
        answer: 0,
        explanation: "Cincuenta is the Spanish word for 'fifty'."
    },
    {
        question: "How do you say 'sixty' in Spanish?",
        options: ["Seis", "Sesenta", "Setenta", "Sesentas"],
        answer: 1,
        explanation: "Sesenta is the Spanish word for 'sixty'."
    },
    {
        question: "What is the Spanish word for 'seventy'?",
        options: ["Setenta", "Sesenta", "Setentas", "Setentos"],
        answer: 0,
        explanation: "Setenta is the Spanish word for 'seventy'."
    },
    {
        question: "How do you say 'eighty' in Spanish?",
        options: ["Ocho", "Ochenta", "Ochentas", "Ochentos"],
        answer: 1,
        explanation: "Ochenta is the Spanish word for 'eighty'."
    },
    {
        question: "What is the Spanish word for 'ninety'?",
        options: ["Nueve", "Noventa", "Noventas", "Noventi"],
        answer: 1,
        explanation: "Noventa is the Spanish word for 'ninety'."
    },
    {
        question: "How do you say 'one hundred' in Spanish?",
        options: ["Cien", "Ciento", "Cientos", "Cieno"],
        answer: 0,
        explanation: "Cien is the Spanish word for 'one hundred'."
    },
    {
        question: "What is the Spanish word for 'two hundred'?",
        options: ["Doscientos", "Doscientas", "Doscientos", "Both A and B"],
        answer: 3,
        explanation: "Both 'Doscientos' (masculine) and 'Doscientas' (feminine) are correct depending on the noun they modify."
    },
    {
        question: "How do you say 'five hundred' in Spanish?",
        options: ["Quinientos", "Quinientas", "Quinientas", "Both A and B"],
        answer: 3,
        explanation: "Both 'Quinientos' (masculine) and 'Quinientas' (feminine) are correct depending on the noun they modify."
    },
    {
        question: "What is the Spanish word for 'thousand'?",
        options: ["Mil", "Un mil", "Cien", "Milésimo"],
        answer: 0,
        explanation: "Mil is the Spanish word for 'thousand'."
    },
    {
        question: "How do you say 'eleven' in Spanish?",
        options: ["Once", "Diez y uno", "Onceno", "Onceavo"],
        answer: 0,
        explanation: "Once is the Spanish word for 'eleven'."
    },
    {
        question: "What is the Spanish word for 'twelve'?",
        options: ["Doce", "Diez y dos", "Docena", "Doceavo"],
        answer: 0,
        explanation: "Doce is the Spanish word for 'twelve'."
    },
    {
        question: "How do you say 'fourteen' in Spanish?",
        options: ["Catorce", "Cuatro y diez", "Catorceno", "Catorceavo"],
        answer: 0,
        explanation: "Catorce is the Spanish word for 'fourteen'."
    },
    {
        question: "What is the Spanish word for 'fifteen'?",
        options: ["Quince", "Cinco y diez", "Quinceno", "Quinceavo"],
        answer: 0,
        explanation: "Quince is the Spanish word for 'fifteen'."
    },
    {
        question: "How do you say 'sixteen' in Spanish?",
        options: ["Dieciséis", "Seis y diez", "Dieciseis", "Dieciséis"],
        answer: 3,
        explanation: "Dieciséis is the Spanish word for 'sixteen'."
    },
    {
        question: "What is the Spanish word for 'seventeen'?",
        options: ["Diecisiete", "Siete y diez", "Diecisieto", "Diecisiete"],
        answer: 0,
        explanation: "Diecisiete is the Spanish word for 'seventeen'."
    },

    // TENER Verb (Questions 91-110)
    {
        question: "What is the primary meaning of the verb TENER in Spanish?",
        options: ["To be", "To have", "To go", "To do"],
        answer: 1,
        explanation: "TENER primarily means 'to have' in Spanish."
    },
    {
        question: "What is the conjugation of TENER for 'Yo'?",
        options: ["tienes", "tiene", "tengo", "tenemos"],
        answer: 2,
        explanation: "Yo tengo is the conjugation of TENER for the first person singular."
    },
    {
        question: "What is the conjugation of TENER for 'Tú'?",
        options: ["tengo", "tiene", "tienes", "tenéis"],
        answer: 2,
        explanation: "Tú tienes is the conjugation of TENER for the second person singular informal."
    },
    {
        question: "What is the conjugation of TENER for 'Él/Ella/Usted'?",
        options: ["tengo", "tienes", "tiene", "tenemos"],
        answer: 2,
        explanation: "Él/Ella/Usted tiene is the conjugation of TENER for the third person singular and formal 'you'."
    },
    {
        question: "What is the conjugation of TENER for 'Nosotros/as'?",
        options: ["tengo", "tienes", "tiene", "tenemos"],
        answer: 3,
        explanation: "Nosotros/as tenemos is the conjugation of TENER for the first person plural."
    },
    {
        question: "What is the conjugation of TENER for 'Vosotros/as'?",
        options: ["tengo", "tenéis", "tiene", "tenemos"],
        answer: 1,
        explanation: "Vosotros/as tenéis is the conjugation of TENER for the second person plural informal."
    },
    {
        question: "What is the conjugation of TENER for 'Ellos/Ellas/Ustedes'?",
        options: ["tengo", "tienes", "tiene", "tienen"],
        answer: 3,
        explanation: "Ellos/Ellas/Ustedes tienen is the conjugation of TENER for the third person plural and formal plural 'you'."
    },
    {
        question: "Which expression means 'to be hungry' in Spanish?",
        options: ["Tener sed", "Tener hambre", "Tener frío", "Tener calor"],
        answer: 1,
        explanation: "Tener hambre means 'to be hungry' in Spanish."
    },
    {
        question: "Which expression means 'to be thirsty' in Spanish?",
        options: ["Tener sed", "Tener hambre", "Tener frío", "Tener calor"],
        answer: 0,
        explanation: "Tener sed means 'to be thirsty' in Spanish."
    },
    {
        question: "Which expression means 'to be cold' in Spanish?",
        options: ["Tener sed", "Tener hambre", "Tener frío", "Tener calor"],
        answer: 2,
        explanation: "Tener frío means 'to be cold' in Spanish."
    },
    {
        question: "Which expression means 'to be hot' in Spanish?",
        options: ["Tener sed", "Tener hambre", "Tener frío", "Tener calor"],
        answer: 3,
        explanation: "Tener calor means 'to be hot' in Spanish."
    },
    {
        question: "Which expression means 'to be scared' in Spanish?",
        options: ["Tener miedo", "Tener razón", "Tener sueño", "Tener prisa"],
        answer: 0,
        explanation: "Tener miedo means 'to be scared' in Spanish."
    },
    {
        question: "Which expression means 'to be right' in Spanish?",
        options: ["Tener miedo", "Tener razón", "Tener sueño", "Tener prisa"],
        answer: 1,
        explanation: "Tener razón means 'to be right' in Spanish."
    },
    {
        question: "Which expression means 'to be sleepy' in Spanish?",
        options: ["Tener miedo", "Tener razón", "Tener sueño", "Tener prisa"],
        answer: 2,
        explanation: "Tener sueño means 'to be sleepy' in Spanish."
    },
    {
        question: "Which expression means 'to be in a hurry' in Spanish?",
        options: ["Tener miedo", "Tener razón", "Tener sueño", "Tener prisa"],
        answer: 3,
        explanation: "Tener prisa means 'to be in a hurry' in Spanish."
    },
    {
        question: "How would you say 'I am 25 years old' in Spanish?",
        options: ["Tengo veinticinco años", "Soy veinticinco años", "Tengo veinticinco", "Soy veinticinco"],
        answer: 0,
        explanation: "Tengo veinticinco años correctly uses TENER to express age."
    },
    {
        question: "How would you say 'We have a car' in Spanish?",
        options: ["Nosotros tenemos un coche", "Nosotros somos un coche", "Nosotros tenemos coche", "Both A and C"],
        answer: 3,
        explanation: "Both 'Nosotros tenemos un coche' and 'Nosotros tenemos coche' are correct."
    },
    {
        question: "Which sentence correctly uses TENER for possession?",
        options: ["Yo soy un libro", "Yo tengo un libro", "Yo estoy un libro", "Yo hago un libro"],
        answer: 1,
        explanation: "Yo tengo un libro correctly uses TENER to express possession."
    },
    {
        question: "How would you say 'She has blue eyes' in Spanish?",
        options: ["Ella es ojos azules", "Ella tiene ojos azules", "Ella está ojos azules", "Ella hace ojos azules"],
        answer: 1,
        explanation: "Ella tiene ojos azules uses TENER to describe physical characteristics."
    },
    {
        question: "Which expression means 'to feel like' in Spanish?",
        options: ["Tener ganas de", "Tener que", "Tener que ver", "Tener lugar"],
        answer: 0,
        explanation: "Tener ganas de means 'to feel like' in Spanish."
    },

    // Adjectives (Questions 111-130)
    {
        question: "How do adjectives agree with nouns in Spanish?",
        options: ["Only in gender", "Only in number", "In gender and number", "No agreement needed"],
        answer: 2,
        explanation: "Adjectives in Spanish must agree with nouns in both gender and number."
    },
    {
        question: "Where are adjectives typically placed in Spanish?",
        options: ["Before the noun", "After the noun", "At the beginning of the sentence", "At the end of the sentence"],
        answer: 1,
        explanation: "In Spanish, adjectives are typically placed after the noun they modify."
    },
    {
        question: "What is the feminine form of 'alto' (tall)?",
        options: ["alta", "alto", "altos", "altas"],
        answer: 0,
        explanation: "The feminine form of 'alto' is 'alta'."
    },
    {
        question: "What is the plural form of 'bueno' (good)?",
        options: ["bueno", "buena", "buenos", "buenas"],
        answer: 2,
        explanation: "The masculine plural form of 'bueno' is 'buenos'."
    },
    {
        question: "What is the feminine plural form of 'grande' (big)?",
        options: ["grande", "grandes", "granda", "grandas"],
        answer: 1,
        explanation: "The feminine plural form of 'grande' is 'grandes'."
    },
    {
        question: "Which adjective means 'pretty' in Spanish?",
        options: ["feo", "bonito", "rico", "pobre"],
        answer: 1,
        explanation: "Bonito means 'pretty' in Spanish."
    },
    {
        question: "Which adjective means 'ugly' in Spanish?",
        options: ["bonito", "feo", "rico", "pobre"],
        answer: 1,
        explanation: "Feo means 'ugly' in Spanish."
    },
    {
        question: "Which adjective means 'rich' in Spanish?",
        options: ["pobre", "feo", "rico", "bonito"],
        answer: 2,
        explanation: "Rico means 'rich' in Spanish."
    },
    {
        question: "Which adjective means 'poor' in Spanish?",
        options: ["rico", "feo", "bonito", "pobre"],
        answer: 3,
        explanation: "Pobre means 'poor' in Spanish."
    },
    {
        question: "What is the masculine form of 'pequeña' (small)?",
        options: ["pequeño", "pequeña", "pequeños", "pequeñas"],
        answer: 0,
        explanation: "The masculine form of 'pequeña' is 'pequeño'."
    },
    {
        question: "What is the plural form of 'inteligente' (intelligent)?",
        options: ["inteligente", "inteligentes", "inteligenta", "inteligentas"],
        answer: 1,
        explanation: "The plural form of 'inteligente' is 'inteligentes'."
    },
    {
        question: "Which adjective means 'difficult' in Spanish?",
        options: ["fácil", "difícil", "fácil", "difíciles"],
        answer: 1,
        explanation: "Difícil means 'difficult' in Spanish."
    },
    {
        question: "Which adjective means 'easy' in Spanish?",
        options: ["difícil", "fácil", "fáciles", "difíciles"],
        answer: 1,
        explanation: "Fácil means 'easy' in Spanish."
    },
    {
        question: "What is the feminine form of 'interesante' (interesting)?",
        options: ["interesante", "interesantes", "interesanta", "No change needed"],
        answer: 3,
        explanation: "Adjectives ending in -e do not change form for gender."
    },
    {
        question: "Which adjective means 'new' in Spanish?",
        options: ["viejo", "nuevo", "antiguo", "moderno"],
        answer: 1,
        explanation: "Nuevo means 'new' in Spanish."
    },
    {
        question: "Which adjective means 'old' in Spanish?",
        options: ["nuevo", "viejo", "antiguo", "moderno"],
        answer: 1,
        explanation: "Viejo means 'old' in Spanish."
    },
    {
        question: "What is the masculine plural form of 'feliz' (happy)?",
        options: ["feliz", "felices", "feliza", "felizas"],
        answer: 1,
        explanation: "The masculine plural form of 'feliz' is 'felices'."
    },
    {
        question: "Which adjective means 'sad' in Spanish?",
        options: ["feliz", "triste", "alegre", "contento"],
        answer: 1,
        explanation: "Triste means 'sad' in Spanish."
    },
    {
        question: "What is the feminine form of 'simpático' (friendly)?",
        options: ["simpático", "simpática", "simpáticos", "simpáticas"],
        answer: 1,
        explanation: "The feminine form of 'simpático' is 'simpática'."
    },
    {
        question: "Which adjective means 'cold' in Spanish?",
        options: ["caliente", "frío", "calor", "fría"],
        answer: 1,
        explanation: "Frío means 'cold' in Spanish."
    },

    // Demonstratives (Questions 131-150)
    {
        question: "What does 'este' mean in English?",
        options: ["that", "this", "those", "these"],
        answer: 1,
        explanation: "Este means 'this' in English (masculine singular)."
    },
    {
        question: "What does 'esa' mean in English?",
        options: ["this", "that", "these", "those"],
        answer: 1,
        explanation: "Esa means 'that' in English (feminine singular)."
    },
    {
        question: "What does 'aquellos' mean in English?",
        options: ["this", "that", "these", "those"],
        answer: 3,
        explanation: "Aquellos means 'those' in English (masculine plural)."
    },
    {
        question: "What is the feminine singular form of 'that' in Spanish?",
        options: ["este", "esa", "aquel", "esos"],
        answer: 1,
        explanation: "Esa is the feminine singular form of 'that' in Spanish."
    },
    {
        question: "What is the masculine plural form of 'these' in Spanish?",
        options: ["estas", "esas", "estos", "aquellos"],
        answer: 2,
        explanation: "Estos is the masculine plural form of 'these' in Spanish."
    },
    {
        question: "Which demonstrative means 'that one over there'?",
        options: ["este", "ese", "aquel", "esta"],
        answer: 2,
        explanation: "Aquel means 'that one over there' in Spanish."
    },
    {
        question: "What is the neutral form of 'this' in Spanish?",
        options: ["esto", "este", "esta", "estos"],
        answer: 0,
        explanation: "Esto is the neutral form of 'this' in Spanish."
    },
    {
        question: "Which demonstrative adverb means 'here'?",
        options: ["ahí", "allí", "aquí", "acá"],
        answer: 2,
        explanation: "Aquí means 'here' in Spanish."
    },
    {
        question: "Which demonstrative adverb means 'there' (near the listener)?",
        options: ["aquí", "ahí", "allí", "acá"],
        answer: 1,
        explanation: "Ahí means 'there' (near the listener) in Spanish."
    },
    {
        question: "Which demonstrative adverb means 'there' (far from both speaker and listener)?",
        options: ["aquí", "ahí", "allí", "acá"],
        answer: 2,
        explanation: "Allí means 'there' (far from both speaker and listener) in Spanish."
    },
    {
        question: "How would you say 'This book is interesting' in Spanish?",
        options: ["Este libro es interesante", "Ese libro es interesante", "Aquel libro es interesante", "Esto libro es interesante"],
        answer: 0,
        explanation: "Este libro es interesante uses the correct demonstrative 'este'."
    },
    {
        question: "How would you say 'Those cars are expensive' in Spanish?",
        options: ["Esas coches son caros", "Esos coches son caros", "Aquellos coches son caros", "Both B and C"],
        answer: 3,
        explanation: "Both 'Esos coches son caros' and 'Aquellos coches son caros' are correct depending on distance."
    },
    {
        question: "What is the feminine plural form of 'that'?",
        options: ["estas", "esas", "aquellas", "Both B and C"],
        answer: 3,
        explanation: "Both 'esas' and 'aquellas' are feminine plural forms of 'that' depending on distance."
    },
    {
        question: "Which sentence uses the correct demonstrative?",
        options: ["Esta mesa es cómoda", "Esto mesa es cómoda", "Estas mesa es cómoda", "Esta mesas es cómoda"],
        answer: 0,
        explanation: "Esta mesa es cómoda uses the correct demonstrative agreement."
    },
    {
        question: "What does 'aquello' mean in English?",
        options: ["this", "that", "these", "that thing over there"],
        answer: 3,
        explanation: "Aquello means 'that thing over there' in English (neutral form)."
    },
    {
        question: "How would you say 'Those flowers are beautiful' in Spanish?",
        options: ["Estas flores son bonitas", "Esas flores son bonitas", "Aquellas flores son bonitas", "Both B and C"],
        answer: 3,
        explanation: "Both 'Esas flores son bonitas' and 'Aquellas flores son bonitas' are correct."
    },
    {
        question: "What is the difference between 'ese' and 'aquel'?",
        options: ["No difference", "Distance from speaker", "Gender", "Number"],
        answer: 1,
        explanation: "The difference is distance - 'ese' is closer to the speaker than 'aquel'."
    },
    {
        question: "Which demonstrative means 'these ones'?",
        options: ["estos", "esos", "aquellos", "estas"],
        answer: 0,
        explanation: "Estos means 'these ones' (masculine plural)."
    },
    {
        question: "What is the feminine form of 'those ones'?",
        options: ["estas", "esas", "aquellas", "Both B and C"],
        answer: 3,
        explanation: "Both 'esas' and 'aquellas' can mean 'those ones' (feminine)."
    },
    {
        question: "How would you say 'What is that?' in Spanish?",
        options: ["¿Qué es esto?", "¿Qué es eso?", "¿Qué es aquello?", "All of the above"],
        answer: 3,
        explanation: "All are correct depending on the distance of the object being referred to."
    },

    // Possessive Adjectives (Questions 151-170)
    {
        question: "What are the two types of possessive adjectives in Spanish?",
        options: ["Short form and long form", "Masculine and feminine", "Singular and plural", "Definite and indefinite"],
        answer: 0,
        explanation: "Spanish possessive adjectives have short form and long form."
    },
    {
        question: "Which is the short form possessive adjective for 'my'?",
        options: ["mío", "mi", "mis", "mía"],
        answer: 1,
        explanation: "Mi is the short form possessive adjective for 'my'."
    },
    {
        question: "Which is the short form possessive adjective for 'your' (informal singular)?",
        options: ["tu", "tus", "tuyo", "tuya"],
        answer: 0,
        explanation: "Tu is the short form possessive adjective for 'your' (informal singular)."
    },
    {
        question: "Which is the short form possessive adjective for 'his/her/your formal'?",
        options: ["su", "sus", "suyo", "suya"],
        answer: 0,
        explanation: "Su is the short form possessive adjective for 'his/her/your formal'."
    },
    {
        question: "Which is the short form possessive adjective for 'our'?",
        options: ["nuestro", "nuestra", "nuestros", "All of the above"],
        answer: 3,
        explanation: "Nuestro/a/s are the short form possessive adjectives for 'our' (gender and number variants)."
    },
    {
        question: "Which is the short form possessive adjective for 'your' (informal plural)?",
        options: ["vuestro", "vuestra", "vuestros", "All of the above"],
        answer: 3,
        explanation: "Vuestro/a/s are the short form possessive adjectives for 'your' (informal plural)."
    },
    {
        question: "Where are short form possessive adjectives placed?",
        options: ["Before the noun", "After the noun", "At the beginning of the sentence", "At the end of the sentence"],
        answer: 0,
        explanation: "Short form possessive adjectives are placed before the noun."
    },
    {
        question: "Where are long form possessive adjectives placed?",
        options: ["Before the noun", "After the noun", "At the beginning of the sentence", "At the end of the sentence"],
        answer: 1,
        explanation: "Long form possessive adjectives are placed after the noun."
    },
    {
        question: "What is the long form possessive adjective for 'mine' (masculine singular)?",
        options: ["mi", "mis", "mío", "mía"],
        answer: 2,
        explanation: "Mío is the long form possessive adjective for 'mine' (masculine singular)."
    },
    {
        question: "What is the long form possessive adjective for 'yours' (feminine plural)?",
        options: ["tuyos", "tuyas", "tuyo", "tuya"],
        answer: 1,
        explanation: "Tuyas is the long form possessive adjective for 'yours' (feminine plural)."
    },
    {
        question: "How would you say 'my house' using short form possessive adjective?",
        options: ["casa mía", "mi casa", "la casa mía", "la mi casa"],
        answer: 1,
        explanation: "Mi casa uses the short form possessive adjective before the noun."
    },
    {
        question: "How would you say 'the house is mine' using long form possessive adjective?",
        options: ["la casa es mi", "la casa es mis", "la casa es mía", "la casa es mío"],
        answer: 2,
        explanation: "La casa es mía uses the long form possessive adjective after the noun."
    },
    {
        question: "Which sentence correctly uses possessive adjectives?",
        options: ["Esta es mi libro", "Este es mi libro", "Esta es mis libro", "Este es mis libro"],
        answer: 1,
        explanation: "Este es mi libro correctly uses the possessive adjective 'mi'."
    },
    {
        question: "What is the difference between 'su' and 'suyo'?",
        options: ["No difference", "Position in sentence", "Formality level", "Gender"],
        answer: 1,
        explanation: "The difference is position - 'su' comes before the noun, 'suyo' comes after."
    },
    {
        question: "How would you say 'your car' (informal singular) using short form?",
        options: ["tu coche", "tus coche", "coche tu", "coche tus"],
        answer: 0,
        explanation: "Tu coche uses the short form possessive adjective before the noun."
    },
    {
        question: "How would you say 'the car is yours' (informal singular) using long form?",
        options: ["el coche es tu", "el coche es tus", "el coche es tuyo", "el coche es tuyos"],
        answer: 2,
        explanation: "El coche es tuyo uses the long form possessive adjective after the noun."
    },
    {
        question: "Which possessive adjective means 'their' (short form)?",
        options: ["su", "sus", "suyo", "suya"],
        answer: 0,
        explanation: "Su is the short form possessive adjective for 'their'."
    },
    {
        question: "What is the long form possessive adjective for 'ours' (masculine plural)?",
        options: ["nuestro", "nuestra", "nuestros", "nuestro"],
        answer: 2,
        explanation: "Nuestros is the long form possessive adjective for 'ours' (masculine plural)."
    },
    {
        question: "How would you say 'your books' (informal plural) using short form?",
        options: ["vuestro libros", "vuestra libros", "vuestros libros", "vuestras libros"],
        answer: 2,
        explanation: "Vuestros libros uses the correct gender agreement for masculine plural noun."
    },
    {
        question: "Which sentence correctly uses long form possessive adjectives?",
        options: ["Este libro es mío", "Este libro es mi", "Este libro es mis", "Este libro es míos"],
        answer: 0,
        explanation: "Este libro es mío correctly uses the long form possessive adjective."
    },

    // Colors (Questions 171-190)
    {
        question: "What is the Spanish word for 'red'?",
        options: ["azul", "rojo", "verde", "amarillo"],
        answer: 1,
        explanation: "Rojo is the Spanish word for 'red'."
    },
    {
        question: "What is the Spanish word for 'blue'?",
        options: ["rojo", "verde", "azul", "amarillo"],
        answer: 2,
        explanation: "Azul is the Spanish word for 'blue'."
    },
    {
        question: "What is the Spanish word for 'green'?",
        options: ["rojo", "azul", "verde", "amarillo"],
        answer: 2,
        explanation: "Verde is the Spanish word for 'green'."
    },
    {
        question: "What is the Spanish word for 'yellow'?",
        options: ["rojo", "azul", "verde", "amarillo"],
        answer: 3,
        explanation: "Amarillo is the Spanish word for 'yellow'."
    },
    {
        question: "What is the Spanish word for 'black'?",
        options: ["blanco", "negro", "gris", "marrón"],
        answer: 1,
        explanation: "Negro is the Spanish word for 'black'."
    },
    {
        question: "What is the Spanish word for 'white'?",
        options: ["negro", "blanco", "gris", "marrón"],
        answer: 1,
        explanation: "Blanco is the Spanish word for 'white'."
    },
    {
        question: "What is the Spanish word for 'brown'?",
        options: ["negro", "blanco", "marrón", "gris"],
        answer: 2,
        explanation: "Marrón is the Spanish word for 'brown'."
    },
    {
        question: "What is the Spanish word for 'pink'?",
        options: ["rosa", "rojo", "morado", "naranja"],
        answer: 0,
        explanation: "Rosa is the Spanish word for 'pink'."
    },
    {
        question: "What is the Spanish word for 'purple'?",
        options: ["rosa", "rojo", "morado", "naranja"],
        answer: 2,
        explanation: "Morado is the Spanish word for 'purple'."
    },
    {
        question: "What is the Spanish word for 'orange' (color)?",
        options: ["rosa", "rojo", "morado", "naranja"],
        answer: 3,
        explanation: "Naranja is the Spanish word for 'orange' (color)."
    },
    {
        question: "What is the Spanish word for 'gray'?",
        options: ["negro", "blanco", "gris", "marrón"],
        answer: 2,
        explanation: "Gris is the Spanish word for 'gray'."
    },
    {
        question: "What is the Spanish word for 'gold' (color)?",
        options: ["plateado", "dorado", "amarillo", "naranja"],
        answer: 1,
        explanation: "Dorado is the Spanish word for 'gold' (color)."
    },
    {
        question: "What is the Spanish word for 'silver' (color)?",
        options: ["plateado", "dorado", "gris", "blanco"],
        answer: 0,
        explanation: "Plateado is the Spanish word for 'silver' (color)."
    },
    {
        question: "How would you say 'red car' in Spanish?",
        options: ["coche rojo", "coche roja", "coche rojos", "coche rojas"],
        answer: 0,
        explanation: "Coche rojo uses the correct masculine form of 'red'."
    },
    {
        question: "How would you say 'blue house' in Spanish?",
        options: ["casa azul", "casa azula", "casa azules", "casa azulan"],
        answer: 0,
        explanation: "Casa azul uses the correct feminine form of 'blue'."
    },
    {
        question: "How would you say 'green books' in Spanish?",
        options: ["libros verde", "libros verdes", "libro verdes", "libro verde"],
        answer: 1,
        explanation: "Libros verdes uses the correct plural form of 'green'."
    },
    {
        question: "What is the feminine form of 'dark' in Spanish?",
        options: ["oscuro", "oscura", "oscuros", "oscuras"],
        answer: 1,
        explanation: "Oscura is the feminine form of 'dark' in Spanish."
    },
    {
        question: "What is the plural form of 'bright' in Spanish?",
        options: ["brillante", "brillantes", "brillanta", "brillantas"],
        answer: 1,
        explanation: "Brillantes is the plural form of 'bright' in Spanish."
    },
    {
        question: "How would you say 'yellow flowers' in Spanish?",
        options: ["flores amarillas", "flores amarillo", "flores amarilla", "flores amarillos"],
        answer: 0,
        explanation: "Flores amarillas uses the correct feminine plural form of 'yellow'."
    },
    {
        question: "Which sentence correctly describes color agreement?",
        options: ["La casa es rojo", "La casa es roja", "El casa es roja", "El casa es rojo"],
        answer: 1,
        explanation: "La casa es roja correctly matches the feminine noun with the feminine adjective."
    },

    // Family Terms (Questions 191-210)
    {
        question: "What is the Spanish word for 'mother'?",
        options: ["padre", "madre", "hermano", "hermana"],
        answer: 1,
        explanation: "Madre is the Spanish word for 'mother'."
    },
    {
        question: "What is the Spanish word for 'father'?",
        options: ["madre", "padre", "hermano", "hermana"],
        answer: 1,
        explanation: "Padre is the Spanish word for 'father'."
    },
    {
        question: "What is the Spanish word for 'brother'?",
        options: ["hermana", "hermano", "primo", "prima"],
        answer: 1,
        explanation: "Hermano is the Spanish word for 'brother'."
    },
    {
        question: "What is the Spanish word for 'sister'?",
        options: ["hermano", "hermana", "primo", "prima"],
        answer: 1,
        explanation: "Hermana is the Spanish word for 'sister'."
    },
    {
        question: "What is the Spanish word for 'grandmother'?",
        options: ["abuelo", "abuela", "bisabuelo", "bisabuela"],
        answer: 1,
        explanation: "Abuela is the Spanish word for 'grandmother'."
    },
    {
        question: "What is the Spanish word for 'grandfather'?",
        options: ["abuela", "abuelo", "bisabuela", "bisabuelo"],
        answer: 1,
        explanation: "Abuelo is the Spanish word for 'grandfather'."
    },
    {
        question: "What is the Spanish word for 'aunt'?",
        options: ["tío", "tía", "primo", "prima"],
        answer: 1,
        explanation: "Tía is the Spanish word for 'aunt'."
    },
    {
        question: "What is the Spanish word for 'uncle'?",
        options: ["tía", "tío", "primo", "prima"],
        answer: 1,
        explanation: "Tío is the Spanish word for 'uncle'."
    },
    {
        question: "What is the Spanish word for 'cousin' (male)?",
        options: ["prima", "primo", "sobrino", "sobrina"],
        answer: 1,
        explanation: "Primo is the Spanish word for 'cousin' (male)."
    },
    {
        question: "What is the Spanish word for 'cousin' (female)?",
        options: ["primo", "prima", "sobrino", "sobrina"],
        answer: 1,
        explanation: "Prima is the Spanish word for 'cousin' (female)."
    },
    {
        question: "What is the Spanish word for 'nephew'?",
        options: ["sobrina", "sobrino", "primo", "prima"],
        answer: 1,
        explanation: "Sobrino is the Spanish word for 'nephew'."
    },
    {
        question: "What is the Spanish word for 'niece'?",
        options: ["sobrino", "sobrina", "primo", "prima"],
        answer: 1,
        explanation: "Sobrina is the Spanish word for 'niece'."
    },
    {
        question: "What is the Spanish word for 'son'?",
        options: ["hija", "hijo", "esposo", "esposa"],
        answer: 1,
        explanation: "Hijo is the Spanish word for 'son'."
    },
    {
        question: "What is the Spanish word for 'daughter'?",
        options: ["hijo", "hija", "esposo", "esposa"],
        answer: 1,
        explanation: "Hija is the Spanish word for 'daughter'."
    },
    {
        question: "What is the Spanish word for 'husband'?",
        options: ["mujer", "hombre", "esposo", "esposa"],
        answer: 2,
        explanation: "Esposo is the Spanish word for 'husband'."
    },
    {
        question: "What is the Spanish word for 'wife'?",
        options: ["hombre", "mujer", "esposo", "esposa"],
        answer: 3,
        explanation: "Esposa is the Spanish word for 'wife'."
    },
    {
        question: "What is the Spanish word for 'married' (masculine)?",
        options: ["casada", "casado", "soltero", "soltera"],
        answer: 1,
        explanation: "Casado is the Spanish word for 'married' (masculine)."
    },
    {
        question: "What is the Spanish word for 'married' (feminine)?",
        options: ["casado", "casada", "soltero", "soltera"],
        answer: 1,
        explanation: "Casada is the Spanish word for 'married' (feminine)."
    },
    {
        question: "What is the Spanish word for 'single' (masculine)?",
        options: ["casada", "casado", "soltero", "soltera"],
        answer: 2,
        explanation: "Soltero is the Spanish word for 'single' (masculine)."
    },
    {
        question: "What is the Spanish word for 'single' (feminine)?",
        options: ["casado", "casada", "soltero", "soltera"],
        answer: 3,
        explanation: "Soltera is the Spanish word for 'single' (feminine)."
    },

    // Days and Time (Questions 211-230)
    {
        question: "What is the Spanish word for 'Monday'?",
        options: ["Martes", "Lunes", "Miércoles", "Jueves"],
        answer: 1,
        explanation: "Lunes is the Spanish word for 'Monday'."
    },
    {
        question: "What is the Spanish word for 'Tuesday'?",
        options: ["Lunes", "Martes", "Miércoles", "Jueves"],
        answer: 1,
        explanation: "Martes is the Spanish word for 'Tuesday'."
    },
    {
        question: "What is the Spanish word for 'Wednesday'?",
        options: ["Martes", "Lunes", "Miércoles", "Jueves"],
        answer: 2,
        explanation: "Miércoles is the Spanish word for 'Wednesday'."
    },
    {
        question: "What is the Spanish word for 'Thursday'?",
        options: ["Miércoles", "Lunes", "Martes", "Jueves"],
        answer: 3,
        explanation: "Jueves is the Spanish word for 'Thursday'."
    },
    {
        question: "What is the Spanish word for 'Friday'?",
        options: ["Sábado", "Domingo", "Viernes", "Jueves"],
        answer: 2,
        explanation: "Viernes is the Spanish word for 'Friday'."
    },
    {
        question: "What is the Spanish word for 'Saturday'?",
        options: ["Domingo", "Viernes", "Sábado", "Lunes"],
        answer: 2,
        explanation: "Sábado is the Spanish word for 'Saturday'."
    },
    {
        question: "What is the Spanish word for 'Sunday'?",
        options: ["Sábado", "Viernes", "Lunes", "Domingo"],
        answer: 3,
        explanation: "Domingo is the Spanish word for 'Sunday'."
    },
    {
        question: "How many days are there in a week in Spanish?",
        options: ["Siete", "Seis", "Cinco", "Ocho"],
        answer: 0,
        explanation: "Siete means 'seven' - there are seven days in a week."
    },
    {
        question: "How would you say 'Today is Monday' in Spanish?",
        options: ["Hoy es lunes", "Hoy está lunes", "Hoy tiene lunes", "Hoy hace lunes"],
        answer: 0,
        explanation: "Hoy es lunes correctly uses SER to indicate the day."
    },
    {
        question: "How would you say 'Tomorrow is Tuesday' in Spanish?",
        options: ["Mañana es martes", "Mañana está martes", "Mañana tiene martes", "Mañana hace martes"],
        answer: 0,
        explanation: "Mañana es martes correctly uses SER to indicate the day."
    },
    {
        question: "What is the Spanish word for 'yesterday'?",
        options: ["hoy", "mañana", "ayer", "anteayer"],
        answer: 2,
        explanation: "Ayer is the Spanish word for 'yesterday'."
    },
    {
        question: "What is the Spanish word for 'today'?",
        options: ["ayer", "mañana", "hoy", "anteayer"],
        answer: 2,
        explanation: "Hoy is the Spanish word for 'today'."
    },
    {
        question: "What is the Spanish word for 'tomorrow'?",
        options: ["ayer", "hoy", "anteayer", "mañana"],
        answer: 3,
        explanation: "Mañana is the Spanish word for 'tomorrow'."
    },
    {
        question: "How would you say 'Good morning' in Spanish?",
        options: ["Buenas tardes", "Buenas noches", "Buenos días", "Buen día"],
        answer: 2,
        explanation: "Buenos días is the Spanish phrase for 'Good morning'."
    },
    {
        question: "How would you say 'Good afternoon' in Spanish?",
        options: ["Buenos días", "Buenas noches", "Buenas tardes", "Buen tarde"],
        answer: 2,
        explanation: "Buenas tardes is the Spanish phrase for 'Good afternoon'."
    },
    {
        question: "How would you say 'Good evening' in Spanish?",
        options: ["Buenos días", "Buenas noches", "Buenas tardes", "Buen noche"],
        answer: 2,
        explanation: "Buenas tardes is also used for 'Good evening' in Spanish."
    },
    {
        question: "How would you say 'Good night' in Spanish?",
        options: ["Buenos días", "Buenas tardes", "Buenas noches", "Buen noche"],
        answer: 2,
        explanation: "Buenas noches is the Spanish phrase for 'Good night'."
    },
    {
        question: "What is the Spanish word for 'week'?",
        options: ["mes", "año", "semana", "día"],
        answer: 2,
        explanation: "Semana is the Spanish word for 'week'."
    },
    {
        question: "What is the Spanish word for 'month'?",
        options: ["semana", "año", "mes", "día"],
        answer: 2,
        explanation: "Mes is the Spanish word for 'month'."
    },
    {
        question: "What is the Spanish word for 'year'?",
        options: ["semana", "mes", "día", "año"],
        answer: 3,
        explanation: "Año is the Spanish word for 'year'."
    },

    // Greetings and Common Phrases (Questions 231-250)
    {
        question: "How do you say 'Hello' in Spanish?",
        options: ["Adiós", "Gracias", "Hola", "Por favor"],
        answer: 2,
        explanation: "Hola is the Spanish word for 'Hello'."
    },
    {
        question: "How do you say 'Thank you' in Spanish?",
        options: ["Hola", "Perdón", "Gracias", "Por favor"],
        answer: 2,
        explanation: "Gracias is the Spanish phrase for 'Thank you'."
    },
    {
        question: "How do you say 'Please' in Spanish?",
        options: ["Gracias", "Perdón", "Hola", "Por favor"],
        answer: 3,
        explanation: "Por favor is the Spanish phrase for 'Please'."
    },
    {
        question: "How do you say 'Excuse me' in Spanish?",
        options: ["Gracias", "Perdón", "Hola", "Por favor"],
        answer: 1,
        explanation: "Perdón is one way to say 'Excuse me' in Spanish."
    },
    {
        question: "How do you say 'Sorry' in Spanish?",
        options: ["Gracias", "Lo siento", "Hola", "Adiós"],
        answer: 1,
        explanation: "Lo siento is the Spanish phrase for 'Sorry'."
    },
    {
        question: "How do you say 'How are you?' in Spanish?",
        options: ["¿Cómo estás?", "¿Cómo estás tú?", "¿Cómo estás él/ella?", "¿Cómo estás usted?"],
        answer: 0,
        explanation: "¿Cómo estás? is the Spanish phrase for 'How are you?'"
    },
    {
        question: "How do you say 'Yes' in Spanish?",
        options: ["Sí", "No", "Tal vez", "Ni idea"],
        answer: 0,
        explanation: "Sí is the Spanish word for 'Yes'."
    },

    // Food and Dining (Questions 251-270)
    {
        question: "How do you say 'water' in Spanish?",
        options: ["agua", "leche", "jugo", "café"],
        answer: 0,
        explanation: "Agua is the Spanish word for 'water'."
    },
    {
        question: "How do you say 'bread' in Spanish?",
        options: ["pan", "arroz", "pasta", "carne"],
        answer: 0,
        explanation: "Pan is the Spanish word for 'bread'."
    },
    {
        question: "How do you say 'cheese' in Spanish?",
        options: ["queso", "mantequilla", "leche", "yogur"],
        answer: 0,
        explanation: "Queso is the Spanish word for 'cheese'."
    },
    {
        question: "How do you say 'coffee' in Spanish?",
        options: ["té", "café", "jugo", "agua"],
        answer: 1,
        explanation: "Café is the Spanish word for 'coffee'."
    },
    {
        question: "How do you say 'milk' in Spanish?",
        options: ["agua", "leche", "jugo", "refresco"],
        answer: 1,
        explanation: "Leche is the Spanish word for 'milk'."
    },
    {
        question: "How do you say 'meat' in Spanish?",
        options: ["pescado", "verduras", "carne", "frutas"],
        answer: 2,
        explanation: "Carne is the Spanish word for 'meat'."
    },
    {
        question: "How do you say 'fish' in Spanish?",
        options: ["pollo", "carne", "pescado", "cerdo"],
        answer: 2,
        explanation: "Pescado is the Spanish word for 'fish'."
    },
    {
        question: "How do you say 'rice' in Spanish?",
        options: ["pan", "pasta", "arroz", "frijoles"],
        answer: 2,
        explanation: "Arroz is the Spanish word for 'rice'."
    },
    {
        question: "How do you say 'fruit' in Spanish?",
        options: ["verduras", "pan", "frutas", "carne"],
        answer: 2,
        explanation: "Frutas is the Spanish word for 'fruit'."
    },
    {
        question: "How do you say 'vegetables' in Spanish?",
        options: ["frutas", "verduras", "pan", "carne"],
        answer: 1,
        explanation: "Verduras is the Spanish word for 'vegetables'."
    },
    {
        question: "How do you say 'apple' in Spanish?",
        options: ["plátano", "manzana", "naranja", "uva"],
        answer: 1,
        explanation: "Manzana is the Spanish word for 'apple'."
    },
    {
        question: "How do you say 'orange' (fruit) in Spanish?",
        options: ["limón", "manzana", "naranja", "uva"],
        answer: 2,
        explanation: "Naranja is the Spanish word for 'orange'."
    },
    {
        question: "How do you say 'banana' in Spanish?",
        options: ["manzana", "plátano", "uva", "fresa"],
        answer: 1,
        explanation: "Plátano is the Spanish word for 'banana'."
    },
    {
        question: "How do you say 'egg' in Spanish?",
        options: ["pan", "leche", "huevo", "queso"],
        answer: 2,
        explanation: "Huevo is the Spanish word for 'egg'."
    },
    {
        question: "How do you say 'salt' in Spanish?",
        options: ["pimienta", "azúcar", "sal", "aceite"],
        answer: 2,
        explanation: "Sal is the Spanish word for 'salt'."
    },
    {
        question: "How do you say 'sugar' in Spanish?",
        options: ["sal", "pimienta", "azúcar", "vinagre"],
        answer: 2,
        explanation: "Azúcar is the Spanish word for 'sugar'."
    },
    {
        question: "How do you say 'restaurant' in Spanish?",
        options: ["hotel", "restaurante", "tienda", "casa"],
        answer: 1,
        explanation: "Restaurante is the Spanish word for 'restaurant'."
    },
    {
        question: "How do you say 'menu' in Spanish?",
        options: ["carta", "menú", "plato", "bebida"],
        answer: 1,
        explanation: "Menú is the Spanish word for 'menu'."
    },
    {
        question: "How do you say 'bill/check' in Spanish?",
        options: ["dinero", "cuenta", "tarjeta", "efectivo"],
        answer: 1,
        explanation: "Cuenta is the Spanish word for 'bill/check'."
    },
    {
        question: "How do you say 'delicious' in Spanish?",
        options: ["sabroso", "rico", "feo", "bueno"],
        answer: 0,
        explanation: "Sabroso is the Spanish word for 'delicious'."
    },

    // Travel and Transportation (Questions 271-290)
    {
        question: "How do you say 'airport' in Spanish?",
        options: ["estación", "aeropuerto", "puerto", "terminal"],
        answer: 1,
        explanation: "Aeropuerto is the Spanish word for 'airport'."
    },
    {
        question: "How do you say 'train station' in Spanish?",
        options: ["aeropuerto", "estación de tren", "puerto", "terminal"],
        answer: 1,
        explanation: "Estación de tren is the Spanish phrase for 'train station'."
    },
    {
        question: "How do you say 'bus' in Spanish?",
        options: ["coche", "bicicleta", "autobús", "taxi"],
        answer: 2,
        explanation: "Autobús is the Spanish word for 'bus'."
    },
    {
        question: "How do you say 'car' in Spanish?",
        options: ["autobús", "bicicleta", "coche", "taxi"],
        answer: 2,
        explanation: "Coche is the Spanish word for 'car'."
    },
    {
        question: "How do you say 'bicycle' in Spanish?",
        options: ["coche", "autobús", "bicicleta", "taxi"],
        answer: 2,
        explanation: "Bicicleta is the Spanish word for 'bicycle'."
    },
    {
        question: "How do you say 'taxi' in Spanish?",
        options: ["coche", "autobús", "bicicleta", "taxi"],
        answer: 3,
        explanation: "Taxi is the same in both English and Spanish."
    },
    {
        question: "How do you say 'hotel' in Spanish?",
        options: ["restaurante", "hotel", "casa", "apartamento"],
        answer: 1,
        explanation: "Hotel is the same in both English and Spanish."
    },
    {
        question: "How do you say 'passport' in Spanish?",
        options: ["boleto", "pasaje", "pasaporte", "identificación"],
        answer: 2,
        explanation: "Pasaporte is the Spanish word for 'passport'."
    },
    {
        question: "How do you say 'ticket' in Spanish?",
        options: ["boleto", "pasaje", "pasaporte", "billete"],
        answer: 0,
        explanation: "Boleto is the Spanish word for 'ticket'."
    },
    {
        question: "How do you say 'map' in Spanish?",
        options: ["guía", "mapa", "dirección", "ruta"],
        answer: 1,
        explanation: "Mapa is the Spanish word for 'map'."
    },
    {
        question: "How do you say 'suitcase' in Spanish?",
        options: ["bolso", "maleta", "mochila", "bolsa"],
        answer: 1,
        explanation: "Maleta is the Spanish word for 'suitcase'."
    },
    {
        question: "How do you say 'beach' in Spanish?",
        options: ["montaña", "bosque", "playa", "río"],
        answer: 2,
        explanation: "Playa is the Spanish word for 'beach'."
    },
    {
        question: "How do you say 'mountain' in Spanish?",
        options: ["playa", "bosque", "río", "montaña"],
        answer: 3,
        explanation: "Montaña is the Spanish word for 'mountain'."
    },
    {
        question: "How do you say 'city' in Spanish?",
        options: ["pueblo", "ciudad", "país", "estado"],
        answer: 1,
        explanation: "Ciudad is the Spanish word for 'city'."
    },
    {
        question: "How do you say 'country' in Spanish?",
        options: ["ciudad", "pueblo", "país", "estado"],
        answer: 2,
        explanation: "País is the Spanish word for 'country'."
    },
    {
        question: "How do you say 'directions' in Spanish?",
        options: ["mapa", "direcciones", "ruta", "camino"],
        answer: 1,
        explanation: "Direcciones is the Spanish word for 'directions'."
    },
    {
        question: "How do you say 'left' in Spanish?",
        options: ["derecha", "izquierda", "adelante", "atrás"],
        answer: 1,
        explanation: "Izquierda is the Spanish word for 'left'."
    },
    {
        question: "How do you say 'right' in Spanish?",
        options: ["izquierda", "derecha", "adelante", "atrás"],
        answer: 1,
        explanation: "Derecha is the Spanish word for 'right'."
    },
    {
        question: "How do you say 'straight' in Spanish?",
        options: ["derecha", "izquierda", "recto", "atrás"],
        answer: 2,
        explanation: "Recto is the Spanish word for 'straight'."
    },
    {
        question: "How do you say 'stop' in Spanish?",
        options: ["vaya", "sigue", "para", "corre"],
        answer: 2,
        explanation: "Para is the Spanish word for 'stop'."
    },

    // Verbs and Grammar (Questions 291-310)
    {
        question: "What is the present tense conjugation of 'hablar' for 'yo'?",
        options: ["hablas", "habla", "hablo", "hablamos"],
        answer: 2,
        explanation: "Yo hablo is the correct conjugation of 'hablar' for 'yo'."
    },
    {
        question: "What is the present tense conjugation of 'comer' for 'tú'?",
        options: ["como", "comes", "come", "comemos"],
        answer: 1,
        explanation: "Tú comes is the correct conjugation of 'comer' for 'tú'."
    },
    {
        question: "What is the present tense conjugation of 'vivir' for 'él/ella'?",
        options: ["vivo", "vives", "vive", "vivimos"],
        answer: 2,
        explanation: "Él/Ella vive is the correct conjugation of 'vivir' for 'él/ella'."
    },
    {
        question: "What is the present tense conjugation of 'estudiar' for 'nosotros'?",
        options: ["estudio", "estudias", "estudia", "estudiamos"],
        answer: 3,
        explanation: "Nosotros estudiamos is the correct conjugation of 'estudiar' for 'nosotros'."
    },
    {
        question: "What is the present tense conjugation of 'trabajar' for 'vosotros'?",
        options: ["trabaja", "trabajáis", "trabajamos", "trabajas"],
        answer: 1,
        explanation: "Vosotros trabajáis is the correct conjugation of 'trabajar' for 'vosotros'."
    },
    {
        question: "What is the present tense conjugation of 'escuchar' for 'ellos/ellas'?",
        options: ["escucho", "escuchas", "escucha", "escuchan"],
        answer: 3,
        explanation: "Ellos/Ellas escuchan is the correct conjugation of 'escuchar' for 'ellos/ellas'."
    },
    {
        question: "Which verb means 'to speak' in Spanish?",
        options: ["hablar", "comer", "vivir", "estudiar"],
        answer: 0,
        explanation: "Hablar means 'to speak' in Spanish."
    },
    {
        question: "Which verb means 'to eat' in Spanish?",
        options: ["hablar", "comer", "vivir", "estudiar"],
        answer: 1,
        explanation: "Comer means 'to eat' in Spanish."
    },
    {
        question: "Which verb means 'to live' in Spanish?",
        options: ["hablar", "comer", "vivir", "estudiar"],
        answer: 2,
        explanation: "Vivir means 'to live' in Spanish."
    },
    {
        question: "Which verb means 'to study' in Spanish?",
        options: ["hablar", "comer", "vivir", "estudiar"],
        answer: 3,
        explanation: "Estudiar means 'to study' in Spanish."
    },
    {
        question: "Which verb means 'to work' in Spanish?",
        options: ["trabajar", "escuchar", "mirar", "nadar"],
        answer: 0,
        explanation: "Trabajar means 'to work' in Spanish."
    },
    {
        question: "Which verb means 'to listen' in Spanish?",
        options: ["trabajar", "escuchar", "mirar", "nadar"],
        answer: 1,
        explanation: "Escuchar means 'to listen' in Spanish."
    },
    {
        question: "Which verb means 'to watch/look' in Spanish?",
        options: ["trabajar", "escuchar", "mirar", "nadar"],
        answer: 2,
        explanation: "Mirar means 'to watch/look' in Spanish."
    },
    {
        question: "Which verb means 'to swim' in Spanish?",
        options: ["trabajar", "escuchar", "mirar", "nadar"],
        answer: 3,
        explanation: "Nadar means 'to swim' in Spanish."
    },
    {
        question: "What is the past tense (preterite) of 'hablar' for 'yo'?",
        options: ["hablaba", "hablé", "hablo", "hablaré"],
        answer: 1,
        explanation: "Yo hablé is the preterite form of 'hablar' for 'yo'."
    },
    {
        question: "What is the future tense of 'comer' for 'tú'?",
        options: ["comerás", "comías", "comiste", "comes"],
        answer: 0,
        explanation: "Tú comerás is the future form of 'comer' for 'tú'."
    },
    {
        question: "What is the imperfect tense of 'vivir' for 'él/ella'?",
        options: ["vivió", "vivía", "vive", "vivirá"],
        answer: 1,
        explanation: "Él/Ella vivía is the imperfect form of 'vivir' for 'él/ella'."
    },
    {
        question: "What is the conditional tense of 'estudiar' for 'nosotros'?",
        options: ["estudiaríamos", "estudiábamos", "estudiamos", "estudiaremos"],
        answer: 0,
        explanation: "Nosotros estudiaríamos is the conditional form of 'estudiar' for 'nosotros'."
    },
    {
        question: "Which verb is irregular in the present tense?",
        options: ["hablar", "comer", "ser", "vivir"],
        answer: 2,
        explanation: "Ser is an irregular verb in the present tense."
    },
    {
        question: "Which verb means 'to go' in Spanish?",
        options: ["venir", "ir", "llegar", "salir"],
        answer: 1,
        explanation: "Ir means 'to go' in Spanish."
    },

    // Body Parts (Questions 311-330)
    {
        question: "How do you say 'head' in Spanish?",
        options: ["mano", "pie", "cabeza", "brazo"],
        answer: 2,
        explanation: "Cabeza is the Spanish word for 'head'."
    },
    {
        question: "How do you say 'hand' in Spanish?",
        options: ["pie", "mano", "cabeza", "brazo"],
        answer: 1,
        explanation: "Mano is the Spanish word for 'hand'."
    },
    {
        question: "How do you say 'foot' in Spanish?",
        options: ["mano", "pie", "cabeza", "brazo"],
        answer: 1,
        explanation: "Pie is the Spanish word for 'foot'."
    },
    {
        question: "How do you say 'arm' in Spanish?",
        options: ["pierna", "mano", "brazo", "codo"],
        answer: 2,
        explanation: "Brazo is the Spanish word for 'arm'."
    },
    {
        question: "How do you say 'leg' in Spanish?",
        options: ["brazo", "mano", "pie", "pierna"],
        answer: 3,
        explanation: "Pierna is the Spanish word for 'leg'."
    },
    {
        question: "How do you say 'eye' in Spanish?",
        options: ["oído", "nariz", "boca", "ojo"],
        answer: 3,
        explanation: "Ojo is the Spanish word for 'eye'."
    },
    {
        question: "How do you say 'ear' in Spanish?",
        options: ["ojo", "nariz", "boca", "oído"],
        answer: 3,
        explanation: "Oído is the Spanish word for 'ear'."
    },
    {
        question: "How do you say 'nose' in Spanish?",
        options: ["ojo", "oído", "boca", "nariz"],
        answer: 3,
        explanation: "Nariz is the Spanish word for 'nose'."
    },
    {
        question: "How do you say 'mouth' in Spanish?",
        options: ["ojo", "oído", "nariz", "boca"],
        answer: 3,
        explanation: "Boca is the Spanish word for 'mouth'."
    },
    {
        question: "How do you say 'tooth' in Spanish?",
        options: ["lengua", "diente", "labio", "barbilla"],
        answer: 1,
        explanation: "Diente is the Spanish word for 'tooth'."
    },
    {
        question: "How do you say 'tongue' in Spanish?",
        options: ["diente", "lengua", "labio", "barbilla"],
        answer: 1,
        explanation: "Lengua is the Spanish word for 'tongue'."
    },
    {
        question: "How do you say 'lip' in Spanish?",
        options: ["diente", "lengua", "labio", "barbilla"],
        answer: 2,
        explanation: "Labio is the Spanish word for 'lip'."
    },
    {
        question: "How do you say 'hair' in Spanish?",
        options: ["barba", "ceja", "pelo", "nariz"],
        answer: 2,
        explanation: "Pelo is the Spanish word for 'hair'."
    },
    {
        question: "How do you say 'neck' in Spanish?",
        options: ["cabeza", "hombro", "cuello", "pecho"],
        answer: 2,
        explanation: "Cuello is the Spanish word for 'neck'."
    },
    {
        question: "How do you say 'shoulder' in Spanish?",
        options: ["cabeza", "hombro", "cuello", "pecho"],
        answer: 1,
        explanation: "Hombro is the Spanish word for 'shoulder'."
    },
    {
        question: "How do you say 'heart' in Spanish?",
        options: ["estómago", "hígado", "corazón", "pulmón"],
        answer: 2,
        explanation: "Corazón is the Spanish word for 'heart'."
    },
    {
        question: "How do you say 'stomach' in Spanish?",
        options: ["corazón", "hígado", "estómago", "pulmón"],
        answer: 2,
        explanation: "Estómago is the Spanish word for 'stomach'."
    },
    {
        question: "How do you say 'liver' in Spanish?",
        options: ["corazón", "estómago", "hígado", "pulmón"],
        answer: 2,
        explanation: "Hígado is the Spanish word for 'liver'."
    },
    {
        question: "How do you say 'blood' in Spanish?",
        options: ["agua", "sangre", "leche", "jugo"],
        answer: 1,
        explanation: "Sangre is the Spanish word for 'blood'."
    },
    {
        question: "How do you say 'skin' in Spanish?",
        options: ["carne", "hueso", "piel", "músculo"],
        answer: 2,
        explanation: "Piel is the Spanish word for 'skin'."
    },

    // Weather and Seasons (Questions 331-350)
    {
        question: "How do you say 'sun' in Spanish?",
        options: ["luna", "estrella", "sol", "nube"],
        answer: 2,
        explanation: "Sol is the Spanish word for 'sun'."
    },
    {
        question: "How do you say 'moon' in Spanish?",
        options: ["sol", "estrella", "luna", "nube"],
        answer: 2,
        explanation: "Luna is the Spanish word for 'moon'."
    },
    {
        question: "How do you say 'star' in Spanish?",
        options: ["sol", "luna", "estrella", "nube"],
        answer: 2,
        explanation: "Estrella is the Spanish word for 'star'."
    },
    {
        question: "How do you say 'cloud' in Spanish?",
        options: ["sol", "luna", "estrella", "nube"],
        answer: 3,
        explanation: "Nube is the Spanish word for 'cloud'."
    },
    {
        question: "How do you say 'rain' in Spanish?",
        options: ["nieve", "viento", "lluvia", "trueno"],
        answer: 2,
        explanation: "Lluvia is the Spanish word for 'rain'."
    },
    {
        question: "How do you say 'snow' in Spanish?",
        options: ["lluvia", "viento", "nieve", "trueno"],
        answer: 2,
        explanation: "Nieve is the Spanish word for 'snow'."
    },
    {
        question: "How do you say 'wind' in Spanish?",
        options: ["lluvia", "nieve", "viento", "trueno"],
        answer: 2,
        explanation: "Viento is the Spanish word for 'wind'."
    },
    {
        question: "How do you say 'hot' in Spanish?",
        options: ["frío", "caliente", "templado", "helado"],
        answer: 1,
        explanation: "Caliente is the Spanish word for 'hot'."
    },
    {
        question: "How do you say 'cold' in Spanish?",
        options: ["caliente", "frío", "templado", "helado"],
        answer: 1,
        explanation: "Frío is the Spanish word for 'cold'."
    },
    {
        question: "How do you say 'warm' in Spanish?",
        options: ["frío", "caliente", "templado", "helado"],
        answer: 2,
        explanation: "Templado is the Spanish word for 'warm'."
    },
    {
        question: "How do you say 'spring' (season) in Spanish?",
        options: ["verano", "otoño", "invierno", "primavera"],
        answer: 3,
        explanation: "Primavera is the Spanish word for 'spring'."
    },
    {
        question: "How do you say 'summer' in Spanish?",
        options: ["primavera", "otoño", "invierno", "verano"],
        answer: 3,
        explanation: "Verano is the Spanish word for 'summer'."
    },
    {
        question: "How do you say 'autumn/fall' in Spanish?",
        options: ["primavera", "verano", "invierno", "otoño"],
        answer: 3,
        explanation: "Otoño is the Spanish word for 'autumn/fall'."
    },
    {
        question: "How do you say 'winter' in Spanish?",
        options: ["primavera", "verano", "otoño", "invierno"],
        answer: 3,
        explanation: "Invierno is the Spanish word for 'winter'."
    },
    {
        question: "How do you say 'sunny' in Spanish?",
        options: ["nublado", "lluvioso", "soleado", "ventoso"],
        answer: 2,
        explanation: "Soleado is the Spanish word for 'sunny'."
    },
    {
        question: "How do you say 'cloudy' in Spanish?",
        options: ["soleado", "lluvioso", "nublado", "ventoso"],
        answer: 2,
        explanation: "Nublado is the Spanish word for 'cloudy'."
    },
    {
        question: "How do you say 'rainy' in Spanish?",
        options: ["soleado", "nublado", "lluvioso", "ventoso"],
        answer: 2,
        explanation: "Lluvioso is the Spanish word for 'rainy'."
    },
    {
        question: "How do you say 'storm' in Spanish?",
        options: ["tormenta", "trueno", "relámpago", "viento"],
        answer: 0,
        explanation: "Tormenta is the Spanish word for 'storm'."
    },
    {
        question: "How do you say 'temperature' in Spanish?",
        options: ["clima", "tiempo", "temperatura", "estación"],
        answer: 2,
        explanation: "Temperatura is the Spanish word for 'temperature'."
    },
    {
        question: "How do you say 'weather' in Spanish?",
        options: ["clima", "tiempo", "temperatura", "estación"],
        answer: 1,
        explanation: "Tiempo is the Spanish word for 'weather'."
    }
];

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Quiz logic
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let shuffledQuestions = [];

// DOM elements
const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainerElement = document.getElementById('options-container');
const prevButtonElement = document.getElementById('prev-btn');
const nextButtonElement = document.getElementById('next-btn');
const submitButtonElement = document.getElementById('submit-btn');
const showAllButtonElement = document.getElementById('show-all-btn');
const resultsContainerElement = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const percentElement = document.getElementById('percent');
const restartButtonElement = document.getElementById('restart-btn');
const allQuestionsContainerElement = document.getElementById('all-questions-container');
const backToQuizButtonElement = document.getElementById('back-to-quiz-btn');

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    // Shuffle questions for random order
    shuffledQuestions = shuffleArray(questions);
    userAnswers = new Array(shuffledQuestions.length);
    score = 0;
    showQuestion(currentQuestionIndex);
    updateNavigationButtons();
    resultsContainerElement.classList.add('hidden');
}

// Show question
function showQuestion(index) {
    const question = shuffledQuestions[index];
    questionNumberElement.textContent = `Question ${index + 1} of ${shuffledQuestions.length}`;
    questionTextElement.textContent = question.question;
    
    // Clear options container
    optionsContainerElement.innerHTML = '';
    
    // Create options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('button');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(i, optionElement));
        
        // Restore previous selection if exists
        if (userAnswers[index] === i) {
            optionElement.classList.add('selected');
            // Show explanation if answer was already selected
            if (userAnswers[index] !== undefined) {
                showExplanation(question, i, optionElement);
            }
        }
        
        optionsContainerElement.appendChild(optionElement);
    });
}

// Select option
function selectOption(optionIndex, optionElement) {
    // Remove selected class from all options
    const options = optionsContainerElement.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected', 'correct', 'incorrect'));
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Show explanation
    const question = shuffledQuestions[currentQuestionIndex];
    showExplanation(question, optionIndex, optionElement);
    
    // Enable next button
    nextButtonElement.disabled = false;
}

// Show explanation
function showExplanation(question, selectedOptionIndex, optionElement) {
    // Add correct/incorrect class
    if (selectedOptionIndex === question.answer) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('incorrect');
    }
    
    // Create explanation element
    const explanationElement = document.createElement('div');
    explanationElement.classList.add('explanation');
    explanationElement.style.marginTop = '15px';
    explanationElement.style.padding = '10px';
    explanationElement.style.borderRadius = '5px';
    explanationElement.style.backgroundColor = selectedOptionIndex === question.answer ? '#2d5a2d' : '#5a2d2d';
    explanationElement.style.border = '1px solid ' + (selectedOptionIndex === question.answer ? '#3a7a3a' : '#7a3a3a');
    explanationElement.textContent = question.explanation;
    
    // Remove existing explanation if any
    const existingExplanation = optionsContainerElement.querySelector('.explanation');
    if (existingExplanation) {
        existingExplanation.remove();
    }
    
    // Add explanation
    optionsContainerElement.appendChild(explanationElement);
}

// Update navigation buttons
function updateNavigationButtons() {
    prevButtonElement.disabled = currentQuestionIndex === 0;
    nextButtonElement.disabled = userAnswers[currentQuestionIndex] === undefined;
    
    // Show submit button on last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButtonElement.classList.add('hidden');
        submitButtonElement.classList.remove('hidden');
    } else {
        nextButtonElement.classList.remove('hidden');
        submitButtonElement.classList.add('hidden');
    }
}

// Previous question
prevButtonElement.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateNavigationButtons();
    }
});

// Next question
nextButtonElement.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateNavigationButtons();
    }
});

// Submit quiz
submitButtonElement.addEventListener('click', () => {
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === shuffledQuestions[index].answer) {
            score++;
        }
    });
    
    // Show results
    scoreElement.textContent = score;
    totalElement.textContent = shuffledQuestions.length;
    percentElement.textContent = Math.round((score / shuffledQuestions.length) * 100);
    resultsContainerElement.classList.remove('hidden');
    
    // Hide quiz
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('navigation').classList.add('hidden');
});

// Show all questions
showAllButtonElement.addEventListener('click', () => {
    // Hide quiz container
    document.getElementById('quiz-container').classList.add('hidden');
    
    // Show all questions
    document.body.classList.add('show-all');
    
    // Generate all questions
    showAllQuestions();
});

// Back to quiz
backToQuizButtonElement.addEventListener('click', () => {
    // Show quiz container
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Hide all questions
    document.body.classList.remove('show-all');
});

// Restart quiz
restartButtonElement.addEventListener('click', () => {
    // Show quiz
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('navigation').classList.remove('hidden');
    
    // Hide all questions
    document.body.classList.remove('show-all');
    
    // Initialize quiz
    initQuiz();
});

// Show all questions function
function showAllQuestions() {
    allQuestionsContainerElement.innerHTML = '';
    
    // Use shuffled questions for the all questions view as well
    const displayQuestions = shuffleArray(questions);
    
    displayQuestions.forEach((question, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        
        const questionText = document.createElement('h3');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionBlock.appendChild(questionText);
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');
        
        question.options.forEach((option, i) => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('option-item');
            optionItem.textContent = option;
            
            if (i === question.answer) {
                optionItem.classList.add('correct');
            }
            
            optionsList.appendChild(optionItem);
        });
        
        questionBlock.appendChild(optionsList);
        
        const explanation = document.createElement('div');
        explanation.classList.add('explanation');
        explanation.textContent = question.explanation;
        questionBlock.appendChild(explanation);
        
        allQuestionsContainerElement.appendChild(questionBlock);
    });
}

// Start quiz
initQuiz();