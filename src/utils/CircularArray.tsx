const CircularArray = {
    getPrevious: (array, curIndex) => array[curIndex - 1 < 0 ? array.length - 1 : curIndex - 1],
    getNext: (array, curIndex) => array[(curIndex + 1) % array.length],
};

export default CircularArray;
