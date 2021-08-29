//The go to solution (at least for 'easy') should not be Heaps!

class KthLargest {

  public arr: number[]

  constructor(public k: number, public nums: number[]) {
    this.arr = nums.sort((a, b) => b - a); //sort in descreasing order
  }

  add(val: number): number {
    if (this.arr[this.arr.length - 1] < val || this.arr.length < this.k){
      this.arr.push(val);
      this.arr = this.arr.sort((a, b) => b - a);
    }
    return this.arr.length > this.k ? this.arr[this.k - 1] ? this.arr[this.arr.length - 1];
  }

}

class _KthLargest {
  private heap: MinHeap;

  constructor(public k: number, public nums: number[]) {
    this.heap = new MinHeap()
    this.nums.forEach(n => this.add(n))
  }

  add(val: number): number {
    if (this.heap.data.length < this.k) {
      this.heap.insert(val)
    } else if (this.heap.peek() < val) {
      this.heap.insert(val)
      this.heap.poll()
    }
    return this.heap.peek();
  }
}

// https://www.youtube.com/watch?v=t0Cq6tVNRBA&ab_channel=HackerRank
// https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/504552/JavaScript-Min-Heap-solution
class MinHeap { 
  public data: number[]

  constructor(data: number[] = []) {
    this.data = data
    this.heapify()
  } 

  heapify(): void {
    if (this.data.length <= 1) return;
    for (let i = 0; i < this.data.length; i++) { //sort array O(nlogn) assuming its not sorted at the beginning
      this.bubbleUp(i) 
    }
  }

  peek(): number | null {
    if (this.data.length === 0) return null;
    return this.data[0]
  }

  insert(val: number): void {
    this.data.push(val)
    this.bubbleUp(this.data.length - 1)
  }

  poll(): number | null {
    if (this.data.length === 0) return;
    let result = this.data[0]
    this.data[0] = this.data[this.data.length -1]
    this.data.pop()
    this.bubbleDown(0)
    return result
  }

  bubbleDown(index: number): void { //O(logn)
    //check if child nodes are greater than current (parent) index
    while (this.leftChildExists(index)) { //note if there is no left child, there is no right child for certainty (think about the struck of a heap)

      let smallerChildIndex = this.leftChildIndex(index)
      if (this.rightChildExists(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.rightChildIndex(index)
      }

      if (this.data[index] < this.data[smallerChildIndex]) break;
      else {
        this.swap(index, smallerChildIndex)
      }

      index = smallerChildIndex
    }
  }

  bubbleUp(index: number): void { //O(logn) 
    while (this.parentExists(index) && this.parent(index) > this.data[index]) { //does parent exists and is it greater than child
      this.swap(this.parentIndex(index), index)
      index = this.parentIndex(index) //initially I missed this bit!
    }
  }

  parent(index: number): number | undefined { //abusing the fact arr[non-existing-index] = undefined
    let parentIndex = this.parentIndex(index)
    return this.data[parentIndex]
  }

  leftChild(index: number): number | undefined {
    let leftChildIndex = this.leftChildIndex(index)
    return this.data[leftChildIndex]
  }

  rightChild(index: number): number | undefined {
    let rightChildIndex = this.rightChildIndex(index)
    return this.data[rightChildIndex]
  }

  parentExists(index: number): boolean { //abusing the fact arr[non-existing-index] = undefined
    return !!this.parent(index) || this.parent(index) === 0 
  }

  leftChildExists(index: number): boolean {
    return !!this.leftChild(index) || this.leftChild(index) === 0 
  }

  rightChildExists(index: number): boolean {
    return !!this.rightChild(index) || this.rightChild(index) === 0 
  }

  parentIndex(index: number): number {
    return (index - 1) >> 1
  }

  leftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1
  }

  rightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2
  }

  swap(i, j): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

}