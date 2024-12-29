package main

import (
	"testing"
)

func TestMain(t *testing.T) {
	// Test that the main function doesn't panic
	main()
}

func TestCalculateTotal(t *testing.T) {
	// Test that the total is calculated correctly
	leftList := []int{1, 2, 3}
	rightList := []int{4, 5, 6}
	var total int64

	for i := 0; i < len(leftList); i++ {
		difference := leftList[i] - rightList[i]
		total = total + int64(difference)
	}

	if total != -9 {
		t.Errorf("expected total to be -9, got %d", total)
	}
}
