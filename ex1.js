
function nonUniqueElements(start_arr){
    var  finish_arr=[];
    for (var i = 0; i < start_arr.length; i++){
        for (var a = 0; a < start_arr.length; a++){
            if(i!=a && start_arr[a]==start_arr[i]){
                    finish_arr.push(String(start_arr[i]));
                break;
                }
            }
        }

    return finish_arr;
}
alert(nonUniqueElements([5, 5, 5, 5, 5]));
alert(nonUniqueElements([1, 2, 3, 1, 3]));
alert(nonUniqueElements([1, 2, 3, 4, 5]));
alert(nonUniqueElements([10, 9, 10, 10, 9, 8]));