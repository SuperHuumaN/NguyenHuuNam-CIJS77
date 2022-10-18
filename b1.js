function count_element (arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            count++;
        }
    }
    if (count == 1) {
        console.log(x + " xuat hien 1 lan trong mang!");
    }
    return count;
}

let arr = [1, 2, 3, 5, 7, 8, 8, 9, 7, 5]
let times = 0;

let new_arr = arr.reduce(function(arr_temp, element) {
    if (arr_temp.indexOf(element) == -1) {
        arr_temp.push(element);
    }
    return arr_temp;
}, []);

for (let i = 0; i < new_arr.length; i++) {
    let new_count = count_element(arr, new_arr[i]);
    if (new_count == 1) {
        times++;
    }
}

console.log("so phan tu khac nhau cua mang la: " + times);

