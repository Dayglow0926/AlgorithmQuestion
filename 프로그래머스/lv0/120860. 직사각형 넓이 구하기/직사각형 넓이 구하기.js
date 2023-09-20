function solution(dots) {
    let standartWidth=dots[0][0];
    let standartHeight=dots[0][1];
    
    const width = Math.abs(standartWidth - dots.filter((v) => v[0] !== standartWidth)[0][0]);
    const height = Math.abs(standartHeight - dots.filter((v) => v[1] !== standartHeight)[0][1]);
    
    return width*height;
}