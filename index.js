/**
 * 使用快速排序算法对数组进行排序（原地修改）
 * @param {Array} arr - 需要排序的数组
 * @param {number} [low=0] - 排序区间的起始索引
 * @param {number} [high=arr.length-1] - 排序区间的结束索引
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // pi 是分区索引，arr[pi] 现在在正确的位置
    const pi = partition(arr, low, high);

    // 分别对分区之前和之后的元素进行排序
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr; // 返回排序后的数组
}

/**
 * 快速排序的分区函数
 * 这个函数选择最后一个元素作为基准值(pivot)，
 * 将所有小于基准值的元素放到基准值的左边，
 * 所有大于基准值的元素放到基准值的右边。
 * @param {Array} arr - 数组
 * @param {number} low - 起始索引
 * @param {number} high - 结束索引
 * @returns {number} - 基准值在排序后的正确索引
 */
function partition(arr, low, high) {
  const pivot = arr[high]; // 选择最后一个元素作为基准值
  let i = low - 1; // 指向较小元素的索引

  for (let j = low; j < high; j++) {
    // 如果当前元素小于或等于基准值
    if (arr[j] <= pivot) {
      i++;
      // 交换 arr[i] 和 arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // 将基准值放到正确的位置（交换 arr[i+1] 和 arr[high]）
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1; // 返回基准值的索引
}

// 示例用法:
// const myArray = [10, 7, 8, 9, 1, 5];
// quickSort(myArray);
// console.log("Sorted array:", myArray); // 输出: Sorted array: [1, 5, 7, 8, 9, 10]

// 如果需要导出该函数（例如在 Node.js 环境中）
// module.exports = quickSort;