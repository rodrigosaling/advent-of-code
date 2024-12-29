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

	leftList, rightList, err := readInput(filename)
	if err != nil {
		fmt.Println(err)
		return
	}

	total := theLogic(leftList, rightList)

	fmt.Println("Total difference: ", total)
}

func theLogic(leftList, rightList []int) int64 {
	sort.Ints(leftList)
	sort.Ints(rightList)

	return calculateTotalDifference(leftList, rightList)
}

func readInput(filename string) ([]int, []int, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, nil, err
	}
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

	if err := scanner.Err(); err != nil {
		return nil, nil, err
	}

	return leftList, rightList, nil
}

func calculateTotalDifference(leftList, rightList []int) int64 {
	var total int64

	for i := 0; i < len(leftList); i++ {
		difference := math.Abs(float64(leftList[i] - rightList[i]))
		total += int64(difference)
	}

	return total
}
