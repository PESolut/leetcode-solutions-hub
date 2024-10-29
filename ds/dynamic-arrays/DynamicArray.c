#include <stdio.h>
#include <stdlib.h>

// define the default size of the dynamic array
#define MAX_SIZE 32

// define the structure
typedef struct {
    int* _data;
    int size;
} DynamicArray;

// Functuon to init our custom dynamic array

void initDynamicArray(DynamicArray* arr){
    arr->_data = (int*)malloc(MAX_SIZE * sizeof(int));

    // ensure memory allocation was valid
    // if(arr->_data == NULL) {
    //     fprintf(stderr, "Memory")
    // }
}