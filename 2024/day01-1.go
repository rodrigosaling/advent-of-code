package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	if len(os.Args) <= 1 {
		fmt.Println("Please provide a filename")
		return
	}

	filename := os.Args[1]

	file, err := os.Open(filename)
	if err != nil {
		fmt.Println(err)
		return
	}
	// defer ensures that the file is closed when the main function returns
	defer file.Close()

	scanner := bufio.NewScanner(file)

	leftList := []int{}
	rightList := []int{}

	for scanner.Scan() {
		numbers := strings.Fields(scanner.Text())
		leftNumber, _ := strconv.Atoi(numbers[0])
		rightNumber, _ := strconv.Atoi(numbers[1])
		leftList = append(leftList, leftNumber)
		rightList = append(rightList, rightNumber)
	}

	// err equals nil if it's EOF and there's no error
	if err := scanner.Err(); err != nil {
		fmt.Println(err)
	}

	sort.Ints(leftList)
	sort.Ints(rightList)

	var total int64

	for i := 0; i < len(leftList); i++ {
		difference := math.Abs(float64(leftList[i] - rightList[i]))
		total += int64(difference)
	}

	fmt.Println("Total difference: ", total)
}
