package pangram

import (
	"regexp"
	"strings"
)


func IsPangram(input string) bool {
	re := regexp.MustCompile(`[^a-zA-Z]+`)
	stringLetters := strings.ToLower(re.ReplaceAllString(input, ""))

	for testLet := 'a'; testLet <= 'z'; testLet++ {
		if strings.IndexRune(stringLetters, testLet) == -1 {
			return false
		}
	}

	return true
}
