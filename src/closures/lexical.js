const bulidCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount;
}

const myCount = bulidCount(1);
myCount();
myCount();
myCount();

const myOtherCount = bulidCount(10);
myOtherCount();
myOtherCount();
