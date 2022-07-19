function insertSort(list) {
    for (var i = 1; i < list.length; i++) {
        var temp = list[i];
        var j = i - 1;
        while (j >= 0 && list[j] > temp) {
            list[j] = list[j + 1];
            j--;
        }
        list[j + 1] = temp;
    }
    console.log(list);
}
insertSort([1, 5, 2, 8, 4, 54, 222, 5]);
