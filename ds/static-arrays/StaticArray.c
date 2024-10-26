// Include necessary header files
#include <stdio.h>
#include <stdlib.h>
// Define a constant for the size of the static array

// Define the maximum size of the static array
#define MAX_SIZE 32

typedef struct {
    int* _data; // Pointer to the array
    int size;
} StaticArray;

// Function to initialize our custom static array
void initStaticArray(StaticArray* arr) {
    // Allocate memory for the array
    arr->_data = (int*)malloc(MAX_SIZE * sizeof(int));
    // Let's break this line down:
    // malloc(...)         : This function allocates a block of memory
    // MAX_SIZE            : This is the maximum number of elements our array can hold
    // sizeof(int)         : This returns the size (in bytes) of an integer on this system
    // MAX_SIZE * sizeof(int) : This calculates the total number of bytes we need
    // (int*)              : This casts the result of malloc to an integer pointer
    // arr->_data =        : This assigns the allocated memory address to our _data pointer

    // Check if memory allocation was successful
    if (arr->_data == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }

    // Initialize size to zero
    arr->size = 0;
    // This sets the current number of elements in the array to 0
    // We start with an empty array, and this will be incremented as we add elements
}
// Function to print the contents of the static array
void printStaticArray(StaticArray* arr) {
    for (int i = 0; i < arr->size; i++) {
        printf("%d ", arr->_data[i]);
    }
    printf("\n");
}

// Function to add an element to the end of our static array
void addElement(StaticArray* arr, int value) {
    // Check if the array is already full
    if (arr->size >= MAX_SIZE) {
        fprintf(stderr, "Array is full\n");
        exit(1);
    }

    // Add the new element to the end of the array
    *(arr->_data + arr->size) = value;
    // Let's break this line down:
    // arr->_data          : This is the pointer to the start of our array in memory
    // arr->size           : This is the current number of elements in the array
    // arr->_data + arr->size : This calculates the address of the next empty spot
    //                          It's equivalent to &(arr->_data[arr->size]) in standard array notation
    // *( ... )            : The asterisk dereferences the calculated address,
    //                       allowing us to modify the value at that memory location
    // = value             : This assigns the new value to the calculated memory location

    // Increment the size of the array
    arr->size++;
    // This increases the size by 1, reflecting that we've added a new element
    // It's equivalent to arr->size = arr->size + 1
}

int main() {
    StaticArray numbers;
    initStaticArray(&numbers);
    addElement(&numbers, 43);
    addElement(&numbers, 23);
    addElement(&numbers, 12);
    printStaticArray(&numbers);
    return 0;
}







