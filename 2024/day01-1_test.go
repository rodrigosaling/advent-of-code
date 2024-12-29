package main

import (
	"testing"
)

func TestMain(t *testing.T) {
	// Test that the main function doesn't panic
	main()
}

func TestTheLogic(t *testing.T) {
	leftList := []int{3, 4, 2, 1, 3, 3}
	rightList := []int{4, 3, 5, 3, 9, 3}

	total := theLogic(leftList, rightList)

	if total != 11 {
		t.Errorf("expected total to be 11, got %d", total)
	}
}
